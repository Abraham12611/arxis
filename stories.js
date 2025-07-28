document.addEventListener('DOMContentLoaded', function() {
    // Story data
    const stories = [
        {
            id: 'story-1',
            user: 'Dianne',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
            time: '2 hours ago',
            content: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    caption: 'Team brainstorming session'
                }
            ],
            viewed: false
        },
        {
            id: 'story-2',
            user: 'Mafia Team',
            avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
            time: '4 hours ago',
            content: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    caption: 'New project kickoff'
                }
            ],
            viewed: false
        },
        {
            id: 'story-3',
            user: 'Kristin',
            avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
            time: '6 hours ago',
            content: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    caption: 'Design review meeting'
                }
            ],
            viewed: false
        },
        {
            id: 'story-4',
            user: 'HR Dept',
            avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
            time: '1 day ago',
            content: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    caption: 'Company culture workshop'
                }
            ],
            viewed: false
        },
        {
            id: 'story-5',
            user: 'Victor',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            time: '1 day ago',
            content: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    caption: 'Product demo'
                }
            ],
            viewed: false
        },
        {
            id: 'story-6',
            user: 'Zarinka',
            avatar: 'https://randomuser.me/api/portraits/women/89.jpg',
            time: '2 days ago',
            content: [
                {
                    type: 'image',
                    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    caption: 'Office renovation update'
                }
            ],
            viewed: false
        }
    ];

    // Initialize story states from sessionStorage or default values
    function initializeStoryStates() {
        const savedStates = sessionStorage.getItem('storyStates');
        if (savedStates) {
            const states = JSON.parse(savedStates);
            stories.forEach(story => {
                if (states[story.id]) {
                    story.viewed = states[story.id].viewed;
                }
            });
        } else {
            // Randomly select 3-4 stories to have unviewed content initially
            const storyCount = stories.length;
            const unviewedCount = Math.floor(Math.random() * 2) + 3; // 3-4 stories
            const unviewedIndices = new Set();

            while (unviewedIndices.size < unviewedCount) {
                const randomIndex = Math.floor(Math.random() * storyCount);
                if (randomIndex !== 0) { // Skip "Add story"
                    unviewedIndices.add(randomIndex);
                }
            }

            stories.forEach((story, index) => {
                story.viewed = !unviewedIndices.has(index);
            });

            saveStoryStates();
        }
    }

    // Save story states to sessionStorage
    function saveStoryStates() {
        const states = {};
        stories.forEach(story => {
            states[story.id] = {
                viewed: story.viewed
            };
        });
        sessionStorage.setItem('storyStates', JSON.stringify(states));
    }

    // Apply gradient to unviewed stories
    function applyStoryGradients() {
        const storyElements = document.querySelectorAll('.story');

        storyElements.forEach((storyElement, index) => {
            if (index === 0) return; // Skip "Add story"

            const story = stories[index - 1]; // Adjust for "Add story"
            const storyId = story.id;

            // Set data attribute for tracking
            storyElement.setAttribute('data-story-id', storyId);

            // Apply gradient if not viewed
            const storyAvatar = storyElement.querySelector('.story-avatar');
            if (!story.viewed && storyAvatar) {
                storyAvatar.classList.add('has-new-content');
                // Ensure the background image is still visible
                const backgroundImage = storyAvatar.style.backgroundImage;
                if (backgroundImage) {
                    storyAvatar.style.backgroundImage = backgroundImage;
                }
            }

            // Make story clickable
            storyElement.addEventListener('click', function() {
                if (index !== 0) { // Skip "Add story"
                    openStoryViewer(storyId);
                }
            });
        });
    }

    // Create story viewer HTML
    function createStoryViewer() {
        const storyViewer = document.createElement('div');
        storyViewer.className = 'story-viewer-overlay';
        storyViewer.id = 'storyViewer';

        storyViewer.innerHTML = `
            <div class="story-viewer-header">
                <div class="story-user-info">
                    <img src="" alt="" class="story-user-avatar">
                    <div>
                        <div class="story-user-name"></div>
                        <div class="story-time"></div>
                    </div>
                </div>
                <button class="story-close-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="story-progress-container">
                <div class="story-progress-bar">
                    <div class="story-progress-fill"></div>
                </div>
            </div>
            <div class="story-content">
                <img src="" alt="" class="story-image">
                <div class="story-nav story-nav-prev">
                    <i class="fas fa-chevron-left story-nav-icon"></i>
                </div>
                <div class="story-nav story-nav-next">
                    <i class="fas fa-chevron-right story-nav-icon"></i>
                </div>
            </div>
        `;

        document.body.appendChild(storyViewer);

        // Add event listeners
        const closeBtn = storyViewer.querySelector('.story-close-btn');
        closeBtn.addEventListener('click', closeStoryViewer);

        const prevBtn = storyViewer.querySelector('.story-nav-prev');
        prevBtn.addEventListener('click', showPreviousStory);

        const nextBtn = storyViewer.querySelector('.story-nav-next');
        nextBtn.addEventListener('click', showNextStory);

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeStoryViewer();
            }
        });
    }

    // Current story being viewed
    let currentStoryId = null;

    // Open story viewer
    function openStoryViewer(storyId) {
        currentStoryId = storyId;

        const story = stories.find(s => s.id === storyId);
        if (!story) return;

        const storyViewer = document.getElementById('storyViewer');
        const userAvatar = storyViewer.querySelector('.story-user-avatar');
        const userName = storyViewer.querySelector('.story-user-name');
        const storyTime = storyViewer.querySelector('.story-time');
        const storyImage = storyViewer.querySelector('.story-image');
        const progressFill = storyViewer.querySelector('.story-progress-fill');

        // Set story content
        userAvatar.src = story.avatar;
        userAvatar.alt = story.user;
        userName.textContent = story.user;
        storyTime.textContent = story.time;

        // Set story image
        if (story.content && story.content.length > 0) {
            storyImage.src = story.content[0].url;
            storyImage.alt = story.content[0].caption || '';
        }

        // Show viewer
        storyViewer.classList.add('active');

        // Start progress animation
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.width = '100%';
        }, 50);

        // Auto-advance after 5 seconds
        setTimeout(() => {
            markStoryAsViewed(storyId);
            showNextStory();
        }, 5000);
    }

    // Close story viewer
    function closeStoryViewer() {
        const storyViewer = document.getElementById('storyViewer');
        storyViewer.classList.add('closing');

        setTimeout(() => {
            storyViewer.classList.remove('active', 'closing');
            currentStoryId = null;
        }, 300);
    }

    // Show previous story
    function showPreviousStory() {
        if (!currentStoryId) return;

        const currentIndex = stories.findIndex(s => s.id === currentStoryId);
        if (currentIndex > 0) {
            openStoryViewer(stories[currentIndex - 1].id);
        } else {
            closeStoryViewer();
        }
    }

    // Show next story
    function showNextStory() {
        if (!currentStoryId) return;

        const currentIndex = stories.findIndex(s => s.id === currentStoryId);
        if (currentIndex < stories.length - 1) {
            openStoryViewer(stories[currentIndex + 1].id);
        } else {
            closeStoryViewer();
        }
    }

    // Mark story as viewed
    function markStoryAsViewed(storyId) {
        const story = stories.find(s => s.id === storyId);
        if (story) {
            story.viewed = true;

            // Update UI
            const storyElement = document.querySelector(`[data-story-id="${storyId}"]`);
            if (storyElement) {
                const storyAvatar = storyElement.querySelector('.story-avatar');
                if (storyAvatar && storyAvatar.classList.contains('has-new-content')) {
                    storyAvatar.style.transition = 'border-color 0.3s ease';
                    storyAvatar.style.borderColor = 'transparent';
                    setTimeout(() => {
                        storyAvatar.classList.remove('has-new-content');
                        storyAvatar.style.transition = '';
                        storyAvatar.style.borderColor = '';
                    }, 300);
                }
            }

            // Save to sessionStorage
            saveStoryStates();
        }
    }

    // Initialize
    initializeStoryStates();
    createStoryViewer();
    applyStoryGradients();
});