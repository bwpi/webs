$(document).ready(function(){
	$("body").on("click",".close",function(){ 
		$(this).parent('form').siblings('.add').show(1000)
		$(this).parent('form').hide(1000).remove()
	})
	$(".add").click(function(e){
		e.preventDefault()
		t=$(this)
		href=$(this).attr("href")
		$.ajax({
			url:""+href,
			method:"get",
			data:{},
			success:function(data){
				$(t).after(data).find('form>div').removeClass();                 
				$(t).hide(1000)
				console.log(t)
			}
		})    			
	});    
    $("#vid").click(function(e){
        e.preventDefault()
        console.log('dfsd')
        $("div").removeClass('tabakov');
       
    });


});    	