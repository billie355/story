// Wait for the HTML to load completely before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Select all elements that have the 'hidden' class placed on them in HTML
    const hiddenElements = document.querySelectorAll('.hidden');

    // Create an Intersection Observer options object
    // threshold: 0.2 means trigger animation when 20% of the element is visible
    const options = {
        root: null, // use browser viewport
        rootMargin: '0px',
        threshold: 0.2 
    };

    // Define the callback function that runs whenever an intersection happens
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible on screen)
            if (entry.isIntersecting) {
                // Add the 'show' class which triggers the CSS transition
                entry.target.classList.add('show');
                // Optional: Stop observing the element after it animates once for performance
                // observer.unobserve(entry.target); 
            }
            // Optional else: remove 'show' if you want it to re-animate when scrolling back up
            // else {
            //      entry.target.classList.remove('show');
            // }
        });
    };

    // Create the observer instance with our callback and options
    const observer = new IntersectionObserver(observerCallback, options);

    // Tell the observer to watch each of our hidden elements
    hiddenElements.forEach(el => observer.observe(el));

});