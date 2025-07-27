// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality.
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

    // Like functionality for posts
    const likeButtons = document.querySelectorAll('.like-count');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const count = parseInt(this.textContent.trim().split(' ')[1]);

            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#EF4444';
                this.textContent = '';
                this.appendChild(icon);
                this.append(` ${count + 1}`);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#64748B';
                this.textContent = '';
                this.appendChild(icon);
                this.append(` ${count - 1}`);
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
});