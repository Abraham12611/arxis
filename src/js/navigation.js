document.addEventListener('DOMContentLoaded', function() {
    // Navigation state
    const navState = {
        currentSection: 'main-feed',
        companyActiveTab: 'overview'
    };

    // Initialize navigation
    function initializeNavigation() {
        // Make Company nav item clickable
        const companyNavItem = document.querySelector('.nav-item:first-child');
        companyNavItem.style.cursor = 'pointer';
        companyNavItem.addEventListener('click', function() {
            switchToSection('company-section');
        });

        // Make Task Manager nav item clickable.
        const taskManagerNavItem = document.querySelector('.nav-item:nth-child(5)');
        if (taskManagerNavItem) {
            taskManagerNavItem.style.cursor = 'pointer';
            taskManagerNavItem.addEventListener('click', function() {
                switchToSection('task-manager-section');
            });
        }

        // Make Teams & Community nav item clickable
        const teamsNavItem = document.querySelector('.nav-item:nth-child(2)');
        if (teamsNavItem) {
            teamsNavItem.style.cursor = 'pointer';
            teamsNavItem.addEventListener('click', function() {
                switchToSection('teams-community-section');
            });
        }

        // Make Documents nav item clickable
        const documentsNavItem = document.querySelector('.nav-item:nth-child(6)');
        if (documentsNavItem) {
            documentsNavItem.style.cursor = 'pointer';
            documentsNavItem.addEventListener('click', function() {
                switchToSection('documents-section');
            });
        }

        // Add back button event listener
        const backToFeedBtn = document.getElementById('backToFeedBtn');
        if (backToFeedBtn) {
            backToFeedBtn.addEventListener('click', function() {
                switchToSection('main-feed');
            });
        }

        // Add tab switching functionality
        const companyTabs = document.querySelectorAll('.company-tab');
        companyTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchCompanyTab(tabId);
            });
        });
    }

    // Switch between main sections (feed vs company vs task-manager vs documents vs teams-community)
    function switchToSection(sectionId) {
        const mainFeed = document.querySelector('.news-feed-section');
        const companySection = document.getElementById('companySection');
        const taskManagerSection = document.getElementById('taskManagerSection');
        const documentsSection = document.getElementById('documentsSection');
        const teamsCommunitySection = document.getElementById('teamsCommunitySection');
        const storiesSection = document.querySelector('.stories-section');

        // Update navigation state
        navState.currentSection = sectionId;

        // Hide all sections first
        mainFeed.style.display = 'none';
        companySection.style.display = 'none';
        taskManagerSection.style.display = 'none';
        documentsSection.style.display = 'none';
        teamsCommunitySection.style.display = 'none';
        storiesSection.style.display = 'none';

        // Show the selected section
        switch (sectionId) {
            case 'company-section':
                companySection.style.display = 'block';
                updateActiveNavItem('company');
                break;
            case 'task-manager-section':
                taskManagerSection.style.display = 'block';
                updateActiveNavItem('task-manager');
                break;
            case 'documents-section':
                documentsSection.style.display = 'block';
                updateActiveNavItem('documents');
                break;
            case 'teams-community-section':
                teamsCommunitySection.style.display = 'block';
                updateActiveNavItem('teams');
                break;
            case 'main-feed':
            default:
                mainFeed.style.display = 'block';
                storiesSection.style.display = 'block';
                updateActiveNavItem(null);
                break;
        }
    }

    // Update active navigation item
    function updateActiveNavItem(activeItemId) {
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach((item, index) => {
            // Remove active class from all nav items
            item.classList.remove('active-nav-item');

            // Add active class to the selected nav item
            if ((activeItemId === 'company' && index === 0) ||
                (activeItemId === 'teams' && index === 1) ||
                (activeItemId === 'calendar' && index === 2) ||
                (activeItemId === 'messenger' && index === 3) ||
                (activeItemId === 'task-manager' && index === 4) ||
                (activeItemId === 'documents' && index === 5)) {
                item.classList.add('active-nav-item');
            }
        });
    }

    // Switch between company section tabs
    function switchCompanyTab(tabId) {
        // Update navigation state
        navState.companyActiveTab = tabId;

        // Update active tab
        const tabs = document.querySelectorAll('.company-tab');
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Show active tab content, hide others
        const tabContents = document.querySelectorAll('.company-tab-content');
        tabContents.forEach(content => {
            if (content.id === `${tabId}Tab`) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    // Initialize
    initializeNavigation();
});