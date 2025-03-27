const cursor = document.getElementById("circularcursor");
const xRayEffect = document.querySelector('.x_ray_effect_text')
const backgroundTxt = document.querySelector('.back')


console.log(xRayEffect);

document.addEventListener("DOMContentLoaded", function () {
   // const cursor = document.getElementById("circularcursor");
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
      // Use easing to make movement smoother
      currentX += (mouseX - currentX);
      currentY += (mouseY - currentY);

      // Apply transform for better performance
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // Continue animation if movement is still happening
      if (cursor) {
         requestAnimationFrame(animateCursor);
      } else {
         isAnimating = false; // Stop animation loop if no movement
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





 