
/* =========================================================
   SURPRISE — OUVERTURE DU CADEAU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section =
        document.querySelector(".surprise-section");

    const gift =
        document.getElementById("gift");

    const giftButton =
        document.getElementById("giftButton");

    const giftContainer =
        document.getElementById("giftContainer");

    const surpriseIntro =
        document.getElementById("surpriseIntro");

    const surpriseReveal =
        document.getElementById("surpriseReveal");

    const stars =
        document.getElementById("stars");

    const confetti =
        document.getElementById("confetti");


    /* =====================================================
       ÉTOILES
    ===================================================== */

    for(let i = 0; i < 45; i++){

        const star =
            document.createElement("span");

        star.className =
            "surprise-star";

        star.innerHTML =
            Math.random() > .5 ? "✦" : "✧";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.setProperty(
            "--duration",
            (3 + Math.random() * 5) + "s"
        );

        star.style.animationDelay =
            (-Math.random() * 5) + "s";

        star.style.fontSize =
            (5 + Math.random() * 9) + "px";

        stars.appendChild(star);

    }


    /* =====================================================
       CONFETTIS
    ===================================================== */

    function createConfetti(){

        confetti.innerHTML = "";

        const pieces = 110;

        for(let i = 0; i < pieces; i++){

            const piece =
                document.createElement("span");

            piece.className =
                "confetti";

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.setProperty(
                "--x",
                ((Math.random() - .5) * 350) + "px"
            );

            piece.style.setProperty(
                "--fall",
                (3 + Math.random() * 3) + "s"
            );

            piece.style.setProperty(
                "--rotation",
                (Math.random() * 1400 - 700) + "deg"
            );


            /*
             * Quelques formes différentes
             */

            const shapes = [
                "linear-gradient(135deg,#f6d98b,#d9a441)",
                "linear-gradient(135deg,#fff0bd,#8d5d1d)",
                "linear-gradient(135deg,#ffffff,#d9a441)",
                "linear-gradient(135deg,#d9a441,#592b14)"
            ];

            piece.style.background =
                shapes[
                    Math.floor(
                        Math.random() * shapes.length
                    )
                ];


            piece.style.borderRadius =
                Math.random() > .5
                    ? "50%"
                    : "2px";


            piece.style.animationDelay =
                (Math.random() * .8) + "s";


            confetti.appendChild(piece);

        }

    }


    /* =====================================================
       OUVERTURE
    ===================================================== */

    function openSurprise(){

        if(
            section.classList.contains("revealing") ||
            section.classList.contains("revealed")
        ){

            return;

        }


        section.classList.add("revealing");


        /*
         * Explosion de lumière + confettis
         */

        createConfetti();


        /*
         * Après l'ouverture,
         * on fait disparaître le cadeau
         */

        setTimeout(function(){

            giftContainer.style.display =
                "none";

            surpriseIntro.style.display =
                "none";

            section.classList.remove(
                "revealing"
            );

            section.classList.add(
                "revealed"
            );


            /*
             * Petit scroll doux vers la surprise
             */

            setTimeout(function(){

                surpriseReveal.scrollIntoView({
                    behavior:"smooth",
                    block:"center"
                });

            }, 150);

        }, 1100);

    }


    /* =====================================================
       CLIC SUR LE CADEAU
    ===================================================== */

    gift.addEventListener(
        "click",
        openSurprise
    );


    giftButton.addEventListener(
        "click",
        openSurprise
    );


});




// **************boutonDeMusique**************

document.addEventListener("DOMContentLoaded", function(){

    const musicBtn =
        document.getElementById("musicBtn");

    const bgMusic =
        document.getElementById("bgMusic");


    if(!musicBtn || !bgMusic){
        return;
    }


    musicBtn.addEventListener("click", async function(){

        try{

            /*
             * Si la musique est actuellement arrêtée
             */

            if(bgMusic.paused){

                await bgMusic.play();

                musicBtn.classList.add(
                    "music-playing"
                );

                musicBtn.setAttribute(
                    "aria-label",
                    "Désactiver la musique"
                );

            }

            /*
             * Sinon on la met en pause
             */

            else{

                bgMusic.pause();

                musicBtn.classList.remove(
                    "music-playing"
                );

                musicBtn.setAttribute(
                    "aria-label",
                    "Activer la musique"
                );

            }

        }

        catch(error){

            console.log(
                "Impossible de lancer la musique :",
                error
            );

        }

    });


    /*
     * Si la musique arrive naturellement à sa fin
     * (utile si tu retires loop plus tard)
     */

    bgMusic.addEventListener(
        "ended",
        function(){

            musicBtn.classList.remove(
                "music-playing"
            );

        }
    );

});

