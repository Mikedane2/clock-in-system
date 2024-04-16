
    // Function to get current time in a readable format
    function getCurrentTime() {
        const now = new Date();
        const options = { hour12: true }; // Use 24-hour format
        return now.toLocaleTimeString('en-US', options);
    }

    // Add event listeners to the clock in and clock out buttons
    document.getElementById('clockin').addEventListener('click', function() {
        const messageTextarea = document.getElementById('message');
        const currentTime = getCurrentTime();

        // Append CLOCK IN timestamp to the textarea
        messageTextarea.value += `${currentTime}\n`;
    });

    document.getElementById('clockout').addEventListener('click', function() {
        const message1Textarea = document.getElementById('message1');
        const currentTime = getCurrentTime();

        // Append CLOCK OUT timestamp to the textarea
        message1Textarea.value += `${currentTime}\n`;
    });


        function clockIn() {
            // Get the message input element
            const messageInput = document.getElementById('message');
            

            // Clear the message input field
            messageInput.value = '';
        }


        function clockOut() {
            // Get the message input element
            const messageInput = document.getElementById('message1');

            // Clear the message input field
            messageInput.value = '';
        }

