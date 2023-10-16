var rect= document.querySelector('#center')
rect.addEventListener('mousemove',(details)=>{
    var rectDetails=rect.getBoundingClientRect();
    // console.log(rectDetails);
    var widthOfRectangle=rectDetails.width;
    var leftCordinateOfRectangle=rectDetails.left;

    var mousePosition=details.clientX-leftCordinateOfRectangle;
    if(mousePosition<widthOfRectangle/2){
        // console.log("left");
        // we will be using gsap map function 
        var redColor=gsap.utils.mapRange(0,widthOfRectangle/2, 255,0,mousePosition);
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease:Power4
        })
    }else{
        var blueColor=gsap.utils.mapRange(widthOfRectangle/2, widthOfRectangle, 0,255,mousePosition);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease:Power4
        })
    }
})
rect.addEventListener('mouseleave',()=>{
    gsap.to(rect,{
        backgroundColor:"white"
    })
})