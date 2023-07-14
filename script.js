const button = document.getElementById("btn");
const output = document.querySelector(".lower")

    let quote = [
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        "Perform every action with you heart fixed on the Supreme Lord. Renounce attachment to the fruits. Be even-tempered in success and failure: for it is this evenness of temper which is meant by yoga.",
        "Work done with anxiety about results is far inferior to work done without such anxiety, in the calm of self-surrender. Seek refuge in the knowledge of Brahma. They who work selfishly for results are miserable.”",
        "“When a man dwells on the pleasure of sense, attraction for them arises in him. From attraction arises desire, the lust of possession, and this leads to passion, to anger.",
        "From passion comes confusion of mind, then loss of remembrance, the forgetting of duty. From this loss comes the ruin of reason, and the ruin of reason leads man to destruction.”",
        "“But it is I who am the ritual, I the sacrifice, the offering to the ancestors, the healing herb, the transcendental chant. I am the butter and the fire and the offering.”",
        "“It is better to live your own destiny imperfectly then to live an imitation of somebody else's life with perfection.”",
        "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
        "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
        "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren",
        "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden"
    ];

    button.addEventListener("click", ()=>{
        console.log("done");
        let random = Math.floor(Math.random()*quote.length)
        output.textContent = quote[random];
    });