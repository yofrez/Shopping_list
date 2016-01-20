$(document).ready(function(){
$('form').submit(function(){
	var value = $('input[type=text]').val();
	$('ul').append("<li> <input type='checkbox'> "+value+"</li>");
	return false;
});

$('ul').on("click",'input', function(){
// check if checkbox is selected 
	if ($(this).prop( "checked")){ 
// if check box is check select parent element and add strike through css 
		$(this).parent().css("text-decoration", "line-through")
// if checkbox is not check remove strike through of css of parent. 
	}
	else { $(this).parent().css("text-decoration", "none");
	}

})

	// $('ul').on("click",'li',  function() {
	// $(this).remove();
	//  });
  


  })
