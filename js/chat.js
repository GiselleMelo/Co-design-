document.addEventListener('DOMContentLoaded',function(){
    let inp = document.querySelectorAll('input')
    barra = inp[0]
    btn = inp[1]
    var func = function(event){
        voltar = document.querySelector('#voltar')
        pai = document.querySelector('#mensagens')
        bloco = document.createElement('li')
        bloco.classList.add('bloco2')
        pai.appendChild(bloco)
        msg = document.createElement('ul')
        bloco.appendChild(msg)
        li_txt = document.createElement('li')
        li_txt.innerHTML = barra.value
        msg.appendChild(li_txt)
        li_pho = document.createElement('li')
        msg.appendChild(li_pho)
        pho = document.createElement('img')
        pho.src = 'https://blogdoiphone.com/wp-content/uploads/2014/11/tiques.png'
        pho.classList.add('visualizado')
        li_pho.appendChild(pho)
        li_time = document.createElement('li')
        li_time.classList.add('hor')
        var date = new Date()
        horario = date.getHours() + ':' + date.getMinutes()
        li_time.innerHTML = horario
        msg.appendChild(li_time)
        barra.value = ''
    }
    btn.addEventListener('click',func)
    document.addEventListener('keyup',function(event){
        if (event.key == 'Enter'){
            console.log('foi')
            func(event)
        } 
    })
})
