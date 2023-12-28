
//JS for image sliders
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

// Toggle btn for nav links

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};


// JS for about.html video popup
$(function () {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myCredit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function openModal() {
    // Add your modal opening logic here
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    // Add your modal closing logic here
    document.getElementById('myModal').style.display = 'none';
  }