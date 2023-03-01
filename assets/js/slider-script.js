$(document).ready(function () {

    

    

    $(document).on("mouseover", ".right", rightIcon)
    $(document).on("mouseover", ".left", leftIcon)

    
    $(document).on("click", ".right", rightIcon)
    $(document).on("click", ".left", leftIcon)


    function rightIcon() {
        let activeImg = $(".active");
        if ($(activeImg).next().length != 0) {
            $(activeImg).removeClass("active");
            $(activeImg).next().addClass("active");
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).parent().children().eq(0).addClass("active");
        }
    }


    function leftIcon() {
        let activeImg = $(".active");

        if ($(activeImg).prev().length != 0) {
            $(activeImg).removeClass("active");
            $(activeImg).prev().addClass("active")
        } else {
            $(activeImg).removeClass("active");
            $(activeImg).parent().children().eq(2).addClass("active");
        }
    }





});