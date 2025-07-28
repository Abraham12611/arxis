document.addEventListener('DOMContentLoaded', function() {
    // Task Manager data
    const taskData = {
        tasks: [
            {
                id: 'task1',
                title: 'Update homepage hero section with new imagery',
                description: 'Replace the current hero image with the new approved brand photography and update the headline text.',
                assignee: {
                    id: 1,
                    name: 'Linda Richardson',
                    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
                },
                dueDate: new Date().setHours(17, 0, 0, 0), // Today, 5:00 PM
                priority: 'high',
                status: 'in-progress',
                progress: 60,
                comments: [
                    {
                        author: 'Michael Chen',
                        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
                        text: 'Make sure to use the approved headline from the brand guidelines.',
                        time: '2 hours ago'
                    },
                    {
                        author: 'Theresa von Castro',
                        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
                        text: 'I\'ve uploaded the new images to the shared folder.',
                        time: '1 hour ago'
                    },
                    {
                        author: 'Linda Richardson',
                        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                        text: 'Working on it now, should be done by 5 PM.',
                        time: '30 minutes ago'
                    }
                ],
                project: 'Website Redesign',
                tags: ['design', 'homepage', 'urgent'],
                subtasks: [
                    { title: 'Download new brand images', completed: true },
                    { title: 'Update hero image', completed: true },
                    { title: 'Update headline text', completed: false },
                    { title: 'Test on mobile devices', completed: false },
                    { title: 'Get final approval', completed: false }
                ],
                completed: false,
                isOverdue: false
            },
            {
                id: 'task2',
                title: 'Create social media graphics for product launch',
                description: 'Design a set of social media graphics for Instagram, Facebook, and Twitter to promote the new product launch.',
                assignee: {
                    id: 2,
                    name: 'Theresa von Castro',
                    avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
                },
                dueDate: new Date(Date.now() + 86400000).setHours(12, 0, 0, 0), // Tomorrow, 12:00 PM
                priority: 'medium',
                status: 'not-started',
                progress: 0,
                comments: [],
                project: 'Product Launch Campaign',
                tags: ['design', 'social-media', 'marketing'],
                subtasks: [
                    { title: 'Create Instagram post', completed: false },
                    { title: 'Create Facebook banner', completed: false },
                    { title: 'Create Twitter header', completed: false }
                ],
                completed: false,
                isOverdue: false
            },
            {
                id: 'task3',
                title: 'Review and approve Q3 marketing budget',
                description: 'Review the proposed Q3 marketing budget and provide approval or feedback.',
                assignee: {
                    id: 3,
                    name: 'Michael Chen',
                    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
                },
                dueDate: new Date(Date.now() - 86400000).setHours(17, 0, 0, 0), // Yesterday
                priority: 'high',
                status: 'completed',
                progress: 100,
                comments: [
                    {
                        author: 'Sarah Johnson',
                        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
                        text: 'Please review by EOD.',
                        time: '2 days ago'
                    },
                    {
                        author: 'David Okafor',
                        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                        text: 'I\'ve added the Q2 comparison data for reference.',
                        time: '1 day ago'
                    },
                    {
                        author: 'Michael Chen',
                        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
                        text: 'Reviewed and approved. Looks good for Q3.',
                        time: 'Yesterday'
                    },
                    {
                        author: 'Elena Rodriguez',
                        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
                        text: 'Great, I\'ll proceed with implementation.',
                        time: 'Yesterday'
                    },
                    {
                        author: 'Sarah Johnson',
                        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
                        text: 'Thank you for the prompt review!',
                        time: 'Yesterday'
                    }
                ],
                project: 'Q3 Planning',
                tags: ['finance', 'marketing', 'budget'],
                subtasks: [
                    { title: 'Review budget proposal', completed: true },
                    { title: 'Compare with Q2 actuals', completed: true },
                    { title: 'Provide feedback or approval', completed: true }
                ],
                completed: true,
                isOverdue: false
            },
            {
                id: 'task4',
                title: 'Finalize copy for email newsletter',
                description: 'Review and finalize the copy for the monthly email newsletter that will go out to all subscribers.',
                assignee: {
                    id: 4,
                    name: 'Kristin Watson',
                    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
                },
                dueDate: new Date(Date.now() - 172800000).setHours(17, 0, 0, 0), // 2 days ago
                priority: 'high',
                status: 'in-progress',
                progress: 80,
                comments: [
                    {
                        author: 'Linda Richardson',
                        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                        text: 'Don\'t forget to include the new product announcement.',
                        time: '3 days ago'
                    },
                    {
                        author: 'Kristin Watson',
                        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
                        text: 'I\'m working on the final draft now.',
                        time: '2 days ago'
                    }
                ],
                project: 'Monthly Newsletter',
                tags: ['content', 'email', 'marketing'],
                subtasks: [
                    { title: 'Draft main content', completed: true },
                    { title: 'Add product announcement', completed: true },
                    { title: 'Proofread', completed: true },
                    { title: 'Get final approval', completed: false }
                ],
                completed: false,
                isOverdue: true
            }
        ],
        projects: [
            { id: 1, name: 'Website Redesign', progress: 75 },
            { id: 2, name: 'Mobile App Development', progress: 40 },
            { id: 3, name: 'Brand Guidelines', progress: 90 }
        ],
        stats: {
            total: 42,
            completed: 18,
            pending: 20,
            overdue: 4,
            todayTasks: 5,
            weekTasks: 12,
            priorities: {
                high: 12,
                medium: 16,
                low: 8
            }
        }
    };

    // Initialize Task Manager
    function initTaskManager() {
        setupFilterTabs();
        setupViewToggle();
        setupTaskActions();
        setupKanbanDragDrop();
        setupTaskModal();
    }

    // Setup filter tabs
    function setupFilterTabs() {
        const filterTabs = document.querySelectorAll('.filter-tab');

        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));

                // Add active class to clicked tab
                this.classList.add('active');

                // Filter tasks based on selected tab
                const filter = this.getAttribute('data-filter');
                filterTasks(filter);
            });
        });
    }

    // Filter tasks based on selected filter
    function filterTasks(filter) {
        const taskItems = document.querySelectorAll('.task-item');

        // This is a simplified example. In a real application, you would filter tasks based on data attributes or task data
        taskItems.forEach(task => {
            // Show all tasks for 'all' filter
            if (filter === 'all') {
                task.style.display = 'flex';
                return;
            }

            // For demo purposes, we'll just show/hide tasks randomly for other filters
            // In a real application, you would check task properties
            const random = Math.random();
            task.style.display = random > 0.3 ? 'flex' : 'none';
        });
    }

    // Setup view toggle (List View vs Kanban Board)
    function setupViewToggle() {
        const listViewBtn = document.querySelector('.list-view-btn');
        const kanbanViewBtn = document.querySelector('.kanban-view-btn');
        const listView = document.querySelector('.task-list-view');
        const kanbanView = document.querySelector('.kanban-view');

        if (listViewBtn && kanbanViewBtn && listView && kanbanView) {
            listViewBtn.addEventListener('click', function() {
                listViewBtn.classList.add('active');
                kanbanViewBtn.classList.remove('active');
                listView.style.display = 'flex';
                kanbanView.style.display = 'none';
            });

            kanbanViewBtn.addEventListener('click', function() {
                kanbanViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
                kanbanView.style.display = 'grid';
                listView.style.display = 'none';
            });
        }
    }

    // Setup task actions (checkbox, expand, edit, comment, assign, delete)
    function setupTaskActions() {
        // Task checkboxes
        const taskCheckboxes = document.querySelectorAll('.task-checkbox input[type="checkbox"]');

        taskCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const taskItem = this.closest('.task-item');
                const taskContent = taskItem.querySelector('.task-content');

                if (this.checked) {
                    taskContent.classList.add('completed');
                } else {
                    taskContent.classList.remove('completed');
                }
            });
        });

        // Expand task
        const expandButtons = document.querySelectorAll('.expand-task');

        expandButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.classList.toggle('expanded');
                const taskItem = this.closest('.task-item');
                const taskDescription = taskItem.querySelector('.task-description');

                if (this.classList.contains('expanded')) {
                    // In a real application, you would expand to show more details
                    taskDescription.style.maxHeight = 'none';
                } else {
                    taskDescription.style.maxHeight = '2.8em'; // Approx 2 lines
                }
            });
        });

        // Task action buttons
        setupActionButton('edit-task', editTask);
        setupActionButton('comment-task', commentTask);
        setupActionButton('assign-task', assignTask);
        setupActionButton('delete-task', deleteTask);
    }

    // Helper function to setup action buttons
    function setupActionButton(className, callback) {
        const buttons = document.querySelectorAll(`.${className}`);

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const taskItem = this.closest('.task-item');
                const taskId = taskItem.id || 'task1'; // Fallback ID
                callback(taskId);
            });
        });
    }

    // Task action callbacks
    function editTask(taskId) {
        // In a real application, you would populate the modal with task data and show it
        const taskModal = document.querySelector('.task-modal');
        if (taskModal) {
            taskModal.style.display = 'flex';
            const modalTitle = taskModal.querySelector('.modal-header h2');
            if (modalTitle) {
                modalTitle.textContent = 'Edit Task';
            }
        }
    }

    function commentTask(taskId) {
        // In a real application, you would show a comment dialog
        alert('Comment functionality would be implemented here');
    }

    function assignTask(taskId) {
        // In a real application, you would show an assignee selection dialog
        alert('Assign functionality would be implemented here');
    }

    function deleteTask(taskId) {
        // In a real application, you would show a confirmation dialog
        if (confirm('Are you sure you want to delete this task?')) {
            // Delete task logic
            console.log(`Task ${taskId} deleted`);
        }
    }

    // Setup Kanban drag and drop
    function setupKanbanDragDrop() {
        const kanbanTasks = document.querySelectorAll('.kanban-task');
        const dropZones = document.querySelectorAll('.kanban-tasks');

        kanbanTasks.forEach(task => {
            task.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', task.id || 'dragged-task');
                setTimeout(() => {
                    task.classList.add('dragging');
                }, 0);
            });

            task.addEventListener('dragend', function() {
                task.classList.remove('dragging');
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', function(e) {
                e.preventDefault();
                zone.classList.add('drag-over');
            });

            zone.addEventListener('dragleave', function() {
                zone.classList.remove('drag-over');
            });

            zone.addEventListener('drop', function(e) {
                e.preventDefault();
                zone.classList.remove('drag-over');

                const taskId = e.dataTransfer.getData('text/plain');
                const draggedTask = document.getElementById(taskId) || document.querySelector('.dragging');

                if (draggedTask) {
                    // In a real application, you would update the task status based on the column
                    zone.appendChild(draggedTask);
                    updateTaskCounts();
                }
            });
        });
    }

    // Update task counts in Kanban columns
    function updateTaskCounts() {
        const columns = document.querySelectorAll('.kanban-column');

        columns.forEach(column => {
            const tasks = column.querySelectorAll('.kanban-task');
            const countElement = column.querySelector('.task-count');

            if (countElement) {
                countElement.textContent = tasks.length;
            }
        });
    }

    // Setup task creation/edit modal
    function setupTaskModal() {
        const createTaskBtn = document.querySelector('.create-task-btn');
        const taskModal = document.querySelector('.task-modal');
        const closeModalBtn = taskModal?.querySelector('.close-modal');
        const cancelBtn = taskModal?.querySelector('.cancel-btn');
        const taskForm = taskModal?.querySelector('.task-form');

        if (createTaskBtn && taskModal) {
            createTaskBtn.addEventListener('click', function() {
                // Reset form and show modal
                if (taskForm) {
                    taskForm.reset();
                }

                const modalTitle = taskModal.querySelector('.modal-header h2');
                if (modalTitle) {
                    modalTitle.textContent = 'Create New Task';
                }

                taskModal.style.display = 'flex';
            });
        }

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', function() {
                taskModal.style.display = 'none';
            });
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                taskModal.style.display = 'none';
            });
        }

        if (taskForm) {
            taskForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // In a real application, you would collect form data and create/update a task
                alert('Task saved successfully!');
                taskModal.style.display = 'none';
            });
        }

        // Add subtask button
        const addSubtaskBtn = taskModal?.querySelector('.add-subtask-btn');
        const subtasksContainer = taskModal?.querySelector('.subtasks-container');

        if (addSubtaskBtn && subtasksContainer) {
            addSubtaskBtn.addEventListener('click', function() {
                const subtaskItem = document.createElement('div');
                subtaskItem.className = 'subtask-item';
                subtaskItem.innerHTML = `
                    <input type="text" placeholder="Enter subtask">
                    <button type="button" class="remove-subtask"><i class="fas fa-times"></i></button>
                `;

                subtasksContainer.appendChild(subtaskItem);

                // Add event listener to remove button
                const removeBtn = subtaskItem.querySelector('.remove-subtask');
                if (removeBtn) {
                    removeBtn.addEventListener('click', function() {
                        subtaskItem.remove();
                    });
                }
            });
        }

        // Setup existing remove subtask buttons
        const removeSubtaskBtns = taskModal?.querySelectorAll('.remove-subtask');

        if (removeSubtaskBtns) {
            removeSubtaskBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const subtaskItem = this.closest('.subtask-item');
                    if (subtaskItem) {
                        subtaskItem.remove();
                    }
                });
            });
        }
    }

    // Initialize Task Manager when DOM is loaded
    initTaskManager();
});