const imieEl = document.querySelector("input[id=Imie]") as HTMLInputElement;
const nazwiskoEl = document.querySelector("input[id=Nazwisko]") as HTMLInputElement;
const dataEl = document.querySelector("input[id=Data]") as HTMLInputElement;
function check_form() {
  event.preventDefault();
  const przycisk = document.getElementById("przycisk") as HTMLInputElement;
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
    przycisk.disabled = true;
  }
  else {
    przycisk.disabled = false;
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
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
async function teczoweKolory(el: HTMLElement) {
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
var clickCounter = 0;
var fibs = [0, 1];
const grid = document.querySelector(".grid-container") as HTMLDivElement;
const right = document.querySelector(".item4");
const fib = (i: number): number => {
  while (fibs.length <= i) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs[i];
};

var clickHandler = function (e) {
  console.log(fib(10 * clickCounter));
  clickCounter++;
  var elem = e.target;
  if (!right.contains(elem))
    return;
  tabelaLotow.style.backgroundColor = colors[clickCounter % colors.length];
};
grid.addEventListener("click", clickHandler);
const rezerwacja = document.querySelector(".rezerwacja");
rezerwacja.addEventListener("click", (e: Event) => {
  e.stopPropagation();
});
grid.oninput = (event) => {
  const el = event.target;
  if (el instanceof Element && rezerwacja.contains(el)) {
    check_form();
  }
}
rezerwacja.addEventListener("submit", (e) => {
  let res = "Imie: " + imieEl.value + " Nazwisko: " + nazwiskoEl.value +
    " Data: " + dataEl.value;
  document.getElementById('zaslona').hidden = false;
  document.getElementById('fError').innerHTML = res;
  e.preventDefault();
});





