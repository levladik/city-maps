// Connect Map
mapboxgl.accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";

const map = new mapboxgl.Map({
   container: "map",
	style: "mapbox://styles/levladik/ckwapxgan403m15qncaoootyf",
});

// Add Controls Buttons and Search Input
const nav = new mapboxgl.NavigationControl();
const geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl,
	autocomplete: false,
	limit: 3,
	types: 'place'
});

map.addControl(nav);
map.addControl(geocoder);

