var twitterUrl = "https://twitter.com/intent/tweet?text=";
function selectQuote(quoteArray) {
	var randomIndex = Math.floor(quoteArray.length*Math.random());
	return quoteArray[randomIndex];
}


function getQuotes() {
	$.ajax({
		async:false,
		url: "quotes.json",
		dataType: "json",
		success:(function(data){
			var quote = selectQuote(data);
			$(".quote-text").fadeOut("slow", function() {
				$("#quote").text(quote.content);
				$("#author").text(quote.author);
				$("#year").text(quote.year);
				$(".quote-text").fadeIn("slow");
				$("#tweet a").attr("href", twitterUrl+quote.content+" - "+quote.author+" %23minimalism");	
			});
		})
	})
};
$(document).ready(function() {
	getQuotes();
	$(".quote-text").fadeIn("slow");
	$("#new-quote").click(getQuotes);
});
