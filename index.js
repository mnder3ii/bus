$(document).ready(function() {

    function updateIconVisibility() {
        const windowHeight = $(window).height();
        const scrollY = window.scrollY;
        const homeSectionOffset = $("#home").offset().top;
        const aboutSectionOffset = $("#about").offset().top;
        const shopSectionOffset = $("#shop").offset().top;

        if (scrollY >= homeSectionOffset && scrollY < aboutSectionOffset) {
            $("#home-icon").fadeIn();
            $("#about-icon").fadeOut();
            $("#shop-icon").fadeOut();
            $("#contact-icon").fadeOut();
        } else if (scrollY >= aboutSectionOffset && scrollY < shopSectionOffset) {
            $("#home-icon").fadeOut();
            $("#about-icon").fadeIn();
            $("#shop-icon").fadeOut();
            $("#contact-icon").fadeOut();
        } else if (scrollY >= shopSectionOffset) {
            $("#home-icon").fadeOut();
            $("#about-icon").fadeOut();
            $("#shop-icon").fadeIn();
            $("#contact-icon").fadeOut();
        } else {
            $("#home-icon").fadeOut();
            $("#about-icon").fadeOut();
            $("#shop-icon").fadeOut();
            $("#contact-icon").fadeIn();
        }
    }

    function updateVisibility() {
        const windowWidth = $(window).width();
        const scrollY = window.scrollY;

        if (windowWidth > 989) {
            if (scrollY <= 2450) {
                $("#sid-w").fadeIn();
                $("#smo-hd").fadeOut();
            } else {
                $("#sid-w").fadeOut();
                $("#smo-hd").fadeIn();
            }
        } else {
            $("#sid-w").fadeOut();
            $("#smo-hd").fadeIn();
        }

        if (scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }

        if (windowWidth < 770) {
            $("#big-tt").fadeOut();
        } else {
            $("#big-tt").fadeIn();
        }

    }


    $(window).resize(function() {
        updateIconVisibility();
        updateVisibility();

        var windowWidth = $(window).width();

        if (windowWidth > 989) {
            $("#short-aboutus").fadeOut(function() {
                $("#long-aboutus").fadeIn();
            });
            $("#shop-sml").fadeOut(function() {
                $("#shop").fadeIn();
            });
        } else {
            $("#long-aboutus").fadeOut(function() {
                $("#short-aboutus").fadeIn();
            });
            $("#shop").fadeOut(function() {
                $("#shop-sml").fadeIn();
            });
        }
    });

    $(window).scroll(function() {
        updateIconVisibility();
        updateVisibility();
    });

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $("#call-us").click(function() {
        // Replace the phone number with the actual number you want to dial
        window.location.href = "tel:+000000000";
    });

    // Function to handle the "Send an E-mail" button click
    $("#send-mail").click(function() {
        // Replace the email address with the actual email you want to use
        window.location.href = "mailto:info@example.com";
    });



    // Open the modal
    $(".cont-contme").on("click", function () {
        $("#modalSheet").modal("show");
    });

    // Close the modal
    $(".btn-close").on("hidden.bs.modal", function () {
        // No need to remove the "modal-open" class manually
    });
    
    // Initial visibility update
    updateIconVisibility();
    updateVisibility();

    // Trigger the resize event once on page load
    $(window).trigger('resize');
});

$("#shop-link").on("click", function(event) {
    event.preventDefault();

    const windowWidth = $(window).width();
    const target = windowWidth > 989 ? "#shop" : "#shop-sml";

    $("html, body").scrollTop($(target).offset().top);
});

