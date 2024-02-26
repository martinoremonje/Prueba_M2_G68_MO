$("#send-btn").attr('title', 'Enviar Mensaje');
$("#viajes-chile").attr('title', 'Viajes Chile')

$(document).ready(function(){
 $("#link-1").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
   
    window.location.hash = hash;
    });
    }
 });
});


   