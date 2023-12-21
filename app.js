let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function (event) {
    clearInterval(refreshInterval);
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider(event);
    refreshInterval = setInterval(() => next.click(), 3000);
};

prev.onclick = function (event) {
    clearInterval(refreshInterval);
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider(event);
    refreshInterval = setInterval(() => next.click(), 3000);
};

dots.forEach((li, key) => {
    li.addEventListener('click', (event) => {
        clearInterval(refreshInterval);
        active = key;
        reloadSlider(event);
        refreshInterval = setInterval(() => next.click(), 3000);
    });
});

let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    // Prevent the default behavior of the click event
    event.preventDefault();
}

