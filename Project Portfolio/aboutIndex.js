let tl=gsap.timeline();

tl.from(".navh1",{
    y:-50,
    delay:0.3,
    stagger:0.2,
    duration:0.5,
    opacity:0,
})
tl.from(".content h1",{
    x:-1500,
    stagger:0.5,
    opacity:0,
    duration:0.5
})
// tl.from(".content .m",{
//     x:1500,
//     stagger:0.5,
//     opacity:0,
//     duration:0.5
// })

tl.from(".content2 p",{
    opacity:0,
})