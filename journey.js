// ---------------------------
// Terminal Messages
// ---------------------------

const terminalLines = [
    "Initializing Friendship Protocol...",
    "Loading Beautiful Memories...",
    "Searching Best Friend...",
    "Friend Found ✔ Nani ❤️"
];

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

const lines = [line1, line2, line3, line4];

function typeText(element, text, speed) {

    let index = 0;

    function typing() {

        if (index < text.length) {

            element.innerHTML += text.charAt(index);

            index++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

setTimeout(() => {

    typeText(lines[0], terminalLines[0], 40);

}, 500);

setTimeout(() => {

    typeText(lines[1], terminalLines[1], 40);

}, 2200);

setTimeout(() => {

    typeText(lines[2], terminalLines[2], 40);

}, 4200);

setTimeout(() => {

    typeText(lines[3], terminalLines[3], 40);

}, 6200);


// ---------------------------
// Hide Terminal
// ---------------------------

setTimeout(() => {

    document.getElementById("terminal").style.opacity = "0";

    setTimeout(() => {

        document.getElementById("terminal").style.display = "none";

    }, 1000);

}, 9000);


// ---------------------------
// Hero Typing
// ---------------------------

const heroMessage = "It all started with a simple 'Hi'...";

const typing = document.getElementById("typing");

let heroIndex = 0;

function heroTyping() {

    if (heroIndex < heroMessage.length) {

        typing.innerHTML += heroMessage.charAt(heroIndex);

        heroIndex++;

        setTimeout(heroTyping, 70);

    }

}

setTimeout(heroTyping, 10000);


// ---------------------------
// Begin Journey
// ---------------------------

const beginBtn = document.getElementById("beginBtn");

const bgMusic=document.getElementById("bgMusic");

bgMusic.volume=0.2;

const hero = document.getElementById("hero");

const letter = document.getElementById("letter");

const title = document.getElementById("letterTitle");

const text = document.getElementById("letterText");

const nextBtn = document.getElementById("nextBtn");


beginBtn.addEventListener("click",()=>{

    bgMusic.play();

    hero.style.display="none";

    letter.style.display="flex";

    title.innerHTML="";

    text.innerHTML="";

    typeLetter();

});


// ---------------------------
// Letter
// ---------------------------

const heading = "Dear Nani ❤️";

const letterMessage = `I've been thinking about this day for quite some time...

Because I didn't want to buy you just another gift.

I wanted to build one.

Every line which you're about to see...

was written with gratitude, memories, and a smile.

So...

Welcome to our story.`;


function typeLetter() {

    let i = 0;

    function titleTyping() {

        if (i < heading.length) {

            title.innerHTML += heading.charAt(i);

            i++;

            setTimeout(titleTyping, 100);

        }
        else {

            typeMessage();

        }

    }

    titleTyping();

}


function typeMessage() {

    let j = 0;

    function msgTyping() {

        if (j < letterMessage.length) {

            text.innerHTML += letterMessage.charAt(j);

            j++;

            setTimeout(msgTyping, 35);

        }
        else {

            nextBtn.style.display = "inline-block";

        }

    }

    msgTyping();

}
// ===========================
// LETTER → GALLERY
// ===========================

const galleryPage = document.getElementById("galleryPage");

nextBtn.addEventListener("click", () => {

    letter.style.display = "none";

    galleryPage.style.display = "flex";

});
const popup = document.getElementById("memoryPopup");

const popupTitle = document.getElementById("popupTitle");

const popupMessage = document.getElementById("popupMessage");
const popupImg1 = document.getElementById("popupImg1");

const popupImg2 = document.getElementById("popupImg2");

const popupImg3 = document.getElementById("popupImg3");

const closePopup = document.getElementById("closePopup");
const memories = [

    {

        title: "28 May 2025 ❤️",

        images: [

            "Nani 01.jpg"

        ],

        message: `Everything started
with one simple "Hi".

Little did I know that one greeting would become one of
the most beautiful chapters of my life.And I love that day where
the first hello brought a beautiful memories in my life 
Thank you For Coming into My Life❤️`

    },

    {

        title: "16 February 2026 ❤️",

        images: [],

        message: `After months
of conversations,we finally met.
That day will always remain in my heart.
Ah roju na happiness ki hadhulu levu nuvu vastunav ana 
anadam lo nannu nenu sariga chusukoledhu like dress,hair and face.
ninnu chusaka ninnu kalavalekapothuna ana badha antha poindhi.
niku ela anipinchindho telidhu gani ah roju is my one of the best
day ever telusa.
Ah roju antha tired ga unna vachav Thank You so much ra ❤️`

    },

    {

        title: "11 April 2026 ❤️",

        images: [

            "April-1.jpg",

            "April-2.jpg",

            "April-3.jpg"

        ],

        message: `It's  ur birthday day asalu marichipolenu first time ala
bayataki vachi ninnu kalisa adhi ni birthday avadam kuda chala bagundhi
ah roju nitho mataladina matalu tesukuna pics thaluchukuntey chala happy
anipistadhi ra. Ni hand tho na neck ni lock chesinapudu naku chala baga
nachindhi, lunch, ice cream nitho chala bagundhi. Actual ga gift mundhu
roju ey vachi untey birthday roju nenu pedudham anukuna kani nuvu office
lo undadam call lift cheyaleka povadam vala ala aipoindhi.
intiki velipoye thapudu ippudu edusthava ani adigav kani nuvu velaka
nennu nijam ganey eydicha endhuku antey time fast ga aipoindhi and
mali kalusthana ledhu ah ana bayam tho. e day marichipolenu❤️`

    },

    {

        title: "4 June 2026 ❤️",

        images: [
            "june-02.jpg",

            "june-01.jpg",

            "june-03.jpg"

        ],

        message: `This day is my biggest memorable day telusa.
Ah roju ninnu kalusthanu ani anukunapudu mundhu roju naku asalu nidra
pataledhu.ninnu ala white shirt chusi murisipoya nijam ga entha mudhu ga
unnav ra ah shirt lo. Naku baga nachina thing entoo telusa nuvu naku
tinipinchav kadha adhi. Padipoya ra akadey next time nunchi kuda tinipinchu
please😉. enka oka vishayam nitho ni favourite songs vintu ala metro 
lo road midha enjoy chestu chala chala nachindhi. Vitianiti kana naku
nachindhi ni proposal candy to rathnadeep lo and alwaya accepted.
nitho pics aitey ummahhh super also. ni hand hold chesinapudu aitey
😍 nitho ney na birthday celebrate chesukuna.
chalu naku edhi❤️.`

    },

    {

        title: "17 June 2026 ❤️",

        images: [

            "candy 01.jpg",

            "candy 02.jpg",

            "candy 03.jpg"

        ],

        message: `E day no occasion but nenu bayataki vastey ninnu
kalavali aney concept tho vacha. First ninnu kalavadaniki naku
occasion tho pani ledhu ninnu miss avuthuna kalavali anthey and
nuvu village ki veley mundhu kalavali endhuku antey village ki velitey
mataladey time niku undadhu kabati. Kani ah roju mataram bagundalsindhi
ninnu college ki tesukoni veladam mali lunch cheyadam, apudu kuda tinipinchadam
chala chala nachindhi. main thing ni midha aliginapudu nuvu candy tho
cool chesav chudu enka baga nachindhi nani. nitho ice cream nitho
matalalu antha nachuthaii. nuvu complete ga nachuthav ra. ah roju kuda
ninnu vadili velali ani anipinchaledhu ah roju kuda velipoyethapudu
edicha, kani mali kalustha ana chinna hope tho unna.❤️`

    }

];
// ==========================
// CURRENT MEMORY
// ==========================

let currentMemory = 0;

// ==========================
// OPEN POPUP
// ==========================

function openMemory(index) {

    currentMemory = index;

    popup.style.display = "flex";

    popupTitle.innerHTML = memories[index].title;

    popupMessage.innerHTML = memories[index].message;

    popupImg1.style.display = "none";
    popupImg2.style.display = "none";
    popupImg3.style.display = "none";

    if (memories[index].images.length > 0) {

        popupImg1.style.display = "block";

        popupImg1.src = memories[index].images[0];

    }

    if (memories[index].images.length > 1) {

        popupImg2.style.display = "block";

        popupImg2.src = memories[index].images[1];

    }

    if (memories[index].images.length > 2) {

        popupImg3.style.display = "block";

        popupImg3.src = memories[index].images[2];

    }

}

// ==========================
// PHOTO CLICK
// ==========================
console.log("JS Loaded");
document.getElementById("card1").addEventListener("click", () => {

    openMemory(0);

});

document.getElementById("card2").addEventListener("click", () => {

    openMemory(1);

});

document.getElementById("card3").addEventListener("click", () => {

    openMemory(2);

});

document.getElementById("card4").addEventListener("click", () => {

    openMemory(3);

});

document.getElementById("card5").addEventListener("click", () => {

    openMemory(4);

});

// ==========================
// CLOSE
// ==========================

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});
// ==========================
// PREVIOUS
// ==========================

const prevMemory = document.getElementById("prevMemory");

prevMemory.addEventListener("click", () => {

    if (currentMemory > 0) {

        currentMemory--;

        openMemory(currentMemory);

    }

});

// ==========================
// NEXT
// ==========================

const nextMemory = document.getElementById("nextMemory");

const finalPage = document.getElementById("finalPage");

nextMemory.addEventListener("click", () => {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        openMemory(currentMemory);

    }

    else {

        popup.style.display = "none";

        galleryPage.style.display = "none";

        lastPage.style.display = "flex";

        lastMessage.innerHTML = "";

        letterIndex = 0;

        typeLastMessage();

    }

});
// ===================================
// LAST PAGE
// ===================================

