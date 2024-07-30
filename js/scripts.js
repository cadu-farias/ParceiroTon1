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


// valores das maquinas Promoton

const valorantigot3smart = "R$478,80"
const valornovot3smart = 'Pague <span style="font-weight: 900;">R$279,81</span>'
const parcelat3smart = 'R$23,32'
const economizet3smart = 'R$198,99'

const valorantigot3 = "R$394,80"
const valornovot3 = 'Pague <span style="font-weight: 900;">R$248,40</span>'
const parcelat3 = 'R$20,70'
const economizet3 = 'R$146,40'

const valorantigot2 = "R$190,80"
const valornovot2 = 'Pague <span style="font-weight: 900;">R$119,88</span>'
const parcelat2 = 'R$9,99'
const economizet2 = 'R$70,92'

const valorantigot1 = "R$286,80"
const valornovot1 = 'Pague <span style="font-weight: 900;">R$180,36</span>'
const parcelat1 = 'R$15,03'
const economizet1 = 'R$106,44'

// MegaTon

const Megavalorantigot3smart = "R$466,80"
const Megavalornovot3smart = 'Pague <span style="font-weight: 900;">R$315,36</span>'
const Megaparcelat3smart = 'R$26,28'
const Megaeconomizet3smart = 'R$151,44'

const Megavalorantigot3 = "R$382,80"
const Megavalornovot3 = 'Pague <span style="font-weight: 900;">R$258,12</span>'
const Megaparcelat3 = 'R$21,51'
const Megaeconomizet3 = 'R$124,68'

const Megavalorantigot2 = "R$154,80"
const Megavalornovot2 = 'Pague <span style="font-weight: 900;">R$104,76</span>'
const Megaparcelat2 = 'R$8,73'
const Megaeconomizet2 = 'R$50,04'

const Megavalorantigot1 = "R214,80"
const Megavalornovot1 = 'Pague <span style="font-weight: 900;">R$144,72</span>'
const Megaparcelat1 = 'R$12,06'
const Megaeconomizet1 = 'R$70,08'



// variaveis

const desconto1 = document.getElementById('desconto1')
const desconto = document.getElementsByClassName('desconto')
const valordesconto = '40%'
const valordesconto1 = '45%'

desconto1.innerHTML = valordesconto1

for (const element of desconto) {
  element.innerText = valordesconto;
}




// Seleciona todos os botões da página
var botoes = document.getElementsByClassName("btn-success");

const maquinat3 = document.getElementById("maquinat3")
const valorantigo = document.getElementById("valorantigo")
const valornovo = document.getElementById("valornovo")
const parcela = document.getElementById("parcela")
const parcela3 = document.getElementById("parcelat3")
const economize = document.getElementById("economize")

const maquinat2 = document.getElementById("maquinat2")
const valorantigo1 = document.getElementById("valorantigo1")
const valornovo1 = document.getElementById("valornovo1")
const parcela1 = document.getElementById("parcela1")
const parcela12 = document.getElementById("parcela12")
const economize1 = document.getElementById("economize1")

const maquinat1 = document.getElementById("maquinat1")
const valorantigo2 = document.getElementById("valorantigo2")
const valornovo2 = document.getElementById("valornovo2")
const parcela2 = document.getElementById("parcela2")
const parcela21 = document.getElementById("parcela21")
const economize2 = document.getElementById("economize2")

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


t3s.href = "https://ton.com.br/checkout/?_gl=1*wo7dh5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.50335849.1352525447.1688054494-1517271778.1683576866#/cart?userTag=promoton_tier&productId=PROMOTON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"

maquinat3s.innerHTML = "T3 Smart PromoTon";
parcelat3sm.innerHTML = parcelat3smart
valorantigot3s.innerHTML = valorantigot3smart
valornovot3s.innerHTML = valornovot3smart
parcelat3s.innerHTML = parcelat3smart
economizet3s.innerHTML = economizet3smart

maquinat3.innerHTML = "T3 PromoTon";
valorantigo.innerHTML = valorantigot3
valornovo.innerHTML = valornovot3
parcela.innerHTML = parcelat3
economize.innerHTML = economizet3
parcela3.innerHTML = parcelat3

maquinat2.innerHTML = "T2+ PromoTon";
valorantigo1.innerHTML = valorantigot2
valornovo1.innerHTML = valornovot2
parcela1.innerHTML = parcelat2
parcela12.innerHTML = parcelat2
economize1.innerHTML = economizet2

