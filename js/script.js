$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    /* 
        $('#placaDeCarro).mask('SSS-0000')
        placeholder: 'ABC-1234'

        $('#data).mask('00/00/0000')
        placeholder: '__/__/____'
    */

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculodeinteresse: {
                required: true
            }


        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            alert('Enviado!')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
            
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeveiculo = $(this).parent().find('h3').text()

        $('#veiculodeinteresse').val(nomeveiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})