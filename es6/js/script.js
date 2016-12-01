$(function () {


    const html = $('#test11').html();
    const bod = $('.wrapper');


    const test = {
        question: [
            {
                text: '1. Для чего используется конструкция try-catch в javascript?',
                answer: [
                    {text: 'Для обработки возможных ошибок', check: true},
                    {text: 'Для генерирования ошибок.', check: false},
                    {text: 'Для замены условного оператора if', check: false}
                ]
            },

            {
                text: '2. Какой формат передачи данных наиболее распостранен?',
                answer: [
                    {text: 'XML', check: false},
                    {text: 'JSON', check: true},
                    {text: 'TXT ', check: false}
                ]
            },

            {
                text: '3. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
                answer: [
                    {text: 'localStorage', check: true},
                    {text: 'LocalStorage', check: false},
                    {text: 'Storage', check: false}
                ]
            }
        ]
    };

    const content = tmpl(html, {
        data: test
    });

    bod.append(content);

    localStorage.setItem('test', JSON.stringify(test));
    let page1 = localStorage.getItem('test');
    let myDat = JSON.parse(page1);
    console.log(myDat);

    let rightAnswers = [];
    for (let i = 0; i < myDat.question.length; i++) {
        for (let j = 0; j < myDat.question[i].answer.length; j++) {
            let currentAnswer = myDat.question[i].answer[j].check;
            rightAnswers.push(currentAnswer);
        }
    }
    console.log(rightAnswers);

    let givenAnswers = [];
    $('.class_modal').on('click', () => {

        $('input[type="checkbox"]').each(function () {
            if ($(this).prop('checked')) {
                givenAnswers.push(true);
            } else {
                givenAnswers.push(false);
            }
        });
        console.log(givenAnswers);


        const $result1 = 'Отличный результат!';
        const $result2 = 'Не правильно, попробуй еще раз.';
        let result1 = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
        if (result1 == true) {
            $('#modalText').html($result1);
        } else {
            $('#modalText').html($result2);

        }
        localStorage.clear();

        console.log(result1);

    });


    let form = $('.form');

    let modalWindow = () => {
        $('#modal').click((event) => {
            event.preventDefault();
            $('#overlay').fadeIn(400,
                function () {
                    $('#modal_form')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                });
        });
        $('#modal_close, #overlay').on('click', function () {
            $('#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                        $('.form').each((index, element) => {
                            element.reset();
                            givenAnswers = [];
                        });
                    }
                );
            localStorage.clear();
            console.log(localStorage);

        });
    };
    modalWindow();

});
