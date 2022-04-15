this.$(".box").mouseover(function() {
    $(this).children('img').css({
        'filter': 'grayscale(0)',
        'filter': 'brightness(60%)'
    })
})
this.$(".box").mouseleave(function() {
    $(this).children('img').css({
        'filter': 'brightness(100%)',
        'filter': 'grayscale(100%)'

    })
})
this.$(".container").mouseover(function() {
    $(this).children('.icon1').css({
        'transform': 'scale(1.1)'
    })
})
this.$(".container").mouseleave(function() {
    $(this).children('.icon1').css({
        'transform': 'scale(1.0)'
    })
})


$("#name").blur(function() {
    if (!(/^([a-zA-Z\s]{3,})$/.test($("#name").val()))) {
        if ($("#name").val() == "") {
            $("name").attr('placeholder', 'Your Name')
        } else
            $("#name").attr("placeholder", "Invailid Name !")
    } else {
        $("#name").attr("placeholder", "")

    }
})

$("#email").blur(function() {
    if (!(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/).test($("#email").val())) {
        if ($("#email").val() == "") {
            $("#email").attr("placeholder", "Your Email Id")
        } else {
            $("#email").attr("placeholder", "Invailid Email-Id")
        }
    } else {
        $("#email").attr("placeholder", "")
    }
});
$("#contactno").blur(function() {
    if (!(/^(\+\d{1,3}[- ]?)?\d{10}$/).test($("#contactno").val())) {

        if ($("#contactno").val() == "") {
            $("#contactno").attr("placeholder", "Your PhoneNo");
        } else {
            $("#contactno").attr("placeholder", "Invailid contactno");
        }

    } else {
        $("#contactno").attr("placeholder", "")
    }
});

$("#message").blur(function() {
    if ($("#message").val() != "") {
        $("#message").attr("placeholder", "* Write Message Or Review");
    }
});
$("#sendbtn").click(function() {
    var flag = 1;
    if ($("#name").val() == "") {

        $("#name").attr("placeholder", "Please,Enter your Name!")
        flag = 0;
    }
    if ($("#email").val() == "") {

        $("#email").attr("placeholder", "Please,Enter your MailId!")
        flag = 0;
    }
    if ($("#message").val() == "") {
        $("#message").attr("placeholder", "Please ,Enter Message !!")
        flag = 0;

    }
    if ($("#contactno").val() == "") {
        $("#message").attr("placeholder", "Please ,Enter Contact no !!")
        flag = 0;

    }
    if (flag == 1) {
        alert("Your Message has sent successfuly, Thank you.");
    }

})
AOS.init({

    offset: 200,
    duration: 800
});