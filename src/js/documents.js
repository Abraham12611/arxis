document.addEventListener('DOMContentLoaded', function() {
    // Document Manager data
    const documentData = {
        stats: {
            totalFiles: 156,
            storageUsed: '2.4 GB',
            storageFree: '1.6 GB',
            storagePercentage: 65
        },
        quickAccess: [
            { id: 'recent', name: 'Recent', icon: 'clock', count: 15 },
            { id: 'shared', name: 'Shared with Me', icon: 'share-alt', count: 8 },
            { id: 'my-docs', name: 'My Documents', icon: 'file', count: 42 },
            { id: 'team', name: 'Team Folders', icon: 'users', count: 12 },
            { id: 'favorites', name: 'Favorites', icon: 'star', count: 6 },
            { id: 'trash', name: 'Trash', icon: 'trash', count: 3 }
        ],
        folders: [
            {
                id: 'marketing',
                name: 'Marketing',
                subfolders: ['Campaigns', 'Brand Assets']
            },
            {
                id: 'product',
                name: 'Product Development',
                subfolders: []
            },
            {
                id: 'hr',
                name: 'HR Documents',
                subfolders: []
            },
            {
                id: 'finance',
                name: 'Finance',
                subfolders: []
            }
        ],
        documents: [
            {
                id: 'project-x',
                type: 'folder',
                name: 'Project X',
                itemCount: 12,
                owner: 'You',
                modified: 'Yesterday, 2:30 PM'
            },
            {
                id: 'q3-report',
                type: 'pdf',
                name: 'Q3 Report.pdf',
                size: '2.5 MB',
                owner: 'Michael Chen',
                modified: 'Yesterday, 10:15 AM'
            },
            {
                id: 'meeting-notes',
                type: 'doc',
                name: 'Meeting Notes.docx',
                size: '342 KB',
                owner: 'You',
                modified: '2 days ago'
            },
            {
                id: 'client-presentation',
                type: 'ppt',
                name: 'Client Presentation.pptx',
                size: '5.2 MB',
                owner: 'Theresa von Castro',
                modified: '3 days ago'
            },
            {
                id: 'logo-design',
                type: 'img',
                name: 'Logo Design.png',
                size: '1.8 MB',
                owner: 'Linda Richardson',
                modified: '1 week ago'
            },
            {
                id: 'budget-forecast',
                type: 'xls',
                name: 'Budget Forecast.xlsx',
                size: '756 KB',
                owner: 'You',
                modified: '1 week ago'
            }
        ]
    };

    // Initialize Document Manager
    function initDocumentManager() {
        setupViewToggle();
        setupFolderTree();
        setupDocumentActions();
        setupSearch();
        setupModals();
        setupDragAndDrop();
    }

    // Setup view toggle (Grid vs List vs Timeline)
    function setupViewToggle() {
        const gridViewBtn = document.querySelector('.grid-view-btn');
        const listViewBtn = document.querySelector('.list-view-btn');
        const timelineViewBtn = document.querySelector('.timeline-view-btn');
        const gridView = document.querySelector('.documents-grid');
        const listView = document.querySelector('.documents-list');
        const timelineView = document.querySelector('.documents-timeline');

        if (gridViewBtn && listViewBtn && timelineViewBtn && gridView && listView && timelineView) {
            gridViewBtn.addEventListener('click', function() {
                setActiveView('grid');
            });

            listViewBtn.addEventListener('click', function() {
                setActiveView('list');
            });

            timelineViewBtn.addEventListener('click', function() {
                setActiveView('timeline');
            });
        }
    }

    // Set active view
    function setActiveView(view) {
        const views = {
            grid: document.querySelector('.documents-grid'),
            list: document.querySelector('.documents-list'),
            timeline: document.querySelector('.documents-timeline')
        };

        const buttons = {
            grid: document.querySelector('.grid-view-btn'),
            list: document.querySelector('.list-view-btn'),
            timeline: document.querySelector('.timeline-view-btn')
        };

        // Hide all views
        Object.values(views).forEach(v => {
            if (v) v.style.display = 'none';
        });

        // Remove active class from all buttons
        Object.values(buttons).forEach(b => {
            if (b) b.classList.remove('active');
        });

        // Show selected view and activate button
        if (views[view]) views[view].style.display = view === 'grid' ? 'grid' : 'block';
        if (buttons[view]) buttons[view].classList.add('active');

        // Save preference to localStorage
        localStorage.setItem('documentsViewPreference', view);
    }

    // Setup folder tree
    function setupFolderTree() {
        const folderItems = document.querySelectorAll('.folder-item');

        folderItems.forEach(item => {
            item.addEventListener('click', function() {
                const folder = this.closest('.folder');
                const chevron = this.querySelector('.fa-chevron-right');
                const subfolder = folder.querySelector('.subfolder-list');

                if (chevron && subfolder) {
                    chevron.style.transform = chevron.style.transform === 'rotate(90deg)' ? '' : 'rotate(90deg)';
                    subfolder.style.display = subfolder.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }

    // Setup document actions
    function setupDocumentActions() {
        // Document card hover actions
        const documentCards = document.querySelectorAll('.document-card');

        documentCards.forEach(card => {
            const actions = card.querySelector('.doc-actions');
            if (actions) {
                // Download button
                const downloadBtn = actions.querySelector('[data-action="download"]');
                if (downloadBtn) {
                    downloadBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const docId = card.getAttribute('data-id');
                        downloadDocument(docId);
                    });
                }

                // Share button
                const shareBtn = actions.querySelector('[data-action="share"]');
                if (shareBtn) {
                    shareBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const docId = card.getAttribute('data-id');
                        showShareModal(docId);
                    });
                }

                // More options button
                const moreBtn = actions.querySelector('[data-action="more"]');
                if (moreBtn) {
                    moreBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const docId = card.getAttribute('data-id');
                        showMoreOptions(docId, e);
                    });
                }
            }

            // Open document preview on card click
            card.addEventListener('click', function() {
                const docId = this.getAttribute('data-id');
                showDocumentPreview(docId);
            });
        });
    }

    // Setup search functionality
    function setupSearch() {
        const searchInput = document.querySelector('.documents-search input');
        const advancedSearchBtn = document.querySelector('.advanced-search-btn');

        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                searchDocuments(this.value);
            }, 300));
        }

        if (advancedSearchBtn) {
            advancedSearchBtn.addEventListener('click', function() {
                showAdvancedSearch();
            });
        }
    }

    // Setup modals
    function setupModals() {
        // Document preview modal
        const previewModal = document.querySelector('.document-modal');
        const closePreviewBtn = previewModal?.querySelector('.close-modal');

        if (closePreviewBtn) {
            closePreviewBtn.addEventListener('click', function() {
                previewModal.style.display = 'none';
            });
        }

        // Upload modal
        const uploadModal = document.querySelector('.upload-modal');
        const uploadBtn = document.querySelector('.upload-btn');
        const closeUploadBtn = uploadModal?.querySelector('.close-modal');
        const uploadArea = uploadModal?.querySelector('.upload-area');

        if (uploadBtn) {
            uploadBtn.addEventListener('click', function() {
                uploadModal.style.display = 'flex';
            });
        }

        if (closeUploadBtn) {
            closeUploadBtn.addEventListener('click', function() {
                uploadModal.style.display = 'none';
            });
        }

        if (uploadArea) {
            setupDragAndDropUpload(uploadArea);
        }

        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === previewModal) {
                previewModal.style.display = 'none';
            }
            if (e.target === uploadModal) {
                uploadModal.style.display = 'none';
            }
        });
    }

    // Setup drag and drop functionality
    function setupDragAndDrop() {
        const draggableItems = document.querySelectorAll('.document-card');
        const dropZones = document.querySelectorAll('.folder');

        draggableItems.forEach(item => {
            item.setAttribute('draggable', true);

            item.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', item.getAttribute('data-id'));
                setTimeout(() => {
                    item.classList.add('dragging');
                }, 0);
            });

            item.addEventListener('dragend', function() {
                item.classList.remove('dragging');
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

                const docId = e.dataTransfer.getData('text/plain');
                const folderId = zone.getAttribute('data-id');
                moveDocumentToFolder(docId, folderId);
            });
        });
    }

    // Setup drag and drop upload
    function setupDragAndDropUpload(uploadArea) {
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.classList.add('drag-over');
        });

        uploadArea.addEventListener('dragleave', function() {
            uploadArea.classList.remove('drag-over');
        });

        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.classList.remove('drag-over');

            const files = e.dataTransfer.files;
            handleFileUpload(files);
        });

        const fileInput = uploadArea.querySelector('input[type="file"]');
        const browseBtn = uploadArea.querySelector('.browse-btn');

        if (browseBtn && fileInput) {
            browseBtn.addEventListener('click', function() {
                fileInput.click();
            });

            fileInput.addEventListener('change', function() {
                handleFileUpload(this.files);
            });
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

    function searchDocuments(query) {
        // Implement document search logic
        console.log('Searching for:', query);
    }

    function showAdvancedSearch() {
        // Implement advanced search modal
        console.log('Show advanced search modal');
    }

    function downloadDocument(docId) {
        // Implement document download logic
        console.log('Downloading document:', docId);
    }

    function showShareModal(docId) {
        // Implement share modal
        console.log('Show share modal for document:', docId);
    }

    function showMoreOptions(docId, event) {
        // Implement more options menu
        console.log('Show more options for document:', docId);
    }

    function showDocumentPreview(docId) {
        const previewModal = document.querySelector('.document-modal');
        if (previewModal) {
            // Populate modal with document data
            const doc = documentData.documents.find(d => d.id === docId);
            if (doc) {
                const modalTitle = previewModal.querySelector('.modal-header h2');
                if (modalTitle) {
                    modalTitle.textContent = doc.name;
                }
                // Add more preview content population logic here
            }
            previewModal.style.display = 'flex';
        }
    }

    function moveDocumentToFolder(docId, folderId) {
        // Implement document move logic
        console.log('Moving document', docId, 'to folder', folderId);
    }

    function handleFileUpload(files) {
        // Implement file upload logic
        console.log('Uploading files:', files);
        const uploadList = document.querySelector('.upload-list');

        if (uploadList) {
            Array.from(files).forEach(file => {
                // Create upload item
                const uploadItem = document.createElement('div');
                uploadItem.className = 'upload-item';
                uploadItem.innerHTML = `
                    <div class="upload-item-info">
                        <i class="fas fa-file"></i>
                        <div class="upload-details">
                            <span class="upload-filename">${file.name}</span>
                            <div class="upload-progress">
                                <div class="progress-bar" style="width: 0%"></div>
                                <span class="progress-text">0% • 0 KB / ${(file.size / 1024).toFixed(1)} KB</span>
                            </div>
                        </div>
                    </div>
                    <button class="cancel-upload"><i class="fas fa-times"></i></button>
                `;
                uploadList.appendChild(uploadItem);

                // Simulate upload progress
                simulateUploadProgress(uploadItem);
            });
        }
    }

    function simulateUploadProgress(uploadItem) {
        let progress = 0;
        const progressBar = uploadItem.querySelector('.progress-bar');
        const progressText = uploadItem.querySelector('.progress-text');
        const filename = uploadItem.querySelector('.upload-filename').textContent;
        const filesize = parseFloat(progressText.textContent.split('/')[1]);

        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                uploadItem.classList.add('completed');
                uploadItem.innerHTML = `
                    <div class="upload-item-info">
                        <i class="fas fa-file"></i>
                        <div class="upload-details">
                            <span class="upload-filename">${filename}</span>
                            <span class="upload-status">Completed</span>
                        </div>
                    </div>
                    <i class="fas fa-check"></i>
                `;
            }
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}% • ${((filesize * progress) / 100).toFixed(1)} KB / ${filesize} KB`;
        }, 200);

        // Cancel upload
        const cancelBtn = uploadItem.querySelector('.cancel-upload');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                clearInterval(interval);
                uploadItem.remove();
            });
        }
    }

    // Initialize Document Manager when DOM is loaded
    initDocumentManager();
});