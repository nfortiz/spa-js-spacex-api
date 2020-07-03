
function carousel(idCarousel) {
    let idxSlide = 0;
    
    function moveSlides(idCarousel, evt) {
        const carousel = document.querySelector(`[data-carousel=\'${idCarousel}\']`);
        const slides = carousel.querySelectorAll('.carousel-item');
        
        let isNext = evt.target.classList.contains('next');
        let idx = isNext ? 1 : (evt.target.classList.contains('prev') && -1);

        if(!idx) return;

        let newIdx = idx + idxSlide;
        if(newIdx > slides.length - 1) {
            newIdx = 0;
        } else if (newIdx < 0) {
            newIdx = slides.length - 1;
        } 
    
        slides[idxSlide].classList.remove('active');
        idxSlide = newIdx;
        slides[idxSlide].classList.add('active');
    }

    const content = document.getElementById('content');
    const slideEvent = (evt) => moveSlides(idCarousel, evt);
    content.addEventListener('click', slideEvent);

    return () => content.removeEventListener('click', slideEvent);
}
    

export default carousel;