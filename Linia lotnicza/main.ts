function check_form() {
  event.preventDefault();
  const imieEl = document.querySelector("input[id=Imie]") as HTMLInputElement;
  const nazwiskoEl = document.querySelector("input[id=Nazwisko]") as HTMLInputElement;
  const dataEl = document.querySelector("input[id=Data]") as HTMLInputElement;

  let res = ``;
  if (imieEl.value === ``)
      res += `<p> Imię nie może być puste </p>`;
  if (nazwiskoEl.value === ``)
      res += `<p> Naziwsko nie może być puste </p>`;
  if (dataEl.value === ``) {
      res += `<p>Data nie moze być pusta</p>`;
  }
  else {
      const formDate = new Date(dataEl.value);
      const currDate = new Date();
      if (formDate.setHours(0, 0, 0, 0) < currDate.setHours(0, 0, 0, 0))
          res += `<p>Data nie może być wcześniejsza niż aktualna</p>`;
  }
  if (res !== ``) {
      document.getElementById('zaslona').hidden = false;
      document.getElementById('fError').innerHTML = res;
  }
}
function close_popup() {
  document.getElementById('zaslona').hidden = true;
}
setTimeout(() => {
  console.log('Minęły dwie sekundy.');
}, 2000);

function wait(ms: number) {
  return new Promise((resolve, reject) =>
      setTimeout(resolve, ms)
  )
}

async function teczoweKolory(el: HTMLElement) {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

  for (const color of colors) {
      await wait(1000)
      el.style.backgroundColor = color;
  }
}

let tabelaLotow = document.getElementById("strona");
if (tabelaLotow)
  teczoweKolory(tabelaLotow);

let image: HTMLImageElement = (document.getElementById('zdjecie') as HTMLImageElement)

fetch('https://api.github.com/repos/Microsoft/TypeScript/commits').then(response => response.json()).then((data) => {
    image.src = data[0].author.avatar_url
}).catch(() => {
    console.log('Problem with fetch image.')
})
