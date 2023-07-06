/*비주얼슬라이드이미지*/

$(function(){
    setInterval(function(){
        $(".slide1").stop().animate({marginLeft:"-100%"},1000,function(){
            $(".slide1").css({margin:"0px"})
            $(".slide1 li").first().appendTo(".slide1");
        })
    },3000);
/*메뉴에 마우스 갖다대면*/
    $(".h_u li a").on("mouseenter",function(){
        $(this).children("span").stop().animate({width:"110%"})
        
    });
    $(".h_u li a").on("mouseleave",function(){
        $(this).children("span").stop().animate({width:"0%"})
    });

/*메인 비포에프터*/
$(window).resize(function(){ 
    if (window.innerWidth >767) {   
        $(".c_text").on("mouseenter",function(){
            $(".b_f_fade video").stop().fadeOut()
            $(".con1_bf").stop().fadeIn()
            $(".c_text .circle").stop().animate({borderRadius:"30%"})
        });
        $(".c_text").on("mouseleave",function(){
            $(".b_f_fade video").stop().fadeIn()
            $(".con1_bf").stop().fadeOut()
            $(".c_text .circle").stop().animate({borderRadius:"50%"})
            
        });
    
    
    }
    
    }).resize(); 

    
    /*클릭 시 다음 이미지*/

    $(".rightnext").on("click",function(){
        $(".con2_slide").stop().css({marginLeft:"-33.333%"})
        $(".con2_slide li").first().appendTo(".con2_slide")
        $(".con2_slide").css({marginLeft:"0%"})
    })
    $(".leftnext").on("click",function(){
        $(".con2_slide").stop().animate({marginLeft:"0%"})
        $(".con2_slide li").last().prependTo(".con2_slide")
        $(".con2_slide").css({marginLeft:"0%"})
    })

    /*스킨 솔루션 영상 재생*/
    let j=0;
     $(".plusbox>img").on("click",function(){
        if(j==0){
            $(".vdo").stop().animate({opacity:"1"},2000)
            j=1;
        }else{
            $(".vdo").stop().animate({opacity:"0"},2000)
            j=0;
        }
      
    });
    
  
     /*textline*/
     let i=0;
     $(".plusbox2>img").on("click",function(){
        if(i==0){
            $(".textline").stop().animate({opacity:"1"})
            i=1;
        }else{
            $(".textline").stop().animate({opacity:"0"})
            i=0;
        }
      
    });

    $(".textline li").on("mouseenter",function(){
        $(this).children("a").stop().animate({fontWeight:"600"})
        $(this).children("a").stop().css({color:"#b18373"})
    })
    $(".textline li").on("mouseleave",function(){
        $(this).children("a").stop().animate({fontWeight:"300"})
        $(this).children("a").stop().css({color:"#222"})
    });
  
    /*homecare slide*/
    $(window).resize(function(){ 
        if (window.innerWidth >=1220) {   setInterval(function () {
            $(".care").stop().animate({ marginLeft: "-20%" },2000, function () {
                $(".care").css({ marginLeft: "0%" });
                $(".care>li").first().appendTo(".care");
            });
        }, 3000);
        
        }
        
        }).resize(); 
    
       
        

    /*con5*/
    

        $(function(){
            let baseline = 300;
            let pos1 = $(".con4").offset().top+baseline;
                     
            
        
            $(window).on ("scroll",function(){
               let scroll = $(this).scrollTop();

               if(scroll>=pos1){
                $(".con5_line1").stop().animate({opacity:"0.8"})
                $(".con5_text p:first-child").stop().animate({left:"50%",opacity:"0.6",display:"block"},1000,function(){
                    $(".con5_text p:first-child").stop().animate({opacity:"1"})
                    $(".con5_text p:last-child").stop().animate({right:"50%",opacity:"0.6",display:"block"},function(){
                    $(".con5_text p:last-child").stop().animate({opacity:"1"})  
                    })
                })      
                $(".con5_line2").stop().animate({opacity:"0.8"},1000);
               }
            }); 
        
           
        });
               
               
    /*모바일con2 자동슬라이드*/
    $(window).resize(function(){ 
        if (window.innerWidth <=767) {   
          setInterval(function () {
            $(".con2_slide").stop().animate({ marginLeft: "-100%" },2000, function () {
                $(".con2_slide").css({ marginLeft: "0%" });
                $(".con2_slide>li").first().appendTo(".con2_slide");
            });
        }, 3000);
        
        }
        
        }).resize(); 
    

    /*모바일con4 자동슬라이드*/
    $(window).resize(function(){ 
        if (window.innerWidth <=767) {   
           let care= setInterval(function () {
            $(".care").stop().animate({ marginLeft: "-100%" },2000, function () {
                $(".care").css({ marginLeft: "0%" });
                $(".care>li").first().appendTo(".care");
            });
        }, 3000);
        
        }else {
            

        };
        
        }).resize(); 
    

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

    
  

    


});
