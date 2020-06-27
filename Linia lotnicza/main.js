var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function check_form() {
    event.preventDefault();
    const imieEl = document.querySelector("input[id=Imie]");
    const nazwiskoEl = document.querySelector("input[id=Nazwisko]");
    const dataEl = document.querySelector("input[id=Data]");
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
function wait(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
function teczoweKolory(el) {
    return __awaiter(this, void 0, void 0, function* () {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
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
