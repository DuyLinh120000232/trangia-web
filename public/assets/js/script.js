$( document ).ready(function() {
    $('#btn-more').on('click', function () {
        if ($('.gioithieu__chitiet').hasClass('d-none')) {
            $('.gioithieu__chitiet').removeClass('d-none');
            $(this).addClass('d-none');
            $('#btn-less').removeClass('d-none');
        }
    })
    $('#btn-less').on('click', function () {
        if (!$('.gioithieu__chitiet').hasClass('d-none')) {
            $('.gioithieu__chitiet').addClass('d-none');
            $(this).addClass('d-none');
            $('#btn-more').removeClass('d-none');
        }
    })
});