const cursor = document.getElementById("circularcursor");
const xRayEffect = document.querySelector('.x_ray_effect_text')
const backgroundTxt = document.querySelector('.back')

document.addEventListener("DOMContentLoaded", () => {
   if (!cursor) return;
      document.addEventListener("mousemove", (e) => {
      cursor.style.display = "flex";
      document.body.style.cursor = "none";
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
   });
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