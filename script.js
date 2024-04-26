let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav_links li');

/* --> CURSOR STYLING */
window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link_grow');
       /* link.classList.add('hovered_link'); */
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link_grow');
       /* link.classList.remove('hovered_link'); */
    });
});