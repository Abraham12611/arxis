// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize localStorage data if not exists
    initLocalStorage();

    // Tab switching functionality
    const popularBtn = document.querySelector('.popular-btn');
    const latestBtn = document.querySelector('.latest-btn');

    popularBtn.addEventListener('click', function() {
        popularBtn.classList.add('active');
        popularBtn.style.backgroundColor = '#4A90E2';
        popularBtn.style.color = '#FFFFFF';
        latestBtn.classList.remove('active');
        latestBtn.style.backgroundColor = 'transparent';
        latestBtn.style.color = '#64748B';
        latestBtn.style.border = '1px solid #E2E8F0';
    });

    latestBtn.addEventListener('click', function() {
        latestBtn.classList.add('active');
        latestBtn.style.backgroundColor = '#4A90E2';
        latestBtn.style.color = '#FFFFFF';
        latestBtn.style.border = 'none';
        popularBtn.classList.remove('active');
        popularBtn.style.backgroundColor = 'transparent';
        popularBtn.style.color = '#64748B';
        popularBtn.style.border = '1px solid #E2E8F0';
    });

    // Todo list functionality
    const todoCheckboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');

    todoCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const todoItem = this.parentElement;
            if (this.checked) {
                todoItem.classList.add('completed');
            } else {
                todoItem.classList.remove('completed');
            }

            // Update todo count
            updateTodoCount();
        });
    });

    function updateTodoCount() {
        const totalTodos = todoCheckboxes.length;
        const completedTodos = document.querySelectorAll('.todo-item input[type="checkbox"]:checked').length;
        document.querySelector('.todo-count').textContent = `${completedTodos}/${totalTodos}`;
    }

    // Navigation item hover effect
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#EBF8FF';
            this.style.color = '#4A90E2';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = '#64748B';
        });
    });

    // Calendar date selection
    const calendarDates = document.querySelectorAll('.calendar-grid .date');

    calendarDates.forEach(date => {
        date.addEventListener('click', function() {
            // Remove current class from all dates
            calendarDates.forEach(d => d.classList.remove('current'));

            // Add current class to clicked date
            this.classList.add('current');
        });
    });

    // Like functionality for posts with localStorage
    const likeButtons = document.querySelectorAll('.like-count');

    likeButtons.forEach(button => {
        // Get post ID from parent feed-item
        const postId = button.closest('.feed-item').getAttribute('data-post-id') ||
                      Math.floor(Math.random() * 1000000).toString();

        // Set post ID if not exists
        if (!button.closest('.feed-item').getAttribute('data-post-id')) {
            button.closest('.feed-item').setAttribute('data-post-id', postId);
        }

        // Check if post is liked in localStorage
        const postsData = JSON.parse(localStorage.getItem('arxisPosts')) || {};
        if (postsData[postId] && postsData[postId].liked) {
            const icon = button.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#EF4444';
        }

        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const countText = this.textContent.trim().split(' ');
            const count = parseInt(countText[countText.length - 1]);

            // Get updated posts data
            const postsData = JSON.parse(localStorage.getItem('arxisPosts')) || {};

            if (icon.classList.contains('far')) {
                // Like post
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#EF4444';
                this.textContent = '';
                this.appendChild(icon);
                this.append(` ${count + 1}`);

                // Update localStorage
                if (!postsData[postId]) postsData[postId] = {};
                postsData[postId].liked = true;
                postsData[postId].likeCount = count + 1;
            } else {
                // Unlike post
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#64748B';
                this.textContent = '';
                this.appendChild(icon);
                this.append(` ${count - 1}`);

                // Update localStorage
                if (!postsData[postId]) postsData[postId] = {};
                postsData[postId].liked = false;
                postsData[postId].likeCount = count - 1;
            }

            localStorage.setItem('arxisPosts', JSON.stringify(postsData));
        });
    });

    // Comment functionality with localStorage
    const commentButtons = document.querySelectorAll('.comment-count');

    commentButtons.forEach(button => {
        // Get post ID from parent feed-item
        const postId = button.closest('.feed-item').getAttribute('data-post-id') ||
                      Math.floor(Math.random() * 1000000).toString();

        // Set post ID if not exists
        if (!button.closest('.feed-item').getAttribute('data-post-id')) {
            button.closest('.feed-item').setAttribute('data-post-id', postId);
        }

        button.addEventListener('click', function() {
            const comment = prompt('Add a comment:');
            if (comment && comment.trim() !== '') {
                const countText = this.textContent.trim().split(' ');
                const count = parseInt(countText[countText.length - 1]);

                // Update comment count
                this.textContent = '';
                this.appendChild(document.createElement('i')).className = 'far fa-comment';
                this.append(` ${count + 1}`);

                // Get updated posts data
                const postsData = JSON.parse(localStorage.getItem('arxisPosts')) || {};
                if (!postsData[postId]) postsData[postId] = {};
                if (!postsData[postId].comments) postsData[postId].comments = [];

                // Add comment
                postsData[postId].comments.push({
                    text: comment,
                    timestamp: new Date().toISOString(),
                    user: 'Linda Richardson'
                });
                postsData[postId].commentCount = count + 1;

                localStorage.setItem('arxisPosts', JSON.stringify(postsData));

                alert('Comment added!');
            }
        });
    });

    // Add story hover effect
    const addStory = document.querySelector('.add-story');

    addStory.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
    });

    addStory.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });

    // Story hover effects
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        story.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });

        story.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Search bar focus effect
    const searchInput = document.querySelector('.search-bar input');

    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 2px rgba(74, 144, 226, 0.3)';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });

    // Create new button effect
    const createNewBtn = document.querySelector('.create-new-btn');

    createNewBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#3A80D2';
    });

    createNewBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#4A90E2';
    });

    // Notification bell effect
    const notificationBell = document.querySelector('.notification-bell');

    notificationBell.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.style.backgroundColor = '#4A90E2';
            this.style.color = '#FFFFFF';
        } else {
            this.style.backgroundColor = '#F1F5F9';
            this.style.color = '#64748B';
        }
    });

    // Initialize the todo count on page load
    updateTodoCount();

    // Messenger functionality
    initMessenger();

    // Simulate scheduled messages
    scheduleMessages();
});

