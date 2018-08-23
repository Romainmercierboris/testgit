/*global $ */

$(function(){
    /**$(".flex-container li").hide(30000);**/
    
    $(document).ready(function() {
	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 10;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		key: "dc6zaTOxFJmzC",
		tag: "pluton",
		type: "random",
		rating: "r"
	};
        
        /**fail puke flashy**/
        
	// Target gif-wrap container
	const $gif_wrap = $("#gif-wrap");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.key +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		// Set gif as bg image
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});

		// Start duration countdown
		refreshRate();
	};

	// Call for new gif after duration
	var refreshRate = () => {
		// Reset set intervals
		clearInterval(refresh);
		refresh = setInterval(function() {
			// Call Giphy API for new gif
			newGif();
		}, duration);
	};

	// Call Giphy API for new gif
	newGif();
});

    
    
       
    
    
    
    
    
    
    

    $("li, div:not(.header, .footer), .assez-lu").hide(300);
    
    
    $(".start").click(function(){
        $(".header-partie").show();
        $("#blagues li, div:not(.header, .footer, .text, .pic, .text-marge-top), .assez-lu").show(3000);
        $("#text-blagues div, .google_translate_element, .text-marge-top").show();
        $(".start, .start-presse, .start-stories, #gif-wrap").hide(300);
    });

    
   $(".start-presse").click(function(){
        $(".header-partie").show();
        $("#presse li, div:not(.header, .footer, .text, .pic, .text-marge-top), .assez-lu").show(3000);
        $("#text-presse div, .google_translate_element, .text-marge-top").show();
        $(".start, .start-presse, .start-stories, #gif-wrap").hide(300);
        
    });
   
    $(".start-stories").click(function(){
        $(".header-partie").show();
        $("#stories li, div:not(.header, .footer, .text, .pic, .text-marge-top), .assez-lu").show(3000);
        $("#text-stories div, .google_translate_element, .text-marge-top").show();
        $(".start, .start-presse, .start-stories, #gif-wrap").hide(300);
        
    });
    
    $(".assez-lu, .text-titre").click(function(){
        $(".text, .pic, .google_translate_element, .text-marge-top").hide();
        $(".flex-container li, div:not(.header, .footer), .assez-lu").hide(3000);
        $(".assez-lu").hide();
        $(".header-partie").hide();
        $(".start, .start-presse,.start-stories, #gif-wrap").show(3000);
    });
    
    
    
    
    
    
});
  