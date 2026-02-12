// Toggle expandable boxes
function toggleBox(element) {
    // Close other boxes
    const allBoxes = document.querySelectorAll('.item-box');
    allBoxes.forEach(box => {
        if (box !== element && box.classList.contains('active')) {
            box.classList.remove('active');
        }
    });
    
    // Toggle current box
    element.classList.toggle('active');
}

// Optional: Close box when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.item-box')) {
        const allBoxes = document.querySelectorAll('.item-box');
        allBoxes.forEach(box => box.classList.remove('active'));
    }
});
