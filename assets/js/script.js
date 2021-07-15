jQuery(document).ready(function () {

    var objConfetty = new UCFonfettyBG();
    objConfetty.run('confettiuc-blox-confetti-bg-bg-addon');

});
// Confetti Background scripts: 
jQuery(document).ready(function () {

    var objConfetty = new UCFonfettyBG();
    objConfetty.run('confettiuc-blox-confetti-bg-bg-addon-temp');

});
// Clean Countdown scripts: 
jQuery(document).ready(function () {
    jQuery('#uc-clean-countdown').countdownUC('2021/11/26 18:00:00', function (event) {
        var jQuerythis = jQuery(this).html(event.strftime('' +
            '<div class="uc_countdown_section first"><span class="uc_countdown_amount">%D</span><span class="uc_countdown_period"> Dias </span></div>' +
            '<div class="uc_countdown_section secound"><span class="uc_countdown_amount">%H</span><span class="uc_countdown_period"> Horas </span></div>' +
            '<div class="uc_countdown_section third"><span class="uc_countdown_amount">%M</span><span class="uc_countdown_period"> Minutos </span></div>' +
            '<div class="uc_countdown_section fourth"><span class="uc_countdown_amount">%S</span><span class="uc_countdown_period"> Segundos </span></div>'));
    });
});
// Solid Color Accordion scripts: 
jQuery(document).ready(function () {
    jQuery('.uc-solid-color-accordion .uc-trigger-uc-uc-solid-color-accordion:first').addClass('active').next().show();
    jQuery('.uc-solid-color-accordion .uc-trigger-uc-uc-solid-color-accordion').click(function () {
        if (jQuery(this).next().is(':hidden')) {
            jQuery('.uc-solid-color-accordion .uc-trigger-uc-uc-solid-color-accordion').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();


        } else {
            jQuery('.uc-solid-color-accordion .uc-trigger-uc-uc-solid-color-accordion').removeClass('active').next().slideUp();
        }


        return false;
    });
});

jQuery(document).ready(function () {

    var objConfetty = new UCFonfettyBG();
    objConfetty.run('confettiuc-blox-confetti-bg-bg-addon-input');

});




function getValues()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    
    
    if (localStorage.getItem("name") && localStorage.getItem("email"))
    {
        clean();
    }


}

function clean()
{
    let name = document.getElementById("name").value ="";
    let email = document.getElementById("email").value="";
}