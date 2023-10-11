function slideCards(direction) {
    let cards = document.querySelectorAll('.col-sm-6');
    let firstCard = cards[0];
    let cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    let cardsContainer = document.querySelector('.row-cols-md-3');
    let scrollPosition = cardsContainer.scrollLeft;
    
    if (direction === 'right') {
      cardsContainer.scroll({
        left: scrollPosition + (cardWidth * 2),
        behavior: 'smooth'
      });
    } else if (direction === 'left') {
      cardsContainer.scroll({
        left: scrollPosition - (cardWidth * 2),
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


// valores das maquinas gigaton e megaton

const valorantigot3smart = "R$466,80"
      const valornovot3smart = 'Pague <span style="font-weight: 900;">R$420,12</span>'
      const parcelat3smart = 'R$35,01'
      const economizet3smart = 'R$46,68'

const valorantigot3 = "R$382,80"
      const valornovot3 = 'Pague <span style="font-weight: 900;">R$344,52</span>'
      const parcelat3 = 'R$28,71'
      const economizet3 = 'R$38,28'

      const valorantigot2 = "R$154,80"
      const valornovot2 = 'Pague <span style="font-weight: 900;">R$139,32</span>'
      const parcelat2 = 'R$11,61'
      const economizet2 = 'R$15,48'

      const valorantigot1 = "R$214,80"
      const valornovot1 = 'Pague <span style="font-weight: 900;">R$193,32</span>'
      const parcelat1 = 'R$16,11'
      const economizet1 = 'R$21,48'


// variaveis

const desconto = document.getElementById('desconto')
const valordesconto = '10%'
desconto.innerText = valordesconto




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

const balaosm = document.getElementById('balaosm')
const balao = document.getElementById("balao")
const balao1 = document.getElementById("balao1")
const balao2 = document.getElementById("balao2")


const PromoTon1 = document.getElementById("PromoTon1")
const PromoTon2 = document.getElementById("PromoTon2")
const PromoTon3 = document.getElementById("PromoTon3")

const t3 = document.getElementById('t3')
const t3s = document.getElementById('t3s')
const t2 = document.getElementById('t2')
const t1 = document.getElementById('t1')

const maquinat3s = document.getElementById('maquinat3s')
const valorantigot3s = document.getElementById('valorantigot3s')
const valornovot3s = document.getElementById('valornovot3s')
const parcelat3s = document.getElementById('parcelat3sm')
const parcelat3sm = document.getElementById('parcelat3s')
const economizet3s = document.getElementById('economizet3s')
parcelat3sm.innerHTML = 'R$31,92'

maquinat3s.innerHTML = "T3 Smart PromoTon";
valorantigot3s.innerHTML = "R$478,80"
valornovot3s.innerHTML = 'Pague <span style="font-weight: 900;">R$430,92</span>'
parcelat3s.innerHTML = 'R$35,91'
economizet3s.innerHTML = 'R$47,88'

t3s.href = "https://ton.com.br/checkout/?_gl=1*wo7dh5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.50335849.1352525447.1688054494-1517271778.1683576866#/cart?userTag=promoton_tier&productId=PROMOTON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"


maquinat3.innerHTML = "T3 PromoTon";
valorantigo.innerHTML = "R$394,80"
valornovo.innerHTML = 'Pague <span style="font-weight: 900;">R$355,32</span>'
parcela.innerHTML = 'R$29,61'
economize.innerHTML = 'R$39,48'

maquinat2.innerHTML = "T2+ PromoTon";
valorantigo1.innerHTML = "R$310,80"
valornovo1.innerHTML = 'Pague <span style="font-weight: 900;">R$171,72</span>'
parcela1.innerHTML = 'R$14,31'
economize1.innerHTML = 'R$19,08'

maquinat1.innerHTML = "T1 Chip PromoTon";
valorantigo2.innerHTML = "R$286,80"
valornovo2.innerHTML = 'Pague <span style="font-weight: 900;">R$258,12</span>'
parcela2.innerHTML = 'R$21,51'
economize2.innerHTML = 'R$28,68'

PromoTon1.innerHTML = 'PromoTon'
PromoTon2.innerHTML = 'PromoTon'
PromoTon3.innerHTML = 'PromoTon'

// Adiciona um evento de clique a cada botão
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function(event) {
    // Verifica se o id do botão clicado é o desejado
    if (event.target.id === "PromoTon") {
      // Executa a função específica
      maquinat3s.innerHTML = "T3 Smart PromoTon";
      valorantigot3s.innerHTML = "R$478,80"
      valornovot3s.innerHTML = 'Pague <span style="font-weight: 900;">R$430,92</span>'
      parcelat3s.innerHTML = 'R$35,91'
      economizet3s.innerHTML = 'R$47,88'

      maquinat3.innerHTML = "T3 PromoTon";
      valorantigo.innerHTML = "R$394,80"
      valornovo.innerHTML = 'Pague <span style="font-weight: 900;">R$355,32</span>'
      parcela.innerHTML = 'R$29,61'
      economize.innerHTML = 'R$39,48'

      maquinat2.innerHTML = "T2+ PromoTon";
      valorantigo1.innerHTML = "R$310,80"
      valornovo1.innerHTML = 'Pague <span style="font-weight: 900;">R$171,72</span>'
      parcela1.innerHTML = 'R$14,31'
      economize1.innerHTML = 'R$19,08'

      maquinat1.innerHTML = "T1 Chip PromoTon";
      valorantigo2.innerHTML = "R$286,80"
      valornovo2.innerHTML = 'Pague <span style="font-weight: 900;">R$258,12</span>'
      parcela2.innerHTML = 'R$21,51'
      economize2.innerHTML = 'R$28,68'

      PromoTon1.innerHTML = 'PromoTon'
      PromoTon2.innerHTML = 'PromoTon'
      PromoTon3.innerHTML = 'PromoTon'

      t3s.href = "https://ton.com.br/checkout/?_gl=1*wo7dh5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.50335849.1352525447.1688054494-1517271778.1683576866#/cart?userTag=promoton_tier&productId=PROMOTON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"

      balaosm.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao1.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao2.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'

    } else if (event.target.id === "GigaTon") {
      maquinat3.innerHTML = "T3 GigaTon";

      maquinat3s.innerHTML = "T3 Smart GigaTon";
      valorantigot3s.innerHTML = valorantigot3smart
      valornovot3s.innerHTML = valornovot3smart
      parcelat3s.innerHTML = parcelat3smart
      economizet3s.innerHTML = economizet3smart

      valorantigo.innerHTML = valorantigot3
      valornovo.innerHTML = valornovot3
      parcela.innerHTML = parcelat3

      economize.innerHTML = economizet3
      economize1.innerHTML = economizet2
      economize2.innerHTML = economizet1

      maquinat2.innerHTML = "T2+ GigaTon";
      valorantigo1.innerHTML = valorantigot2
      valornovo1.innerHTML = valornovot2
      parcela1.innerHTML = parcelat2

      maquinat1.innerHTML = "T1 Chip GigaTon";
      valorantigo2.innerHTML = valorantigot1
      valornovo2.innerHTML = valornovot1
      parcela2.innerHTML = parcelat1

      PromoTon1.innerHTML = 'GigaTon'
      PromoTon2.innerHTML = 'GigaTon'
      PromoTon3.innerHTML = 'GigaTon'

      balaosm.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao1.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao2.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'


      t3s.href = "https://ton.com.br/checkout/?_gl=1*7fbrm5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.17070073.1352525447.1688054494-1517271778.1683576866#/cart?userTag=gigaton_tier&productId=GIGATON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      t3.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_T1_CHIP&coupon=PRPR10"

    }else if (event.target.id === "MegaTon"){
      maquinat3.innerHTML = "T3 MegaTon";
      valorantigo.innerHTML = valorantigot3
      valornovo.innerHTML = valornovot3
      parcela.innerHTML = parcelat3


      t3s.href = "https://ton.com.br/checkout/?_gl=1*mko42s*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.105272131.1352525447.1688054494-1517271778.1683576866#/cart?userTag=megaton_tier&productId=MEGATON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      t3.href = "https://www.ton.com.br/checkout/cart?userTag=novomegaton&productId=NOVOMEGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=novomegaton&productId=NOVOMEGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/cart?userTag=megaton&productId=MEGATON_T1_CHIP&coupon=PRPR10"

      maquinat3s.innerHTML = "T3 Smart MegaTon";
      valorantigot3s.innerHTML = valorantigot3smart
      valornovot3s.innerHTML = valornovot3smart
      parcelat3s.innerHTML = parcelat3smart
      economizet3s.innerHTML = economizet3smart

      maquinat2.innerHTML = "T2+ MegaTon";
      valorantigo1.innerHTML = valorantigot2
      valornovo1.innerHTML = valornovot2
      parcela1.innerHTML = parcelat2

      maquinat1.innerHTML = "T1 Chip MegaTon";
      valorantigo2.innerHTML = valorantigot1
      valornovo2.innerHTML = valornovot1
      parcela2.innerHTML = parcelat1
      
      economize.innerHTML = economizet3
      economize1.innerHTML = economizet2
      economize2.innerHTML = economizet1

      PromoTon1.innerHTML = 'MegaTon'
      PromoTon2.innerHTML = 'MegaTon'
      PromoTon3.innerHTML = 'MegaTon'

      balaosm.innerHTML = 'Melhores Taxas Garantidas no débito e crédito à vista, sem mínimo de vendas por mês'
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

if (/iPhone/.test(navigator.userAgent) && !window.MSStream) {
  document.getElementById('ios').classList.add('ios')
}

