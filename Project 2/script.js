var manu = document.querySelector("#nav i")
var close = document.querySelector("#full i")


var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.8,
});
tl.from("#full h4", {
  x: 150,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
  duration: 1,
});
tl.pause()

manu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
  tl.reverse()
})
