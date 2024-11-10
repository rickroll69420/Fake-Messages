document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');
    const timeInput = document.getElementById('time');
    const batteryInput = document.getElementById('battery');

    const displayUsername = document.getElementById('display-username');
    const displayMessage = document.getElementById('display-message');
    const displayMessageTime = document.getElementById('display-message-time');
    const displayTime = document.getElementById('display-time');
    const batteryIcon = document.getElementById('battery-icon');

    function updatePreview() {
        displayUsername.textContent = usernameInput.value || 'John Doe';
        displayMessage.textContent = messageInput.value || 'Hello! How are you?';
        displayMessageTime.textContent = timeInput.value || '12:34 PM';
        displayTime.textContent = timeInput.value || '12:34';
        
        const batteryLevel = batteryInput.value || 85;
        batteryIcon.src = `img/icons/battery_${batteryLevel}.png`;
    }

    document.getElementById('generate').addEventListener('click', updatePreview);
});
