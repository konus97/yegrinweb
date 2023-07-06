$(function(){
    let i = 3050;
    start1 = setInterval(function () {
        i++;
        if (i <= 3175) {
            $(".upspan").eq(0).text(i);
        } else {
            clearInterval(start1);
        }
    },40);

    /*자동이미지슬라이드 테블릿,모바일*/

    $(window).resize(function(){ 
        if (window.innerWidth <1220) {    setInterval(function(){
            $(".review").stop().animate({marginTop:"-30vw"},1000,function(){
                $(".review").css({marginTop:"0px"})
                $(".review ul").first().appendTo(".review");
            })
        },3000);
        }
        
        }).resize(); 
    
       
        /*메뉴에 마우스 갖다대면*/
   /*메뉴에 마우스 갖다대면*/
   $(".h_u li a").on("mouseenter",function(){
    $(this).children("span").stop().animate({width:"110%"})
    
});
$(".h_u li a").on("mouseleave",function(){
    $(this).children("span").stop().animate({width:"0%"})
});
      

        /*모바일 메뉴*/
        k=0;
        $(".bar").on("click",function(){
            if(k==0){
                $(".m_menu").stop().animate({right:"0px"})
                $(".bar li").css({background:"#fff"})
                k=1;
            }else{
                $(".m_menu").stop().animate({right:"-30vw"})
                $(".bar li").css({background:"#222"})
                k=0;
            }
            
        })

    /*모바일 메뉴 li*/
    $(".m_menu li").on("mouseenter",function(){
        $(this).children("a").stop().animate({fontSize:"3.5vw"},1000)
        
    })
    $(".m_menu li").on("mouseleave",function(){
        $(this).children("a").stop().animate({fontSize:"3vw"},1000)
        
    });
    
})