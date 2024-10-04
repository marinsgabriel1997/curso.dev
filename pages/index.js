import { useState } from "react";

function Home() {
  const [position, setPosition] = useState({ top: 200, left: 200 });

  const handleMouseOver = () => {
    // Gera uma nova posição aleatória na tela para o botão
    const randomTop = Math.floor(Math.random() * window.innerHeight - 50);
    const randomLeft = Math.floor(Math.random() * window.innerWidth - 100);
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <h1>Testando Deployments - Vercel</h1>
      <button
        onMouseOver={handleMouseOver}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#ffcccb",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Não clique aqui!
      </button>
    </div>
  );
}

export default Home;
