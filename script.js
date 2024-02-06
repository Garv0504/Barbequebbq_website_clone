const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll]'),
    smooth:true
  });

function part1(){
    var t1 = new TimelineMax()

t1.to('.h1 h1',{
    y:0,
    duration:0.5,
    stagger:0.15,
    opacity:1,
    ease: Expo.ease
});
t1.to('.h3 h3',{
    y:0,
    duration:0.2,
    opacity:1,
    ease: Expo.ease
})
return t1
}
part1()


var t2 = new TimelineMax()
t2.add(part1());

t2.to('.image', {
    opacity: 1,
    duration: 1
});


function showMenu(){
    var men = document.getElementById('menu')
    men.style.display = "block"
}
function hideMenu(){
    var men = document.getElementById('menu')
    men.style.display = "none"
}






