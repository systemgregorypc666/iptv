// Vars

// Parallax
if (!Modernizr.touchevents) {
    // Skrollr
    //var s = skrollr.init();
}

// FunÃ§Ãµes
function fullscreen(elemento, offset) {
    
    if(!offset){
        offset = 0;    
    }
    
    $(elemento).stop().animate({
        //width: $(window).width(),
        height: $(window).height() + (offset)
    }, 300, function(){
        // Parallax
        if (!Modernizr.touchevents) {
            // Skrollr
            //s.refresh();
        }
    });

    //$(window).trigger('resize');
    
}

function offset(elemento){
    
    var offset = $(elemento).data("offset");
    var tamanhoH = $(elemento).height() - (offset);
    
    //aplica
    $(elemento).css('margin-top',tamanhoH);
}

//Ajustar tamanho do header e offset
$(window).on("load resize", function(){
    fullscreen(".fullscreen-js");
    offset(".offset");
});


$(document).ready(function () {
    
    RunFunctions.forEach(function (callback) {
        callback();
    });
    
    //Se existir linha de noticias, coloca animacao
    $(".destaque a, .destaque a").mouseover(function(){
        $(this).find(".txt").stop().animate({ /*scale: 1.009,*/ borderWidth: 12 }, 200, 'easeOutQuint');
    });
    $(".destaque a, .destaque a").mouseout(function(){
        $(this).find(".txt").stop().animate({ /*scale: 1.0,*/ borderWidth: 0 }, 800, 'easeOutQuint');
    });

    // Append .background-image-holder <img>'s as CSS backgrounds
    $('.background-image-holder').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', 'initial');
    });

    // Fade in background images

    setTimeout(function () {
        $('.background-image-holder').each(function () {
            $(this).addClass('fadeIn');
        });
    }, 200);

    // Slider home
    /*var swiperHome = new Swiper('#home .swiper-container', {
        nextButton: '#home .swiper-button-next',
        prevButton: '#home .swiper-button-prev',
        loop: true,
        autoplay:3000,
        speed:800,
        grabCursor: true,
    });
	*/

    
    //SIDEBARES
    if (!Modernizr.touchevents) {
        
        var offset = 0;
        var offsetBottom = 0;
        
        if($('.sidebar-sticky').data('sticky-offset')){
            offset = $('.sidebar-sticky').data('sticky-offset');
        }
        if($('.sidebar-sticky').data('sticky-offset-bottom')){
            offsetBottom = $('.sidebar-sticky').data('sticky-offset-bottom');
        }
        
        $('.sidebar-sticky').hcSticky({
            top: offset,
            bottom: offsetBottom
        });
    }

});


/* HEADER MENU */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = $('.navbar-default'),
		didScroll = false,
		changeHeaderOn = 64;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.addClass('shrink');
			//$("#logotipo").prop("src","assets/img/logo.png");
		}
		else {
			header.removeClass('shrink');
			//$("#logotipo").prop("src","assets/img/logo-w.png");
		}
		didScroll = false;
        console.log("scroll");
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}
    
    if(!header.hasClass('estatico')){
        init();
    }

})();

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//CARREGA MODAL DINAMICS
function CarregaModalDinamica(url, callback) {
    var holder = $("#modalDinamica .conteudo");

    $("#modalDinamica").modal("show", {backdrop: 'static'});

    //Cancela o request antigo
    if (typeof (xhr) != "undefined")
        xhr.abort();

    if (!callback) {
        callback = function () { };
    }

    //Realiza o loader
    holder.stop().empty().html('<div class="relative text-center m-t-40"><br><i class="text-white fa fa-circle-o-notch fa-spin fa-5x"></i><h3 id="modalDinamicaLabel" class="semi-bold"><span class="text-white">Carregando...</span></h3></div>');
    xhr = $.ajax({
        url: url,
        success: function (data) {
            holder.stop().fadeOut(200, function () {
                $(this).empty().html(data).fadeIn(400, function(){ $(window).trigger('resize'); });
                //$(this).empty().html(data).show().trigger('resize');
                callback();
            });
        }
    });

    //Cancela o request ao fechar
    $('#modalDinamica').on('hidden.bs.modal', function () {
        if (typeof (xhr) != "undefined")
            xhr.abort();

        holder.empty();
    });

    $('#modalDinamica').on('show', function () {
        $(this).find('.modal-dialog').css({width:'auto',
                               height:'auto', 
                              'max-height':'100%'});
    });

}