// Initialize localStorage data
function initLocalStorage() {
    // Initialize posts data if not exists
    if (!localStorage.getItem('arxisPosts')) {
        const initialPosts = {};
        localStorage.setItem('arxisPosts', JSON.stringify(initialPosts));
    }

    // Initialize chat data if not exists
    if (!localStorage.getItem('arxisChats')) {
        const initialChats = {
            'dianne': {
                name: 'Dianne Rodriguez',
                avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
                title: 'Product Owner',
                messages: [
                    {
                        text: 'Hi Linda! How are you doing today?',
                        sender: 'dianne',
                        timestamp: new Date(Date.now() - 86400000).toISOString() // 1 day ago
                    },
                    {
                        text: 'I wanted to discuss the new product roadmap with you.',
                        sender: 'dianne',
                        timestamp: new Date(Date.now() - 86300000).toISOString()
                    },
                    {
                        text: "Hey Dianne! I'm doing well, thanks. Sure, I'd be happy to discuss the roadmap.",
                        sender: 'me',
                        timestamp: new Date(Date.now() - 86000000).toISOString()
                    }
                ],
                unread: 0
            },
            'theresa': {
                name: 'Theresa von Castro',
                avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
                title: 'Senior Product Designer',
                messages: [
                    {
                        text: 'Linda, have you seen the latest design updates?',
                        sender: 'theresa',
                        timestamp: new Date(Date.now() - 172800000).toISOString() // 2 days ago
                    },
                    {
                        text: 'Yes, they look great! I especially like the new color palette.',
                        sender: 'me',
                        timestamp: new Date(Date.now() - 172700000).toISOString()
                    },
                    {
                        text: 'Thanks! I spent a lot of time on that. Can we meet to discuss the animation transitions?',
                        sender: 'theresa',
                        timestamp: new Date(Date.now() - 172600000).toISOString()
                    }
                ],
                unread: 0
            },
            'kristin': {
                name: 'Kristin Watson',
                avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
                title: 'Product Owner',
                messages: [
                    {
                        text: 'Hi Linda, are you available for a quick call?',
                        sender: 'kristin',
                        timestamp: new Date(Date.now() - 259200000).toISOString() // 3 days ago
                    },
                    {
                        text: 'Sure, give me 10 minutes to finish up what I'm working on.',
                        sender: 'me',
                        timestamp: new Date(Date.now() - 259100000).toISOString()
                    },
                    {
                        text: 'Perfect, thanks!',
                        sender: 'kristin',
                        timestamp: new Date(Date.now() - 259000000).toISOString()
                    }
                ],
                unread: 0
            },
            'linda': {
                name: 'Linda Fernandez',
                avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
                title: 'Senior UX Architect',
                messages: [
                    {
                        text: 'Hey namesake! Are we still on for lunch tomorrow?',
                        sender: 'linda',
                        timestamp: new Date(Date.now() - 345600000).toISOString() // 4 days ago
                    },
                    {
                        text: 'Absolutely! Looking forward to it. Shall we try that new place downtown?',
                        sender: 'me',
                        timestamp: new Date(Date.now() - 345500000).toISOString()
                    },
                    {
                        text: 'Sounds great! Meet you there at noon?',
                        sender: 'linda',
                        timestamp: new Date(Date.now() - 345400000).toISOString()
                    },
                    {
                        text: 'Perfect! See you then.',
                        sender: 'me',
                        timestamp: new Date(Date.now() - 345300000).toISOString()
                    }
                ],
                unread: 0
            }
        };
        localStorage.setItem('arxisChats', JSON.stringify(initialChats));
    }
}

