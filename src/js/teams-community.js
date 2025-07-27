document.addEventListener('DOMContentLoaded', function() {
    // Teams & Community data.
    const teamsData = {
        stats: {
            activeTeams: 24,
            totalMembers: 156,
            communities: 8
        },
        teams: [
            {
                id: 'website-redesign',
                name: 'Website Redesign',
                type: 'project',
                description: 'Redesigning the company website with focus on user experience and modern design principles.',
                members: [
                    { id: 1, name: 'Linda Richardson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
                    { id: 2, name: 'Theresa von Castro', avatar: 'https://randomuser.me/api/portraits/women/43.jpg' },
                    { id: 3, name: 'Kristin Watson', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
                    { id: 4, name: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
                    { id: 5, name: 'David Smith', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
                    { id: 6, name: 'Emma Wilson', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' }
                ],
                lastActivity: 'now'
            },
            {
                id: 'marketing',
                name: 'Marketing Team',
                type: 'department',
                description: 'Driving brand awareness and growth through strategic marketing initiatives.',
                members: [
                    { id: 7, name: 'Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
                    { id: 8, name: 'David Okafor', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
                    { id: 9, name: 'Emma Thompson', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' }
                ],
                lastActivity: '2 hours ago'
            }
        ],
        communities: [
            {
                id: 'design-guild',
                name: 'Design Guild',
                description: 'A community for designers to share work, get feedback, and discuss design trends.',
                memberCount: 45,
                tags: ['Design', 'UI/UX', 'Creative'],
                latestDiscussion: 'Color theory in digital design',
                nextEvent: 'Design workshop (Tomorrow)'
            },
            {
                id: 'book-club',
                name: 'Book Club',
                description: 'Monthly book discussions and reading recommendations for book lovers.',
                memberCount: 28,
                tags: ['Books', 'Reading', 'Discussion'],
                currentBook: 'The Innovator\'s Dilemma',
                nextMeeting: 'Friday, 3 PM'
            }
        ],
        events: [
            {
                id: 'sprint-planning',
                title: 'Website Redesign Sprint Planning',
                type: 'team',
                description: 'Planning session for the upcoming sprint focusing on homepage redesign.',
                date: 'Today',
                time: '10:00 AM - 11:30 AM',
                location: {
                    type: 'virtual',
                    details: 'Zoom Meeting'
                },
                attendees: [
                    { id: 1, name: 'Linda Richardson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
                    { id: 2, name: 'Theresa von Castro', avatar: 'https://randomuser.me/api/portraits/women/43.jpg' }
                ]
            },
            {
                id: 'design-workshop',
                title: 'Design Guild Workshop',
                type: 'community',
                description: 'Interactive workshop on color theory in digital design.',
                date: 'Tomorrow',
                time: '2:00 PM - 3:30 PM',
                location: {
                    type: 'physical',
                    details: 'Conference Room A'
                },
                attendees: [
                    { id: 7, name: 'Sarah Johnson', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
                    { id: 8, name: 'David Okafor', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }
                ]
            }
        ]
    };

    // Initialize Teams & Community section
    function initTeamsCommunity() {
        setupTabs();
        setupCategoryFilters();
        setupSearch();
        setupTeamActions();
        setupModals();
        setupViewToggle();
    }

    // Setup tab switching
    function setupTabs() {
        const tabButtons = document.querySelectorAll('.teams-tabs .tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
    }

    // Switch between tabs
    function switchTab(tabId) {
        const tabButtons = document.querySelectorAll('.teams-tabs .tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        // Update active tab button
        tabButtons.forEach(button => {
            if (button.getAttribute('data-tab') === tabId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Show active tab content
        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Save preference to localStorage
        localStorage.setItem('teamsActiveTab', tabId);
    }

    // Setup category filters
    function setupCategoryFilters() {
        const categoryButtons = document.querySelectorAll('.category-btn');

        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Filter teams based on category
                const category = this.textContent.toLowerCase();
                filterTeams(category);
            });
        });
    }

    // Filter teams based on category
    function filterTeams(category) {
        const teamCards = document.querySelectorAll('.team-card');

        teamCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
                return;
            }

            const teamType = card.querySelector('.team-type').textContent.toLowerCase();
            card.style.display = teamType.includes(category) ? 'block' : 'none';
        });
    }

    // Setup search functionality
    function setupSearch() {
        const searchInput = document.querySelector('.teams-search input');
        const filterBtn = document.querySelector('.filter-btn');

        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                searchTeamsAndCommunities(this.value);
            }, 300));
        }

        if (filterBtn) {
            filterBtn.addEventListener('click', function() {
                showAdvancedFilters();
            });
        }
    }

    // Search teams and communities
    function searchTeamsAndCommunities(query) {
        const teamCards = document.querySelectorAll('.team-card');
        const communityCards = document.querySelectorAll('.community-card');
        const employeeCards = document.querySelectorAll('.employee-card');

        const searchInCards = (cards) => {
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const isMatch = title.includes(query.toLowerCase()) ||
                              description.includes(query.toLowerCase());

                card.style.display = isMatch ? 'block' : 'none';
            });
        };

        // Search in active tab
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            if (activeTab.id === 'my-teams' || activeTab.id === 'all-teams') {
                searchInCards(teamCards);
            } else if (activeTab.id === 'communities') {
                searchInCards(communityCards);
            } else if (activeTab.id === 'directory') {
                searchInCards(employeeCards);
            }
        }
    }

    // Setup team actions
    function setupTeamActions() {
        // Team card actions
        const teamActionBtns = document.querySelectorAll('.team-action-btn');
        teamActionBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const action = this.querySelector('i').className;
                const teamCard = this.closest('.team-card');
                const teamId = teamCard.getAttribute('data-id');

                if (action.includes('comment')) {
                    openTeamChat(teamId);
                } else if (action.includes('tasks')) {
                    openTeamTasks(teamId);
                } else if (action.includes('ellipsis')) {
                    showTeamOptions(teamId, e);
                }
            });
        });

        // Create team button
        const createTeamBtn = document.querySelector('.create-team-btn');
        if (createTeamBtn) {
            createTeamBtn.addEventListener('click', function() {
                showCreateTeamModal();
            });
        }

        // Join community button
        const joinCommunityBtn = document.querySelector('.join-community-btn');
        if (joinCommunityBtn) {
            joinCommunityBtn.addEventListener('click', function() {
                showJoinCommunityModal();
            });
        }
    }

    // Setup modals
    function setupModals() {
        // Create team modal
        const createTeamModal = document.querySelector('.create-team-modal');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        const createTeamForm = document.querySelector('.create-team-form');

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal-content').parentElement;
                modal.style.display = 'none';
            });
        });

        if (createTeamForm) {
            createTeamForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleCreateTeam(this);
            });
        }

        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('create-team-modal')) {
                e.target.style.display = 'none';
            }
        });

        // Team avatar upload
        const avatarInput = document.querySelector('#teamAvatar');
        const uploadAvatarBtn = document.querySelector('.upload-avatar-btn');

        if (uploadAvatarBtn && avatarInput) {
            uploadAvatarBtn.addEventListener('click', function() {
                avatarInput.click();
            });

            avatarInput.addEventListener('change', function() {
                handleAvatarUpload(this.files[0]);
            });
        }
    }

    // Setup view toggle for directory
    function setupViewToggle() {
        const gridViewBtn = document.querySelector('.grid-view-btn');
        const listViewBtn = document.querySelector('.list-view-btn');
        const orgViewBtn = document.querySelector('.org-view-btn');
        const directoryGrid = document.querySelector('.directory-grid');

        if (gridViewBtn && listViewBtn && directoryGrid) {
            // Set initial state from localStorage or default to grid view
            const savedView = localStorage.getItem('directoryViewMode') || 'grid';
            if (savedView === 'list') {
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                directoryGrid.classList.add('list-view');
            } else {
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
                directoryGrid.classList.remove('list-view');
            }

            // Grid view button click handler
            gridViewBtn.addEventListener('click', function() {
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
                if (orgViewBtn) orgViewBtn.classList.remove('active');
                directoryGrid.classList.remove('list-view');
                localStorage.setItem('directoryViewMode', 'grid');
            });

            // List view button click handler
            listViewBtn.addEventListener('click', function() {
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                if (orgViewBtn) orgViewBtn.classList.remove('active');
                directoryGrid.classList.add('list-view');
                localStorage.setItem('directoryViewMode', 'list');
            });

            // Org chart view button click handler (if exists)
            if (orgViewBtn) {
                orgViewBtn.addEventListener('click', function() {
                    orgViewBtn.classList.add('active');
                    gridViewBtn.classList.remove('active');
                    listViewBtn.classList.remove('active');
                    // Implementation for org chart view would go here
                    localStorage.setItem('directoryViewMode', 'org');
                });
            }
        }
    }

    // Utility functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function showAdvancedFilters() {
        // Implement advanced filters modal
        console.log('Show advanced filters');
    }

    function openTeamChat(teamId) {
        // Implement team chat functionality
        console.log('Open chat for team:', teamId);
    }

    function openTeamTasks(teamId) {
        // Implement team tasks functionality
        console.log('Open tasks for team:', teamId);
    }

    function showTeamOptions(teamId, event) {
        // Implement team options menu
        console.log('Show options for team:', teamId);
    }

    function showCreateTeamModal() {
        const modal = document.querySelector('.create-team-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    function showJoinCommunityModal() {
        // Implement join community modal
        console.log('Show join community modal');
    }

    function handleCreateTeam(form) {
        // Get form data
        const formData = new FormData(form);
        const teamData = {
            name: formData.get('teamName'),
            type: formData.get('teamType'),
            description: formData.get('teamDescription')
        };

        // Create team logic here
        console.log('Creating team:', teamData);

        // Close modal
        const modal = document.querySelector('.create-team-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    function handleAvatarUpload(file) {
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Preview avatar image
                console.log('Avatar uploaded:', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    // Initialize when DOM is loaded
    initTeamsCommunity();
});