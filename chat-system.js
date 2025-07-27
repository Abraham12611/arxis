document.addEventListener('DOMContentLoaded', function() {
    // Chat system data
    const contacts = [
        {
            id: 1,
            name: "Dianne Rodriguez",
            title: "Product Owner",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            status: "online",
            unread: false,
            lastSeen: "Just now",
            messages: [
                {
                    text: "Hi Linda! How's the motion design for the new campaign coming along?",
                    time: "10:15 AM",
                    sent: false
                },
                {
                    text: "Hey Dianne! It's going well. I'm finalizing the animations today.",
                    time: "10:18 AM",
                    sent: true
                },
                {
                    text: "Great! The team is excited to see what you've created.",
                    time: "10:20 AM",
                    sent: false
                },
                {
                    text: "I'll share the preview by end of day. I think you'll like the transitions!",
                    time: "10:22 AM",
                    sent: true
                },
                {
                    text: "Perfect timing! We have a review meeting tomorrow morning.",
                    time: "10:25 AM",
                    sent: false
                }
            ]
        },
        {
            id: 2,
            name: "Theresa von Castro",
            title: "Senior Product Designer",
            avatar: "https://randomuser.me/api/portraits/women/43.jpg",
            status: "online",
            unread: false,
            lastSeen: "5 min ago",
            messages: [
                {
                    text: "Linda, have you seen the latest design system updates?",
                    time: "Yesterday",
                    sent: false
                },
                {
                    text: "Yes, I've been incorporating them into my current project!",
                    time: "Yesterday",
                    sent: true
                },
                {
                    text: "What do you think about the new color palette?",
                    time: "Yesterday",
                    sent: false
                },
                {
                    text: "I love it! Much more vibrant and accessible. The contrast is much better now.",
                    time: "Yesterday",
                    sent: true
                },
                {
                    text: "Agreed! Let's catch up later to discuss how we can implement it consistently.",
                    time: "Yesterday",
                    sent: false
                },
                {
                    text: "Sounds good! How about after the team meeting?",
                    time: "Yesterday",
                    sent: true
                },
                {
                    text: "Perfect, see you then!",
                    time: "Yesterday",
                    sent: false
                }
            ]
        },
        {
            id: 3,
            name: "Kristin Watson",
            title: "Product Owner",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            status: "offline",
            unread: false,
            lastSeen: "2 hrs ago",
            messages: [
                {
                    text: "Hi Linda, can you help me with some motion graphics for the quarterly presentation?",
                    time: "Monday",
                    sent: false
                },
                {
                    text: "Sure Kristin! What kind of animations are you looking for?",
                    time: "Monday",
                    sent: true
                },
                {
                    text: "Something simple but impactful for the sales data slides.",
                    time: "Monday",
                    sent: false
                },
                {
                    text: "I can create some bar chart animations and transitions between key points.",
                    time: "Monday",
                    sent: true
                },
                {
                    text: "That sounds perfect! When do you think you can have a draft ready?",
                    time: "Monday",
                    sent: false
                },
                {
                    text: "I should be able to get something to you by Wednesday. Does that work?",
                    time: "Monday",
                    sent: true
                },
                {
                    text: "Yes, that's perfect. Thank you!",
                    time: "Monday",
                    sent: false
                }
            ]
        },
        {
            id: 4,
            name: "Linda Fernandez",
            title: "Senior UX Architect",
            avatar: "https://randomuser.me/api/portraits/women/56.jpg",
            status: "offline",
            unread: false,
            lastSeen: "1 day ago",
            messages: [
                {
                    text: "Linda, I noticed we have the same first name! Thought that was funny 😄",
                    time: "Last week",
                    sent: false
                },
                {
                    text: "Haha, yes! Linda squad unite! How are you doing?",
                    time: "Last week",
                    sent: true
                },
                {
                    text: "I'm good! Just working on the new user flows for the mobile app.",
                    time: "Last week",
                    sent: false
                },
                {
                    text: "Sounds interesting! I'd love to see them when you're ready for feedback.",
                    time: "Last week",
                    sent: true
                },
                {
                    text: "Definitely! I'll share them in our next UX review. Your motion expertise would be really helpful.",
                    time: "Last week",
                    sent: false
                },
                {
                    text: "Happy to help! Let me know when the meeting is scheduled.",
                    time: "Last week",
                    sent: true
                }
            ]
        }
    ];

    // Current active chat
    let activeChat = null;

    // Total unread messages count
    let totalUnread = 0;

    // Create chat UI elements
    createChatUI();

    // Add event listeners to contact message buttons
    document.querySelectorAll('.message-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const contactItem = this.closest('.contact-item');
            const contactName = contactItem.querySelector('.contact-name').textContent;
            const contact = contacts.find(c => c.name === contactName);

            if (contact) {
                openChat(contact);
            }
        });
    });

    // Make Messenger nav item clickable
    const messengerNavItem = document.getElementById('messenger-nav');
    messengerNavItem.style.cursor = 'pointer';
    messengerNavItem.addEventListener('click', function() {
        openMessengerOverview();
    });

    // Function to create chat UI elements
    function createChatUI() {
        // Create chat overlay
        const chatOverlay = document.createElement('div');
        chatOverlay.className = 'chat-overlay';
        chatOverlay.id = 'chatOverlay';

        // Create chat container
        const chatContainer = document.createElement('div');
        chatContainer.className = 'chat-container';

        // Create chat header
        const chatHeader = document.createElement('div');
        chatHeader.className = 'chat-header';
        chatHeader.innerHTML = `
            <button class="back-btn"><i class="fas fa-arrow-left"></i></button>
            <div class="chat-user-info">
                <img src="" alt="" class="chat-avatar">
                <div>
                    <div class="chat-user-name"></div>
                    <div class="chat-user-status"></div>
                </div>
            </div>
        `;

        // Create chat messages container
        const chatMessages = document.createElement('div');
        chatMessages.className = 'chat-messages';
        chatMessages.id = 'chatMessages';

        // Create chat input container
        const chatInputContainer = document.createElement('div');
        chatInputContainer.className = 'chat-input-container';
        chatInputContainer.innerHTML = `
            <input type="text" class="chat-input" placeholder="Type a message...">
            <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
        `;

        // Assemble chat container
        chatContainer.appendChild(chatHeader);
        chatContainer.appendChild(chatMessages);
        chatContainer.appendChild(chatInputContainer);
        chatOverlay.appendChild(chatContainer);

        // Create messenger overview
        const messengerOverview = document.createElement('div');
        messengerOverview.className = 'messenger-overview';
        messengerOverview.id = 'messengerOverview';

        const messengerContainer = document.createElement('div');
        messengerContainer.className = 'messenger-container';

        const messengerHeader = document.createElement('div');
        messengerHeader.className = 'messenger-header';
        messengerHeader.innerHTML = `
            <div class="messenger-title">Messenger</div>
            <button class="close-messenger-btn"><i class="fas fa-times"></i></button>
        `;

        const messengerSearch = document.createElement('div');
        messengerSearch.className = 'messenger-search';
        messengerSearch.innerHTML = `
            <input type="text" class="messenger-search-input" placeholder="Search contacts...">
        `;

        const contactList = document.createElement('div');
        contactList.className = 'contact-list';
        contactList.id = 'contactList';

        // Assemble messenger container
        messengerContainer.appendChild(messengerHeader);
        messengerContainer.appendChild(messengerSearch);
        messengerContainer.appendChild(contactList);
        messengerOverview.appendChild(messengerContainer);

        // Add to document
        document.body.appendChild(chatOverlay);
        document.body.appendChild(messengerOverview);

        // Add event listeners
        const backBtn = chatOverlay.querySelector('.back-btn');
        backBtn.addEventListener('click', closeChat);

        const closeMessengerBtn = messengerOverview.querySelector('.close-messenger-btn');
        closeMessengerBtn.addEventListener('click', closeMessengerOverview);

        const sendBtn = chatOverlay.querySelector('.send-btn');
        const chatInput = chatOverlay.querySelector('.chat-input');

        sendBtn.addEventListener('click', function() {
            sendMessage(chatInput.value);
        });

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage(chatInput.value);
            }
        });

        // Populate contact list in messenger overview
        updateContactList();
    }

    // Function to open chat with a specific contact
    function openChat(contact) {
        activeChat = contact;

        // Update chat header
        const chatOverlay = document.getElementById('chatOverlay');
        const chatAvatar = chatOverlay.querySelector('.chat-avatar');
        const chatUserName = chatOverlay.querySelector('.chat-user-name');
        const chatUserStatus = chatOverlay.querySelector('.chat-user-status');

        chatAvatar.src = contact.avatar;
        chatAvatar.alt = contact.name;
        chatUserName.textContent = contact.name;
        chatUserStatus.textContent = contact.status === 'online' ? 'Online' : `Last seen ${contact.lastSeen}`;

        // Load messages
        loadMessages(contact);

        // Mark messages as read
        markAsRead(contact);

        // Show chat overlay
        chatOverlay.style.display = 'flex';
    }

    // Function to close chat
    function closeChat() {
        const chatOverlay = document.getElementById('chatOverlay');
        chatOverlay.style.display = 'none';
        activeChat = null;
    }

    // Function to load messages for a contact
    function loadMessages(contact) {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';

        contact.messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.sent ? 'message-sent' : 'message-received'}`;
            messageElement.innerHTML = `
                <div class="message-text">${message.text}</div>
                <div class="message-time">${message.time}</div>
            `;
            chatMessages.appendChild(messageElement);
        });

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to send a message
    function sendMessage(text) {
        if (!text.trim() || !activeChat) return;

        // Add message to data
        const newMessage = {
            text: text.trim(),
            time: getCurrentTime(),
            sent: true
        };

        activeChat.messages.push(newMessage);

        // Add message to UI
        const chatMessages = document.getElementById('chatMessages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message message-sent';
        messageElement.innerHTML = `
            <div class="message-text">${newMessage.text}</div>
            <div class="message-time">${newMessage.time}</div>
        `;
        chatMessages.appendChild(messageElement);

        // Clear input
        const chatInput = document.querySelector('.chat-input');
        chatInput.value = '';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Update contact list
        updateContactList();
    }

    // Function to get current time in HH:MM AM/PM format
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12

        return `${hours}:${minutes} ${ampm}`;
    }

    // Function to mark messages as read
    function markAsRead(contact) {
        if (contact.unread) {
            contact.unread = false;
            totalUnread--;
            updateUnreadCount();
        }
    }

    // Function to update unread count in nav
    function updateUnreadCount() {
        const messengerNav = document.getElementById('messenger-nav');
        const unreadCountSpan = messengerNav.querySelector('.unread-count');
        const dotSpan = messengerNav.querySelector('.dot');

        if (totalUnread > 0) {
            unreadCountSpan.textContent = totalUnread;
            dotSpan.style.display = 'inline-block';
        } else {
            unreadCountSpan.textContent = '';
            dotSpan.style.display = 'none';
        }
    }

    // Function to open messenger overview
    function openMessengerOverview() {
        const messengerOverview = document.getElementById('messengerOverview');
        updateContactList();
        messengerOverview.style.display = 'flex';
    }

    // Function to close messenger overview
    function closeMessengerOverview() {
        const messengerOverview = document.getElementById('messengerOverview');
        messengerOverview.style.display = 'none';
    }

    // Function to update contact list in messenger overview
    function updateContactList() {
        const contactList = document.getElementById('contactList');
        contactList.innerHTML = '';

        contacts.forEach(contact => {
            const lastMessage = contact.messages[contact.messages.length - 1];
            const contactElement = document.createElement('div');
            contactElement.className = 'contact-item';
            contactElement.innerHTML = `
                <div class="contact-avatar-container">
                    <img src="${contact.avatar}" alt="${contact.name}" class="chat-avatar">
                    ${contact.unread ? '<span class="unread-indicator"></span>' : ''}
                </div>
                <div class="contact-details">
                    <div class="contact-name-row">
                        <span class="contact-name">${contact.name}</span>
                        <span class="message-time">${lastMessage.time}</span>
                    </div>
                    <div class="last-message">${lastMessage.text}</div>
                </div>
            `;

            contactElement.addEventListener('click', function() {
                openChat(contact);
                closeMessengerOverview();
            });

            contactList.appendChild(contactElement);
        });
    }

    // Export functions for message automation
    window.chatSystem = {
        contacts,
        sendAutomatedMessage: function(contactId, messageText) {
            const contact = contacts.find(c => c.id === contactId);
            if (!contact) return;

            // Add message to data
            const newMessage = {
                text: messageText,
                time: getCurrentTime(),
                sent: false
            };

            contact.messages.push(newMessage);

            // Mark as unread if not the active chat
            if (!activeChat || activeChat.id !== contact.id) {
                contact.unread = true;
                totalUnread++;
                updateUnreadCount();
            }

            // If chat is open with this contact, add message to UI
            if (activeChat && activeChat.id === contact.id) {
                const chatMessages = document.getElementById('chatMessages');
                const messageElement = document.createElement('div');
                messageElement.className = 'message message-received';
                messageElement.innerHTML = `
                    <div class="message-text">${newMessage.text}</div>
                    <div class="message-time">${newMessage.time}</div>
                `;
                chatMessages.appendChild(messageElement);

                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            // Update contact list if messenger is open
            if (document.getElementById('messengerOverview').style.display === 'flex') {
                updateContactList();
            }
        }
    };
});