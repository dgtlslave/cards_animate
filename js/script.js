
$(document).ready(function() {


    $('.steck').on('click', function(e) {

        $(this).find('.card_r').toggleClass('card_r_rotate');
        $(this).find('.card_a').toggleClass('card_a_rotate');
    });


});

// '.card_r'
// '.card_a'

// <script>
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggleClass("main");
//     });
// });
// </script>
