// $(function () {
//   // $(".dropdown_men").hover(function() {
//   //   var parent = $(this);
//   //   parent.find(".header_dropdown_menu").slideToggle();
//   // });

//   //Табы
//   $(".tabs-tovar-li")
//     .eq(0)
//     .addClass("active");
//   $(".tabs-wrap-tovar")
//     .eq(0)
//     .addClass("active");

//   $(".tabs-tovar").on("click", ".tabs-tovar-li", function () {
//     $(".tabs-tovar")
//       .find(".active")
//       .removeClass("active");

//     $(this).addClass("active");
//     $(".tabs-wrap-tovar")
//       .eq($(this).index())
//       .addClass("active");
//   });

//   //img to svg
//   if ($(".js-svg-img").length) {
//     $(".js-svg-img").each(function () {
//       var $img = $(this);
//       var imgID = $img.attr("id");
//       var imgClass = $img.attr("class");
//       var imgURL = $img.attr("src");

//       $.get(
//         imgURL,
//         function (data) {
//           var $svg = $(data).find("svg");
//           if (typeof imgID !== "undefined") {
//             $svg = $svg.attr("id", imgID);
//           }
//           if (typeof imgClass !== "undefined") {
//             $svg = $svg.attr("class", imgClass + " replaced-svg");
//           }
//           $svg = $svg.removeAttr("xmlns:a");
//           if (!$svg.attr("viewBox") &&
//             $svg.attr("height") &&
//             $svg.attr("width")
//           ) {
//             $svg.attr(
//               "viewBox",
//               "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
//             );
//           }
//           $img.replaceWith($svg);
//         },
//         "xml"
//       );
//     });
//   }

//   // Выпадающее Меню
//   $(document).on("mouseover", ".dropdown_men", function () {
//     var parent = $(this).parent();
//     parent.find(".dropdown_men.active").removeClass("active");

//     $(this).addClass("active");



//     var $data = $(this).attr("data-tab");
//     var $data_toggle = $(".header_dropdown_menu").attr("data-tab");
//     $data_toggle = $data;

//     if ($data == $data_toggle) {
//       $(".header_dropdown_menu").removeClass("active");
//       $('[data-tab="' + $data + '"]').addClass("active");
//     }
//   });

//   $(document).on("mouseleave", ".header_dropdown_menu.active", function () {
//     $(".dropdown_men.active").removeClass("active");
//     $(".header_dropdown_menu").removeClass("active");
//   });

//   $(document).on("mouseleave", ".dropdown_men", function () {
//     $(".dropdown_men").removeClass("active");
//   });


//   $(document).on("click", ".header_menu_burger", function () {
//     $(".burger_menu").toggleClass("burger_open");
//     $(".menu_burger").toggleClass("men_brg");
//     $("body").toggleClass("hidd");
//   });

//   $(document).on("click", ".saidbar_menu_burger", function () {
//     $(".catalogs_saidbar").toggleClass("saidbar_open");
//     $(".saidbar_menu").toggleClass("sdb_btn");
//     $(".saidbar_menu_burger").toggleClass("sdb_mn_brg");
//     $("body").toggleClass("hidd");
//   });

//   $(document).on("click", ".modal_window_close_button", function(){
//     $(".modal_parents").toggleClass("modal_close");
//   });

// });