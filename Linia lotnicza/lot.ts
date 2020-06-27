function best_passenger() {
    var listaPasazerow = document.getElementsByClassName("lista")[0].getElementsByTagName("li");
    var najImie = listaPasazerow[0].innerText;
    var najId = listaPasazerow[0].getAttribute('data-identyfikator-pasazera');
    for (var el of listaPasazerow as any) {
        if (el.getAttribute('data-identyfikator-pasazera') > najId) {
            najId = el.getAttribute('data-identyfikator-pasazera');
            najImie = el.innerText;
        }
    }
    console.log("Pasażer z największym ID to: " + najImie);
}