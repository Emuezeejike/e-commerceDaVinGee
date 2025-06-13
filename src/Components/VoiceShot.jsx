// Example: Add this to your ProductDetail or App component
import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";

const VoiceShot = () => {
  const snapshotRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      if (transcript.includes("take snapshot") || transcript.includes("take screenshot")) {
        handleSnapshot();
      }
    };

    recognition.start();

    // Cleanup
    return () => recognition.stop();
  }, []);

  const handleSnapshot = async () => {
    if (snapshotRef.current) {
      const canvas = await html2canvas(snapshotRef.current);
      const link = document.createElement("a");
      link.download = "snapshot.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div ref={snapshotRef}>
      <h2 className="font-semibold">Say <span className="font-croissant">"take snapshot"</span> or <span className="font-croissant">"take screenshot"</span> to capture this area!</h2>
    </div>
  );
};

export default VoiceShot;