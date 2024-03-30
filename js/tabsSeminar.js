// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
	btn.addEventListener('click', function () {
		// Убираем активные классы у всех кнопок
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}

		// Добавляем активный класс к текущей кнопке
		this.classList.add('tab-controls__btn--active');

		// Отобразить нужные товары и скрыть не нужные
		for (let product of tabsProducts) {
			// Проверка на отображение всех слайдов
			if (this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
          
				}
			}
		}

		// Update Swiper
		seminarsSwiper.update();
	});
}
