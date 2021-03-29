
//瀹炰緥鍖杅ullpage
$(function () {
    $('.container').fullpage({
        slidesNavigation: true,
        navigation: true,
        anchors: ['Home',
            'Hot_categories',
            'Artistic_works',
            'Artist',
            'Art_lecture_hall',
            'Design_course',
            'Original_communication',
            'Art_knowledge',
            'Vr_paint_video',
            'Art_information',
            'Art-organization'],
        //杩涘叆
        afterLoad: function (anchorLink, index) {
            switch (index) {
                case 1:
                    break;
                case 2:
                    $('.hots-field .main-title').addClass('fadeInUp');
                    setTimeout(() => {
                        $('.hots-field .field-item:nth-child(1)').addClass('fadeInUpBig');
                    }, 0);
                    setTimeout(() => {
                        $('.hots-field .field-item:nth-child(2)').addClass('fadeInUpBig');
                    }, 50);
                    setTimeout(() => {
                        $('.hots-field .field-item:nth-child(3)').addClass('fadeInUpBig');
                    }, 100);
                    setTimeout(() => {
                        $('.hots-field .field-item:nth-child(4)').addClass('fadeInUpBig');
                    }, 150);
                    setTimeout(() => {
                        $('.hots-field .field-item:nth-child(5)').addClass('fadeInUpBig');
                    }, 200);
                    setTimeout(() => {
                        $('.hots-field .field-item:nth-child(6)').addClass('fadeInUpBig');
                    }, 250);
                    setTimeout(() => {
                        $('.hots-field .more').addClass('fadeInUpBig');
                    }, 300);
                    setTimeout(() => {
                        $('.hots-field .left-chunk').addClass('bounceInLeft');
                    }, 350);
                    setTimeout(() => {
                        $('.hots-field .right-chunk').addClass('bounceInRight');
                    }, 400);
                    break;
                case 3:
                    $('.works-wrap .main-title').addClass('fadeInUp');
                    setTimeout(() => {
                        $('.works-wrap .work-field-list').addClass('fadeInUp').css({ "opacity": "1" });
                    }, 100);
                    break;
                case 4:
                    $('.artist-wrap .main-title').addClass('fadeInUp');
                    setTimeout(() => {
                        $('.artist-wrap .earth').addClass('bounceInUp');
                        $('.artist-wrap .earth').css({ 'opacity': "1" })
                    }, 100);
                    setTimeout(() => {
                        $('.artist-wrap .artist:nth-of-type(2)').addClass('bounceIn');
                    }, 200);
                    setTimeout(() => {
                        $('.artist-wrap .artist:nth-of-type(3)').addClass('bounceIn');
                    }, 300);
                    setTimeout(() => {
                        $('.artist-wrap .artist:nth-of-type(4)').addClass('bounceIn');
                    }, 400);
                    setTimeout(() => {
                        $('.artist-wrap .left-box').addClass('bounceInLeft');
                        $('.artist-wrap .right-box').addClass('bounceInRight');
                        $('.artist-wrap .filed-chunk').css({ 'opacity': "1" })
                    }, 500);
                    setTimeout(() => {
                        $('.artist-wrap .left-img-box').addClass('bounceInLeft').css({ 'opacity': "1" });
                        $('.artist-wrap .right-img-box').addClass('bounceInRight').css({ 'opacity': "1" });
                        $('.artist-wrap .left-img-box')
                    }, 600);
                    break;
                case 5:
                    $('.classromm-wrap .main-title').addClass('fadeInUp');
                    $('.classromm-wrap .search-all').addClass('fadeInUp').css({ "opacity": "1" });
                    setTimeout(() => {
                        $('.classromm-wrap .art-classroom-container .slide-item:nth-child(1)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 50);
                    setTimeout(() => {
                        $('.classromm-wrap .art-classroom-container .slide-item:nth-child(2)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 100);
                    setTimeout(() => {
                        $('.classromm-wrap .art-classroom-container .slide-item:nth-child(3)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 150);
                    setTimeout(() => {
                        $('.classromm-wrap .art-classroom-container .slide-item:nth-child(4)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 200);
                    setTimeout(() => {
                        $('.classromm-wrap .art-classroom-container .slide-item:nth-child(5)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 250);
                    setTimeout(() => {
                        $('.classromm-wrap .art-classroom-container .slide-item:nth-child(6)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 300);
                    setTimeout(() => {
                        $('.classromm-wrap .myswiper-pagnation').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 350);
                    break;
                case 6:
                    $('.course .main-title').addClass('fadeInUp');
                    setTimeout(() => {
                        $('.course .work-field-list').addClass('fadeInUp');
                    }, 50);
                    setTimeout(() => {
                        $('.course .field-more').addClass('fadeInUp');
                    }, 100);
                    setTimeout(() => {
                        $('.course .slide-item:nth-child(1)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 150);
                    setTimeout(() => {
                        $('.course .slide-item:nth-child(2)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 200);
                    setTimeout(() => {
                        $('.course .slide-item:nth-child(3)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 250);
                    setTimeout(() => {
                        $('.course .slide-item:nth-child(4)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 300);
                    setTimeout(() => {
                        $('.course .slide-item:nth-child(5)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 350);
                    setTimeout(() => {
                        $('.course .slide-item:nth-child(6)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 400);
                    setTimeout(() => {
                        $('.course .course-swiper-pagnation').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 500);
                    break;
                case 7:
                    $('.original-communication-wrap .main-title').addClass('fadeInUp');
                    $('.original-communication-wrap .inner-bg-img-box').addClass('bounceInLeft').css({ "opacity": "1" });
                    setTimeout(() => {
                        $('.original-communication-wrap .original-swper-container').addClass('bounceIn').css({ "opacity": "1" });
                    }, 200);
                    break;
                case 8:
                    $('.art-knowledge-wrap .main').addClass('fadeInUp');
                    $('.art-knowledge-wrap .main .main-title').addClass('fadeInUp');
                    setTimeout(() => {
                        $('.art-knowledge-wrap .art-knowledge .slide-item:nth-child(1)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 50);
                    setTimeout(() => {
                        $('.art-knowledge-wrap .art-knowledge .slide-item:nth-child(2)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 100);
                    setTimeout(() => {
                        $('.art-knowledge-wrap .art-knowledge .slide-item:nth-child(3)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 150);
                    setTimeout(() => {
                        $('.art-knowledge-wrap .art-knowledge .slide-item:nth-child(4)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 200);
                    setTimeout(() => {
                        $('.art-knowledge-wrap .art-knowledge .slide-item:nth-child(5)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 250);
                    setTimeout(() => {
                        $('.art-knowledge-wrap .art-knowledge .slide-item:nth-child(6)').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 300);
                    setTimeout(() => {
                        $('.art-knowledge-wrap .myswiper-pagnation').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 400);
                    break;
                case 9:
                    $('.vr-painting .main-title').addClass('fadeInUp');
                    break;
                case 10:
                    $('.art-infomation .main').addClass('fadeInUp');
                    $('.art-infomation .main-title').addClass('fadeInUp');
                    setTimeout(() => {
                        $('.art-infomation .art-article .slide-item:nth-child(1)').addClass('bounceInUp').css('opacity', "1");
                    }, 50);
                    setTimeout(() => {
                        $('.art-infomation .art-article .slide-item:nth-child(2)').addClass('bounceInUp').css('opacity', "1");
                    }, 100);
                    setTimeout(() => {
                        $('.art-infomation .art-article .slide-item:nth-child(3)').addClass('bounceInUp').css('opacity', "1");
                    }, 150);
                    setTimeout(() => {
                        $('.art-infomation .art-article .slide-item:nth-child(4)').addClass('bounceInUp').css('opacity', "1");
                    }, 200);
                    setTimeout(() => {
                        $('.art-infomation .art-article .slide-item:nth-child(5)').addClass('bounceInUp').css('opacity', "1");
                    }, 250);
                    setTimeout(() => {
                        $('.art-infomation .art-article .slide-item:nth-child(6)').addClass('bounceInUp').css('opacity', "1");
                    }, 300);

                    setTimeout(() => {
                        $('.art-infomation .myswiper-pagnation').addClass('bounceInUp').css({ "opacity": "1" });
                    }, 400);
                    break;
                case 11:
                    $('.art-organization .main').addClass('fadeInUp');
                    $('.art-organization .main-title').addClass('fadeInUp');
                    $('#pic_show').addClass('fadeInUp');
                    $('.art-organization .copyright').addClass('fadeInUp');
                    break;
                default:
                    return;
            }
        },
        //绂诲紑
        onLeave: function (index, nextIndex, direction) {
            switch (index) {
                case 1:
                    break;
                case 2:
                    setTimeout(() => {
                        $('.hots-field .main-title').removeClass('fadeInUp');
                        $('.hots-field .field-item').removeClass('fadeInUpBig');
                        $('.hots-field .more').removeClass('fadeInUpBig');
                        $('.hots-field .left-chunk').removeClass('bounceInLeft');
                        $('.hots-field .right-chunk').removeClass('bounceInRight');
                    }, 800);
                    break;
                case 3:
                    $('.works-wrap .main-title').addClass('fadeInUp');
                    break;
                case 4:
                    setTimeout(() => {
                        $('.artist-wrap .main-title').removeClass('fadeInUp');
                        $('.artist-wrap .earth').removeClass('bounceInUp');
                        $('.artist-wrap .earth').css({ 'opacity': "0" });
                        $('.artist-wrap .artist:nth-of-type(2)').removeClass('bounceIn');
                        $('.artist-wrap .artist:nth-of-type(3)').removeClass('bounceIn');
                        $('.artist-wrap .artist:nth-of-type(4)').removeClass('bounceIn');
                        $('.artist-wrap .left-box').removeClass('bounceInLeft');
                        $('.artist-wrap .right-box').removeClass('bounceInRight');
                        $('.artist-wrap .filed-chunk').css({ 'opacity': "0" });
                        $('.artist-wrap .left-box').removeClass('bounceInLeft');
                        $('.artist-wrap .right-box').removeClass('bounceInRight');
                        $('.artist-wrap .filed-chunk').css({ 'opacity': "0" });
                        $('.artist-wrap .left-img-box').removeClass('bounceInLeft').css({ 'opacity': "0" });
                        $('.artist-wrap .right-img-box').removeClass('bounceInRight').css({ 'opacity': "0" });
                        $('.artist-wrap .left-img-box')
                    }, 800);
                    break;
                case 5:
                    setTimeout(() => {
                        $('.classromm-wrap .main-title').removeClass('fadeInUp');
                        $('.classromm-wrap .search-all').removeClass('fadeInUp').css({ "opacity": "0" });
                        $('.classromm-wrap .art-classroom-container .slide-item').removeClass('bounceInUp').css({ "opacity": "0" });
                        $('.classromm-wrap .myswiper-pagnation').removeClass('bounceInUp').css({ "opacity": "0" });
                    }, 800);
                    break;
                case 6:
                    setTimeout(() => {
                        $('.course .main-title').removeClass('fadeInUp');
                        $('.course .work-field-list').removeClass('fadeInUp');
                        $('.course .field-more').removeClass('fadeInUp');
                        $('.course .slide-item').removeClass('bounceInUp').css({ "opacity": "0" });
                        $('.course .course-swiper-pagnation').removeClass('bounceInUp')
                            .css({ "opacity": "0" });
                    }, 800);
                    break;
                case 7:
                    setTimeout(() => {
                        $('.original-communication-wrap .main-title').removeClass('fadeInUp');
                        $('.original-communication-wrap .main-title').removeClass('fadeInUp');
                        $('.original-communication-wrap .inner-bg-img-box').removeClass('bounceInLeft').css({ "opacity": "0" });
                        $('.original-communication-wrap .original-swper-container').removeClass('bounceIn').css({ "opacity": "0" });
                    }, 800);
                    break;
                case 8:
                    setTimeout(() => {
                        $('.art-knowledge-wrap .main').removeClass('fadeInUp');
                        $('.art-knowledge-wrap .main .main-title').removeClass('fadeInUp');
                        $('.art-knowledge-wrap .art-knowledge .slide-item').removeClass('bounceInUp').css({ "opacity": "0" });
                        $('.art-knowledge-wrap .myswiper-pagnation').removeClass('bounceInUp').css({ "opacity": "0" });
                    }, 800);
                    break;
                case 9:
                    $('.vr-painting .main-title').addClass('fadeInUp');
                    break;
                case 10:
                    setTimeout(() => {
                        $('.art-infomation .main-title').removeClass('fadeInUp');
                        $('.art-infomation .search-all').removeClass('fadeInUp').css({ "opacity": "0" });
                        $('.art-infomation .slide-item').removeClass('bounceInUp').css({ "opacity": "0" });
                        $('.art-infomation .myswiper-pagnation').removeClass('bounceInUp').css({ "opacity": "0" });
                    }, 800);
                    break;
                case 11:
                    setTimeout(() => {
                        $('.art-organization .main-title').removeClass('fadeInUp');
                    }, 800);
                    break;
                default:
                    return;
            }
        }
    });

});