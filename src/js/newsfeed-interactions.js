document.addEventListener('DOMContentLoaded', function() {
    // Store post interaction states
    const postStates = {};

    // Initialize post states.
    document.querySelectorAll('.feed-item').forEach(post => {
        const postId = post.dataset.postId;
        const likeBtn = post.querySelector('.like-btn');
        const commentBtn = post.querySelector('.comment-btn');

        postStates[postId] = {
            likeCount: parseInt(likeBtn.dataset.count),
            commentCount: parseInt(commentBtn.dataset.count),
            liked: false
        };
    });

    // Handle like button clicks
    document.querySelectorAll('.like-btn').forEach(likeBtn => {
        likeBtn.addEventListener('click', function() {
            const post = this.closest('.feed-item');
            const postId = post.dataset.postId;
            const countElement = this.querySelector('.count');
            const icon = this.querySelector('i');

            // Toggle liked state
            postStates[postId].liked = !postStates[postId].liked;

            // Update like count
            if (postStates[postId].liked) {
                postStates[postId].likeCount++;
                this.classList.add('liked');
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                postStates[postId].likeCount--;
                this.classList.remove('liked');
                icon.classList.remove('fas');
                icon.classList.add('far');
            }

            // Update UI
            countElement.textContent = postStates[postId].likeCount;
        });
    });

    // Handle comment button clicks
    document.querySelectorAll('.comment-btn').forEach(commentBtn => {
        commentBtn.addEventListener('click', function() {
            const post = this.closest('.feed-item');
            const postId = post.dataset.postId;
            const countElement = this.querySelector('.count');

            // Increment comment count
            postStates[postId].commentCount++;

            // Update UI with animation
            countElement.textContent = postStates[postId].commentCount;
            countElement.style.transform = 'scale(1.2)';

            // Reset animation
            setTimeout(() => {
                countElement.style.transform = 'scale(1)';
            }, 300);
        });
    });
});