import React, { useEffect } from 'react';

const Chatbot = () => {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
        />
        <script
          src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
          defer
        />
        <df-messenger
          location="us-central1"
          project-id="kaggle-gemini-ai"
          agent-id="bd1ae60d-ddaa-4fc1-a73f-b2f670d78041"
          language-code="en"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble chat-title="Eduzone" />
        </df-messenger>
        <style>
          {`
            df-messenger {
              z-index: 999;
              position: fixed;
              --df-messenger-font-color: #000;
              --df-messenger-font-family: Google Sans;
              --df-messenger-chat-background: #f3f6fc;
              --df-messenger-message-user-background: #d3e3fd;
              --df-messenger-message-bot-background: #fff;
              bottom: 16px;
              right: 16px;
            }
          `}
        </style>
      </div>
    );
  };

  export default Chatbot;