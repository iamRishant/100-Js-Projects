// gsap.to("#box",{
//     x:1000,
//     y:599,
//     height:200,
//     width:200,
//     delay:1,
//     duration:3,
//     rotate:360,
//     borderRadius:"100%"
// })
// gsap.from("#box",{
//     x:1000,
//     y:300,
//     height:200,
//     width:200,
//     delay:1,
//     duration:3,
//     rotate:360,
//     borderRadius:100,
//     backgroundColor:"green"
// })
// to btata hai final tkk kaise jana hai
// from btata hai initial tkk kaise aana hai aur ha se

gsap.registerPlugin(ScrollTrigger) 
gsap.to("#page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,//jab pin use krenge tb parent ko trigger bnaan prta hai taaki page pin ho naaki image or uske ander ka element
    },
})

