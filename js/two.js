$(function(){
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
  

    /*t*/
    $(function(){
        let baseline = -100;
        let pos3 = $(".con2").offset().top+baseline;
                 
        
    
        $(window).on ("scroll",function(){
           let scroll = $(this).scrollTop();

           if(scroll>=pos3){
            $(".t1").stop().animate({opacity:"1"},function(){
                $(".t2").stop().animate({opacity:"1"},function(){
                    $(".t3").stop().animate({opacity:"1"})
                })
            })
          
           }
        }); 
    
       
    });

})