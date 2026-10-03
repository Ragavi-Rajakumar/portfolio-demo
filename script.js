document.getElementById("year").textContent =
    new Date().getFullYear();


function handleSubmit(event){

    event.preventDefault();


    const form = event.target;

    const data = new FormData(form);


    const name = data.get("name");

    const email = data.get("email");

    const subject =
        data.get("subject") ||
        "Message from Portfolio";

    const message =
        data.get("message");


    const mailBody =
        encodeURIComponent(
            `${message}\n\n— ${name} (${email})`
        );


    const mailto =
        `mailto:rajakumarragavi2007@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailBody}`;


    window.location.href = mailto;


    document.getElementById("formResponse").textContent =
        "Mail app opening… If not, please email directly.";

}



/* Smooth navigation */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event){

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if(target){

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

                }

            }
        );

    });



/* Card reveal */

const cards =
    document.querySelectorAll(
        ".cert-card, .project, .skills-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold:0.12
        }

    );


cards.forEach(card => {

    observer.observe(card);

});