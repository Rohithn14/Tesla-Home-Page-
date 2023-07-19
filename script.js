
let lastScrollPosition = 0;
let lastCentered = 0;
document.onWayTo = null;
document.addEventListener('scroll', (e) =>
{
    e.preventDefault();  
    const direction = window.scrollY - lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];
    if (document.onWayTo = null) {
        const destIndex = direction === 'up' ? lastCentered - 1 : lastCentered + 1;


        if (destIndex >= 0 && destIndex < sections.length) {
            document.onWayTo = destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        }   
    }
    sections.forEach((section, index) =>
    {

        if (window.scrollY === section.offsetTop) {
            lastCentered = index;
            section.className='active'
            if (document.onWayTo === index) {
                document.onWayTo=null
            }
        }
        else {
            section.className = '';
        }
    })

    lastScrollPosition = window.scrollY;
})

