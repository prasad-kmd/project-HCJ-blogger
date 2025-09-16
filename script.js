document.addEventListener('DOMContentLoaded', function() {
    const labelsList = document.querySelector('.labels-widget ul');
    const showLessLink = document.querySelector('.labels-widget .show-less');
    const allLabels = Array.from(labelsList.getElementsByTagName('li'));

    const initialVisibleCount = 10; // Show 10 labels initially
    let isShowingMore = false;

    function toggleLabels() {
        if (!isShowingMore) {
            // Show all labels
            allLabels.forEach(label => label.style.display = 'block');
            showLessLink.textContent = 'Show less';
        } else {
            // Show only the initial number of labels
            allLabels.forEach((label, index) => {
                if (index >= initialVisibleCount) {
                    label.style.display = 'none';
                }
            });
            showLessLink.textContent = 'Show more';
        }
        isShowingMore = !isShowingMore;
    }

    // Initially hide the extra labels
    if (allLabels.length > initialVisibleCount) {
        allLabels.forEach((label, index) => {
            if (index >= initialVisibleCount) {
                label.style.display = 'none';
            }
        });
        showLessLink.textContent = 'Show more';
        showLessLink.style.display = 'inline-block';
    } else {
        showLessLink.style.display = 'none';
    }

    showLessLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleLabels();
    });
});
