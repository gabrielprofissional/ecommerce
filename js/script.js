let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function toggleText() {
    var extraText = document.getElementById('extraText');
    var btn = document.querySelector('.btn');

    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        btn.textContent = 'read less';
    } else {
        extraText.style.display = 'none';
        btn.textContent = 'learn more';
    }
}
window.addEventListener('resize', () => {
    const image = document.querySelector('.home .image img');
    const content = document.querySelector('.home .content');

    if (content.offsetTop < image.offsetHeight) {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
});


var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // Idioma original do seu site
      autoDisplay: false, // Impede a exibição automática da barra de tradução
    }, 'google_translate_element');

    // Detecta o idioma do usuário e traduz automaticamente
    const translator = new google.translate.TranslateElement.TranslateService();
    translator.translatePage(() => {
      // Obtém o idioma detectado
      const detectedLanguage = translator.getDetectedLanguage();
      
      // Configura o idioma de destino para a tradução
      let targetLanguage = 'en'; // Idioma padrão, caso não possa detectar
      
      if (detectedLanguage && detectedLanguage !== 'und') {
        targetLanguage = detectedLanguage;
      }

      // Executa a tradução automática
      new google.translate.TranslateElement({
        pageLanguage: 'en', // Idioma original do seu site
        includedLanguages: targetLanguage, // Idioma para traduzir automaticamente
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Layout do widget de tradução
        multilanguagePage: true // Habilita a tradução de múltiplos idiomas na página
      }, 'google_translate_element');
    });
  }