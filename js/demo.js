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
		tag: "fail",
		type: "random",
		rating: "r"
	};
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
        $(".flex-container li, div:not(.header, .footer, .text, .pic .text-marge-top), .assez-lu").show(3000);
        $(".text, .pic, .google_translate_element, .text-marge-top").show();
        $(".start, #gif-wrap").hide(300);
    });

    
    $(".assez-lu").click(function(){
        $(".text, .pic, .google_translate_element, .text-marge-top").hide();
        $(".flex-container li, div:not(.header, .footer), .assez-lu").hide(3000);
        $(".assez-lu").hide();
        $(".header-partie").hide();
        $(".start, #gif-wrap").show(3000);
    });
    
    
    
    
    
    
});
  