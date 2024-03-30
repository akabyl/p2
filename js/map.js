// APi Yandex Map

function init() {
	const map = new ymaps.Map('map', {
		center: [55.744576, 37.631568],
		zoom: 16,
		controls: ['zoomControl', 'fullscreenControl'],
	});
	const myPlacemark = new ymaps.Placemark(
		[55.744075, 37.631406],
		{},
		{
			preset: 'islands#nightDotIcon',
		}
	);

	// После того как метка была создана, добавляем её на карту.
	map.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
