
document.getElementById('IdLinkVk').addEventListener('click', function LinkVk() {

    window.location.href ='https://vk.com/arturvladimirovichh';
    
});

document.getElementById('IdLinkTelegram').addEventListener('click', function LinkTelegram() {

    window.location.href ='https://t.me/faunra';
    
});


document.getElementById('IdLinkGithub').addEventListener('click', function LinkGithub() {
    window.location.href ='https://github.com/Artur78r';
});







let scrolled;
let timer;

document.getElementById('buttonNext').onclick = function(){
    scrolled = window.pageYOffset;
    window.scrollTo(0,820);
    console.log(window.pageYOffset)


    // scrollToTop();
}