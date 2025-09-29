const bubble = document.getElementById('chat-bubble');
    const container = document.getElementById('chat-container');
    const closeBtn = document.getElementById('chat-close');

    bubble.onclick = () => {
      container.style.display = 'block';
      bubble.style.display = 'none';
    }

    closeBtn.onclick = () => {
      container.style.display = 'none';
      bubble.style.display = 'flex';
    }