
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 400,
  reset: true
});


/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{}); 
sr.reveal('.about__text',{}); 

/*SCROLL WORK*/
sr.reveal('.work__img',{interval:0}); 

// overlay image
