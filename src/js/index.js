import "./import/modules";

import Swiper, { Navigation, Pagination, Thumbs, EffectFade } from 'swiper';
import Parallax from 'parallax-js';
Swiper.use([Navigation, Pagination, Thumbs, EffectFade]);

const isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i) ? true : false; },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()); }
};

// Sliders
const mainSwiperContainer = document.querySelector('.swiper-container'),
	mainSwiperThumbContainer = document.querySelector('.swiper-container-imgs')

// init Swiper:
const mainSwiperThumb = new Swiper(mainSwiperThumbContainer, {
	slidesPerView: 1,
	spaceBetween: 1600,
	loop: true,
	loopedSlides: 1,
	watchSlidesVisibility: true,
	effect: 'fade',
	speed: 600,
	fadeEffect: {
		crossFade: true,
	},
})

const mainSwiper = new Swiper(mainSwiperContainer, {
	slidesPerView: 1,
	spaceBetween: 1600,
	loop: true,
	loopedSlides: 1,
	speed: 800,
	thumbs: {
		swiper: mainSwiperThumb
	},
})
// END Sliders

// Cursor
const mouseCursor = document.querySelector('.cursor');
const magnifierLinks = document.querySelectorAll('.mgf');
const slideActive = document.querySelector('.swiper-container');

window.addEventListener('mousemove', cursor);

function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px'
	mouseCursor.style.left = e.pageX + 'px'
}

magnifierLinks.forEach(link => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('link-shrink')
	})
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('link-shrink')
	})
})

slideActive.addEventListener('mouseover', () => {
	mouseCursor.classList.add('slide-active')
})
slideActive.addEventListener('mouseleave', () => {
	mouseCursor.classList.remove('slide-active')
})
// END Cursor

// Parallax 
if (!isMobile.any()) {
	const scene = document.querySelectorAll('.scene')
	scene.forEach(s => {
		new Parallax(s)
	})
}

// Burger menu
const burger = document.querySelector('.toggle-btn'),
	navMenu = document.querySelector('.menu-navbar'),
	socials = document.querySelector('.socials')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	navMenu.classList.toggle('active')
	mouseCursor.classList.toggle('active')
	socials.classList.toggle('active')
})
