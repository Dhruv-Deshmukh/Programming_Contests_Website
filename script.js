
let url = "https://kontests.net/api/v1/all#";

let response = fetch(url)

response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])

        ihtml = ihtml + `<div class="card" style="width: 23rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text" > Status is ${contests[item].status}</p>
          <p class="card-text" > In 24  Hours: ${contests[item].in_24_hours}</p>
          <p> Website name: ${contests[item].site}
          <p>Starts at: ${contests[item].start_time}
          <p>Starts at: ${contests[item].end_time}
          
          <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
      </div>`
    }
    cardContainer.innerHTML = ihtml
})