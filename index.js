// event listener for the submit button

document.querySelector('#hotel-filler').addEventListener('submit', handleSubmit)

// event handler for submit button to process the name, imageurl, address, and promo

function handleSubmit(event){
  event.preventDefault()
  let hotelObj = {
    name:event.target.name.value,
    imageUrl:event.target.image_url.value,
    address:event.target.address.value,
    promo:event.target.promo.value
  }
  renderOneHotel(hotelObj)
}

// function renderOneHotel to populate changes to the DOM

function renderOneHotel(hotel){
    let hotelCard = document.createElement('li')
    hotelCard.className = 'hotelcard'
    hotelCard.innerHTML =`
    <img width="300px" height="200px"src="${hotel.imageUrl}">
    <div class="content">
    <h4>${hotel.name}</h4>
    <p>${hotel.address}</p>
    <p>${hotel.promo}</p>
    <button id='remove'>remove</button>
    </div>`
    hotelCard.querySelector('#remove').addEventListener('click', () => {
      hotelCard.remove()
      deleteHotel(hotel.id)
    })
    
    document.querySelector('#hotels').appendChild(hotelCard)
}

// Fetch GET request to the local host/hotels to render each hotel location on the server

function getHotels(){
  fetch('http://localhost:3000/hotels')
  .then(res => res.json())
  .then(hotels => hotels.forEach(hotel => renderOneHotel(hotel)))
}

// submit handler/communication and POST request to db.json file and also using json stringify to populate into the body of the page

function submitHotel(hotelObj){
  fetch('http://localhost:3000/hotels',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hotelObj)
  })
  .then(res => res.json())
}

// delete handler/communication and DELETE method used. No body used because we aren't posting anything to the DOM, we are just 'removing'

function deleteHotel(id){
  fetch(`http://localhost:3000/hotels/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}

// initializer to return all hotels

function initializer(){
  getHotels()
   hotelData.forEach(hotel => renderOneHotel(hotel))
}
initializer() 