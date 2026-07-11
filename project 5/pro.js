function page1ani(){
    var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
  y: -40,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.1,
});
tl.from(".center-part1 h1", {
  x: -200,
  duration: 0.7,
  opacity: 0,
});
tl.from(".center-part1 p", {
  x: -200,
  duration: 0.5,
  opacity: 0,
});
tl.from(".center-part1 button",{
    x: -200,
    duration: 0.5,
  opacity: 0,
})
tl.from(".center-part2 img",{
  
    duration: 0.9,
  opacity: 0,
},"-=1")
tl.from(".section1bottom img",{
      x: -50,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.1,
})


}


page1ani()
function page2ani(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        
        start:"top 50%",
        end:"top 0%",
        scrub:3,
        
    }
})
tl2.from (".services h3",{
    x:-200,
    duration:0.2,
    opacity:0,

})
tl2.from (".services p",{
    x:100,
    duration:0.2,
    opacity:0,

})
tl2.from (".elem1",{
     x:-100,
    duration:0.2,
    opacity:0,
    stagger:9

},"part12")
tl2.from (".elem2",{
     x:100,
    duration:0.2,
    opacity:0,

},"part12")
tl2.from (".elem3",{
     x:-100,
    duration:0.2,
    opacity:0,

},"part34")
tl2.from (".elem4",{
     x:100,
    duration:0.2,
    opacity:0,

},"part34")
tl2.from (".elem5",{
     x:-100,
    duration:0.2,
    opacity:0,

},"part56")
tl2.from (".elem6",{
     x:100,
    duration:0.2,
    opacity:0,

},"part56")
  

tl2.from("#boxpart1",{
    y:200,
    duration:0.2,
    opacity:0,
       scrollTrigger:{
        trigger:"#boxpart1",
        scroller:"body",
        
        end:"bottom 100%",
       
        scrub:3,
        
    }
})


}
page2ani()


