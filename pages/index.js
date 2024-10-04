import { useState, useEffect } from "react";

function Home() {
  const [position, setPosition] = useState({ top: 200, left: 200 });
  const [attempts, setAttempts] = useState(0);
  const [buttonMessage, setButtonMessage] = useState("Clique aqui para ganhar o Pix!");
  const [buttonVisible, setButtonVisible] = useState(true);

  // Mensagens divertidas e criativas para zoar o usuário
  const messages = [
    "Brincadeirinha, agora pode clicar!",
    "Ops, agora é sério, pode clicar!",
    "Vamos lá, eu acredito em você!",
    "Tá quase, só mais uma tentativa!",
    "Parece que o Pix fugiu...",
    "Ufa, por pouco! Tenta de novo!",
    "Será que o Pix vai aparecer agora?",
    "Não desista, o Pix tá vindo... talvez!",
    "Tá difícil né? Tenta de novo!",
    "Agora sim, ou não... 🤔",
    "É, acho que esse Pix é uma lenda... 🏃‍♂️💨"
  ];

  const handleMouseOver = () => {
    if (attempts < messages.length - 1) {
      // Gera posições aleatórias para o botão fugir
      const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
      const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));

      setPosition({ top: randomTop, left: randomLeft });
      setButtonMessage(messages[attempts]);
      setAttempts(attempts + 1);

      // Efeito sonoro (adicione um som se necessário)
      const audio = new Audio("/path-to-your-sound.mp3");
      audio.play();
    } else {
      // O botão desaparece com uma última mensagem criativa
      setButtonVisible(false);
    }
  };

  // Efeito de piscar antes de "teletransportar"
  useEffect(() => {
    if (attempts > 0) {
      const button = document.querySelector("button");
      button.style.opacity = 0.7;
      setTimeout(() => {
        button.style.opacity = 1;
      }, 100);
    }
  }, [attempts]);

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        textAlign: "center",
        paddingTop: "50px",
        backgroundColor: "#f0f8ff",
      }}
    >
      <h1>Testando Deployments - Vercel</h1>
      {buttonVisible ? (
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
            borderRadius: "5px",
            transition: "all 0.3s ease, opacity 0.1s ease",
            animation: "shake 0.5s",
          }}
        >
          {buttonMessage}
        </button>
      ) : (
        <h2>
          O botão desistiu de você! <br />
          "Tente mais tarde, quem sabe o Pix aparece... 👻"
        </h2>
      )}

      {/* Adicionando animação de "shake" ao botão */}
      <style>{`
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}

export default Home;