// Initialize messenger functionality
function initMessenger() {
    const messengerNavItem = document.querySelector('.messenger-nav-item');
    const defaultContent = document.querySelector('.default-content');
    const messengerContent = document.querySelector('.messenger-content');
    const backToFeedBtn = document.querySelector('.back-to-feed');
    const chatContacts = document.querySelector('.chat-contacts');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input');
    const sendMessageBtn = document.querySelector('.send-message-btn');

    // Populate chat contacts
    populateChatContacts();

    // Toggle between default and messenger content
    messengerNavItem.addEventListener('click', function() {
        defaultContent.style.display = 'none';
        messengerContent.style.display = 'flex';

        // Remove notification if any
        const notification = document.querySelector('.message-notification');
        if (notification) {
            notification.style.display = 'none';
        }

        // Update unread status
        const activeContact = document.querySelector('.chat-contact.active');
        if (activeContact) {
            const contactId = activeContact.getAttribute('data-contact-id');
            markMessagesAsRead(contactId);
        }
    });

    backToFeedBtn.addEventListener('click', function() {
        messengerContent.style.display = 'none';
        defaultContent.style.display = 'block';
    });

    // Send message functionality
    sendMessageBtn.addEventListener('click', function() {
        sendMessage();
    });

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send a message
    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText !== '') {
            const activeContact = document.querySelector('.chat-contact.active');
            if (activeContact) {
                const contactId = activeContact.getAttribute('data-contact-id');

                // Add message to localStorage
                const chats = JSON.parse(localStorage.getItem('arxisChats'));
                chats[contactId].messages.push({
                    text: messageText,
                    sender: 'me',
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('arxisChats', JSON.stringify(chats));

                // Add message to chat
                addMessageToChat(messageText, 'sent');

                // Clear input
                chatInput.value = '';

                // Show typing indicator
                showTypingIndicator();

                // Simulate response after random delay
                const responseDelay = Math.floor(Math.random() * (35000 - 20000 + 1)) + 20000; // 20-35 seconds
                setTimeout(() => {
                    // Hide typing indicator
                    hideTypingIndicator();

                    // Generate response
                    const responses = [
                        'Thanks for the message!',
                        'Got it, I'll look into that.',
                        'Sounds good to me!',
                        'I'll get back to you on that soon.',
                        'Let me check with the team and get back to you.',
                        'Great idea! Let's discuss this further tomorrow.',
                        'I appreciate your input on this matter.'
                    ];
                    const response = responses[Math.floor(Math.random() * responses.length)];

                    // Add response to localStorage
                    const updatedChats = JSON.parse(localStorage.getItem('arxisChats'));
                    updatedChats[contactId].messages.push({
                        text: response,
                        sender: contactId,
                        timestamp: new Date().toISOString()
                    });
                    localStorage.setItem('arxisChats', JSON.stringify(updatedChats));

                    // Add response to chat
                    addMessageToChat(response, 'received');

                    // Show notification if messenger is not active
                    if (messengerContent.style.display === 'none') {
                        showMessageNotification();

                        // Update unread count
                        updatedChats[contactId].unread = (updatedChats[contactId].unread || 0) + 1;
                        localStorage.setItem('arxisChats', JSON.stringify(updatedChats));

                        // Update contact preview
                        updateContactPreview(contactId, response);
                    }
                }, responseDelay);
            }
        }
    }

    // Function to populate chat contacts
    function populateChatContacts() {
        const chats = JSON.parse(localStorage.getItem('arxisChats'));

        // Clear existing contacts
        chatContacts.innerHTML = '';

        // Add contacts
        for (const contactId in chats) {
            const contact = chats[contactId];
            const lastMessage = contact.messages[contact.messages.length - 1];
            const lastMessagePreview = lastMessage ? lastMessage.text : '';
            const lastMessageTime = lastMessage ? formatChatTime(new Date(lastMessage.timestamp)) : '';

            const contactElement = document.createElement('div');
            contactElement.className = 'chat-contact';
            contactElement.setAttribute('data-contact-id', contactId);

            let badgeHtml = '';
            if (contact.unread && contact.unread > 0) {
                badgeHtml = `<span class="chat-contact-badge">${contact.unread}</span>`;
            }

            contactElement.innerHTML = `
                <img src="${contact.avatar}" alt="${contact.name}" class="chat-contact-avatar">
                <div class="chat-contact-info">
                    <div class="chat-contact-name">
                        ${contact.name}
                        ${badgeHtml}
                    </div>
                    <div class="chat-contact-preview">${lastMessagePreview}</div>
                </div>
                <div class="chat-contact-time">${lastMessageTime}</div>
            `;

            // Add click event
            contactElement.addEventListener('click', function() {
                // Remove active class from all contacts
                document.querySelectorAll('.chat-contact').forEach(c => c.classList.remove('active'));

                // Add active class to clicked contact
                this.classList.add('active');

                // Load chat
                loadChat(contactId);

                // Mark messages as read
                markMessagesAsRead(contactId);
            });

            chatContacts.appendChild(contactElement);
        }

        // Select first contact by default
        const firstContact = document.querySelector('.chat-contact');
        if (firstContact) {
            firstContact.classList.add('active');
            const contactId = firstContact.getAttribute('data-contact-id');
            loadChat(contactId);
        }
    }

    // Function to load chat
    function loadChat(contactId) {
        const chats = JSON.parse(localStorage.getItem('arxisChats'));
        const contact = chats[contactId];

        // Update chat header
        document.querySelector('.chat-user-avatar').src = contact.avatar;
        document.querySelector('.chat-user-avatar').alt = contact.name;
        document.querySelector('.chat-user-name').textContent = contact.name;

        // Clear chat messages
        chatMessages.innerHTML = '';

        // Add messages
        contact.messages.forEach(message => {
            const messageType = message.sender === 'me' ? 'sent' : 'received';
            addMessageToChat(message.text, messageType, new Date(message.timestamp));
        });

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to add message to chat
    function addMessageToChat(text, type, timestamp = new Date()) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type} new`;

        const formattedTime = formatMessageTime(timestamp);

        messageElement.innerHTML = `
            ${text}
            <span class="message-time">${formattedTime}</span>
        `;

        chatMessages.appendChild(messageElement);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to show typing indicator
    function showTypingIndicator() {
        // Remove existing typing indicator
        hideTypingIndicator();

        // Add typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;

        chatMessages.appendChild(typingIndicator);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to hide typing indicator
    function hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Function to show message notification
    function showMessageNotification() {
        const notification = document.querySelector('.message-notification');
        notification.style.display = 'block';
    }

    // Function to mark messages as read
    function markMessagesAsRead(contactId) {
        const chats = JSON.parse(localStorage.getItem('arxisChats'));
        if (chats[contactId]) {
            chats[contactId].unread = 0;
            localStorage.setItem('arxisChats', JSON.stringify(chats));

            // Update contact badge
            const contactElement = document.querySelector(`.chat-contact[data-contact-id="${contactId}"]`);
            if (contactElement) {
                const badge = contactElement.querySelector('.chat-contact-badge');
                if (badge) {
                    badge.remove();
                }
            }
        }
    }

    // Function to update contact preview
    function updateContactPreview(contactId, text) {
        const contactElement = document.querySelector(`.chat-contact[data-contact-id="${contactId}"]`);
        if (contactElement) {
            const preview = contactElement.querySelector('.chat-contact-preview');
            if (preview) {
                preview.textContent = text;
            }

            const timeElement = contactElement.querySelector('.chat-contact-time');
            if (timeElement) {
                timeElement.textContent = 'now';
            }

            // Move contact to top
            const parent = contactElement.parentNode;
            parent.insertBefore(contactElement, parent.firstChild);
        }
    }
}

// Schedule automated messages
function scheduleMessages() {
    // Message from Theresa after 15 seconds
    setTimeout(() => {
        sendAutomatedMessage('theresa', 'Hi Linda, do you have a minute to discuss the quarterly evaluation?');
    }, 15000);

    // Another message from Theresa after 60 seconds (15 + 45)
    setTimeout(() => {
        sendAutomatedMessage('theresa', 'I've prepared some notes for our meeting tomorrow. Would you like me to send them over?');
    }, 60000);

    // Message from Dianne after 70 seconds (60 + 10)
    setTimeout(() => {
        sendAutomatedMessage('dianne', 'Linda, can you review the latest mockups when you get a chance? The client is waiting for our feedback.');
    }, 70000);
}

// Function to send automated message
function sendAutomatedMessage(contactId, text) {
    // Add message to localStorage
    const chats = JSON.parse(localStorage.getItem('arxisChats'));
    chats[contactId].messages.push({
        text: text,
        sender: contactId,
        timestamp: new Date().toISOString()
    });

    // Increment unread count
    chats[contactId].unread = (chats[contactId].unread || 0) + 1;
    localStorage.setItem('arxisChats', JSON.stringify(chats));

    // Show notification
    const notification = document.querySelector('.message-notification');
    notification.style.display = 'block';

    // Update contact preview if contacts are populated
    const contactElement = document.querySelector(`.chat-contact[data-contact-id="${contactId}"]`);
    if (contactElement) {
        // Update preview text
        const preview = contactElement.querySelector('.chat-contact-preview');
        if (preview) {
            preview.textContent = text;
        }

        // Update time
        const timeElement = contactElement.querySelector('.chat-contact-time');
        if (timeElement) {
            timeElement.textContent = 'now';
        }

        // Update badge
        let badge = contactElement.querySelector('.chat-contact-badge');
        if (badge) {
            badge.textContent = chats[contactId].unread;
        } else {
            const nameElement = contactElement.querySelector('.chat-contact-name');
            if (nameElement) {
                badge = document.createElement('span');
                badge.className = 'chat-contact-badge';
                badge.textContent = chats[contactId].unread;
                nameElement.appendChild(badge);
            }
        }

        // Move contact to top
        const parent = contactElement.parentNode;
        parent.insertBefore(contactElement, parent.firstChild);
    }

    // Add message to chat if contact is active
    const activeContact = document.querySelector('.chat-contact.active');
    if (activeContact && activeContact.getAttribute('data-contact-id') === contactId) {
        const chatMessages = document.querySelector('.chat-messages');

        const messageElement = document.createElement('div');
        messageElement.className = 'message received new';

        const formattedTime = formatMessageTime(new Date());

        messageElement.innerHTML = `
            ${text}
            <span class="message-time">${formattedTime}</span>
        `;

        chatMessages.appendChild(messageElement);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Mark as read
        markMessagesAsRead(contactId);
    }
}

// Helper function to format message time
function formatMessageTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Helper function to format chat time
function formatChatTime(date) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date >= today) {
        // Today
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    } else if (date >= yesterday) {
        // Yesterday
        return 'Yesterday';
    } else {
        // Older
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
    }
}

// Helper function to mark messages as read
function markMessagesAsRead(contactId) {
    const chats = JSON.parse(localStorage.getItem('arxisChats'));
    if (chats[contactId]) {
        chats[contactId].unread = 0;
        localStorage.setItem('arxisChats', JSON.stringify(chats));

        // Update contact badge
        const contactElement = document.querySelector(`.chat-contact[data-contact-id="${contactId}"]`);
        if (contactElement) {
            const badge = contactElement.querySelector('.chat-contact-badge');
            if (badge) {
                badge.remove();
            }
        }
    }
}