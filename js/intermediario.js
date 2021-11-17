document.addEventListener('DOMContentLoaded',function(event){
    pessoas = localStorage.getItem('pessoas')
    var main = document.querySelector('main')
    pessoas.array.forEach(par => {
        nome = par[0]
        imagem = par[1]
        div = document.createElement('div')
        main.appendChild(div)
        im = document.createElement('img')
        im.src = imagem
        div.appendChild(im)
        h2 =  document.createElement('h2')
        h2.innerHTML = nome
        div.appendChild(h2) 
    });
})