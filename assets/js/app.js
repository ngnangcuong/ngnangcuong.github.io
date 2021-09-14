const headerMenu_nonPC = document.querySelector('.tablet-mobile-menu');
const navBar = document.querySelector('.navigation');
const headerBlock = document.querySelector('.header');
const backToTopBtn = document.querySelector('.back-to-top');


// Header fixed when scroll
window.onscroll = function(e) {
    headerBlock.classList.toggle('header--fixed', window.scrollY > 750);

    // Switch down when scroll
    if(window.scrollY > 350) {
        headerMenuSlideBar.style.right = '-30vw';
    }

    // Back-to-top Button appear when scroll
    backToTopBtn.classList.toggle('invisible', !(window.scrollY > 500));
}

// Header Menu on Mobile/Tablet
headerMenu_nonPC.onclick = function() {
    var heightNavBar = navBar.clientHeight;

    if(heightNavBar == 0) {
        navBar.style.height = '28vh';
    }
    else {
        navBar.style.height = '0';
    }
}

// Header Menu on PC
const headerMenu_PC = document.querySelectorAll('.header__function')[2];
const headerMenuSlideBar = document.querySelector('.header__menu');
const headerCloseBtn = document.querySelector('.header__menu > ion-icon')

// Switch up
headerMenu_PC.onclick = function() {
    headerMenuSlideBar.style.right = '0';

}
// Switch down when click close button
headerCloseBtn.onclick = function(e) {
    e.stopPropagation();
    headerMenuSlideBar.style.right = '-30vw';
}

// Header search's function
const headerSearchBtn = document.querySelector('.header__function:nth-child(2)');
const headerSearch = document.querySelector('.header__search');
const headerSearchOverlay = document.querySelector('.header__search-overlay');
const headerSearchCloseBtn = document.querySelector('.header__search > ion-icon');

headerSearchBtn.onclick = function() {
    headerSearch.classList.add('active');
}

headerSearchCloseBtn.onclick = function(e) {
    headerSearch.classList.remove('active');
    e.stopPropagation();
}

headerSearchOverlay.onclick = function(e) {
    headerSearch.classList.remove('active');
    e.stopPropagation();

}

// Slider bot
$('.slider-bot').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    touchThreshold: 10,
    responsive: [
        {
            breakpoint: 2600,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 779,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        }
    ]
});

var slideButton = [...document.querySelectorAll('.slick-dots li button')];

slideButton.forEach((element, index) => {
    element.textContent = '';
})

// Slider top (automatic slides)
const firstSlideThumb = '../assets/image/skiing-parallax-1.jpg';
const secondSlideThumb = '../assets/image/tour-featured-img-14.jpg';
const slideArray = [firstSlideThumb, secondSlideThumb];
var currentSlide = 2;

const sliderTop = document.querySelector('.slider-top');

const backwardBtn = document.querySelector('.slider-top__backward');
const forwardBtn = document.querySelector('.slider-top__forward');

const writtingCache = document.querySelector('.slider-top__writting-cache');
const writtingMain = document.querySelector('.slider-top__writting-main');
const writtingDesc = document.querySelector('.slider-top__writting-desc');

function slideNext() {
    sliderTop.animate([
        {backgroundSize: '200%'},
        {backgroundSize: '210%'}
    ], {
        duration: 4500,
    });
    // Hiện chữ dần dần
    writtingCache.animate([
        {
            opacity: '0',
            transform: 'translateY(50%)'
        },
        {
            opacity: '1',
            transform: 'translateY(0)'
        }
    ], {
        duration: 500,
    })
    writtingMain.animate([
        {
            opacity: '0',
            transform: 'translateY(10%)'
        },
        {
            opacity: '1',
            transform: 'translateY(0)'
        }
    ], {
        duration: 500,
        delay: 100
    })
    writtingDesc.animate([
        {
            opacity: '0',
            transform: 'translateY(50%)'
        },
        {
            opacity: '1',
            transform: 'translateY(0)'
        }
    ], {
        duration: 500,
        delay: 100
    })

    // Chuyển slide
    currentSlide = (currentSlide + 1) % 2;
    sliderTop.style.backgroundImage = `url('${slideArray[currentSlide]}')`;
}
function slidePrev() {
    sliderTop.animate([
        {backgroundSize: '100%'},
        {backgroundSize: '110%'}
    ], {
        duration: 4500,
    });
    currentSlide = (currentSlide + 1) % 2;
    sliderTop.style.backgroundImage = `url('${slideArray[currentSlide]}')`;
}

function automaticSlides() {
    
    setInterval(() => {
        slideNext();
        backwardBtn.onclick = function() { slideNext(); }
        forwardBtn.onclick = function() {
            slideNext();
    }
    }, 4000);
    
}

automaticSlides();

// Introduce
// Height attribute for introduce video

const introduceVid = document.querySelector('.introduce__vid');
const introduceVidEmbed = document.querySelector('.introduce__vid-embedded');
const introduceVIdOverlay = introduceVidEmbed.querySelector('.overlay');
var introduceVidHeight = introduceVid.offsetWidth / 2;

introduceVid.style.height = `${introduceVidHeight}px`;

// Khi thay đổi kích thước màn hình
window.onresize = function() {
    introduceVidHeight = introduceVid.offsetWidth / 2;

    introduceVid.style.height = `${introduceVidHeight}px`;
}

introduceVid.onclick = function() {
    introduceVidEmbed.classList.add('active');
}
introduceVIdOverlay.onclick = function(e) {
    e.stopPropagation();
    introduceVidEmbed.classList.remove('active');
}

// Top-reviews' Slider
const topReviewsSlider = document.querySelector('.top-reviews__people');

$('.top-reviews__people').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    swipeToSlide: true,
    touchThreshold: 10,
    speed: 500,
    responsive: [
        {
            breakpoint: 987,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

topReviewsSlider.onmousedown = function() {
    topReviewsSlider.style.cursor = 'grabbing';
}
topReviewsSlider.onmouseup = function() {
    topReviewsSlider.style.cursor = 'default';
}

// Founder Slider
$('.founders').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    speed: 1000,
    touchThreshold: 10,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 665,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
const founderSlider = document.querySelector('.founders');

founderSlider.onmousedown = function() {
    founderSlider.style.cursor = 'grabbing';
}
founderSlider.onmouseup = function() {
    founderSlider.style.cursor = 'default';
}
// Count up Achievement

$('.achievement__item-number').counterUp({
    time: 1000,
    delay: 70,
})

// Back to top function
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })

    backToTopBtn.classList.add('invisible');
}

// User Function
const userButtonMoblie = document.querySelector('.user');
const userForm = document. querySelector('.modal');
const userFormOverlay = document.querySelector('.modal__overlay');

const userFormOptions = [...document.querySelectorAll('.modal__option')];
const userFormInners = [...document.querySelectorAll('.modal__inner')];

userButtonMoblie.onclick = function() {
    userForm.classList.toggle('active', !userForm.classList.contains('active'));
}
userFormOverlay.onclick = function() {
    userForm.classList.remove('active');
}
userFormOptions.forEach((element, index) => {
    element.onclick = function() {
        if(!userFormInners[index].classList.contains('active')) {
            userFormInners[index].classList.add('active');
            element.classList.add('active');

            let anotherIndex = (index + 1) % 2;
            userFormInners[anotherIndex].classList.remove('active');
            userFormOptions[anotherIndex].classList.remove('active');
        }
    }
})
