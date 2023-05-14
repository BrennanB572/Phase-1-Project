document.querySelector('#hotel-filler').addEventListener('submit', handleSubmit)
 
 
 
 
 
 function renderOneHotel(hotel){
    let hotelCard = document.createElement('li')
    hotelCard.className = 'hotelcard'
    hotelCard.innerHTML =`
    <img src="${hotel.imageUrl}">
    <div class="content">
    <h4>${hotel.name}</h4>
    <p>${hotel.address}</p>
    <p>${hotel.promo}</p>
    <p>
      Likes: <span class="amount-of-likes">${hotel.likes}</span>
    </p>
    <p>${hotel.address}</p>
    </div>
    `
    document.querySelector('#hotels').appendChild(hotelCard)
}

function getHotels(){
  fetch('http://localhost:3000/hotels')
  .then(res => res.json())
  .then(hotels => hotels.forEach(hotel => renderOneHotel(hotel)))
}

function initialize(){
  getHotels()
   hotelData.forEach(hotel => renderOneHotel(hotel))
}
initialize()