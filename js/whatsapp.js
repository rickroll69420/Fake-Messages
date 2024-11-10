document.addEventListener('DOMContentLoaded', () => {
  const senderInput = document.getElementById('senderName');
  const messageInput = document.getElementById('messageContent');
  const timeInput = document.getElementById('messageTime');
  
  const previewSender = document.getElementById('previewSender');
  const previewMessage = document.getElementById('previewMessage');
  const previewTime = document.getElementById('previewTime');
  const timeDisplay = document.getElementById('timeDisplay');

  senderInput.addEventListener('input', () => {
    previewSender.textContent = senderInput.value;
  });
  
  messageInput.addEventListener('input', () => {
    previewMessage.textContent = messageInput.value;
  });
  
  timeInput.addEventListener('input', () => {
    previewTime.textContent = timeInput.value;
    timeDisplay.textContent = timeInput.value;  // updates time in status bar too
  });
});
