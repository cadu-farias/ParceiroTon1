function slideCards(direction) {
    let cards = document.querySelectorAll('.col-sm-6');
    let firstCard = cards[0];
    let cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    let cardsContainer = document.querySelector('.row-cols-md-3');
    let scrollPosition = cardsContainer.scrollLeft;
    if (direction === 'right') {
      cardsContainer.scroll({
        left: scrollPosition + (cardWidth * 1),
        behavior: 'smooth'
      });
    } else if (direction === 'left') {
      cardsContainer.scroll({
        left: scrollPosition - (cardWidth * 1),
        behavior: 'smooth'
      });
    }
  }


 // Seleciona o botão de link para o modal
const cookieLink = document.getElementById('cookieButton');

// seleciona o bottom de cookie

const menucookie = document.getElementById('cokie');


// Seleciona o botão de aceitar todos


// Seleciona o modal do consentimento de cookies
const cookieModal = document.getElementById('cookieModal');

// Seleciona o botão para salvar as preferências
const savePreferencesButton = document.getElementById('savePreferencesButton');

// Seleciona os checkboxes de cada tipo de cookie
const functionalCheckbox = document.getElementById('functionalCheckbox');
const analyticalCheckbox = document.getElementById('analyticalCheckbox');
const advertisingCheckbox = document.getElementById('advertisingCheckbox');

// Define um objeto com as preferências de cookies padrão
let cookiePreferences = {
  functional: true,
  analytical: true,
  advertising: false
};

// Verifica se o usuário já definiu suas preferências de cookies
if (localStorage.getItem('cookiePreferences')) {
  cookiePreferences = JSON.parse(localStorage.getItem('cookiePreferences'));

  // Define o estado dos checkboxes com base nas preferências do usuário
  functionalCheckbox.checked = cookiePreferences.functional;
  analyticalCheckbox.checked = cookiePreferences.analytical;
  advertisingCheckbox.checked = cookiePreferences.advertising;
}else{
  menucookie.classList.remove("d-none");
  const cookieTodos = document.getElementById('cookieTodo').addEventListener("click", function() {
    let cookiePreferences = {
      functional: true,
      analytical: true,
      advertising: true
    };
    if (localStorage.getItem('cookiePreferences')) {
      cookiePreferences = JSON.parse(localStorage.getItem('cookiePreferences'));
    }
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    menucookie.classList.add("d-none");
  })
}

// Função para salvar as preferências de cookies do usuário
function saveCookiePreferences() {
  // Define as preferências de cookies com base nos checkboxes
  cookiePreferences.functional = functionalCheckbox.checked;
  cookiePreferences.analytical = analyticalCheckbox.checked;
  cookiePreferences.advertising = advertisingCheckbox.checked;

  // Salva as preferências de cookies no localStorage
  localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));

  // Fecha o modal do consentimento de cookies
  cookieModal.classList.remove('show');
  cookieModal.setAttribute('aria-hidden', true);
  document.body.classList.remove('modal-open');
  cookieModal.style.display = 'none';
  menucookie.classList.add("d-none");
}

// Adiciona um listener de evento para exibir o modal do consentimento de cookies

cookieLink.addEventListener('click', function(){
  cookieModal.classList.add('show');
  cookieModal.setAttribute('aria-hidden', false);
  document.body.classList.add('modal-open');
  cookieModal.style.display = 'block';
  
})
// window.addEventListener('load', function() {
//   if (localStorage.getItem('cookiePreferences')) {
//     setTimeout(function() {
//       cookieModal.classList.add('show');
//       cookieModal.setAttribute('aria-hidden', false);
//       document.body.classList.add('modal-open');
//       cookieModal.style.display = 'block';
//     }, 1000);
//   }
// });

// Adiciona um listener de evento para o botão de salvar as preferências
savePreferencesButton.addEventListener('click', function() {
  saveCookiePreferences();
});


// Seleciona todos os botões da página
var botoes = document.getElementsByClassName("btn-success");

const maquinat3 = document.getElementById("maquinat3")
const valorantigo = document.getElementById("valorantigo")
const valornovo = document.getElementById("valornovo")
const parcela = document.getElementById("parcela")
const economize = document.getElementById("economize")

const maquinat2 = document.getElementById("maquinat2")
const valorantigo1 = document.getElementById("valorantigo1")
const valornovo1 = document.getElementById("valornovo1")
const parcela1 = document.getElementById("parcela1")
const economize1 = document.getElementById("economize1")

const maquinat1 = document.getElementById("maquinat1")
const valorantigo2 = document.getElementById("valorantigo2")
const valornovo2 = document.getElementById("valornovo2")
const parcela2 = document.getElementById("parcela2")
const economize2 = document.getElementById("economize2")

const balao = document.getElementById("balao")
const balao1 = document.getElementById("balao1")
const balao2 = document.getElementById("balao2")


const PromoTon1 = document.getElementById("PromoTon1")
const PromoTon2 = document.getElementById("PromoTon2")
const PromoTon3 = document.getElementById("PromoTon3")

