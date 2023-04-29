// Connect Map
mapboxgl.accessToken = "pk.eyJ1IjoibGV2bGFkaWsiLCJhIjoiY2ttbmtreXpsMDJuczJvbGZjbWk5a2N2diJ9.w50051-ckXCDXPYqgy-t1w";

const map = new mapboxgl.Map({
   container: "map",
	style: "mapbox://styles/levladik/ckwapxgan403m15qncaoootyf",
});

// Add Controls Buttons
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);
		 
// Fly to a random location
const searchButton = document.getElementById('fly');
	searchButton.addEventListener('click', () => {
	map.flyTo({
		center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
		essential: true // this animation is considered essential with respect to prefers-reduced-motion
	});
});
