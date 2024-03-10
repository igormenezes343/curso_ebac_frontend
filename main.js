const form = document.getElementById('form-numerico');

form.addEventListener('submit',function(e){
    e.preventDefault();


    const campoAinput = document.getElementById('campo-a');
    const campoBinput = document.getElementById('campo-b');

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemVerdade = `O numero ${campoB} é maior que o numero ${campoA}`;
    const mensagemFalso = `O numero ${campoB} é menor que o numero ${campoA}`;

    if (campoA < campoB) {
        const containerVerdade = document.querySelector('.mensagen-verdade')
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block'
        
    }
    else{
        const containerFalso = document.querySelector('.menesagen-falso')
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block'
        
    }
})
