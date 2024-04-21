$(document).ready(function(){
    $('#Celular').mask('(00) 00000-0000',);
    $('#cpf').mask('000.000.000-00',);
    $('#cpe').mask('00000-000',);
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            celular:{
                required:true
            },
            cpf:{
                required:true
            },
            cidade:{
                required:true
            },
            endereco:{
                required:true
            },
            cpe:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira seu E-mail',
            celular: 'Por favor, insira seu celular',
            endereco: 'Por favor, insira seu endereço',
            cpf: 'por favor, insira seu CPF',
            cidade: 'por favor, insira a cidade',
            cpe:'por favor, insira o CPE'
        },
    })
})