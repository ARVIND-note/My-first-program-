function breackthetext() {
  var h1 = document.querySelector("h1");

  var h1text = h1.textContent;

  var splitedText = h1text.split("");

  var halfValue = splitedText.length / 2;
  var clutter = "";

  splitedText.forEach(function (elem, index) {
    var className = index < halfValue ? "first-half" : "second-half";
    clutter += `<span class="${className}"> ${elem}</span>`;
  });
  h1.innerHTML = clutter;
}
breackthetext();
// Animation: characters from first and last meet in center, starting from bottom
gsap.from("h1 span.first-half", {
  duration: 2,
  delay: 0.6,
  opacity: 0,
  y: 150,

  stagger: 0.1,
});

gsap.from("h1 span.second-half", {
  duration: 2,
  delay: 0.6,
  opacity: 0,
  y: 150,

  stagger: -0.1,
});
