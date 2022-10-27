let navList = document.querySelector('.nav_list');
let menuBtn = document.querySelector('.nav_btn');
let menuBrgr = document.querySelector('.burger_menu');
let navMenu = document.querySelector('.nav_menu');
let menuBackground = document.querySelector('.mobile_menu_background');
let menuWrapper = document.querySelector('.mobile_menu_wrapper');
let menuOpen = false;
let mq = window.matchMedia( "screen and (max-width: 1023px)");
let body = document.querySelector('body');

// Toggles the mobile menu
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBrgr.classList.add('open');
        navList.classList.add('menu_visible');
        navMenu.classList.add('mobile_open');
        menuBackground.classList.add('white');
        body.classList.add('body_no_scroll');
        menuWrapper.classList.add('height_100');
        menuOpen = true;
    } else {
        menuBrgr.classList.remove('open');
        navList.classList.remove('menu_visible');
        navMenu.classList.remove('mobile_open');
        menuBackground.classList.remove('white');
        body.classList.remove('body_no_scroll');
        menuWrapper.classList.remove('height_100');
        menuOpen = false;
    }
});

// If screen size goes to desktop while mobile nav is active, toggle it off so it doesn't stay upon after sizing back to mobile
function maxWidthMenu (mq) {
if (mq.matches) {
    console.log("mobile device");
} else {
    menuBrgr.classList.remove('open');
    navList.classList.remove('menu_visible');
    navMenu.classList.remove('mobile_open');
    menuBackground.classList.remove('white');
    body.classList.remove('body_no_scroll');
    menuWrapper.classList.remove('height_100');
    menuOpen = false;
    console.log("desktop");
}
};

// Calling the function that checks screen size
maxWidthMenu(mq);
mq.addListener(maxWidthMenu);

//jQuery that switches menu sections based on button selection and shows active button
$(document).ready(function() {
    $('.soup_btn').click(function(){
        $('.soup').addClass('visible');
        $('.appetizer, .chowmein, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial,.sideorder').removeClass('visible');
        $('.soup_btn').addClass('active');
        $('.appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.appetizer_btn').click(function(){
        $('.appetizer').addClass('visible');
        $('.soup, .chowmein, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.appetizer_btn').addClass('active');
        $('.soup_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.chowmein_btn').click(function(){
        $('.chowmein').addClass('visible');
        $('.soup, .appetizer, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.chowmein_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.friedrice_btn').click(function(){
        $('.friedrice').addClass('visible');
        $('.soup, .appetizer, .chowmein, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.friedrice_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.eggfuyung_btn').click(function(){
        $('.eggfuyung').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.eggfuyung_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.chickenduck_btn').click(function(){
        $('.chickenduck').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice, .eggfuyung, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.chickenduck_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.beef_btn').click(function(){
        $('.beef').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice, .eggfuyung, .chickenduck, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.beef_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.pork_btn').click(function(){
        $('.pork').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.pork_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.chopsuey_btn').click(function(){
        $('.chopsuey').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.chopsuey_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.teppan_btn').click(function(){
        $('.teppan').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.teppan_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.hotpot_btn').click(function(){
        $('.hotpot').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.hotpot_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.seafood_btn').click(function(){
        $('.seafood').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.seafood_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.vegetarian_btn').click(function(){
        $('.vegetarian').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.vegetarian_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .housespecialties_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.housespecialties_btn').click(function(){
        $('.housespecialties').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .chefspecial, .sideorder').removeClass('visible');
        $('.housespecialties_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .chefspecial_btn, .sideorder_btn').removeClass('active');
    });
    $('.chefspecial_btn').click(function(){
        $('.chefspecial').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .sideorder').removeClass('visible');
        $('.chefspecial_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .sideorder_btn').removeClass('active');
    });
    $('.sideorder_btn').click(function(){
        $('.sideorder').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
        $('.sideorder_btn').addClass('active');
        $('.soup_btn, .appetizer_btn, .chowmein_btn, .friedrice_btn, .eggfuyung_btn, .chickenduck_btn, .beef_btn, .pork_btn, .chopsuey_btn, .teppan_btn, .hotpot_btn, .seafood_btn, .vegetarian_btn, .housespecialties_btn, .chefspecial_btn').removeClass('active');
    });
});