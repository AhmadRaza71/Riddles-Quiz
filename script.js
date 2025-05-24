const riddles = [
    { question: "Aik cheez jo khud bhi chalti hai aur doosron ko bhi chalati hai?", options: ["Cycle", "Gaari", "Train", "Rickshaw"], answer: "Train" },
    { question: "Aik cheez jo peeti bhi hai aur pilati bhi hai?", options: ["Bottle", "Chai", "Glass", "Jug"], answer: "Glass" },
    { question: "Aik cheez jo pehni jaati hai magar nazar nahi aati?", options: ["Andhera", "Chadar", "Topi", "Khauf"], answer: "Andhera" },
    { question: "Barish mein gila nahi hota?", options: ["Pani", "Saya", "Aasmaan", "Chhatri"], answer: "Aasmaan" },
    
    { question: "Wo kya cheez hai jo khane ke kaam bhi aati hai aur pehnne ke bhi?", options: ["Lota", "Plate", "Dastarkhwan", "Chappal"], answer: "Dastarkhwan" },
    { question: "Aisi cheez jo likhi bhi jaati hai aur boli bhi jaati hai?", options: ["Kitaab", "Zubaan", "Shaairi", "Tehreer"], answer: "Shaairi" },
    { question: "Wo kya cheez hai jo sochti nahi lekin sab kuch batati hai?", options: ["TV", "Mirror", "Mobile", "Book"], answer: "Mirror" },
    { question: "Aisi cheez jo bina pair ke chalti hai?", options: ["Train", "Pankha", "Hawa", "Naav"], answer: "Naav" },
    { question: "Bina mu ke bolta hai?", options: ["Radio", "TV", "Mic", "Mobile"], answer: "Radio" },
    { question: "Ghar ka aik fard jo sab ka kaam karta hai?", options: ["Fan", "TV", "Mummy", "Fridge"], answer: "Mummy" },
    { question: "Aik aisi jagah jahan har waqt andhera hota hai?", options: ["Qabar", "Kona", "Drawer", "Camera"], answer: "Qabar" },
    { question: "Aisi cheez jisko jitna nikaalo, utni hi barhti jaaye?", options: ["Paisa", "Ghaas", "Dosti", "Raasta"], answer: "Raasta" },
    { question: "Aisi cheez jo ud bhi sakti hai, chal bhi sakti hai?", options: ["Hawa", "Chiriya", "Kite", "Pankha"], answer: "Kite" },
    { question: "Aik aisi cheez jo din mein chhupi hoti hai?", options: ["Tara", "Chand", "Neend", "Bijli"], answer: "Tara" },
    { question: "Ek aisi cheez jo na zinda hai na murda?", options: ["Paani", "Patthar", "Kagaz", "Tasveer"], answer: "Tasveer" },
    { question: "Aik aisi cheez jo barhti nahi magar lambi hoti jaati hai?", options: ["Line", "Road", "Umar", "Ghaas"], answer: "Road" },
    { question: "Aisi cheez jiska sir bhi hai aur pair bhi?", options: ["Saanp", "Lathi", "Insaan", "Naala"], answer: "Saanp" },
    { question: "Aik aisi cheez jo andheron mein kaam aati hai?", options: ["Torch", "Radio", "Phone", "TV"], answer: "Torch" },
    { question: "Aik cheez jo sabko dikhayi deti hai lekin khud nahi dekhti?", options: ["Aankh", "Camera", "Mirror", "Bulb"], answer: "Bulb" }
];

let current = 0;
const container = document.getElementById('question-container');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

function showQuestion() {
    const riddle = riddles[current];
    container.innerHTML = `
      <h2>${riddle.question}</h2>
      ${riddle.options.map(opt => `<button class="option" onclick="selectAnswer(this, '${opt}')">${opt}</button>`).join('')}
    `;
}

function selectAnswer(button, selected) {
    const isCorrect = selected === riddles[current].answer;
    const buttons = document.querySelectorAll('.option');

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === riddles[current].answer) {
            btn.classList.add('correct');
        }
    });

    if (!isCorrect) {
        button.classList.add('incorrect');
        wrongSound.play();
    } else {
        correctSound.play();
    }

    setTimeout(() => {
        current++;
        if (current < riddles.length) {
            showQuestion();
        } else {
            container.innerHTML = `<h2>🎉 Wah! Aap ne tamam riddles solve kar liye! 🎉</h2>`;
        }
    }, 1800);
}

showQuestion();
  