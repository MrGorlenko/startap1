// $(document).ready(function(){
//     var use_privacy = true;
//     $('#form1').on('submit', function (e){

//     }
// });
$(function () {
    var use_privacy = true;
    $('#form1').on('submit', function (e) {

        if (use_privacy) {
            if (!$(this).find('input[name=privacy]').prop('checked')) {
                alert('Для продолжения вы должны дать согласие на обработку персональных данных');
                return false;
            }
        }

        //Тут код отправки формы
        // document.write('Форма успешно отправлена!');

        e.preventDefault();
    });
});

$(function () {
    var use_privacy = true;
    $('#form2').on('submit', function (e) {

        if (use_privacy) {
            if (!$(this).find('input[name=privacy]').prop('checked')) {
                alert('Для продолжения вы должны дать согласие на обработку персональных данных');
                return false;
            }
        }

        //Тут код отправки формы
        document.write('Форма успешно отправлена!');

        e.preventDefault();
    });
});