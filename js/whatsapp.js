// whatsapp.js
document.addEventListener('DOMContentLoaded', () => {
  const senderInput = document.getElementById('senderName');
  const messageInput = document.getElementById('messageContent');
  const timeInput = document.getElementById('messageTime');
  const deviceType = document.getElementById('deviceType');
  
  const previewSender = document.getElementById('previewSender');
  const previewMessage = document.getElementById('previewMessage');
  const previewTime = document.getElementById('previewTime');
  const previewBox = document.getElementById('whatsappPreview');
  
  senderInput.addEventListener('input', () => {
    previewSender.textContent = senderInput.value;
  });
  
  messageInput.addEventListener('input', () => {
    previewMessage.textContent = messageInput.value;
  });
  
  timeInput.addEventListener('input', () => {
    previewTime.textContent = timeInput.value;
  });
  
  deviceType.addEventListener('change', () => {
    previewBox.className = `whatsapp ${deviceType.value}`;
  });
});
