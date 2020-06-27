var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const imieEl = document.querySelector("input[id=Imie]");
const nazwiskoEl = document.querySelector("input[id=Nazwisko]");
const dataEl = document.querySelector("input[id=Data]");
function check_form() {
    event.preventDefault();
    const przycisk = document.getElementById("przycisk");
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
function wait(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
function teczoweKolory(el) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const color of colors) {
            yield wait(1000);
            el.style.backgroundColor = color;
        }
    });
}
let tabelaLotow = document.getElementById("strona");
if (tabelaLotow)
    teczoweKolory(tabelaLotow);
let image = document.getElementById('zdjecie');
fetch('https://api.github.com/repos/Microsoft/TypeScript/commits').then(response => response.json()).then((data) => {
    image.src = data[0].author.avatar_url;
}).catch(() => {
    console.log('Problem with fetch image.');
});
var clickCounter = 0;
var fibs = [0, 1];
const grid = document.querySelector(".grid-container");
const right = document.querySelector(".item4");
const fib = (i) => {
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
rezerwacja.addEventListener("click", (e) => {
    e.stopPropagation();
});
grid.oninput = (event) => {
    const el = event.target;
    if (el instanceof Element && rezerwacja.contains(el)) {
        check_form();
    }
};
rezerwacja.addEventListener("submit", (e) => {
    let res = "Imie: " + imieEl.value + " Nazwisko: " + nazwiskoEl.value +
        " Data: " + dataEl.value;
    document.getElementById('zaslona').hidden = false;
    document.getElementById('fError').innerHTML = res;
    e.preventDefault();
});
