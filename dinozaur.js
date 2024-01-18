let ludzik = document.getElementById("ludzik");
let kloc = document.getElementById("kloc");
let ekranGry = document.getElementById('game');
let przejebanie = document.getElementById('czyPrzejebales');

let stylKloca = window.getComputedStyle(kloc);
let proba = 1;
let najlepszyWynik = 0;
let wynik = 0;
let czyzaczeto = false;
let uruchomione = false;  // Nowa zmienna do śledzenia, czy interwał jest uruchomiony
let pomocnicza = true;
let czyZetknieto = false;

document.getElementById('xdd').innerText = "" ;

    


kloc.style.animation = 'none';

document.getElementById('liczydlo').innerText = "wynik";

function jump() {
    if (ludzik.classList != "animate") {
        ludzik.classList.add("animate");
    }
    ludzik.classList.add("animate");
    setTimeout(function () {
        ludzik.classList.remove("animate");
    }, 300);

}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        jump();
    }
    if(event.code === 'Enter' && czyzaczeto === false){
        startGame();
    }
});

function startGame() {
    document.getElementById("startGame").style.display = "none";
    // jesli zaczeto zakoncz poprzednia gre
    if (czyzaczeto) {
        uruchomione = false;  // Ustaw zmienną na false, ponieważ poprzedni interwał został zatrzymany
    }
    przejebanie.style.backgroundColor = 'black';
    przejebanie.innerText = '';

    wynik = 0;
    czyzaczeto = true;
    kloc.style.animation = 'kloc 1s infinite linear';

    // Sprawdź, czy interwał nie jest już uruchomiony, zanim go uruchomisz
    if (!uruchomione) {
        interwalId = setInterval(function () {
            let ludzikGora = parseInt(window.getComputedStyle(ludzik).getPropertyValue("top"));
            let kloclewo = parseInt(window.getComputedStyle(kloc).getPropertyValue("left"));

            if((Math.abs(kloclewo - 490) < 20 && kloclewo > 0 && Math.abs(ludzikGora - 375) < 20)) { // if przejebales
                przejebanie.style.backgroundColor = 'white';
                przejebanie.innerText = 'Przejebales z wynikiem ' + Math.floor(wynik / 50);

                czyZetknieto = true;


                if (najlepszyWynik > Math.floor(wynik / 50) || najlepszyWynik == Math.floor(wynik / 50)) {
                    document.getElementById('BestScore').innerText = "Najlepszy wynik: " + najlepszyWynik;
                } else {
                    najlepszyWynik = Math.floor(wynik / 50);
                    document.getElementById('BestScore').innerText = "Najlepszy wynik: " + najlepszyWynik;
                }

                kloc.style.animation = 'none';
                proba++;

                document.getElementById('wyjebki').innerText = "próba " + proba;
                czyzaczeto = false;
                //alert('przejebales z wynikiem ' + wynik);
                ekranGry.style.backgroundColor = 'red';
                
                document.getElementById('liczydlo').innerText = "wynik";
            } else {
                
                wynik++;
                if(wynik == 500){
                    kloc.style.animation = 'none';
                }
                else if(wynik==501){ //TO WYNIK 10
                kloc.style.animation = 'kloc 0.8s infinite linear';
                 }
                 //poziom 2

                if(wynik == 951){
                    kloc.style.animation = 'none';

                }
                else if(wynik==962){ //TO WYNIK 20
                    kloc.style.animation = 'kloc 0.7s infinite linear';
                }

                //poizom 3

                if(wynik == 1451){
                    kloc.style.animation = 'none';
                }
                else if(wynik == 1452){
                    kloc.style.animation = 'kloc 0.5s infinite linear';
                }

                //poziom 4
                if(wynik == 2451){
                    kloc.style.animation = 'none';
                }
                else if(wynik == 2452){
                    kloc.style.animation = 'kloc 0.3s infinite linear';
                }


                
                
                

                


                

                if (czyzaczeto == false) {
                    wynik = 0;
                    document.getElementById("startGame").style.display = "block";
                    document.getElementById('liczydlo').innerText = "wynik";
                } else {
                    document.getElementById('liczydlo').innerText = "wynik:  " + Math.floor(wynik / 50);


                    
                }
            }
        }, 10);

        uruchomione = true;  // Ustaw zmienną na true, ponieważ interwał został uruchomiony
    }
}
//dodac zeby spacja sie skakalo - done
//dodac zeby komunikat sie pojawial na ekranie a nie w alercie (ekran to div) - done
//odsunac czerwonego kloca troche od lewej strony i niebieskiego od prawej oraz powiekszyc plansze -done
//dodac kolejne kloce jak beda 3 bedziegit
//zmienic tekstury przynajmniej kolor ale najlepiej gucia zamiast tego co skacze i zamiast niebieskeigo nwm co -DONE