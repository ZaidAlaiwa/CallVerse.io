const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(element => {
    element.addEventListener('click', () => {
        if (activeItem) {
            activeItem.removeAttribute('id');
        }

        element.setAttribute('id', 'active');
        activeItem = element;

    });
});


//Analytics Percentage - Color Changer
document.addEventListener('DOMContentLoaded', function() {
    var spans = document.querySelectorAll('main .analytics .analytics-boxes .item .progress .info p span');

    spans.forEach(function(span) {
        var content = span.textContent;

        if (content.includes('-')) {
            span.classList.add('negative');
        } else if (content.includes('+')) {
            span.classList.add('positive');
        }
    });
});