const lastPage = document.getElementById("lastPage");

const lastMessage = document.getElementById("lastMessage");

const restartBtn = document.getElementById("restartBtn");

const finalText = `Dear Nani,

Happy Friendship Day🫂Nani lu,
Finally esari ela aina Friendship day ayindhi.Nuvu ekkada undavu ani
telisinapudu em cheyali ani think chestu undanga edhi gurthu vachi ela
chesa.Nuvu parichayam aiyaka nenu anntu unanu ani telisindhi.oka apudu no
friends or chats ela entha deep ga, oka time vachaka andaru evari way valu
chusukovali so evarini entha close chesukoledhu your the first person entha 
ga close avadam. Nuvu anukovachu edhi em aina pichidhi ah elantivi chesukuntu
untadhi ledha normal friendship day ney kadhu endhuku edhi antha anni kani nenu 
nitho unantha kalam prathidhi naku special ey Nani, festival lantidhi.E days anni
endhuku petav ani adagachu avi naku chala antey chala special days, nitho prathi
day special day kani avi enka special naku,na happiness kuda. edhi cheyadaniki main reason ninnu chala miss avuthuna nani, chala 
antey chala naku attach aina first person nuvu. niku nenu just an another girl avi
undachu but naku nuvu only the boy who got attached very deeply.naku telusu e month
asalu kudharadhu ani niku kalavadaniki anduke ela.Ippudu ni mundhu 
navvutuna sweety backside enka oka sweety undhi who is shedding out her tears
everyday,fighting with the pain that she is carrying in her heart,craving for 
little love,care,affection,comfort,support,and hug to cry completely which is 
hurting .edhi nenu epati dhaka evariki chepaledhu nikey first cheputhuna.
evvi ani niku chiraku ga weird ga anipistey cheppu elantivi chesi ninnu
irritate cheyanu. Kani nijam cheputhuna nani nuvu em anukuna sare ninnu gattiga
hug chesukovali anni undhi adhi apudu avuthundho telidhu. 
nuvu nijam ga bangaram ra without filter untav.nuvu thitiditey baguntadhi 
ni midha aligitey enka baguntadi, nuvu chupinchey love,care,importance pure ra. enka
okati nuvu na degara ni badha,kastam dhachalsina avasaram ledhu. e fasting kuda nuvu bagundali
chestundhi naku edho aipothadi nuvu em bayapadanakara ledhu.mali mali cheputhuna
nuvu ey naku chala chala important ni place evariki evalenu evanu kuda sare na
But thank you thank you so much for coming into my life, ur the best chapter in my life😚😍🥰.
And once again Happy Friendship Day.
`;

let letterIndex = 0;

function typeLastMessage() {

    if (letterIndex < finalText.length) {

        lastMessage.innerHTML += finalText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLastMessage, 35);

    }

}
restartBtn.addEventListener("click",()=>{

    location.reload();

});