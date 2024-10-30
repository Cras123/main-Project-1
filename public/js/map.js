mapboxgl.accessToken = mapToken;

if (listing.geometry && listing.geometry.coordinates) {
  const coordinates = listing.geometry.coordinates; // Ensure this is defined

  // Initialize Mapbox
  mapboxgl.accessToken = mapToken;

  // Create a new map instance
  const map = new mapboxgl.Map({
    container: "map", // Ensure this matches the ID of the map div
    style: "mapbox://styles/mapbox/streets-v11", // Your desired style
    center: coordinates, // Set the center to the coordinates
    zoom: 9, // Initial zoom level
  });

  // Add a marker to the map
  const marker1 = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates) // Set marker position
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${listing.location}</h3> <p>Exact Location provided after booking.</p>`
      )
    ) // Set popup content
    .addTo(map); // Add marker to the map
} else {
  console.error("Invalid geometry data for the listing.");
}
