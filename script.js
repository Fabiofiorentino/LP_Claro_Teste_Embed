const socialMidiaDiv = document.querySelector('.social-midia');
const ticketCardsContainer = document.querySelector('.ticket-cards-container');
const divCanaisLogos = document.querySelector('.canais-logos');

const midiasLogos = [ 
    {
        src: './assets/facebook.svg',
        href: 'https://www.facebook.com/clarobrasil'
    }, 
    {
        src:'./assets/twitter.svg',
        href: 'https://twitter.com/clarobrasil'
    }, 
    {
        src:'./assets/instagram.svg',
        href: 'https://www.instagram.com/clarobrasil/'
    }, 
    {
        src:'./assets/youtube.svg',
        href: 'https://www.youtube.com/@ClaroBrasil'
    }, 
    {
        src:'./assets/linkedin.svg',
        href: 'https://www.linkedin.com/company/clarobrasil/'
    }
];

const ticketCardsInfo = [
    {
        n: 1,
        title: './assets/cadastre',
        description: 'CADASTRE-SE NO APP <span>MINHA CLARO RESIDENCIAL</span> OU ACESSE O SITE DA PROMOÇÃO'
    },
    {
        n: 2,
        title: './assets/ganhe',
        description: 'TURBINAOD O<br />SEU PLANO VOCÊ GANHA<span>+1 NÚMERO DA SORTE</span>'
    },
    {
        n: 3,
        title: './assets/concorra',
        description: 'A VIAGENS PARA O QATAR'
    },
];

const channelsLogos = ['multishow','sportv','gnt','warner-bros','universal.png','cnn','disney-channel','discovery-kids','gloob','food','discovery','h-and-h','band-sports','espn','globonews','world','bis','nickelodeon','viva','tnt','off','axn','cartoon-network','mtv','history-channel','rede-globo','sbt','band'];

function addSocialMidiaLogos() {
    midiasLogos.forEach((logo) => {
        const link = document.createElement('a');
        const img = document.createElement('img');
        link.href = logo.href;
        img.src = logo.src;
        img.style.width = '20px';
        img.style.margin = '0 5px';
        link.append(img)
        socialMidiaDiv.append(link);
    })
}

addSocialMidiaLogos();

function copyright() {
    const paragraphy = document.querySelector('.copyright')
    const data = new Date().getUTCFullYear();
    paragraphy.innerHTML = `© ${data} Claro. Todos os direitos reservados.`;
}

copyright();

function ticketCards() {
    ticketCardsInfo.forEach((info) => {
        const card = document.createElement('div');
        card.className = 'ticket-card';

        const img = document.createElement('img');
        img.className = 'circulo-riscado';
        img.src = './assets/circulo-riscado';

        const num = document.createElement('h1');
        num.className = 'num-ticket';
        num.innerHTML = info.n;

        const title = document.createElement('img');
        title.className = 'title-ticket';
        title.src = info.title;

        const description = document.createElement('h2');
        description.className = 'description-ticket';
        description.innerHTML = info.description;

        card.appendChild(img);
        card.appendChild(num);
        card.appendChild(title);
        card.appendChild(description);
        ticketCardsContainer.appendChild(card);
        console.log(ticketCardsInfo)
    })
};

ticketCards();

function insertLogoChannels() {
    channelsLogos.forEach((logo) => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'channel-logo-div';
        const img = document.createElement('img');
        img.className = 'channel-logo';
        img.src = `./assets/${logo}`;
        imgDiv.appendChild(img);
        divCanaisLogos.appendChild(imgDiv);
    })
}

insertLogoChannels();

function carouselTicketCards() {
    const controls = document.querySelectorAll('.control');
    let currentTicket = 0;
    const tickets = document.querySelectorAll('.ticket-card');
    const maxTickets = tickets.length;

    controls.forEach((control) => {
        control.addEventListener('click', () => {
            const isPrev = control.classList.contains('prev');

            if(isPrev) {
                currentTicket -= 1;
            } else {
                currentTicket += 1;
            }

            if(currentTicket >= maxTickets) {
                currentTicket = 0;
            }

            if(currentTicket < 0) {
                currentTicket = maxTickets -1;
            }

            tickets.forEach((ticket) => {

                tickets[currentTicket].scrollIntoView({
                    inline: 'center',
                    behavior: 'smooth'
                })
            })
        })
    })
}

carouselTicketCards();


