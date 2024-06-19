$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});


function changeReadMore(button) {
    const mybox = button.closest('.mybox');
    const mycontent = mybox.querySelector('.mybox-more');
    const spanMore = mybox.querySelector('.span-more');

    if (mycontent.style.display === 'none' || mycontent.style.display === '') {
        mycontent.style.display = 'inline';
        spanMore.style.display = "none";
        button.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        button.textContent = 'Read More';
        spanMore.style.display = "inline";
    }
}

// Add a document ready function to set initial state
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mybox-more').forEach(el => el.style.display = 'none');
});
