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

const maquinat2 = document.getElementById("maquinat2")
const valorantigo1 = document.getElementById("valorantigo1")
const valornovo1 = document.getElementById("valornovo1")

const maquinat1 = document.getElementById("maquinat1")
const valorantigo2 = document.getElementById("valorantigo2")
const valornovo2 = document.getElementById("valornovo2")

const t3 = document.getElementById('t3')
const t2 = document.getElementById('t2')
const t1 = document.getElementById('t1')

// Adiciona um evento de clique a cada botão
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function(event) {
    // Verifica se o id do botão clicado é o desejado
    if (event.target.id === "PromoTon") {
      // Executa a função específica
      maquinat3.innerHTML = "T3 PromoTon Com";
      valorantigo.innerHTML = "R$ 418,80"
      valornovo.innerHTML = 'R$ 376,92 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 31</strong>,41</span></p>'

      maquinat2.innerHTML = "T2+ PromoTon Com";
      valorantigo1.innerHTML = "R$ 310,80"
      valornovo1.innerHTML = 'R$ 279,92 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 23</strong>,31</span></p>'

      maquinat1.innerHTML = "T1 Chip PromoTon Com";
      valorantigo2.innerHTML = "R$ 190,80"
      valornovo2.innerHTML = 'R$ 171,72 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 14</strong>,31</span></p>'

      t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"


    } else if (event.target.id === "GigaTon") {
      maquinat3.innerHTML = "T3 GigaTon Com";
      valorantigo.innerHTML = "R$ 382,80"
      valornovo.innerHTML = 'R$ 344,52 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 28</strong>,71</span></p>'
    
      maquinat2.innerHTML = "T2+ GigaTon Com";
      valorantigo1.innerHTML = "R$ 238,80"
      valornovo1.innerHTML = 'R$ 214,92 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 17</strong>,91</span></p>'

      maquinat1.innerHTML = "T1 Chip GigaTon Com";
      valorantigo2.innerHTML = "R$ 154,80"
      valornovo2.innerHTML = 'R$ 139,32 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 11</strong>,61</span></p>'

      t3.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_T1_CHIP&coupon=PRPR10"

    }else if (event.target.id === "MegaTon"){
      maquinat3.innerHTML = "T3 MegaTon Com";
      valorantigo.innerHTML = "R$ 382,80"
      valornovo.innerHTML = 'R$ 344,52 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 28</strong>,71</span></p>'
      t3.href = "https://www.ton.com.br/checkout/cart?userTag=novomegaton&productId=NOVOMEGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=novomegaton&productId=NOVOMEGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/cart?userTag=megaton&productId=MEGATON_T1_CHIP&coupon=PRPR10"

      maquinat2.innerHTML = "T2+ MegaTon Com";
      valorantigo1.innerHTML = "R$ 238,80"
      valornovo1.innerHTML = 'R$ 214,92 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 17</strong>,91</span></p>'

      maquinat1.innerHTML = "T1 Chip MegaTon Com";
      valorantigo2.innerHTML = "R$ 154,80"
      valornovo2.innerHTML = 'R$ 139,32 à vista ou em <span class="installment text-success" style="font-size: 1.4rem;"><strong style="font-size: 1.5rem; font-weight: 900;">12x de</strong> R$<strong style="font-size: 3rem;"> 11</strong>,61</span></p>'

      
    }
  });
}