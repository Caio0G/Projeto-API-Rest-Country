//Elementos pegos do HTML

let searchBtn = document.getElementById("pro-but");
let paiscol = document.getElementById("pro-pai");

//Evento

searchBtn.addEventListener("click", () => {
  let Nomepai = paiscol.value;

//API Rest Country

  let rest = `https://restcountries.com/v3.1/name/${Nomepai}?fullText=true`;

  fetch(rest)
    .then((campo) => campo.json())
    .then((data) => {

     //Exibir no HTML

      campo.innerHTML = `
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Nome:</h4>
              <span>${data[0].name.common}</span></div
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Idioma ou idiomas oficiais:</h4>
                <span>${Object.values(data[0].languages)
                    .toString()
                    .split(",")
                    .join(", ")}</span>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>População:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continente:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Bandeira do país:</h4>
                <span><img src="${data[0].flags.svg}" class="flag-img">
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        campo.innerHTML = `<h3>O campo não pode ficar vazio.</h3>`;
      } else {
        campo.innerHTML = `<h3>Digite um país válido.</h3>`;
      }
    });
});