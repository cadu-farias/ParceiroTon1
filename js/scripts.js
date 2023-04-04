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