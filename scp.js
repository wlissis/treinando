function contar(){
    
    //limita a variavel dentro do escopo.
    //só vai servir dentro do escopo 
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let result = document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        result.innerHTML = `Impossivel contar`
        window.alert('[ERRO]')
    }else{
        result.innerHTML = `Contando...`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f ){
            //contagem crescente
            for(let cont = i; cont <= f; cont += p){
                result.innerHTML += `${cont}\u{1F449}`
            }
        }else{
            //contagem regressiva
            for(let cont = i; cont >= f; cont -= p){
                result.innerHTML += `${cont}\u{1F449}`
            }
        } 
        result.innerHTML +=`\u{1F3C1}`
    }
}