maquinat1.innerHTML = "T1 Chip PromoTon";
valorantigo2.innerHTML = valorantigot1
valornovo2.innerHTML = valornovot1
parcela2.innerHTML = parcelat1
parcela21.innerHTML = parcelat1
economize2.innerHTML = economizet1

PromoTon1.innerHTML = 'PromoTon'
PromoTon2.innerHTML = 'PromoTon'
PromoTon3.innerHTML = 'PromoTon'

// Adiciona um evento de clique a cada botão
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function(event) {
    // Verifica se o id do botão clicado é o desejado
    // if (event.target.id === "PromoTon") {
    //   // Executa a função específica
    //   maquinat3s.innerHTML = "T3 Smart PromoTon";
    //   valorantigot3s.innerHTML = "R$478,80"
    //   valornovot3s.innerHTML = 'Pague <span style="font-weight: 900;">R$383,04</span>'
    //   parcelat3s.innerHTML = 'R$31,92'
    //   economizet3s.innerHTML = 'R$95,76'

    //   maquinat3.innerHTML = "T3 PromoTon";
    //   valorantigo.innerHTML = "R$394,80"
    //   valornovo.innerHTML = 'Pague <span style="font-weight: 900;">R$315,84</span>'
    //   parcela.innerHTML = 'R$26,32'
    //   economize.innerHTML = 'R$78,96'

    //   maquinat2.innerHTML = "T2+ PromoTon";
    //   valorantigo1.innerHTML = "R$310,80"
    //   valornovo1.innerHTML = 'Pague <span style="font-weight: 900;">R$152,64</span>'
    //   parcela1.innerHTML = 'R$12,72'
    //   economize1.innerHTML = 'R$38,16'

    //   maquinat1.innerHTML = "T1 Chip PromoTon";
    //   valorantigo2.innerHTML = "R$286,80"
    //   valornovo2.innerHTML = 'Pague <span style="font-weight: 900;">R$229,44</span>'
    //   parcela2.innerHTML = 'R$19,12'
    //   economize2.innerHTML = 'R$57,36'

      // PromoTon1.innerHTML = 'PromoTon'
      // PromoTon2.innerHTML = 'PromoTon'
      // PromoTon3.innerHTML = 'PromoTon'

      // t3s.href = "https://ton.com.br/checkout/?_gl=1*wo7dh5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.50335849.1352525447.1688054494-1517271778.1683576866#/cart?userTag=promoton_tier&productId=PROMOTON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      // t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      // t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      // t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"

      // balao.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      // balao1.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      // balao2.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'

    if (event.target.id === "PromoTon") {
      const desconto = document.getElementsByClassName('desconto')
      desconto1.innerHTML = valordesconto1
      for (const element of desconto) {
        element.innerText = valordesconto;
      }

      maquinat3s.innerHTML = "T3 Smart PromoTon";
      parcelat3sm.innerHTML = parcelat3smart
      valorantigot3s.innerHTML = valorantigot3smart
      valornovot3s.innerHTML = valornovot3smart
      parcelat3s.innerHTML = parcelat3smart
      economizet3s.innerHTML = economizet3smart

      maquinat3.innerHTML = "T3 PromoTon";
      valorantigo.innerHTML = valorantigot3
      valornovo.innerHTML = valornovot3
      parcela.innerHTML = parcelat3
      economize.innerHTML = economizet3
      parcela3.innerHTML = parcelat3

      maquinat2.innerHTML = "T2+ PromoTon";
      valorantigo1.innerHTML = valorantigot2
      valornovo1.innerHTML = valornovot2
      parcela1.innerHTML = parcelat2
      parcela12.innerHTML = parcelat2
      economize1.innerHTML = economizet2

      maquinat1.innerHTML = "T1 Chip PromoTon";
      valorantigo2.innerHTML = valorantigot1
      valornovo2.innerHTML = valornovot1
      parcela2.innerHTML = parcelat1
      parcela21.innerHTML = parcelat1
      economize2.innerHTML = economizet1



      PromoTon1.innerHTML = 'PromoTon'
      PromoTon2.innerHTML = 'PromoTon'
      PromoTon3.innerHTML = 'PromoTon'

      t3s.href = "https://ton.com.br/checkout/?_gl=1*wo7dh5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.50335849.1352525447.1688054494-1517271778.1683576866#/cart?userTag=promoton_tier&productId=PROMOTON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      t3.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_S920&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t2.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_D195&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"
      t1.href = "https://ton.com.br/checkout/#/cart?coupon=PRPR10&productId=TONBROTHER_T1_CHIP&userTag=tonbrother&utm_medium=invite_share&utm_source=revendendor"

      balao.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao1.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      balao2.innerHTML = 'Melhores Taxas Garantidas, ideal para quem vende a partir de R$ 2.000 por mês'
      // PromoTon1.innerHTML = 'PromoTon'
      // PromoTon2.innerHTML = 'GigaTon'
      // PromoTon3.innerHTML = 'GigaTon'

      // balao.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      // balao1.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'
      // balao2.innerHTML = 'Taxas competitivas, ideal para quem vende a partir de R$ 2.000 por mês'


      // t3s.href = "https://ton.com.br/checkout/?_gl=1*7fbrm5*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.17070073.1352525447.1688054494-1517271778.1683576866#/cart?userTag=gigaton_tier&productId=GIGATON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      // t3.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_S920&coupon=PRPR10"
      // t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_D195&coupon=PRPR10"
      // t1.href = "https://www.ton.com.br/checkout/#/cart?userTag=gigaton&productId=GIGATON_T1_CHIP&coupon=PRPR10"

    }else if (event.target.id === "MegaTon"){
      const desconto = document.getElementsByClassName('desconto')
      const valordesconto = '35%'
      const valordesconto1 = '35%'
      desconto1.innerHTML = valordesconto1
      for (const element of desconto) {
        console.log(element)
        element.innerText = valordesconto;
      }

      maquinat3.innerHTML = "T3 MegaTon";
      valorantigo.innerHTML = valorantigot3
      valornovo.innerHTML = valornovot3
      parcela.innerHTML = parcelat3


      t3s.href = "https://ton.com.br/checkout/?_gl=1*mko42s*_ga*MTUxNzI3MTc3OC4xNjgzNTc2ODY2*_ga_B0KF4NWL9Z*MTY4ODEzMjA5OS40Ni4xLjE2ODgxMzIxOTAuNjAuMC4w&_ga=2.105272131.1352525447.1688054494-1517271778.1683576866#/cart?userTag=megaton_tier&productId=MEGATON_TIER_SMART_POS&coupon=PRPR10&utm_medium=invite_share&utm_source=revendedor"
      t3.href = "https://www.ton.com.br/checkout/cart?userTag=novomegaton&productId=NOVOMEGATON_S920&coupon=PRPR10"
      t2.href = "https://www.ton.com.br/checkout/#/cart?userTag=novomegaton&productId=NOVOMEGATON_D195&coupon=PRPR10"
      t1.href = "https://www.ton.com.br/checkout/cart?userTag=megaton&productId=MEGATON_T1_CHIP&coupon=PRPR10"

      maquinat3s.innerHTML = "T3 Smart MegaTon";
      parcelat3sm.innerHTML = Megaparcelat3smart
      valorantigot3s.innerHTML = Megavalorantigot3smart
      valornovot3s.innerHTML = Megavalornovot3smart
      parcelat3s.innerHTML = Megaparcelat3smart
      economizet3s.innerHTML = Megaeconomizet3smart

      maquinat3.innerHTML = "T3 MegaTon";
      valorantigo.innerHTML = Megavalorantigot3
      valornovo.innerHTML = Megavalornovot3
      parcela.innerHTML = Megaparcelat3
      economize.innerHTML = Megaeconomizet3
      parcela3.innerHTML = Megaparcelat3

      maquinat2.innerHTML = "T2+ MegaTon";
      valorantigo1.innerHTML = Megavalorantigot2
      valornovo1.innerHTML = Megavalornovot2
      parcela1.innerHTML = Megaparcelat2
      parcela12.innerHTML = Megaparcelat2
      economize1.innerHTML = Megaeconomizet2

      maquinat1.innerHTML = "T1 Chip MegaTon";
      valorantigo2.innerHTML = Megavalorantigot1
      valornovo2.innerHTML = Megavalornovot1
      parcela2.innerHTML = Megaparcelat1
      parcela21.innerHTML = Megaparcelat1
      economize2.innerHTML = Megaeconomizet1


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

if (/iPhone/.test(navigator.userAgent) && !window.MSStream) {
  document.getElementById('ios').classList.add('ios')
}