$(document).ready(function() {

    $('#carousel').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function() {

        $('nav').slideToggle();

    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('form').validate({

        rules: {

            nome: {
                required: true
            },

            tel: {
                required: true
            },

            email: {
                required: true
            },

            msg: {
                required: true
            },

            veicInte: {
                required: false
            }

        },

        messages: {

            nome: 'Insira seu nome',
            tel: 'Insira um telefone',
            email: 'Insira seu email',
            msg: 'Insira sua mensagem'

        },

        submitHandler: function(form) {

            console.log(form)

        },

        invalidHandler: function(evento, validador) {

            var camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos`)

        }

    })

    $('.lista-veiculos button').click(function() {
        var destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veic-inte').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})