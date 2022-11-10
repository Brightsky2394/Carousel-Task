const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton= document.querySelector('.carousel_button--left');
const spotsNav = document.querySelector('.carousel_nav');
const spots = Array.from(spotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index)=>{
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition); 
const moveToslide = (track, currentSlide, targetSlide) => {
 track.style.transform = 'translateX(-'+ targetSlide.style.left+')';
 

currentSlide.classList.remove('current-slide');
targetSlide.classList.add('current-slide');
}
const updateSpots = (currentSpot, targetSpot) => {
     currentSpot.classList.remove('current-slide');
    targetSpot.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
const currentSpot = spotsNav.querySelector('.current-slide');
const prevSpots = currentSpot.previousElementSibling;
    moveToslide(track, currentSlide, prevSlide);
    updateSpots(currentSpot, prevSpot);
});
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
const currentSpot = spotsNav.querySelector('.current-slide');
const nextSpots = currentSpot.nextElementSibling;
    moveToslide(track, currentSlide, nextSlide);
      updateSpots(currentSpot, targetSpot);
});
spotsNav.addEventListener('click', e => {
    const targetSpot = e.target.closest('button');
    if (!targetSpot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentSpot = spotsNav.querySelector('.current-slide');
    const targetIndex = spots.findIndex(spot => spot === targetSpot);
    const targetSlide = slides[targetIndex];
    moveToslide(track, currentSlide, targetSlide);
   updateSpots(currentSpot, targetSpot);
   if (targetIndex === 0){
prevButton.classList.add('is-hidden');
nextButton.classList.remove('is-hidden');
   }else if (targetIndex === slides.length - 1){
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
   }else{
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
   }

});

