fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sea")
.then(res => res.json())
.then(data => {

    console.log(data.urls.regular)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById('author').textContent = `BY: Akindele Ayorinde `
})

.catch(err =>{
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1592847927120-71e86e0c4fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzA1MDcwNTU&ixlib=rb-1.2.1&q=80&w=1080)`
    document.getElementById('author').textContent = "BY: Akindele Ayorinde" 
})

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(res =>{
    if(!res.ok){
        throw Error("The url is totally wrong")
    }
    return res.json()
})
.then(data => {
 document.getElementById("sub-crypto").innerHTML = `<img src=${data.image.small} />
   <span>${data.name}</span>`

document.getElementById("crypto").innerHTML += `<p>🎯: $${data.market_data.current_price.usd}</p>
<p>👆: $${data.market_data.high_24h.usd}</p>
<p>👇:$${data.market_data.low_24h.usd}</P>`
})

.catch(err => {
    console.error(err)
})

function creatTime(){
    const date = new Date()
    document.getElementById("time-event").textContent = date.toLocaleTimeString("us-en", {timeStyle: "medium"})
}

setInterval(creatTime, 1000)


navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
      .then(res => {
        if(!res.ok){
           throw Error('this url is not correct')
        }
        return res.json()
      })
      .then(data => {
           console.log(data)
          const iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById("weather").innerHTML = `<img src=${iconurl} />
          <p class=weather-temp>${Math.round(data.main.temp)}</p>
          <p class=weather-city>${data.name}</p>`
          
          
         
    })
    .catch(err => console.error(err))
    })

      
      
    





