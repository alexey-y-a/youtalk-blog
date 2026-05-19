document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            burger.setAttribute('aria-expanded', isExpanded);
        });
    }

    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function () {
            tags.forEach(t => t.classList.remove('tag_active'));
            this.classList.add('tag_active');
        });
    });

    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});