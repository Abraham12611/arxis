document.addEventListener('DOMContentLoaded', function() {
    // Wait for chat system to be initialized
    setTimeout(() => {
        if (!window.chatSystem) {
            console.error('Chat system not initialized');
            return;
        }

        // First automated message after 15 seconds
        setTimeout(() => {
            const message = "Hey Linda, do you have time to review the design system updates this afternoon? I've added some new components.";
            window.chatSystem.sendAutomatedMessage(2, message); // Theresa von Castro
        }, 15000);

        // Second automated message after 60 seconds (45 seconds after first)
        setTimeout(() => {
            const message = "I've also updated the motion guidelines with your feedback from last week. Could you take a look when you get a chance?";
            window.chatSystem.sendAutomatedMessage(2, message); // Theresa von Castro
        }, 60000);

        // Third automated message after 70 seconds (10 seconds after second)
        setTimeout(() => {
            const message = "Linda, the team loved your animation concepts! Can we schedule a quick call to discuss implementation details?";
            window.chatSystem.sendAutomatedMessage(1, message); // Dianne Rodriguez
        }, 70000);
    }, 1000);
});