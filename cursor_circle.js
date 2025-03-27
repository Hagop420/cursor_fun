const cursor = document.getElementById("circularcursor");
const xRayEffect = document.querySelector('.x_ray_effect_text')
const backgroundTxt = document.querySelector('.back')

document.addEventListener("DOMContentLoaded", function () {
   let mouseX = 0
   let mouseY = 0;
   let currentX = 0
   let currentY = 0;
   var isAnimating = false;

   document.addEventListener("mousemove", function (e) {
      cursor.style.display = "flex";
      document.body.style.cursor = "none";

      mouseX = e.pageX;
      mouseY = e.pageY;

      if (!isAnimating) {
         isAnimating = true;
         requestAnimationFrame(animateCursor);
      }
   });

   function animateCursor() {
      currentX += (mouseX - currentX);
      currentY += (mouseY - currentY);

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (cursor) {
         requestAnimationFrame(animateCursor);
      } else {
         isAnimating = false; 
      }
   }
});




backgroundTxt.addEventListener('mousemove', () => {
   cursor.style.background = '#fff'
   cursor.style.border = '#000 solid 3px'
   cursor.style.opacity = '.8'
xRayEffect.classList.add('text_xray')
   
})
backgroundTxt.addEventListener('mouseout', () => {
   cursor.style.border = 'none'
   cursor.style.opacity = '.8'
   cursor.style.background = '#000'
xRayEffect.classList.add('text_xray')
   
})





 