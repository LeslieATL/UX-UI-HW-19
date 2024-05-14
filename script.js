console.log("My console is working");

// button animations
$(document).ready(function(){
    // Function to add shaking animation to the button
    function shakeButton() {
        $(".button").addClass("shake");
        $(".button").color
        setTimeout(function() {
            $(".button").removeClass("shake");
        }, 1000); // Remove the 'shake' class after 1 second
    }

    // Event listener for button on hover
    $("#button1").hover(function(){
        shakeButton();
    });
});
