const accordions = document.querySelectorAll('.accordion');
const multiSelectCheckbox = document.getElementById('multiselect');

// Initialize the first accordion as open
if (accordions.length > 0) {
    toggleAccordion(accordions[0]);
}

accordions.forEach((item) => {
    let title = item.querySelector('.title');

    title.addEventListener('click', () => {
        if (!multiSelectCheckbox.checked) {
            removeOpen(item);
        }
        toggleAccordion(item);
    });
});

function toggleAccordion(item) {
    const description = item.querySelector('.description');
    const expandIcon = item.querySelector('.expand-icon');
    const collapseIcon = item.querySelector('.collapse-icon');

    if (item.classList.contains('open')) {
        description.style.display = 'none';
        expandIcon.style.display = 'block';
        collapseIcon.style.display = 'none';
        item.classList.remove('open');
    } else {
        description.style.display = 'block';
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'block';
        item.classList.add('open');
    }
}

function removeOpen(currentItem) {
    accordions.forEach((item) => {
        if (item !== currentItem && item.classList.contains('open')) {
            toggleAccordion(item);
        }
    });
}