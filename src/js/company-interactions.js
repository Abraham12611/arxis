document.addEventListener('DOMContentLoaded', function() {
    // Populate company section with data
    function populateCompanySection() {
        // Set company info
        document.querySelector('.company-name').textContent = companyData.info.name;
        document.querySelector('.company-tagline').textContent = companyData.info.tagline;
        document.querySelector('.company-banner').src = companyData.info.banner;
        document.querySelector('.company-logo').src = companyData.info.logo;

        // Set company meta info
        const foundedEl = document.querySelector('.founded-year');
        const employeesEl = document.querySelector('.employees-count');
        const locationsEl = document.querySelector('.locations-text');

        if (foundedEl) foundedEl.textContent = companyData.info.founded;
        if (employeesEl) employeesEl.textContent = companyData.info.employees;
        if (locationsEl) locationsEl.textContent = companyData.info.locations;

        // Populate stats
        populateStats();

        // Populate mission & vision
        document.querySelector('.mission-content').textContent = companyData.mission;
        document.querySelector('.vision-content').textContent = companyData.vision;

        // Populate core values
        populateValues();

        // Populate highlights
        populateHighlights();

        // Populate leadership team
        populateLeadership();

        // Populate timeline
        populateTimeline();

        // Populate news section
        populateNewsSection();
    }

    // Populate company stats
    function populateStats() {
        const statsContainer = document.querySelector('.company-stats');
        if (!statsContainer) return;

        statsContainer.innerHTML = '';

        companyData.stats.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'stat-card';

            let growthHTML = '';
            if (stat.growth) {
                const growthClass = stat.isPositive ? 'growth-indicator' : 'growth-indicator negative';
                const growthIcon = stat.isPositive ? 'fa-arrow-up' : 'fa-arrow-down';
                growthHTML = `<span class="${growthClass}"><i class="fas ${growthIcon}"></i> ${stat.growth}</span>`;
            }

            statCard.innerHTML = `
                <div class="stat-icon"><i class="${stat.icon}"></i></div>
                <div class="stat-value">${stat.value}${growthHTML}</div>
                <div class="stat-label">${stat.label}</div>
            `;

            statsContainer.appendChild(statCard);
        });
    }

    // Populate core values
    function populateValues() {
        const valuesGrid = document.querySelector('.values-grid');
        if (!valuesGrid) return;

        valuesGrid.innerHTML = '';

        companyData.values.forEach(value => {
            const valueCard = document.createElement('div');
            valueCard.className = 'value-card';

            valueCard.innerHTML = `
                <div class="value-icon"><i class="${value.icon}"></i></div>
                <div class="value-name">${value.name}</div>
                <div class="value-description">${value.description}</div>
            `;

            valuesGrid.appendChild(valueCard);
        });
    }

    // Populate company highlights
    function populateHighlights() {
        const highlightsGrid = document.querySelector('.highlights-grid');
        if (!highlightsGrid) return;

        highlightsGrid.innerHTML = '';

        companyData.highlights.forEach(highlight => {
            const highlightCard = document.createElement('div');
            highlightCard.className = 'highlight-card';

            highlightCard.innerHTML = `
                <img src="${highlight.image}" alt="${highlight.title}" class="highlight-image">
                <div class="highlight-content">
                    <h3 class="highlight-title">${highlight.title}</h3>
                    <div class="highlight-date">${highlight.date}</div>
                    <p class="highlight-description">${highlight.description}</p>
                </div>
            `;

            highlightsGrid.appendChild(highlightCard);
        });
    }

    // Populate leadership team
    function populateLeadership() {
        const teamPreview = document.querySelector('.team-preview');
        if (!teamPreview) return;

        teamPreview.innerHTML = '';

        companyData.leadership.forEach(member => {
            const memberEl = document.createElement('div');
            memberEl.className = 'team-member';

            memberEl.innerHTML = `
                <img src="${member.avatar}" alt="${member.name}" class="member-avatar">
                <div class="member-name">${member.name}</div>
                <div class="member-title">${member.title}</div>
            `;

            teamPreview.appendChild(memberEl);
        });
    }

    // Populate company timeline
    function populateTimeline() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = '';

        companyData.timeline.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';

            timelineItem.innerHTML = `
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            `;

            timeline.appendChild(timelineItem);
        });
    }

    // Populate news section
    function populateNewsSection() {
        populateFeaturedNews();
        populateNewsGrid();
        setupNewsFilters();
        setupNewsArchive();
        setupNewsModal();
    }

    // Populate featured news
    function populateFeaturedNews() {
        const featuredNewsContainer = document.querySelector('.featured-news');
        if (!featuredNewsContainer) return;

        const featured = companyData.news.featured;

        featuredNewsContainer.innerHTML = `
            <img src="${featured.image}" alt="${featured.title}" class="featured-news-image">
            <div class="featured-news-overlay">
                <span class="featured-category" style="background-color: ${featured.categoryColor}">${featured.category}</span>
                <h2 class="featured-title">${featured.title}</h2>
                <p class="featured-excerpt">${featured.excerpt}</p>
                <div class="featured-meta">
                    <div class="featured-author">
                        <img src="${featured.authorAvatar}" alt="${featured.author}" class="featured-author-avatar">
                        <span>${featured.author}</span>
                    </div>
                    <div class="featured-date">
                        <i class="far fa-calendar"></i>
                        <span>${featured.date}</span>
                    </div>
                    <div class="featured-read-time">
                        <i class="far fa-clock"></i>
                        <span>${featured.readTime}</span>
                    </div>
                </div>
                <a href="#" class="featured-read-more" data-news-id="${featured.id}">Read Full Article</a>
            </div>
        `;

        // Add click event to open the article
        const readMoreBtn = featuredNewsContainer.querySelector('.featured-read-more');
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openNewsArticle(featured.id);
        });

        // Make the entire featured news clickable
        featuredNewsContainer.addEventListener('click', function(e) {
            if (!e.target.classList.contains('featured-read-more')) {
                openNewsArticle(featured.id);
            }
        });
    }

    // Populate news grid
    function populateNewsGrid(filter = 'all') {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        newsGrid.innerHTML = '';

        let newsItems = companyData.news.recent;

        // Apply filter if not 'all'
        if (filter !== 'all') {
            const filterKey = filter.replace(/-/g, ' ');
            newsItems = newsItems.filter(item => item.category.toLowerCase() === filterKey.toLowerCase());
        }

        newsItems.forEach(item => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.dataset.newsId = item.id;

            newsCard.innerHTML = `
                <div class="news-card-image-container">
                    <img src="${item.image}" alt="${item.title}" class="news-card-image">
                    <span class="news-card-category" style="background-color: ${item.categoryColor}">${item.category}</span>
                </div>
                <div class="news-card-content">
                    <h3 class="news-card-title">${item.title}</h3>
                    <p class="news-card-excerpt">${item.excerpt}</p>
                    <div class="news-card-meta">
                        <div class="news-card-author-date">
                            <span>${item.author}</span> • <span>${item.date}</span>
                        </div>
                        <div class="news-card-metrics">
                            <div class="news-card-views">
                                <i class="far fa-eye"></i>
                                <span>${item.views}</span>
                            </div>
                            <div class="news-card-comments">
                                <i class="far fa-comment"></i>
                                <span>${item.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            newsCard.addEventListener('click', function() {
                openNewsArticle(item.id);
            });

            newsGrid.appendChild(newsCard);
        });
    }

    // Setup news filters
    function setupNewsFilters() {
        const filterDropdown = document.querySelector('.news-filter-dropdown');
        const sortDropdown = document.querySelector('.news-sort-dropdown');
        const searchInput = document.querySelector('.news-search input');

        if (filterDropdown) {
            filterDropdown.addEventListener('change', function() {
                populateNewsGrid(this.value);
            });
        }

        if (sortDropdown) {
            sortDropdown.addEventListener('change', function() {
                sortNews(this.value);
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                searchNews(this.value);
            }, 300));
        }
    }

    // Sort news items
    function sortNews(sortBy) {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        const newsCards = Array.from(newsGrid.querySelectorAll('.news-card'));

        newsCards.sort((a, b) => {
            const aId = a.dataset.newsId;
            const bId = b.dataset.newsId;
            const aItem = findNewsItemById(aId);
            const bItem = findNewsItemById(bId);

            if (!aItem || !bItem) return 0;

            switch (sortBy) {
                case 'recent':
                    // Assuming more recent items have higher IDs
                    return bId.localeCompare(aId);
                case 'popular':
                    return bItem.views - aItem.views;
                case 'category':
                    return aItem.category.localeCompare(bItem.category);
                default:
                    return 0;
            }
        });

        // Clear and re-append sorted items
        newsGrid.innerHTML = '';
        newsCards.forEach(card => newsGrid.appendChild(card));
    }

    // Search news items
    function searchNews(query) {
        if (!query) {
            populateNewsGrid();
            return;
        }

        query = query.toLowerCase();

        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        newsGrid.innerHTML = '';

        const allNews = [companyData.news.featured, ...companyData.news.recent];

        const filteredNews = allNews.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.excerpt.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query) ||
            item.author.toLowerCase().includes(query) ||
            item.date.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        if (filteredNews.length === 0) {
            newsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try different keywords or filters</p>
                </div>
            `;
            return;
        }

        filteredNews.forEach(item => {
            if (item.id === companyData.news.featured.id) return; // Skip featured news in grid

            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.dataset.newsId = item.id;

            newsCard.innerHTML = `
                <div class="news-card-image-container">
                    <img src="${item.image}" alt="${item.title}" class="news-card-image">
                    <span class="news-card-category" style="background-color: ${item.categoryColor}">${item.category}</span>
                </div>
                <div class="news-card-content">
                    <h3 class="news-card-title">${item.title}</h3>
                    <p class="news-card-excerpt">${item.excerpt}</p>
                    <div class="news-card-meta">
                        <div class="news-card-author-date">
                            <span>${item.author}</span> • <span>${item.date}</span>
                        </div>
                        <div class="news-card-metrics">
                            <div class="news-card-views">
                                <i class="far fa-eye"></i>
                                <span>${item.views}</span>
                            </div>
                            <div class="news-card-comments">
                                <i class="far fa-comment"></i>
                                <span>${item.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            newsCard.addEventListener('click', function() {
                openNewsArticle(item.id);
            });

            newsGrid.appendChild(newsCard);
        });
    }

    // Setup news archive
    function setupNewsArchive() {
        const toggleArchiveBtn = document.querySelector('.toggle-archive-btn');
        const archiveContent = document.querySelector('.archive-content');

        if (toggleArchiveBtn && archiveContent) {
            toggleArchiveBtn.addEventListener('click', function() {
                const isVisible = archiveContent.style.display !== 'none';

                if (isVisible) {
                    archiveContent.style.display = 'none';
                    this.querySelector('span').textContent = 'View Older News';
                    this.querySelector('i').className = 'fas fa-chevron-down';
                } else {
                    archiveContent.style.display = 'block';
                    this.querySelector('span').textContent = 'Hide Older News';
                    this.querySelector('i').className = 'fas fa-chevron-up';

                    // Populate archive grid if it's empty
                    const archiveGrid = archiveContent.querySelector('.archive-grid');
                    if (archiveGrid && archiveGrid.children.length === 0) {
                        populateArchiveGrid();
                    }
                }
            });
        }

        // Setup archive filters
        const yearSelect = document.querySelector('.archive-year');
        const monthSelect = document.querySelector('.archive-month');

        if (yearSelect && monthSelect) {
            yearSelect.addEventListener('change', function() {
                filterArchive(this.value, monthSelect.value);
            });

            monthSelect.addEventListener('change', function() {
                filterArchive(yearSelect.value, this.value);
            });
        }

        // Setup pagination
        const prevPageBtn = document.querySelector('.prev-page');
        const nextPageBtn = document.querySelector('.next-page');
        const pageNumbers = document.querySelectorAll('.page-number');

        if (prevPageBtn && nextPageBtn && pageNumbers.length) {
            prevPageBtn.addEventListener('click', function() {
                changePage('prev');
            });

            nextPageBtn.addEventListener('click', function() {
                changePage('next');
            });

            pageNumbers.forEach(pageNum => {
                pageNum.addEventListener('click', function() {
                    changePage(parseInt(this.textContent));
                });
            });
        }
    }

    // Populate archive grid
    function populateArchiveGrid() {
        // This would typically fetch older news from an API
        // For this demo, we'll just show the same news items
        const archiveGrid = document.querySelector('.archive-grid');
        if (!archiveGrid) return;

        // Take a subset of the recent news for the archive
        const archiveItems = companyData.news.recent.slice(0, 6);

        archiveGrid.innerHTML = '';

        archiveItems.forEach(item => {
            const archiveCard = document.createElement('div');
            archiveCard.className = 'news-card';
            archiveCard.dataset.newsId = item.id;

            archiveCard.innerHTML = `
                <div class="news-card-image-container">
                    <img src="${item.image}" alt="${item.title}" class="news-card-image">
                    <span class="news-card-category" style="background-color: ${item.categoryColor}">${item.category}</span>
                </div>
                <div class="news-card-content">
                    <h3 class="news-card-title">${item.title}</h3>
                    <div class="news-card-meta">
                        <div class="news-card-author-date">
                            <span>${item.date}</span>
                        </div>
                    </div>
                </div>
            `;

            archiveCard.addEventListener('click', function() {
                openNewsArticle(item.id);
            });

            archiveGrid.appendChild(archiveCard);
        });
    }

    // Filter archive
    function filterArchive(year, month) {
        console.log(`Filtering archive by: ${year}-${month}`);
        // This would typically filter the archive based on date
        // For this demo, we'll just log the filter criteria
    }

    // Change archive page
    function changePage(page) {
        const pageNumbers = document.querySelectorAll('.page-number');
        const prevPageBtn = document.querySelector('.prev-page');
        const nextPageBtn = document.querySelector('.next-page');

        let currentPage = 1;

        // Find current active page
        pageNumbers.forEach(pageNum => {
            if (pageNum.classList.contains('active')) {
                currentPage = parseInt(pageNum.textContent);
            }
            pageNum.classList.remove('active');
        });

        // Determine new page
        let newPage;
        if (page === 'prev') {
            newPage = Math.max(1, currentPage - 1);
        } else if (page === 'next') {
            newPage = Math.min(pageNumbers.length, currentPage + 1);
        } else {
            newPage = page;
        }

        // Update active page
        pageNumbers[newPage - 1].classList.add('active');

        // Update button states
        prevPageBtn.disabled = newPage === 1;
        nextPageBtn.disabled = newPage === pageNumbers.length;

        // This would typically load the content for the new page
        // For this demo, we'll just update the UI
    }

    // Setup news article modal
    function setupNewsModal() {
        const modal = document.querySelector('.news-modal');
        const closeBtn = modal?.querySelector('.close-modal');

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                closeNewsModal();
            });
        }

        // Close modal when clicking outside
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeNewsModal();
                }
            });
        }

        // Setup article action buttons
        const likeBtn = modal?.querySelector('.like-article');
        const shareBtn = modal?.querySelector('.share-article');
        const bookmarkBtn = modal?.querySelector('.bookmark-article');
        const printBtn = modal?.querySelector('.print-article');

        if (likeBtn) {
            likeBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                const icon = this.querySelector('i');
                if (this.classList.contains('active')) {
                    icon.className = 'fas fa-heart';
                } else {
                    icon.className = 'far fa-heart';
                }
            });
        }

        if (shareBtn) {
            shareBtn.addEventListener('click', function() {
                alert('Share functionality would be implemented here');
            });
        }

        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                const icon = this.querySelector('i');
                if (this.classList.contains('active')) {
                    icon.className = 'fas fa-bookmark';
                } else {
                    icon.className = 'far fa-bookmark';
                }
            });
        }

        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }

        // Setup comment form
        const commentForm = modal?.querySelector('.comment-form');
        const commentsList = modal?.querySelector('.comments-list');

        if (commentForm) {
            commentForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const textarea = this.querySelector('textarea');
                const comment = textarea.value.trim();

                if (!comment) return;

                addComment({
                    author: 'Linda Richardson',
                    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    text: comment,
                    time: 'Just now'
                });

                textarea.value = '';

                // Update comment count
                const countEl = modal.querySelector('.comment-count');
                countEl.textContent = parseInt(countEl.textContent) + 1;
            });

            // Add post comment button functionality
            const postCommentBtn = commentForm.querySelector('.post-comment-btn');
            if (postCommentBtn) {
                postCommentBtn.addEventListener('click', function() {
                    commentForm.dispatchEvent(new Event('submit'));
                });
            }
        }
    }

    // Open news article modal
    function openNewsArticle(id) {
        const modal = document.querySelector('.news-modal');
        if (!modal) return;

        const article = findNewsItemById(id);
        if (!article) return;

        const articleContainer = modal.querySelector('.news-article');

        articleContainer.innerHTML = `
            <span class="article-category" style="background-color: ${article.categoryColor}">${article.category}</span>
            <div class="article-header">
                <h1 class="article-title">${article.title}</h1>
                <div class="article-meta">
                    <div class="article-author">
                        <img src="${article.authorAvatar}" alt="${article.author}" class="article-author-avatar">
                        <span class="article-author-name">${article.author}</span>
                    </div>
                    <div class="article-date">
                        <i class="far fa-calendar"></i>
                        <span>${article.date}</span>
                    </div>
                    <div class="article-read-time">
                        <i class="far fa-clock"></i>
                        <span>${article.readTime}</span>
                    </div>
                </div>
            </div>
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                ${formatArticleContent(article.content)}
            </div>
        `;

        // Reset comment count
        const commentCount = modal.querySelector('.comment-count');
        if (commentCount) {
            commentCount.textContent = article.comments || 0;
        }

        // Clear comments list
        const commentsList = modal.querySelector('.comments-list');
        if (commentsList) {
            commentsList.innerHTML = '';
        }

        // Show modal
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        // Disable body scrolling
        document.body.style.overflow = 'hidden';
    }

    // Close news modal
    function closeNewsModal() {
        const modal = document.querySelector('.news-modal');
        if (!modal) return;

        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);

        // Re-enable body scrolling
        document.body.style.overflow = '';
    }

    // Add a comment to the article
    function addComment(comment) {
        const commentsList = document.querySelector('.comments-list');
        if (!commentsList) return;

        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';

        commentItem.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <img src="${comment.avatar}" alt="${comment.author}" class="comment-author-avatar">
                    <span class="comment-author-name">${comment.author}</span>
                </div>
                <div class="comment-time">${comment.time}</div>
            </div>
            <div class="comment-text">${comment.text}</div>
        `;

        commentsList.prepend(commentItem);
    }

    // Format article content with paragraphs
    function formatArticleContent(content) {
        return content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    }

    // Find news item by ID
    function findNewsItemById(id) {
        if (companyData.news.featured.id === id) {
            return companyData.news.featured;
        }

        return companyData.news.recent.find(item => item.id === id);
    }

    // Debounce function for search input
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }

    // Initialize
    if (document.getElementById('companySection')) {
        populateCompanySection();

        // Set up tab switching
        const tabs = document.querySelectorAll('.company-tab');
        const tabContents = document.querySelectorAll('.company-tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');

                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));

                // Add active class to clicked tab
                this.classList.add('active');

                // Hide all tab contents
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });

                // Show selected tab content
                const selectedTab = document.getElementById(`${tabId}Tab`);
                if (selectedTab) {
                    selectedTab.style.display = 'block';

                    // Initialize department view if departments tab is selected
                    if (tabId === 'departments') {
                        initializeDepartmentsView();
                    }

                    // Initialize achievements view if achievements tab is selected
                    if (tabId === 'achievements') {
                        initializeAchievementsView();
                    }

                    // Initialize team directory if team tab is selected
                    if (tabId === 'team') {
                        initializeTeamDirectory();
                    }

                    // Update URL hash
                    window.location.hash = tabId;
                }
            });
        });

        // Set up "View Full Team" button to navigate to Team Directory tab
        const viewFullTeamBtn = document.querySelector('.view-all-team');
        if (viewFullTeamBtn) {
            viewFullTeamBtn.addEventListener('click', function(e) {
                e.preventDefault();

                // Find and click the Team Directory tab
                const teamTab = document.querySelector('.company-tab[data-tab="team"]');
                if (teamTab) {
                    teamTab.click();
                }
            });
        }

        // Set up "Back to Feed" button
        const backToFeedBtn = document.getElementById('backToFeedBtn');
        if (backToFeedBtn) {
            backToFeedBtn.addEventListener('click', function(e) {
                e.preventDefault();

                // Hide company section and show news feed
                document.getElementById('companySection').style.display = 'none';
                document.querySelector('.news-feed-section').style.display = 'block';
                document.querySelector('.stories-section').style.display = 'block';

                // Clear URL hash
                history.pushState("", document.title, window.location.pathname + window.location.search);
            });
        }

        // Handle URL hash for direct tab access
        function handleUrlHash() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const tab = document.querySelector(`.company-tab[data-tab="${hash}"]`);
                if (tab) {
                    tab.click();
                }
            }
        }

        // Handle browser back/forward navigation
        window.addEventListener('popstate', handleUrlHash);

        // Handle initial page load
        handleUrlHash();

        // Set up cross-section navigation
        setupCrossSectionNavigation();
    }

    function setupCrossSectionNavigation() {
        // Department to Team navigation
        document.addEventListener('click', function(e) {
            if (e.target.matches('.view-team-btn')) {
                e.preventDefault();
                const departmentId = e.target.closest('.department-card')?.dataset.departmentId;
                navigateToTeamDirectory(departmentId);
            }
        });

        // Achievement to Department navigation
        document.addEventListener('click', function(e) {
            if (e.target.matches('.department-link')) {
                e.preventDefault();
                const departmentId = e.target.dataset.departmentId;
                navigateToDepartment(departmentId);
            }
        });

        // News to Department/Team navigation
        document.addEventListener('click', function(e) {
            if (e.target.matches('.news-department-link')) {
                e.preventDefault();
                const departmentId = e.target.dataset.departmentId;
                navigateToDepartment(departmentId);
            } else if (e.target.matches('.news-team-link')) {
                e.preventDefault();
                const departmentId = e.target.dataset.departmentId;
                navigateToTeamDirectory(departmentId);
            }
        });
    }

    function navigateToTeamDirectory(departmentId = null) {
        // Click the Team Directory tab
        const teamTab = document.querySelector('.company-tab[data-tab="team"]');
        if (teamTab) {
            teamTab.click();

            // If department ID is provided, filter by department
            if (departmentId) {
                const departmentFilter = document.querySelector('.department-filter');
                if (departmentFilter) {
                    departmentFilter.value = departmentId;
                    applyFilters();
                }
            }
        }
    }

    function navigateToDepartment(departmentId) {
        // Click the Departments tab
        const departmentsTab = document.querySelector('.company-tab[data-tab="departments"]');
        if (departmentsTab) {
            departmentsTab.click();

            // Scroll to the department card
            const departmentCard = document.querySelector(`.department-card[data-department-id="${departmentId}"]`);
            if (departmentCard) {
                departmentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // Department View Functions
    function setupDepartmentView() {
        const orgChartBtn = document.querySelector('.org-chart-btn');
        const gridViewBtn = document.querySelector('.grid-view-btn');
        const orgChartView = document.querySelector('.org-chart-view');
        const gridView = document.querySelector('.department-grid-view');
        const departmentSearch = document.querySelector('.department-search input');
        const departmentFilter = document.querySelector('.department-filter');

        // View toggle
        if (orgChartBtn && gridViewBtn) {
            orgChartBtn.addEventListener('click', function() {
                orgChartBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                orgChartView.style.display = 'block';
                gridView.style.display = 'none';
            });

            gridViewBtn.addEventListener('click', function() {
                gridViewBtn.classList.add('active');
                orgChartBtn.classList.remove('active');
                gridView.style.display = 'block';
                orgChartView.style.display = 'none';
            });
        }

        // Search functionality
        if (departmentSearch) {
            departmentSearch.addEventListener('input', debounce(function() {
                const searchTerm = this.value.toLowerCase();
                filterDepartments(searchTerm);
            }, 300));
        }

        // Department filter
        if (departmentFilter) {
            departmentFilter.addEventListener('change', function() {
                const filterValue = this.value;
                filterDepartmentsByType(filterValue);
            });
        }

        // Zoom controls
        setupZoomControls();
    }

    function initializeDepartmentsView() {
        populateOrgChart();
        populateDepartmentGrid();
        setupCollaborationView();
    }

    function populateOrgChart() {
        const container = document.querySelector('.org-chart-container');
        if (!container) return;

        container.innerHTML = '';

        // Create CEO node
        const ceoNode = createOrgChartNode(companyData.departments.executive.categories[0]);
        container.appendChild(ceoNode);

        // Create department nodes
        const departmentsContainer = document.createElement('div');
        departmentsContainer.className = 'department-nodes';

        Object.values(companyData.departments).forEach(department => {
            const departmentNode = createOrgChartNode({
                name: department.name,
                head: department.categories[0].head,
                employeeCount: department.totalEmployees,
                description: department.description,
                color: department.color,
                icon: department.icon
            });
            departmentsContainer.appendChild(departmentNode);
        });

        container.appendChild(departmentsContainer);

        // Draw connecting lines
        drawOrgChartConnections();
    }

    function createOrgChartNode(data) {
        const node = document.createElement('div');
        node.className = 'org-chart-node';
        if (data.color) {
            node.style.borderColor = data.color;
        }

        node.innerHTML = `
            <div class="node-header" ${data.color ? `style="background-color: ${data.color}"` : ''}>
                ${data.icon ? `<i class="${data.icon}"></i>` : ''}
                <h3>${data.name}</h3>
            </div>
            <div class="node-content">
                <img src="${data.head.avatar}" alt="${data.head.name}" class="node-avatar">
                <div class="node-info">
                    <p class="node-leader">${data.head.name}</p>
                    <p class="node-title">${data.head.title}</p>
                    ${data.employeeCount ? `<p class="node-count">${data.employeeCount} employees</p>` : ''}
                </div>
            </div>
        `;

        node.addEventListener('click', function() {
            openDepartmentModal(data);
        });

        return node;
    }

    function drawOrgChartConnections() {
        // This would be implemented using SVG or Canvas to draw connecting lines
        // between org chart nodes. For now, we'll use CSS pseudo-elements for basic lines
    }

    function populateDepartmentGrid() {
        Object.values(companyData.departments).forEach(department => {
            const categoryContainer = document.querySelector(`.department-category:has(.category-title:contains('${department.name}')) .department-cards`);
            if (!categoryContainer) return;

            categoryContainer.innerHTML = '';

            department.categories.forEach(category => {
                const card = document.createElement('div');
                card.className = 'department-card';
                card.style.borderColor = department.color;
                card.dataset.departmentId = category.id; // Add data attribute for navigation

                card.innerHTML = `
                    <div class="card-header" style="background-color: ${department.color}">
                        <i class="${department.icon}"></i>
                        <h3>${category.name}</h3>
                    </div>
                    <div class="card-content">
                        <div class="department-head">
                            <img src="${category.head.avatar}" alt="${category.head.name}" class="head-avatar">
                            <div class="head-info">
                                <p class="head-name">${category.head.name}</p>
                                <p class="head-title">${category.head.title}</p>
                            </div>
                        </div>
                        <p class="department-description">${category.description}</p>
                        <div class="department-meta">
                            <span class="employee-count">
                                <i class="fas fa-users"></i> ${category.employeeCount} employees
                            </span>
                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i> ${category.location}
                            </span>
                        </div>
                        ${category.openPositions > 0 ? `
                            <div class="open-positions">
                                <i class="fas fa-briefcase"></i> ${category.openPositions} open position${category.openPositions > 1 ? 's' : ''}
                            </div>
                        ` : ''}
                        <button class="view-team-btn">View Team</button>
                    </div>
                `;

                card.addEventListener('click', function() {
                    openDepartmentModal(category);
                });

                categoryContainer.appendChild(card);
            });
        });
    }

    function setupCollaborationView() {
        const collabTabs = document.querySelectorAll('.collab-tab');
        const heatmapView = document.querySelector('.heatmap-view');
        const projectsView = document.querySelector('.projects-view');

        if (collabTabs) {
            collabTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const view = this.getAttribute('data-view');

                    // Update active tab
                    collabTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    // Show selected view
                    if (view === 'heatmap') {
                        heatmapView.style.display = 'block';
                        projectsView.style.display = 'none';
                        populateCollaborationHeatmap();
                    } else {
                        projectsView.style.display = 'block';
                        heatmapView.style.display = 'none';
                        populateJointProjects();
                    }
                });
            });

            // Initialize heatmap view
            populateCollaborationHeatmap();
        }
    }

    function populateCollaborationHeatmap() {
        const container = document.querySelector('.heatmap-container');
        if (!container) return;

        container.innerHTML = '';

        // Create heatmap grid
        const departments = Object.keys(companyData.collaborationMatrix);
        const table = document.createElement('table');
        table.className = 'collaboration-heatmap';

        // Create header row
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th></th>' + departments.map(dept =>
            `<th>${companyData.departments[dept].name}</th>`
        ).join('');
        table.appendChild(headerRow);

        // Create data rows
        departments.forEach(dept1 => {
            const row = document.createElement('tr');
            row.innerHTML = `<th>${companyData.departments[dept1].name}</th>` +
                departments.map(dept2 => {
                    const level = dept1 === dept2 ? '' : companyData.collaborationMatrix[dept1][dept2];
                    return `<td class="collaboration-cell ${level}">${level}</td>`;
                }).join('');
            table.appendChild(row);
        });

        container.appendChild(table);
    }

    function populateJointProjects() {
        const container = document.querySelector('.joint-projects');
        if (!container) return;

        container.innerHTML = '';

        companyData.jointProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <h3 class="project-name">${project.name}</h3>
                <div class="project-departments">
                    ${project.departments.map(dept => `
                        <span class="department-tag" style="background-color: ${companyData.departments[dept].color}">
                            <i class="${companyData.departments[dept].icon}"></i>
                            ${companyData.departments[dept].name}
                        </span>
                    `).join('')}
                </div>
                <div class="project-info">
                    <div class="project-dates">
                        <span class="start-date">${project.startDate}</span>
                        <span class="separator">→</span>
                        <span class="end-date">${project.endDate}</span>
                    </div>
                    <div class="project-status">
                        <span class="status-badge ${project.status.toLowerCase().replace(' ', '-')}">
                            ${project.status}
                        </span>
                    </div>
                </div>
                <div class="project-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${project.completion}%"></div>
                    </div>
                    <span class="progress-text">${project.completion}% Complete</span>
                </div>
            `;

            container.appendChild(projectCard);
        });
    }

    function setupZoomControls() {
        const zoomIn = document.querySelector('.zoom-in');
        const zoomOut = document.querySelector('.zoom-out');
        const zoomReset = document.querySelector('.zoom-reset');
        const orgChartContainer = document.querySelector('.org-chart-container');

        if (!zoomIn || !zoomOut || !zoomReset || !orgChartContainer) return;

        let currentZoom = 100;
        const minZoom = 50;
        const maxZoom = 200;
        const zoomStep = 10;

        zoomIn.addEventListener('click', function() {
            if (currentZoom < maxZoom) {
                currentZoom += zoomStep;
                updateZoom();
            }
        });

        zoomOut.addEventListener('click', function() {
            if (currentZoom > minZoom) {
                currentZoom -= zoomStep;
                updateZoom();
            }
        });

        zoomReset.addEventListener('click', function() {
            currentZoom = 100;
            updateZoom();
        });

        function updateZoom() {
            orgChartContainer.style.transform = `scale(${currentZoom / 100})`;
            zoomReset.textContent = `${currentZoom}%`;
        }
    }

    function filterDepartments(searchTerm) {
        const departmentCards = document.querySelectorAll('.department-card');
        const orgChartNodes = document.querySelectorAll('.org-chart-node');

        [].concat(...departmentCards, ...orgChartNodes).forEach(element => {
            const text = element.textContent.toLowerCase();
            element.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    }

    function filterDepartmentsByType(filterValue) {
        const departmentCategories = document.querySelectorAll('.department-category');

        departmentCategories.forEach(category => {
            if (filterValue === 'all' || category.querySelector('.category-title').textContent.toLowerCase().includes(filterValue)) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    }

    function openDepartmentModal(departmentData) {
        const modal = document.querySelector('.department-modal');
        const modalContent = modal?.querySelector('.department-details');
        if (!modal || !modalContent) return;

        modalContent.innerHTML = `
            <div class="department-header" style="background-color: ${departmentData.color || '#4A90E2'}">
                <h2>${departmentData.name}</h2>
                <p>${departmentData.description}</p>
            </div>
            <div class="department-body">
                <div class="department-leader">
                    <img src="${departmentData.head.avatar}" alt="${departmentData.head.name}" class="leader-avatar">
                    <div class="leader-info">
                        <h3>${departmentData.head.name}</h3>
                        <p>${departmentData.head.title}</p>
                        <div class="leader-contact">
                            <a href="mailto:${departmentData.head.email}">
                                <i class="fas fa-envelope"></i> ${departmentData.head.email}
                            </a>
                            <span>
                                <i class="fas fa-phone"></i> Ext. ${departmentData.head.extension}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="department-stats">
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span class="stat-value">${departmentData.employeeCount}</span>
                        <span class="stat-label">Team Members</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="stat-value">${departmentData.location}</span>
                        <span class="stat-label">Location</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-briefcase"></i>
                        <span class="stat-value">${departmentData.openPositions}</span>
                        <span class="stat-label">Open Positions</span>
                    </div>
                </div>
                ${departmentData.skills ? `
                    <div class="department-skills">
                        <h3>Key Skills</h3>
                        <div class="skills-list">
                            ${departmentData.skills.map(skill => `
                                <span class="skill-tag">${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);

        // Close button functionality
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('active');
                setTimeout(() => modal.style.display = 'none', 300);
            });
        }

        // Click outside to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => modal.style.display = 'none', 300);
            }
        });
    }

    // Achievements View Functions
    function initializeAchievementsView() {
        populateFeaturedAchievement();
        populateAchievementCategories();
        populateStatisticsDashboard();
        populateAchievementTimeline();
        setupAchievementFilters();
    }

    function populateFeaturedAchievement() {
        const featuredContainer = document.querySelector('.featured-achievement');
        if (!featuredContainer) return;

        const featured = companyData.achievements.featured;

        featuredContainer.innerHTML = `
            <div class="featured-achievement-image">
                <img src="${featured.image}" alt="${featured.title}">
                <div class="featured-overlay">
                    <span class="achievement-category" style="background-color: ${featured.categoryColor}">
                        ${featured.category}
                    </span>
                </div>
            </div>
            <div class="featured-achievement-content">
                <h2>${featured.title}</h2>
                <div class="achievement-meta">
                    <span class="organization">
                        <i class="fas fa-building"></i> ${featured.organization}
                    </span>
                    <span class="date">
                        <i class="far fa-calendar"></i> ${featured.date}
                    </span>
                </div>
                <p class="achievement-description">${featured.description}</p>
                <div class="achievement-impact">
                    <i class="fas fa-chart-line"></i>
                    <span>${featured.impact}</span>
                </div>
            </div>
        `;
    }

    function populateAchievementCategories() {
        const categoriesContainer = document.querySelector('.achievement-categories');
        if (!categoriesContainer) return;

        Object.entries(companyData.achievements.categories).forEach(([key, category]) => {
            const categorySection = document.createElement('div');
            categorySection.className = 'achievement-category';
            categorySection.dataset.category = key;

            categorySection.innerHTML = `
                <div class="category-header" style="background-color: ${category.color}">
                    <i class="${category.icon}"></i>
                    <h3>${category.name}</h3>
                </div>
                <div class="achievement-cards">
                    ${category.items.map(item => `
                        <div class="achievement-card">
                            <div class="achievement-image">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <div class="achievement-content">
                                <h4>${item.title}</h4>
                                <div class="achievement-meta">
                                    ${item.organization ? `
                                        <span class="organization">
                                            <i class="fas fa-building"></i> ${item.organization}
                                        </span>
                                    ` : ''}
                                    ${item.client ? `
                                        <span class="client">
                                            <i class="fas fa-user-tie"></i> ${item.client}
                                        </span>
                                    ` : ''}
                                    <span class="date">
                                        <i class="far fa-calendar"></i> ${item.date}
                                    </span>
                                </div>
                                <p class="achievement-description">${item.description}</p>
                                <div class="achievement-impact">
                                    <i class="fas fa-chart-line"></i>
                                    <span>${item.impact}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            categoriesContainer.appendChild(categorySection);
        });
    }

    function populateStatisticsDashboard() {
        const statsContainer = document.querySelector('.statistics-dashboard');
        if (!statsContainer) return;

        const stats = companyData.achievements.statistics;

        statsContainer.innerHTML = `
            <div class="stat-card">
                <i class="fas fa-trophy"></i>
                <span class="stat-value">${stats.total_awards}</span>
                <span class="stat-label">Awards Received</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-certificate"></i>
                <span class="stat-value">${stats.total_certifications}</span>
                <span class="stat-label">Certifications</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-smile"></i>
                <span class="stat-value">${stats.client_satisfaction}%</span>
                <span class="stat-label">Client Satisfaction</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-users"></i>
                <span class="stat-value">${stats.employee_retention}%</span>
                <span class="stat-label">Employee Retention</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-medal"></i>
                <span class="stat-value">#${stats.industry_ranking}</span>
                <span class="stat-label">Industry Ranking</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-chart-line"></i>
                <span class="stat-value">${stats.year_over_year_growth}%</span>
                <span class="stat-label">YoY Growth</span>
            </div>
        `;
    }

    function populateAchievementTimeline() {
        const timelineContainer = document.querySelector('.achievement-timeline');
        if (!timelineContainer) return;

        timelineContainer.innerHTML = `
            <div class="timeline-track">
                ${companyData.achievements.timeline.map(period => `
                    <div class="timeline-period">
                        <div class="period-header">
                            <span class="year">${period.year}</span>
                            <span class="quarter">${period.quarter}</span>
                        </div>
                        <div class="period-achievements">
                            ${period.achievements.map(achievement => `
                                <div class="timeline-achievement">
                                    <i class="fas fa-star"></i>
                                    <span>${achievement}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function setupAchievementFilters() {
        const filterButtons = document.querySelectorAll('.achievement-filter');
        const searchInput = document.querySelector('.achievement-search input');
        const timelineToggle = document.querySelector('.timeline-toggle');

        if (filterButtons) {
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');

                    // Update active filter
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    // Filter achievement categories
                    const categories = document.querySelectorAll('.achievement-category');
                    categories.forEach(cat => {
                        if (category === 'all' || cat.dataset.category === category) {
                            cat.style.display = 'block';
                        } else {
                            cat.style.display = 'none';
                        }
                    });
                });
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                const searchTerm = this.value.toLowerCase();
                searchAchievements(searchTerm);
            }, 300));
        }

        if (timelineToggle) {
            timelineToggle.addEventListener('click', function() {
                const timelineView = document.querySelector('.achievement-timeline');
                const categoriesView = document.querySelector('.achievement-categories');

                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    timelineView.style.display = 'none';
                    categoriesView.style.display = 'grid';
                    this.querySelector('span').textContent = 'View Timeline';
                } else {
                    this.classList.add('active');
                    timelineView.style.display = 'block';
                    categoriesView.style.display = 'none';
                    this.querySelector('span').textContent = 'View Categories';
                }
            });
        }
    }

    function searchAchievements(searchTerm) {
        const achievementCards = document.querySelectorAll('.achievement-card');

        achievementCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const parent = card.closest('.achievement-category');

            if (text.includes(searchTerm)) {
                card.style.display = 'flex';
                if (parent) parent.style.display = 'block';
            } else {
                card.style.display = 'none';
                // Check if any other cards in the category are visible
                if (parent) {
                    const visibleCards = parent.querySelectorAll('.achievement-card[style="display: flex"]');
                    if (visibleCards.length === 0) {
                        parent.style.display = 'none';
                    }
                }
            }
        });

        // Show "no results" message if needed
        const noResults = document.querySelector('.no-achievements-results');
        const visibleCards = document.querySelectorAll('.achievement-card[style="display: flex"]');

        if (noResults) {
            if (visibleCards.length === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }
    }

    // Team Directory Functions
    function initializeTeamDirectory() {
        populateTeamFilters();
        populateTeamGrid();
        setupTeamSearch();
        setupTeamFilters();
        setupViewToggle();
    }

    function populateTeamFilters() {
        // Department filter
        const departmentFilter = document.querySelector('.department-filter');
        if (departmentFilter) {
            departmentFilter.innerHTML = `
                <option value="all">All Departments</option>
                ${companyData.teamDirectory.departments.map(dept => `
                    <option value="${dept.id}">${dept.name}</option>
                `).join('')}
            `;
        }

        // Job level filter
        const levelFilter = document.querySelector('.level-filter');
        if (levelFilter) {
            levelFilter.innerHTML = `
                <option value="all">All Levels</option>
                ${companyData.teamDirectory.jobLevels.map(level => `
                    <option value="${level.id}">${level.name}</option>
                `).join('')}
            `;
        }

        // Location filter
        const locationFilter = document.querySelector('.location-filter');
        if (locationFilter) {
            locationFilter.innerHTML = `
                <option value="all">All Locations</option>
                ${companyData.teamDirectory.locations.map(loc => `
                    <option value="${loc.id}">${loc.name}</option>
                `).join('')}
            `;
        }

        // Skills filter
        const skillsContainer = document.querySelector('.skills-filter');
        if (skillsContainer) {
            skillsContainer.innerHTML = `
                ${companyData.teamDirectory.skillCategories.map(category => `
                    <div class="skill-category">
                        <h4>${category.name}</h4>
                        <div class="skill-tags">
                            ${category.skills.map(skill => `
                                <label class="skill-tag">
                                    <input type="checkbox" value="${skill}">
                                    <span>${skill}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            `;
        }
    }

    function populateTeamGrid() {
        const teamGrid = document.querySelector('.team-grid');
        if (!teamGrid) return;

        teamGrid.innerHTML = '';

        companyData.teamDirectory.employees.forEach(employee => {
            const employeeCard = document.createElement('div');
            employeeCard.className = 'employee-card';
            employeeCard.dataset.employeeId = employee.id;
            employeeCard.dataset.department = employee.department;
            employeeCard.dataset.location = employee.location;
            employeeCard.dataset.skills = employee.skills.join(',');

            const department = companyData.teamDirectory.departments.find(d => d.name === employee.department);
            const statusClass = getStatusClass(employee.status);

            employeeCard.innerHTML = `
                <div class="employee-header" style="background-color: ${department?.color || '#4A90E2'}">
                    <div class="employee-status ${statusClass}"></div>
                </div>
                <div class="employee-content">
                    <div class="employee-avatar">
                        <img src="${employee.photo}" alt="${employee.name}">
                    </div>
                    <div class="employee-info">
                        <h3 class="employee-name">${employee.name}</h3>
                        <p class="employee-title">${employee.title}</p>
                        <div class="employee-meta">
                            <span class="department">
                                <i class="${department?.icon || 'fas fa-building'}"></i>
                                ${employee.department}
                            </span>
                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${employee.location}
                            </span>
                        </div>
                    </div>
                    <div class="employee-actions">
                        <button class="action-btn message-btn" title="Send Message">
                            <i class="fas fa-comment"></i>
                        </button>
                        <button class="action-btn email-btn" title="Send Email">
                            <i class="fas fa-envelope"></i>
                        </button>
                        <button class="action-btn profile-btn" title="View Profile">
                            <i class="fas fa-user"></i>
                        </button>
                    </div>
                </div>
                <div class="employee-skills">
                    ${employee.skills.slice(0, 3).map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                    ${employee.skills.length > 3 ? `
                        <span class="more-skills">+${employee.skills.length - 3}</span>
                    ` : ''}
                </div>
            `;

            // Add click event for profile button
            const profileBtn = employeeCard.querySelector('.profile-btn');
            profileBtn.addEventListener('click', () => openEmployeeProfile(employee));

            // Add click events for message and email buttons
            const messageBtn = employeeCard.querySelector('.message-btn');
            const emailBtn = employeeCard.querySelector('.email-btn');

            messageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.location.href = `slack://user?team=arxis&id=${employee.contact.slack.substring(1)}`;
            });

            emailBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.location.href = `mailto:${employee.contact.email}`;
            });

            teamGrid.appendChild(employeeCard);
        });
    }

    function setupTeamSearch() {
        const searchInput = document.querySelector('.team-search input');
        if (!searchInput) return;

        searchInput.addEventListener('input', debounce(function() {
            const searchTerm = this.value.toLowerCase();
            searchTeam(searchTerm);
        }, 300));
    }

    function searchTeam(searchTerm) {
        const employeeCards = document.querySelectorAll('.employee-card');

        employeeCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        updateNoResultsMessage();
    }

    function setupTeamFilters() {
        const filters = {
            department: document.querySelector('.department-filter'),
            level: document.querySelector('.level-filter'),
            location: document.querySelector('.location-filter'),
            skills: document.querySelectorAll('.skill-tag input[type="checkbox"]')
        };

        // Department filter
        if (filters.department) {
            filters.department.addEventListener('change', function() {
                applyFilters();
            });
        }

        // Level filter
        if (filters.level) {
            filters.level.addEventListener('change', function() {
                applyFilters();
            });
        }

        // Location filter
        if (filters.location) {
            filters.location.addEventListener('change', function() {
                applyFilters();
            });
        }

        // Skills filter
        filters.skills.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                applyFilters();
            });
        });
    }

    function applyFilters() {
        const department = document.querySelector('.department-filter')?.value;
        const level = document.querySelector('.level-filter')?.value;
        const location = document.querySelector('.location-filter')?.value;
        const selectedSkills = Array.from(document.querySelectorAll('.skill-tag input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        const employeeCards = document.querySelectorAll('.employee-card');

        employeeCards.forEach(card => {
            const employee = companyData.teamDirectory.employees.find(emp => emp.id === card.dataset.employeeId);
            if (!employee) return;

            const matchesDepartment = department === 'all' || employee.department === getDepartmentName(department);
            const matchesLevel = level === 'all' || isInJobLevel(employee.title, level);
            const matchesLocation = location === 'all' || employee.location === getLocationName(location);
            const matchesSkills = selectedSkills.length === 0 ||
                selectedSkills.every(skill => employee.skills.includes(skill));

            if (matchesDepartment && matchesLevel && matchesLocation && matchesSkills) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        updateNoResultsMessage();
    }

    function setupViewToggle() {
        const gridViewBtn = document.querySelector('.grid-view-btn');
        const listViewBtn = document.querySelector('.list-view-btn');
        const teamContainer = document.querySelector('.team-grid');

        if (gridViewBtn && listViewBtn && teamContainer) {
            gridViewBtn.addEventListener('click', function() {
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
                teamContainer.classList.remove('list-view');
            });

            listViewBtn.addEventListener('click', function() {
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                teamContainer.classList.add('list-view');
            });
        }
    }

    function openEmployeeProfile(employee) {
        const modal = document.querySelector('.employee-modal');
        const modalContent = modal?.querySelector('.employee-profile');
        if (!modal || !modalContent) return;

        const department = companyData.teamDirectory.departments.find(d => d.name === employee.department);
        const manager = employee.reportsTo ?
            companyData.teamDirectory.employees.find(emp => emp.id === employee.reportsTo) : null;
        const directReports = companyData.teamDirectory.employees.filter(emp =>
            employee.directReports.includes(emp.id)
        );

        modalContent.innerHTML = `
            <div class="profile-header" style="background-color: ${department?.color || '#4A90E2'}">
                <div class="profile-basics">
                    <img src="${employee.photo}" alt="${employee.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2>${employee.name}</h2>
                        <p class="profile-title">${employee.title}</p>
                        <div class="profile-meta">
                            <span class="department">
                                <i class="${department?.icon || 'fas fa-building'}"></i>
                                ${employee.department}
                            </span>
                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${employee.location}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="profile-actions">
                    <a href="slack://user?team=arxis&id=${employee.contact.slack.substring(1)}" class="action-btn">
                        <i class="fab fa-slack"></i>
                        Message
                    </a>
                    <a href="mailto:${employee.contact.email}" class="action-btn">
                        <i class="fas fa-envelope"></i>
                        Email
                    </a>
                    <a href="tel:${employee.contact.phone}" class="action-btn">
                        <i class="fas fa-phone"></i>
                        Call
                    </a>
                </div>
            </div>
            <div class="profile-body">
                <div class="profile-section">
                    <h3>About</h3>
                    <p>${employee.bio}</p>
                </div>
                <div class="profile-section">
                    <h3>Contact Information</h3>
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>${employee.contact.email}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>${employee.contact.phone}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-slack"></i>
                            <span>${employee.contact.slack}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone-square"></i>
                            <span>Ext. ${employee.contact.extension}</span>
                        </div>
                    </div>
                </div>
                <div class="profile-section">
                    <h3>Skills & Expertise</h3>
                    <div class="skills-list">
                        ${employee.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="profile-section">
                    <h3>Reporting Structure</h3>
                    <div class="reporting-structure">
                        ${manager ? `
                            <div class="reports-to">
                                <h4>Reports to</h4>
                                <div class="employee-mini-card">
                                    <img src="${manager.photo}" alt="${manager.name}">
                                    <div class="mini-card-info">
                                        <p class="name">${manager.name}</p>
                                        <p class="title">${manager.title}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                        ${directReports.length > 0 ? `
                            <div class="direct-reports">
                                <h4>Direct Reports (${directReports.length})</h4>
                                <div class="direct-reports-grid">
                                    ${directReports.map(report => `
                                        <div class="employee-mini-card">
                                            <img src="${report.photo}" alt="${report.name}">
                                            <div class="mini-card-info">
                                                <p class="name">${report.name}</p>
                                                <p class="title">${report.title}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
                <div class="profile-section">
                    <h3>Additional Information</h3>
                    <div class="additional-info">
                        <div class="info-item">
                            <span class="label">Start Date</span>
                            <span class="value">${formatDate(employee.startDate)}</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Tenure</span>
                            <span class="value">${calculateTenure(employee.startDate)}</span>
                        </div>
                    </div>
                </div>
                ${Object.keys(employee.socialLinks).length > 0 ? `
                    <div class="profile-section">
                        <h3>Social Links</h3>
                        <div class="social-links">
                            ${Object.entries(employee.socialLinks).map(([platform, url]) => `
                                <a href="${url}" target="_blank" class="social-link">
                                    <i class="fab fa-${platform}"></i>
                                    ${platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);

        // Close button functionality
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                closeEmployeeModal();
            });
        }

        // Click outside to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeEmployeeModal();
            }
        });
    }

    function closeEmployeeModal() {
        const modal = document.querySelector('.employee-modal');
        if (!modal) return;

        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    // Helper Functions
    function getStatusClass(status) {
        switch (status) {
            case 'available':
                return 'status-available';
            case 'away':
                return 'status-away';
            case 'busy':
                return 'status-busy';
            case 'in_meeting':
                return 'status-in-meeting';
            default:
                return 'status-offline';
        }
    }

    function getDepartmentName(departmentId) {
        return companyData.teamDirectory.departments.find(d => d.id === departmentId)?.name || '';
    }

    function getLocationName(locationId) {
        return companyData.teamDirectory.locations.find(l => l.id === locationId)?.name || '';
    }

    function isInJobLevel(title, levelId) {
        const level = companyData.teamDirectory.jobLevels.find(l => l.id === levelId);
        return level ? level.roles.includes(title) : false;
    }

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function calculateTenure(startDate) {
        const start = new Date(startDate);
        const now = new Date();
        const years = now.getFullYear() - start.getFullYear();
        const months = now.getMonth() - start.getMonth();

        if (months < 0) {
            return `${years - 1} years, ${months + 12} months`;
        } else {
            return `${years} years, ${months} months`;
        }
    }

    function updateNoResultsMessage() {
        const teamGrid = document.querySelector('.team-grid');
        const noResults = document.querySelector('.no-team-results');
        if (!teamGrid || !noResults) return;

        const visibleCards = teamGrid.querySelectorAll('.employee-card[style="display: block"]');

        if (visibleCards.length === 0) {
            noResults.style.display = 'block';
            teamGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            teamGrid.style.display = 'grid';
        }
    }
});