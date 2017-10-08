var twitterUrl = "https://twitter.com/intent/tweet?text=";
function getQuotes() {
	$.ajax({
		url: "http://test.rjfgo.xyz/udemy/lectures/php/quotescraper.php",
		async: false,
		dataType: "json",
		success:(function(result){
			$(".quote-text").fadeOut("slow", function() {
				$("#quote").text(result.content);
				$("#author").text(result.author);
				$("#year").text(result.year);
				$(".quote-text").fadeIn("slow");
				$("#tweet a").attr("href", twitterUrl+result.content+" - "+result.author+" %23minimalism");	
			});
		})
	})
};
$(document).ready(function() {
	getQuotes();
	$(".quote-text").fadeIn("slow");
	$("#new-quote").click(getQuotes);
});
