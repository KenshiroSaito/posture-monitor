import { useEffect, useRef, useState } from "react";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: "user" },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setReady(true);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "カメラの起動に失敗しました");
      }
    }

    startCamera();

    // Be sure to turn off the camera
    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>姿勢・集中モニター</h1>
      {error ? (
        <p style={{ color: "crimson" }}>Error: {error}</p>
      ) : (
        <p>{ready ? "Camera launching" : "Launching the camera..."}</p>
      )}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: 640,
          height: 480,
          background: "#000",
          borderRadius: 8,
          transform: "scaleX(-1)", // Mirror display (synchronizing with your own movements)
        }}
      />
    </div>
  );
}

export default App;
