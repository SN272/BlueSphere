function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');

  if (window.innerWidth <= 768) {
    // Mobile behavior: toggle visibility
    sidebar.classList.toggle('visible');
  } else {
    // Desktop behavior: simple hide/show
    sidebar.classList.toggle('hidden');
  }
}

// Close sidebar on window resize (to prevent layout issues)
window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth > 768) {
    sidebar.classList.remove('visible');
    sidebar.classList.remove('hidden');
  }
});
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');

  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('visible');
  } else {
    sidebar.classList.toggle('hidden');
  }
}

window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth > 768) {
    sidebar.classList.remove('visible');
    sidebar.classList.remove('hidden');
  }
});

function sendChat() {
  const inputField = document.getElementById('chat-input');
  const chatHistory = document.getElementById('chat-history');
  const userMessage = inputField.value.trim();
  
  if (!userMessage) return;

  const userBubble = document.createElement('div');
  userBubble.classList.add('chat-bubble', 'user');
  userBubble.textContent = userMessage;
  chatHistory.appendChild(userBubble);

  // Simulated bot response
  setTimeout(() => {
    const botBubble = document.createElement('div');
    botBubble.classList.add('chat-bubble', 'bot');
    botBubble.textContent = "🌊 BlueSphere says: Thanks for your question! We'll analyze the ocean data soon.";
    chatHistory.appendChild(botBubble);

    chatHistory.scrollTop = chatHistory.scrollHeight;
  }, 1000);

  inputField.value = '';
}
