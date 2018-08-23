/*global $ */

$(function(){
    
    
    
 
        $(".header-partie").show();
        $(".flex-container li, div:not(.header, .footer, .text, .pic .text-marge-top), .assez-lu").show(30000);
        $(".text, .pic, .google_translate_element, .text-marge-top").show();
        $(".start, #gif-wrap").hide(300);

    
    $(".assez-lu").click(function(){
        $(".text, .pic, .google_translate_element, .text-marge-top").hide();
        $(".flex-container li, div:not(.header, .footer), .assez-lu").hide(3000);
        $(".assez-lu").hide();
        $(".header-partie").hide();
        $(".start, #gif-wrap").show(3000);
    });
    
    
    
    
    
    
});
  