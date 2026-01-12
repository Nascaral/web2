document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.marquee-track');
    if (!track) return;
    
    // Clone items for seamless loop
    const items = track.children;
    const itemsArray = Array.from(items);
    
    itemsArray.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
    
    // Calculate total width
    let totalWidth = 0;
    itemsArray.forEach(item => {
        totalWidth += item.offsetWidth + 32; 
    });
    
    const speed = 50;
    const duration = totalWidth / speed;
    
    track.style.animation = `marquee ${duration}s linear infinite`;
    
});