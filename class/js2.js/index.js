$(function () {
    let init = function () {
        rander();
        bindEvent();
    }
    let rander = function () {
        SwiperWorks();
        artClassroom();
        newOriginal();
        artCourse();
        artKnowledge();
        artArticle();
    }
    let bindEvent = function () {
        $('.field-item').hover(function () {
            let kw = $(this).find('.person-img img').attr('src').match(/.\/statics\/gtart\/img\/hot_field\/(\S*)_b_icon.png/)[1];
            $(this).find('.person-img img').attr('src', `./statics/gtart/img/hot_field/${kw}_w_icon.png`);
        }, function () {
            let kw = $(this).find('.person-img img').attr('src').match(/.\/statics\/gtart\/img\/hot_field\/(\S*)_w_icon.png/)[1];
            $(this).find('.person-img img').attr('src', `./statics/gtart/img/hot_field/${kw}_b_icon.png`);
        })
        //鑹烘湳浣滃搧鍒囨崲
        $('.works-wrap  .work-field-item').on('click', function () {
            $('.works-wrap .work-field-item').removeClass('active');
            $(this).addClass('active');
            $($('.works-wrap .field-nav .field-more').find('a')).attr('href', $(this).attr('data-url'));
            $('.works-wrap .swiper-works-wrap').removeClass('cur');
            $($('.works-wrap .swiper-works-wrap')[$(this).index()]).addClass('cur');
            console.log($(this).index());
        });
        //璁捐璇剧▼鍒囨崲
        $('.course  .work-field-item').on('click', function () {
            $('.course .work-field-item').removeClass('active');
            $(this).addClass('active');
            $($('.course .field-nav .field-more').find('a')).attr('href', $(this).attr('data-url'));
            $('.course .course-swiper-item').removeClass('cur');
            $($('.course .course-swiper-item')[$(this).index()]).addClass('cur');
        })
    }
    //瀹炰緥鍖栬壓鏈綔鍝佽疆鎾�
    function SwiperWorks() {
        new Swiper('.swiper-works-wrap', {
            autoHeight: true,
            autoplay: true,
            autoplay: {
                disableOnInteraction: false,
            },
            slidesPerView: "auto",
            paginationClickable: true,
            spaceBetween: 46,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    //瀹炰緥鍖栬壓鏈煡璇嗚疆鎾�
    function artKnowledge() {
        new Swiper('.art-knowledge-wrap .art-knowledge', {
            grabCursor: true,
            pagination: {
                el: '.art-knowledge-wrap .my-swiper-pagination',
                clickable: true,
            },
            loop: true,
            navigation: {
                nextEl: '.art-knowledge-wrap .right-angle-box',
                prevEl: '.art-knowledge-wrap .left-angle-box',
            }
        });
    }
    //瀹炰緥鍖栬壓鏈鍫傝疆鎾�
    function artClassroom() {
        new Swiper('.classromm-wrap .art-classroom-container', {
            grabCursor: true,
            pagination: {
                el: '.classromm-wrap .classroom-swiper-pagination',
                clickable: true,
            },
            loop: true,
            navigation: {
                nextEl: '.classromm-wrap .right-angle-box',
                prevEl: '.classromm-wrap .left-angle-box',
            }
        });
    }
    //瀹炰緥鍖栬璁¤绋嬭疆鎾�
    function artCourse() {
        new Swiper('.js-swiper-container', {
            grabCursor: true,
            pagination: {
                el: '.course .my-swiper-pagination',
                clickable: true,
            },
            loop: true,
            navigation: {
                nextEl: '.course .right-angle-box',
                prevEl: '.course .left-angle-box',
            }
        });
    }
    //瀹炰緥鍖栬壓鏈祫璁疆鎾�
    function artArticle() {
        new Swiper('.art-article', {
            grabCursor: true,
            pagination: {
                el: '.article-swiper-pagination',
                clickable: true,
            },
            loop: true,
            navigation: {
                nextEl: '.art-infomation .right-angle-box',
                prevEl: '.art-infomation .left-angle-box',
            }
        });
    }
    //瀹炰緥鍖栧師鍒涗氦娴佽疆鎾�
    function newOriginal() {
        new Swiper('.original-swper-container', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.original-swiper-pagination',
                clickable: true,
            },
            loop: true,
            navigation: {
                nextEl: '.card-left-angle',
                prevEl: '.card-right-angle',
            }
        });
    }

    init();
});
Album.set('#Album');