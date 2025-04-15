const mediaQueryCelularSelect = window.matchMedia('(max-width: 1024px)');
const mediaQueryCelular = mediaQueryCelularSelect.matches;

const mediaQueryTabletSelect = window.matchMedia('(min-width: 1024px) and (max-width: 1728px)');
const mediaQueryTablet = mediaQueryTabletSelect.matches;

const mediaQueryDesktopSelect = window.matchMedia('(min-width: 1728px)');
const mediaQueryDesktop = mediaQueryDesktopSelect.matches;

const menuHamburguer = document.getElementById('menu-hamburguer');
const listaMenuCelular = document.getElementById('lista-menu-celular');
const categorias = document.getElementById('categorias');
const listaMenuTablet = document.getElementById('lista-menu-tablet');

if(mediaQueryCelular){
  let swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    //effect: 'flip',
    //flipEffect: {
     // slideShadows: false,
    //},
  });

  menuHamburguer.addEventListener('click', function() {
    if(displayAtualCelular() === "none"){
      listaMenuCelular.style.display = 'block';
      menuHamburguer.src = 'img/Menu Aberto.svg';
      menuHamburguer.style.background = 'var(--linear-gradient)';
    } else{
      listaMenuCelular.style.display = 'none';
      menuHamburguer.src = 'img/Menu.svg';
      menuHamburguer.style.background = 'none';
    }
  });  
}

if(mediaQueryTablet){
  let swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  categorias.addEventListener('click', function(){
    if(displayAtualTablet() === 'none'){
      listaMenuTablet.style.display = 'block';
      categorias.style.background = 'var(--linear-gradient)';
      categorias.style.color = 'var(--color-text1)';
  
    }else{
      listaMenuTablet.style.display = 'none';
      categorias.style.background = 'var(--color-text1)';
      categorias.style.color = 'var(--color-text3)';
    }
  });  
}

if(mediaQueryDesktop){
  let swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function abrirMenuCategorias(){
    if (displayAtualTablet() === 'none'){
      listaMenuTablet.style.display = 'block';
      categorias.style.background = 'var(--linear-gradient)';
      categorias.style.color = 'var(--color-text1)';
    }
  }
  
  categorias.addEventListener('mouseover', abrirMenuCategorias);

  function fecharMenuCategorias(event){
    if(!categorias.contains(event.relatedTarget) && !listaMenuTablet.contains(event.relatedTarget)){//evento de transição
      listaMenuTablet.style.display = 'none';
      categorias.style.background = 'var(--color-text1)';
      categorias.style.color = 'var(--color-text3)';
    }
  }

  categorias.addEventListener('mouseleave', fecharMenuCategorias);
  listaMenuTablet.addEventListener('mouseleave', fecharMenuCategorias);
}


function fecharMenu(){
  if(displayAtualCelular() === 'block'){
    listaMenuCelular.style.display = 'none';
    menuHamburguer.src = 'img/Menu.svg';
    menuHamburguer.style.background = 'none';
  }

  if(displayAtualTablet() === 'block'){
    listaMenuTablet.style.display = 'none';
    categorias.style.background = 'var(--color-text1)';
    categorias.style.color = 'var(--color-text3)';
  }
};

document.addEventListener('click', function(event){
  if(displayAtualCelular() === 'block'){
    if(!listaMenuCelular.contains(event.target) && !menuHamburguer.contains(event.target)){
      fecharMenu();  
    }  
  }
  
  if(displayAtualTablet() === 'block'){
    if(!listaMenuTablet.contains(event.target) && !categorias.contains(event.target)){
      fecharMenu();
    }  
  }
});

window.addEventListener('scroll', function(){
  if(displayAtualCelular() === 'block'){    
    fecharMenu();
  }

  if(displayAtualTablet() === 'block'){
    fecharMenu();
  }
});

function displayAtualCelular(){
  let displayAtualCelular = window.getComputedStyle(listaMenuCelular).display;
  return displayAtualCelular;
}

function displayAtualTablet(){
  let displayAtualTablet = window.getComputedStyle(listaMenuTablet).display;
  return displayAtualTablet;
}
