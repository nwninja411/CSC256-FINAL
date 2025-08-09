document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.FilterBtn');
    const items = document.querySelectorAll('#Gallery .GalItem');

    function applyFilter(category) {
        const cat = category.toLowerCase();
        items.forEach(item => {
            const itemCat = item.dataset.category.toLowerCase();
            item.style.display = (cat === 'all' || itemCat === cat) ? '' : 'none';
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.category);
        });
    });

    applyFilter('All');
});