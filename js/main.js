/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

let img = document.querySelector("#main-img img");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");


box1.addEventListener("mouseover",function(e){
  console.log(img.src)
  img.src="assets/img/box1.png"
});

box2.addEventListener("mouseover",function(e){
  console.log(img.src)
  img.src="assets/img/box2.png"
});

box3.addEventListener("mouseover",function(e){
  console.log(img.src)
  img.src="assets/img/box3.png"
});

