let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #A19882;">Soy programadora Frontend y estudiante de SDET.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
