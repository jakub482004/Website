document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

window.addEventListener('scroll', function() {
    const div = document.getElementById('loader');
    if (window.scrollY >= 400) {
        div.style.opacity = '0';
    } 
});

document.addEventListener("dragstart", function(event) {
    if (event.target.nodeName === "IMG") {
     event.preventDefault();
    }
});

function toggleText() {
    var paragraph = document.getElementById("paragraph");
    var button = document.querySelector("#button a");
    
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block"; // Show
        button.textContent = "Hide"; // Change text
    } else {
        paragraph.style.display = "none"; // Hide
        button.textContent = "Read"; // Change text
    }
}

const scrollContainer = document.getElementById('gallery');
// for mouse position and scroll position
let isDragging = false;
let startX, startY, scrollLeft, scrollTop
// Add event listeners to the scrollContainer for dragging
scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Store the starting mouse position
    startX = e.pageX - window.scrollX;
    startY = e.pageY - window.scrollY;
    // Store the current scroll position
    scrollLeft = window.scrollX;
    scrollTop = window.scrollY;
    document.body.style.cursor = 'grabbing'; // Change cursor
})

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Exit if not dragging
    // Prevent text selection while dragging
    e.preventDefault();
    const x = e.pageX - window.scrollX;
    const y = e.pageY - window.scrollY;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 1.4; // Multiply movement by x for faster scroll
    window.scrollTo(scrollLeft - walkX, scrollTop - walkY);
})

scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default'; // Reset cursor
})

// stop drag when leaving the window
scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});