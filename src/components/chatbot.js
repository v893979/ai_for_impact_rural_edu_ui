import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js'; 
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.dfMessenger = new window.DFMessenger({
        location: 'us-central1',
        projectId: 'kaggle-gemini-ai', 
        agentId: 'bd1ae60d-ddaa-4fc1-a73f-b2f670d78041',
        languageCode: 'en',
        maxQueryLength: -1, 
      });

      window.dfMessenger.render(); 
    };
  }, []);

  return (
    <div>
      {/* The chat window will be rendered here */}
    </div>
  );
};

export default Chatbot;