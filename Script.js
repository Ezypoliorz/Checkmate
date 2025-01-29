let JoueurActuel = "";

function GetPlayerRatings(player) {

    fetch('https://api.chess.com/pub/player/'+ player)
    .then(response => response.json())
    .then(data => {

        if (data?.name) {
        document.getElementById("Name").textContent = data.name
        }
        else {
        document.getElementById("Name").textContent = ""
        }

        if (data?.username) {
        document.getElementById("Username").textContent = "@"+ data.username
        document.getElementById("FicheJoueur").style.display = 'block';
        JoueurActuel = data.username
        }
        else{
        document.getElementById("Username").textContent = ""
        document.getElementById("FicheJoueur").style.display = 'none'
        document.getElementById("Erreur").style.display = 'block'
        setTimeout(function() {
            document.getElementById("Erreur").style.display = 'none'
          }, 2000);
        }

        if (data?.avatar) {
        document.getElementById("Image").src = data.avatar
        }
        else {
        document.getElementById("Image").src = 'https://www.chess.com/bundles/web/images/user-image.007dad08.svg'
        }

        if (data?.followers) {
        document.getElementById("Abonnés").textContent = data.followers
        }
        else {
        document.getElementById("Abonnés").textContent = "-"
        }

        if (data?.league) {
        document.getElementById("Ligue").textContent = data.league
        }
        else {
        document.getElementById("Ligue").textContent = "-"
        }

        if (data?.title) {
        document.getElementById("Titre").textContent = data.title
        }
        else {
        document.getElementById("Titre").textContent = "-"
        }

        fetch(data.country)
        .then(response => response.json())
        .then(data_country => {
            if (data_country?.name) {
            document.getElementById("Pays").textContent = data_country.name
            }
            else {
            document.getElementById("Pays").textContent = "-"
            }
        })

    });

    fetch('https://api.chess.com/pub/player/'+ player + '/stats')
    .then(response => response.json())
    .then(data => {

        if (data?.chess_bullet?.last?.rating) {
        document.getElementById("Bullet").textContent = data.chess_bullet.last.rating
        }
        else {
        document.getElementById("Bullet").textContent = "-"
        }

        if (data?.chess_blitz?.last?.rating) {
        document.getElementById("Blitz").textContent = data.chess_blitz.last.rating
        }
        else {
        document.getElementById("Blitz").textContent = "-"
        }

        if (data?.chess_rapid?.last?.rating) {
        document.getElementById("Rapide").textContent = data.chess_rapid.last.rating
        }
        else {
        document.getElementById("Rapide").textContent = "-"
        }

        if (data?.chess_daily?.last?.rating) {
        document.getElementById("Différé").textContent = data.chess_daily.last.rating
        }
        else {
        document.getElementById("Différé").textContent = "-"
        }

        if (data?.tactics?.highest?.rating) {
        document.getElementById("Problèmes").textContent = data.tactics.highest.rating
        }
        else {
        document.getElementById("Problèmes").textContent = "-"
        }

        if (data?.puzzle_rush?.best?.score) {
        document.getElementById("Sprint").textContent = data.puzzle_rush.best.score
        }
        else {
        document.getElementById("Sprint").textContent = "-"
        }

        if (data?.fide) {
        document.getElementById("FIDE").textContent = data.fide
        }
        else {
        document.getElementById("FIDE").textContent = "-"
        }

    });
    

}

document.getElementById("RechercherFicheJoueur").addEventListener('click', function() {

    var recherche = document.getElementById("InputFicheJoueur").value;
    GetPlayerRatings(recherche);

})

document.getElementById("VoirChess").addEventListener('click', function() {

    window.location.href = "https://www.chess.com/member/" + JoueurActuel;

})
