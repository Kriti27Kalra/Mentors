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
});

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
