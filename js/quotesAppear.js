
document.addEventListener('DOMContentLoaded', function() {
    let quotes = document.querySelectorAll('.astrology_quote');
 
    function checkQuotesVisibility() {
        let windowHeight = window.innerHeight;
 
        quotes.forEach((quote) => {
            let quotePosition = quote.getBoundingClientRect().top;
 
            if (quotePosition < windowHeight - 100) {
                quote.style.opacity = "1";
                quote.style.transform = "translateY(0)";
            }
        });
    }
 
    checkQuotesVisibility()
 
    window.addEventListener('scroll', function() {
        checkQuotesVisibility()
    });
});