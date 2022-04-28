// переменные
// let header = document.querySelector('.header');

// функция подключения файлов со скриптами 
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// include("./js/parts/slider.js");
// include("./js/parts/header.js");
// include("./js/parts/accordion.js");
// include("./js/parts/menu.js");
// include("./js/parts/modal.js");
// include("./js/parts/smooth-scroll.js");
// include("./js/parts/form-validation.js");