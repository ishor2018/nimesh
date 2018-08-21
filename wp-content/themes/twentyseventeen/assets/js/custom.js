jQuery( document ).ready(function ( $ ) {

	//filter
	$('ul#catlist li').click(function(){
    var catval = $(this).attr('data-cat');

    $.ajax({
    	url: Ajax.admin_ajax,
    	type: 'POST',
    	data: {
    		action: 'test_list_funct',
    		catval: catval
    	},
    })
    .done(function(response) {
    	console.log("success");
    	$("#test_list").html( response );
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });


    });

    //loadmore
    $("#ldmore").click(function() {

    	 post_collection = [];

    	 /*Loadmore with category*/
    	 	//var catval = $(this).attr('data-cat');
    	 /*Loadmore with category*/

    	 post_collection = count_news_posts('ids');


    	 $.ajax({
	    	url: Ajax.admin_ajax,
	    	type: 'POST',
	    	data: {
	    		action: 'test_load_funct',
	    		post_collection: post_collection,
	    		//for cat
	    		//catval: catval
	    	},
	    	 })
    	 .done(function(response) {
    	 	console.log("success");
    	 	$('#test_list').append(response);
    	 	var success_post_count = count_news_posts('totalposts');
            if (parseInt($('#total_post').val(), 10) == success_post_count) {
                $('#ldmore').hide();
            }
    	 })
    	 .fail(function() {
    	 	console.log("error");
    	 })
    	 .always(function() {
    	 	console.log("complete");
    	 });

    	 var post_count = count_news_posts('totalposts');
	    if (parseInt($('#total_post').val(), 10) == post_count) {
	        $('#ldmore').hide();
	    }



    	 /*-Count Total news Displayed-*/
	    function count_news_posts(retrun_type) {
	        post_collection_last = [];
	        $('#test_list article').each(function() {
	            var postid = $(this).attr('data-id');
	            post_collection_last.push(postid);
	        });
	        if (retrun_type == 'totalposts') {
	            return post_collection_last.length;
	        } else {
	            return post_collection_last;
	        }
	    }

    });




});
