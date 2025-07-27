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

    // Initialize
    if (document.getElementById('companySection')) {
        populateCompanySection();
    }
});