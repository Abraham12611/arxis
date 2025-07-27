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

    // Switch between main sections (feed vs company)
    function switchToSection(sectionId) {
        const mainFeed = document.querySelector('.news-feed-section');
        const companySection = document.getElementById('companySection');
        const storiesSection = document.querySelector('.stories-section');

        // Update navigation state
        navState.currentSection = sectionId;

        if (sectionId === 'company-section') {
            // Hide feed, show company section
            mainFeed.style.display = 'none';
            companySection.style.display = 'block';
            storiesSection.style.display = 'none';

            // Highlight Company nav item
            updateActiveNavItem('company');
        } else {
            // Show feed, hide company section
            mainFeed.style.display = 'block';
            companySection.style.display = 'none';
            storiesSection.style.display = 'block';

            // Remove highlight from Company nav item
            updateActiveNavItem(null);
        }
    }

    // Update active navigation item
    function updateActiveNavItem(activeItemId) {
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach((item, index) => {
            if ((activeItemId === 'company' && index === 0) ||
                (activeItemId === 'teams' && index === 1) ||
                (activeItemId === 'calendar' && index === 2) ||
                (activeItemId === 'messenger' && index === 3)) {
                item.classList.add('active-nav-item');
            } else {
                item.classList.remove('active-nav-item');
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