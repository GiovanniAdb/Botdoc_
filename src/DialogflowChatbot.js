import React, { useEffect } from 'react';

function DialogflowChatbot() {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadScript();
  }, []);

  return (
    <div className="dialogflow-container">
      <style>
        {`
          .dialogflow-chatbot-container {
            background-color: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
            border-radius: 10px; /* Bordes redondeados */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombra ligera */
            padding: 20px; /* Espaciado interno */
            max-width: 400px; /* Ancho máximo */
            margin: 0 auto; /* Centrar horizontalmente */
            backdrop-filter: blur(5px); /* Efecto de desenfoque */
          }
        
          .dialogflow-chatbot-title {
            color: #333; /* Color del título */
            font-size: 24px; /* Tamaño del título */
            font-weight: bold; /* Texto en negrita */
            margin-bottom: 10px; /* Espacio inferior */
          }
        
          .dialogflow-chatbot-text {
            color: #555; /* Color del texto */
            font-size: 16px; /* Tamaño del texto */
            line-height: 1.5; /* Altura de línea */
          }

          df-messenger {
            --df-messenger-bot-message: #00ffea5c;
            --df-messenger-button-titlebar-color: #72c4bd;
            --df-messenger-chat-background-color: #d6d6d6;
            --df-messenger-font-color: black;
            --df-messenger-send-icon: #c47272;
            --df-messenger-user-message: #c4727225;
            }  
        `}
      </style>

      <div className="dialogflow-chatbot-container">
        <h2 className="dialogflow-chatbot-title">¡Hola! Soy DocBot</h2>
        <p className="dialogflow-chatbot-text">DocBot te ayudará a identificar qué enfermedad o malestar tienes.</p>
      </div>


      <df-messenger
        intent="WELCOME"
        chat-title="DocBot"
        agent-id="d94d1fa9-59db-4f94-94a0-081696114ded"
        language-code="es"
      ></df-messenger>

    </div>
  );
}

export default DialogflowChatbot;
