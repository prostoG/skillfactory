const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    autoplay: {
		delay: 6000,
	},

    pagination: {
        el: '.swiper-pagination',
    },

});

// tads features

const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
	const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

	for (const tab of tabsHandlerElems) {
		tab.addEventListener('click', () => {
			tabsHandlerElems.forEach(item => {
				if (tab === item) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			});

			tabsFieldElems.forEach(item => {
				if (item.dataset.tabsField === tab.dataset.tabsHandler) {
					item.classList.remove('hidden')
				} else {
					item.classList.add('hidden')
				}
			});
		});
	};