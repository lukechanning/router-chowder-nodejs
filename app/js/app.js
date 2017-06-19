//   _____             _               _____ _                      _           
//  |  __ \           | |             / ____| |                    | |          
//  | |__) |___  _   _| |_ ___ _ __  | |    | |__   _____      ____| | ___ _ __ 
//  |  _  // _ \| | | | __/ _ \ '__| | |    | '_ \ / _ \ \ /\ / / _` |/ _ \ '__|
//  | | \ \ (_) | |_| | ||  __/ |    | |____| | | | (_) \ V  V / (_| |  __/ |   
//  |_|  \_\___/ \__,_|\__\___|_|     \_____|_| |_|\___/ \_/\_/ \__,_|\___|_|   

$(document).ready(function() {
    
    // fire the scroll into view function
    $(window).on("scroll resize", function() {
        $(".faded").each(function(index, element) {
            if (isScrolledIntoView(element)) {
                $(element).animate({
                    opacity: 1.0
                }, 500);
            }
        });
    });
});

function isScrolledIntoView(elem) {
    var centerY = Math.max(0, (($(window).height() - $(elem).outerHeight()) - 50) +
        $(window).scrollTop());

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

    return elementTop <= centerY && elementBottom >= centerY;
}