const t3 = document.getElementById('t3')
const t2 = document.getElementById('t2')
const t1 = document.getElementById('t1')

// Adiciona um evento de clique a cada botão
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function(event) {
    // Verifica se o id do botão clicado é o desejado
    if (event.target.id === "PromoTon") {
      // Executa a função específica
      maquinat3.innerHTML = "T3 PromoTon";
      valorantigo.innerHTML = "R$418,80"
      valornovo.innerHTML = 'Pague <span style="font-weight: 900;">R$376,92</span>'
      parcela.innerHTML = 'R$31,41'
      economize.innerHTML = 'R$41,80'

      maquinat2.innerHTML = "T2+ PromoTon";
      valorantigo1.innerHTML = "R$310,80"
      valornovo1.innerHTML = 'Pague <span style="font-weight: 900;">R$279,92</span>'
      parcela1.innerHTML = 'R$23,31'
      economize1.innerHTML = 'R$31,08'

      maquinat1.innerHTML = "T1 Chip PromoTon";
      valorantigo2.innerHTML = "R$190,80"
      valornovo2.innerHTML = 'Pague <span style="font-weight: 900;">R$171,72</span>'
      parcela2.innerHTML = 'R$14,31'
      economize2.innerHTML = 'R$19,08'

      PromoTon1.innerHTML = 'PromoTon'
      PromoTon2.innerHTML = 'PromoTon'
      PromoTon3.innerHTML = 'PromoTon'

      t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"

      balao.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao1.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao2.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'

    } else if (event.target.id === "GigaTon") {
      maquinat3.innerHTML = "T3 GigaTon";
      valorantigo.innerHTML = "R$382,80"
      valornovo.innerHTML = 'Pague <span style="font-weight: 900;">R$344,52</span>'
      parcela.innerHTML = 'R$28,71'

      economize.innerHTML = 'R$35,88'
      economize1.innerHTML = 'R$23,88'
      economize2.innerHTML = 'R$15,48'

      maquinat2.innerHTML = "T2+ GigaTon";
      valorantigo1.innerHTML = "R$238,80"
      valornovo1.innerHTML = 'Pague <span style="font-weight: 900;">R$214,92</span>'
      parcela1.innerHTML = 'R$17,91'

      maquinat1.innerHTML = "T1 Chip GigaTon";
      valorantigo2.innerHTML = "R$154,80"
      valornovo2.innerHTML = 'Pague <span style="font-weight: 900;">R$139,32</span>'
      parcela2.innerHTML = 'R$11,61'

      PromoTon1.innerHTML = 'GigaTon'
      PromoTon2.innerHTML = 'GigaTon'
      PromoTon3.innerHTML = 'GigaTon'

      balao.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao1.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao2.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      
      t3.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_T1_CHIP&coupon=PRPR10"

    }else if (event.target.id === "MegaTon"){
      maquinat3.innerHTML = "T3 MegaTon";
      valorantigo.innerHTML = "R$382,80"
      valornovo.innerHTML = 'Pague <span style="font-weight: 900;">R$344,52</span>'
      parcela.innerHTML = 'R$28,71'

      t3.href = "https://www.ton.com.br/checkout/cart?userTag=novomegaton&productId=NOVOMEGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=novomegaton&productId=NOVOMEGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/cart?userTag=megaton&productId=MEGATON_T1_CHIP&coupon=PRPR10"

      maquinat2.innerHTML = "T2+ MegaTon";
      valorantigo1.innerHTML = "R$238,80"
      valornovo1.innerHTML = 'Pague <span style="font-weight: 900;">R$214,92</span>'
      parcela1.innerHTML = 'R$17,91'

      maquinat1.innerHTML = "T1 Chip MegaTon";
      valorantigo2.innerHTML = "R$154,80"
      valornovo2.innerHTML = 'Pague <span style="font-weight: 900;">R$139,32</span>'
      parcela2.innerHTML = 'R$11,61'
      
      economize.innerHTML = 'R$35,88'
      economize1.innerHTML = 'R$23,88'
      economize2.innerHTML = 'R$15,48'

      PromoTon1.innerHTML = 'MegaTon'
      PromoTon2.innerHTML = 'MegaTon'
      PromoTon3.innerHTML = 'MegaTon'

      balao.innerHTML = 'Melhores Taxas Garantidas no débito e crédito à vista, sem mínimo de vendas por mês'
      balao1.innerHTML = 'Melhores Taxas Garantidas no débito e crédito à vista, sem mínimo de vendas por mês'
      balao2.innerHTML = 'Melhores Taxas Garantidas no débito e crédito à vista, sem mínimo de vendas por mês'
    }
  });
}
var popup = document.querySelector(".whatsapp-popup");
var close = document.querySelector(".popup-close");
const msg = document.getElementById('msg')

  close.addEventListener("click", function() {
    popup.style.display = "none";
  });

setTimeout(()=>{
  popup.style.display = "none";
}, 10000)

setTimeout(()=>{
  popup.style.display = "block";
  msg.innerHTML = 'Tem alguma dúvida?'
}, 25000)