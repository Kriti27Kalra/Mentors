var actLink = 1;

$(document).ready(function(){


/*-------------- Faqs start --------------*/


$('#nav a[data-toggle="tab"]').click(function (e) {
    		e.preventDefault();
		var src = "pgBtns"
		if($(this).hasClass('active'))
		{
			// do nothing because the link is already open
        } else
		{
			var clckdNav = $(this).attr('href');
			openContent(clckdNav, src);
			
		//	alert("i am working");
		}
	});	
	
	$('.aprchTraing h3').click(function(){ 
        var faqDiv = $('.aprchTraing .dtl .dtlPnl').not('.aprchTraing').eq($(this).index('.aprchTraing h3'));
        var faqOthr = $('.aprchTraing .dtlPnl[data-visible="true"]');
		var faqLink = $('.aprchTraing h3.active');
        faqOthr.each(
            function(){
                $(this).slideUp(200,function(){
                    $(this).removeAttr('style data-visible');
					$(this).parent().removeClass('active');
                });
            });
        if (faqDiv.attr('data-visible')) {
            faqDiv.slideUp(200,function(){
                $(this).removeAttr('style data-visible');				
				$(this).parent().removeClass('active');
            });
        }
        else {
            faqDiv.slideDown(500).attr({'data-visible':true});
			faqDiv.parent().addClass('active');
        }	
    });	
		/*-------------- Faqs end --------------*/


// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1100);
          return false;
        }
      }
    });
  });
  
  
  function dsply(pnlNm) {	
	$(pnlNm).slideToggle('slow');	
}




			
		
	


function tglPpPnl(pnlNm) {
	$(pnlNm).fadeToggle();	
}

/*-------------- ddff --------------*/
function openContent(clckdNav, src) {

	var src = src;
	var currentURL = clckdNav;
	if (currentURL == "" || currentURL == null)
	{
		currentURL = window.location.hash;
	}
	if(currentURL == "" || currentURL == null)
	{
		currentURL = $( "#nav" ).find( "a" ).eq(1).attr('href');
	}
	var oldcontent = $('#nav a.active').attr('href');
	var newcontent = currentURL;
	
			console.log(oldcontent + "   " + newcontent);							
	if(oldcontent != newcontent)
	{
		$(oldcontent).fadeOut('fast', function(){
							   $(newcontent).fadeIn('slow', function (){
																	  $(newcontent).removeClass('hide');
								});
			$(oldcontent).addClass('hide');
			});
			$('#nav a').removeClass('active');
			$("a[href='"+newcontent+"']").addClass('active');
	} 
	//window.location.hash = newcontent;		
} 
