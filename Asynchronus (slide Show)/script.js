// Array of random movie images (URLs can be replaced with real images)
const movieImages = [
    'https://assets3.thrillist.com/v1/image/3008770/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',  // Example Movie Image 1
    'https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg',  // Example Movie Image 2
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/action-movies.jpeg',  // Example Movie Image 3
    'https://www.themobileindian.com/wp-content/uploads/2022/01/the-tomorrow-war.jpg',  // Example Movie Image 4
    'https://athlonoutdoors.com/wp-content/uploads/2020/05/moviesweb.jpg',  // Example Movie Image 5
];

// Set the initial image when the page loads
let currentImageIndex = 0;
const movieImageElement = document.getElementById('movieImage');

// Function to update the image based on the current index
function updateImage() {
    movieImageElement.src = movieImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % movieImages.length; // Loop through images
}

// Initial image setup
updateImage();

// Set an interval to update the image every 2000ms
setInterval(updateImage, 2000);
