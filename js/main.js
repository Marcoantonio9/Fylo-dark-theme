let confEmail = () =>{
    let infoEmail =document.querySelector('#formulario').value 
    if(infoEmail === ''){
        alert('Preencha o campo corretamente, por favor!')
    }else{
        alert('E-mail enviado com sucesso!')
    }
}