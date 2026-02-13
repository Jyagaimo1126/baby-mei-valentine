import React, { useState, useEffect } from "react";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 300, left: 300 });
  const [showConfetti, setShowConfetti] = useState(false);

  // Runaway No button
  const moveNoButton = () => {
    const randomTop = Math.random() * 400 + 50;
    const randomLeft = Math.random() * 600 + 50;
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);
  };

  return (
    <div style={styles.container}>
      {/* Floating hearts */}
      <div style={styles.hearts}>💖 💕 💘 💗 💓</div>

      {/* Floating cats */}
      <div style={styles.cats}>🐱 🐾 🐱 🐾</div>

      {!accepted ? (
        <>
          <h1 style={styles.title}>For my cutest baby Mei 💖</h1>
          <h2>Will you be my Valentine?</h2>

          {/* Instead of meter, show cute message */}
          <p style={styles.shotText}>💘 Forever 💘</p>

          <button style={styles.yesBtn} onClick={handleYes}>
            Yes 💕
          </button>

          <button
            onMouseEnter={moveNoButton}
            style={{
              ...styles.noBtn,
              top: noPosition.top,
              left: noPosition.left
            }}
          >
            No 😢
          </button>
        </>
      ) : (
        <>
          <h1 style={{ color: "hotpink" }}>YAYYYYY MWAAAAAAHHHH 💖💖💖</h1>
          <h2>You are now forever be his valentine💕💕💕</h2>
          <h3>Forever Yours,</h3>
          <h2 style={{ color: "red" }}>Your baby xandre 💌</h2>
        </>
      )}

      {/* Confetti */}
      {showConfetti && (
        <>
          <div style={styles.confettiContainer}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.confettiPiece,
                  left: Math.random() * 100 + "vw",
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  animationDuration: 2 + Math.random() * 2 + "s",
                  width: 5 + Math.random() * 5 + "px",
                  height: 10 + Math.random() * 10 + "px"
                }}
              ></div>
            ))}
          </div>

          {/* Keyframes */}
          <style>{`
            @keyframes fall {
              0% { transform: translateY(0) rotate(0deg); }
              100% { transform: translateY(100vh) rotate(360deg); }
            }
          `}</style>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #ffdde1, #ee9ca7)",
    overflow: "hidden",
    position: "relative",
    paddingTop: "100px",
    fontFamily: "cursive"
  },
  title: {
    fontSize: "40px",
    color: "#ff1493"
  },
  shotText: {
    fontSize: "24px",
    color: "red",
    margin: "20px 0",
    fontWeight: "bold"
  },
  yesBtn: {
    padding: "12px 25px",
    fontSize: "18px",
    backgroundColor: "hotpink",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginRight: "20px"
  },
  noBtn: {
    position: "absolute",
    padding: "12px 25px",
    fontSize: "18px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer"
  },
  hearts: {
    position: "absolute",
    top: "20px",
    width: "100%",
    fontSize: "30px"
  },
  cats: {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    fontSize: "30px"
  },
  confettiContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden"
  },
  confettiPiece: {
    position: "absolute",
    top: "-10px",
    animationName: "fall",
    animationTimingFunction: "linear",
    animationIterationCount: "1"
  }
};
