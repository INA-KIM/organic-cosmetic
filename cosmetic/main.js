$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    anchors: ["오가닉이야기", "오가닉제품", "오가닉유래", "프로모션"],
    navigation: true,
    sectionsColor: ["#fff", "#fff"],
    afterLoad: function (anchoorLink, index) {
      console.log("현재 섹션 번호는" + index);
      if (index == 2) {
        // alert("프로모션중입니다.");
      }
    },
  });
});

$(document).ready(function () {
  $(".menu_btn>a").on("click", function () {
    $(".fullscreen_menu").fadeIn();
  });
  $(".close_btn>a").on("click", function () {
    $(".fullscreen_menu").hide();
  });
});

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.getElementsById("#input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
