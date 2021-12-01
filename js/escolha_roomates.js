document.addEventListener('DOMContentLoaded',function(){
    let imgs = document.querySelectorAll(".profile")
    imgs.forEach(img => {

        img.addEventListener('click',function(event){
            window.location.href= 'chat.html';
        })

    });

})