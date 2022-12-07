
// Animação do Menu Hamburger

$(document).ready(function () {
    $(".hamburguer").click(function () {
    $(this).toggleClass("hamburguer-active");
    $(".nav-list-mobile").toggleClass("nav-list-mobile-active");
    });
});



    const $banner = document.querySelector('.banner');
    const $bannerBtn = document.querySelector('.banner_close')
    $bannerBtn.addEventListener('click', closeBanner)
    
    function showBanner (){
    // console.log('ok')
    $banner.style.display = 'block';
}

setTimeout(showBanner, 3000);

function closeBanner (){
        $banner.parentNode.removeChild($banner)
 }








