$('.mobile-banner__close i').on('click', function (e) {
        e.preventDefault();
        console.log(e.currentTarget);
        $(this).closest('.footer-banner__wrapper').remove();
    });
    alert('inside file');