
function renderOneHotel(hotel){
    let hotelCard = document.createElement('li')
    hotelCard.className = 'card'
    hotelCard.innerHTML =`
    <img src="${hotel.imageURL}">
    <div class="content">
    <h4>${hotel.name}</h4>
    <p>${hotel.address}</p>
    <p>${hotel.promo}</p>
    <p>
      Likes:<span class="amount-of-likes">${hotel.likes}</span>
    </p>
    <p>${hotel.address}</p>
    `
    document.querySelector('#hotels').appendChild(hotelCard)
}

function initialize(){
    hotelData.forEach(hotel => renderOneHotel(hotel))
}
initialize()