
let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//MENU
		let iconMenu=document.querySelector(".icon-menu");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});

	//SLIDER
		let slider=document.querySelectorAll(".slider");
	slider.forEach(el => {
		let sliderItem = new Glide(el, {
			type: 'carousel',
			perView: 1,
		});
		sliderItem.mount();
	});

	//IBG
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});
});
//АНИМАЦИЯ ВЫЕЗЪЖАЮЩЕГО ТЕКСТА И Д.Р

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;//ЗНАЧЕНИЕ С ВВЕРХУ
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);//ОБЩАЯ ЗАДЕРЖКА АНИМАЦИИ
}

/*

		let element = document.createElement("div");
	element.classList.add("content", "active");
	element.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
	document.querySelector(".mainblock").append(element);

	if(iconMenu.classList.contains('active')){
		
	}
	document.querySelectorAll(".box")
		.forEach(el => {
			el.style.display = "none"
		});
*/
