

const questions = [
    {
        category: "Food & Resources",
        question: "The last grocery store has been looted. You find one suspiciously intact can labeled MEAT.",
        options: [
            "Eat it. Protein is protein.",
            "Save it for bartering. Mystery meat is practically currency.",
            "Bury it. Whatever's inside deserves peace."
        ]
    },
{
    category: "Survival Skills",
    question: "Your shelter is freezing, and you have no firewood.",
    options: [
        "Start dismantling furniture.",
        "Burn the survival manual. Finally, a practical use.",
        "Declare winter canceled."
    ]
},
{
    category: "Combat & Defense",
    question: "A mutant creature blocks your only escape route.",
    options: [
        "Fight it. I've made worse decisions.",
        "Distract it with food and run.",
        "Compliment its appearance. Perhaps it's misunderstood."
    ]
},
{
    category: "Community & Leadership",
    question: "Your settlement has run out of food. Morale is collapsing.",
    options: [
        "Organize a supply expedition.",
        "Hold a motivational meeting. Attendance is mandatory.",
        "Rename starvation to intermittent fasting."
    ]
},
{
    category: "Psychological Stability",
    question: "After 47 days alone, your bunker walls begin whispering your name.",
    options: [
        "Investigate immediately.",
        "Whisper back. It's rude not to respond.",
        "Ask them to keep it down. Some of us are trying to sleep."
    ]
},
{
    category: "Medical Emergencies",
    question: "Your only medic has been bitten by something with an unreasonable number of teeth.",
    options: [
        "Quarantine them immediately.",
        "Ask if they're feeling bitey. Establish a baseline.",
        "Google the symptoms. The internet has been down for six years."
    ]
},
{
    category: "Scavenging",
    question: "You find an untouched supply crate marked DO NOT OPEN UNTIL THE END OF THE WORLD.",
    options: [
        "Open it. Pretty sure we're there.",
        "Check for traps. Optimism has killed enough people.",
        "Leave it. The instructions are very clear."
    ]
},
{
    category: "Transportation",
    question: "Your escape vehicle has three wheels, no brakes, and a full tank of gas.",
    options: [
        "Drive it. Momentum is a survival skill.",
        "Salvage the fuel and walk.",
        "List it for sale. Minor cosmetic damage."
    ]
},
{
    category: "Unexplained Phenomena",
    question: "A second moon appears overnight. It seems to be getting closer.",
    options: [
        "Seek shelter underground.",
        "Wave. First impressions matter.",
        "Demand to speak to whoever authorized this."
    ]
},
{
    category: "Ethics & Morality",
    question: "You discover a hidden food stash belonging to someone who abandoned your settlement.",
    options: [
        "Distribute it fairly.",
        "Keep it. Finders keepers survived the apocalypse.",
        "Leave a note apologizing, then take everything."
    ]
},
{
    category: "Communication",
    question: 'Your radio picks up a mysterious voice repeating, "DO NOT TRUST THE BIRDS."',
    options: [
        "Investigate the transmission.",
        "Of course. The birds work for the bourgeoisie.",
        'Respond, "Which birds? Please be specific."'
    ]
},
{
    category: "Environmental Hazards",
    question: "It has been raining for eleven days. The rain is now slightly fluorescent.",
    options: [
        "Collect samples. Science might explain this.",
        "Stay indoors. I already have enough problems.",
        "Stand outside. Free character customization."
    ]
}



];

const testimonyResponses = [
    "Your testimony has been received and forwarded to the Department of Unsolicited Opinions.\n\nUnfortunately, that department was destroyed in 2009.",

    "Your statement has been reviewed by three independent officials.\n\nTwo were raccoons. The third was a coat rack.\n\nThe coat rack has recommended denial.",

    "Your testimony has been classified as emotionally persuasive.\n\nUnfortunately, emotions were outlawed following the Incident.",

    "Your statement has been added to your permanent record.\n\nWe cannot tell you what that means.",

    "Thank you for your explanation.\n\nUnfortunately, the Department has a strict policy against reading.",

    "Your testimony has been marked STRICTLY CONFIDENTIAL.\n\nIt has also been posted in the staff break room.\n\nPlease direct any complaints to Percival T. Buttons.",

    "Your qualifications have been reviewed.\n\nWe find your confidence deeply unsettling.\n\nNo further action is required. We are already watching.",

    "Your testimony was forwarded to Reginald von Trashington III for executive interpretation.\n\nHe has translated it into a formal declaration of war against Luxembourg.\n\nThe Department regrets the inconvenience.",

    "Your testimony has been independently verified.\n\nThe witness was a moth.\n\nThe moth has since disappeared under suspicious circumstances.",

    "Thank you for your honesty.\n\nThis is the first honest statement the Department has received in 43 years.\n\nWe have forwarded it to the Fraud Division."
];

const verdicts = [
    {
        type: "approved",
        status: "APPROVED",
        title: "The Promotion",
        detail: "Assigned Position: Deputy Minister of Absolutely Nothing",
        message: "Congratulations. Your survival has been authorized.\n\nYour responsibilities remain classified because nobody knows what they are."
    },
    {
        type: "approved",
        status: "APPROVED",
        title: "The Luxury Bunker",
        detail: "Accommodation: Executive Survival Suite",
        message: "Congratulations! You've been granted access to the Department's most exclusive underground accommodations.\n\nUnfortunately, the previous occupants are still inside.\n\nThey have requested that you stop knocking."
    },
    {
        type: "approved",
        status: "APPROVED",
        title: "The Essential Worker",
        detail: "Assigned Position: Emergency Lighthouse Keeper",
        message: "Your services are considered essential to the rebuilding of civilization.\n\nThe nearest ocean is 900 miles away. The Department appreciates your flexibility."
    },
{
    type: "approved",
    status: "APPROVED BY DIVINE SCREAM",
    title: "The Supreme Favor",
    detail: "Special Authorization: Supreme Hyrax Decree",
    message: "His Excellency has personally approved your application.\n\nNo one knows why. He screamed at your paperwork for eleven minutes and then ate the seal.",
    special: true
},
{
    type: "denied",
    status: "DENIED",
    title: "Overqualified for Extinction",
    detail: "Reason: Qualifications Exceed Available Positions",
    message: "Your application was impressive. Unfortunately, you are overqualified for our current survival opportunities.\n\nThe Department encourages you to pursue extinction at a more senior level.",
    finePrint: "Your résumé will remain on file for the next 300–500 business years."
},
{
    type: "denied",
    status: "DENIED",
    title: "Failure to Meet Minimum Requirements",
    detail: "Reason: Insufficient Apocalypse Experience",
    message: "The Department requires a minimum of five years of post-apocalyptic experience for all entry-level survival positions.\n\nYour previous experience surviving ordinary civilization does not qualify.",
    finePrint: "Unpaid apocalyptic internships are available. Applicants must provide their own bunker."
},
{
    type: "denied",
    status: "DENIED",
    title: "Insufficient Suffering",
    detail: "Reason: Inadequate Apocalyptic Hardship",
    message: "Our records indicate that you have experienced moments of happiness during the collapse of civilization.\n\nThis is inconsistent with the Department's definition of an emergency.",
    finePrint: "Please demonstrate appropriate despair before submitting another application."
},
{
    type: "denied",
    status: "DENIED",
    title: "Budgetary Constraints",
    detail: "Reason: Survival Funding Exhausted",
    message: "Your survival request has been rejected due to insufficient departmental funding.\n\nRemaining funds have been allocated to an emergency executive retreat.",
    finePrint: "The retreat includes a heated pool. The bunker does not."
},

{
    type: "disaster",
    status: "PROCESSING ERROR",
    title: "Accidental Deification",
    detail: "Classification: Minor Deity, Third Class",
    message: "Due to a clerical error, your application was submitted to the Department of Divine Affairs.\n\nCongratulations. You are now legally recognized as the God of Slight Inconveniences.",
    finePrint: "Your powers include misplaced keys, uneven table legs, and printers running out of ink."
},
{
    type: "disaster",
    status: "TRANSFERRED",
    title: "Interdimensional Transfer",
    detail: "Assigned Location: Earth, Pending Verification",
    message: "Your application has been approved for relocation to an alternate reality.\n\nUnfortunately, the coordinates were entered incorrectly.",
    finePrint: "You have been transferred to a universe where every door leads to the same DMV."
},
{
    type: "disaster",
    status: "FILE NOT FOUND",
    title: "The Missing Applicant",
    detail: "Current Status: Administratively Nonexistent",
    message: "Your application has been misplaced.\n\nAs a result, the Department can no longer confirm that you exist.",
    finePrint: "If you believe you exist, please provide two witnesses and a recent photograph of yourself existing."
},
{
    type: "disaster",
    status: "STAFFING ERROR",
    title: "The Unexpected Promotion",
    detail: "Assigned Position: Acting Director of the Apocalypse",
    message: "Your survival application was accidentally processed as an executive job application.\n\nYou are now responsible for overseeing the apocalypse.",
    finePrint: "Your first performance review is tomorrow. Civilization's collapse will be reflected in your evaluation."
}


];

const reviewMessages = [
    "Verifying applicant's questionable qualifications...",
    "Cross-referencing emergency survival regulations...",
    "Consulting senior officials...",
    "Senior officials unavailable. Consulting Reginald...",
    "Reginald has requested legal representation.",
    "Reviewing testimony for signs of independent thought...",
    "Milton P. Crumb has eaten page three. Please remain patient.",
    "Your application has been temporarily classified as a sandwich.",
    "Locating the official Department stamp...",
    "Stamp located. Employee missing."
];



function beginApplication() {
    const selectedQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    
const container = document.getElementById("questionsContainer");
container.innerHTML = "";

selectedQuestions.forEach(function(item, index) {
    
const questionSection = document.createElement("div");
questionSection.className = "question-section";

    const heading = document.createElement("h3");
    heading.textContent = (index + 1) + ". " + item.category;

    const questionText = document.createElement("p");
    questionText.textContent = item.question;

    
questionSection.appendChild(heading);
questionSection.appendChild(questionText);

    
item.options.forEach(function(option, optionIndex) {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "question" + index;
    radio.value = optionIndex;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + option));

    
questionSection.appendChild(label);
questionSection.appendChild(document.createElement("br"));

});
container.appendChild(questionSection);


});


    document.getElementById("welcome").style.display = "none";
    document.getElementById("application").style.display = "block";
}




function submitApplication() {
   
for (let i = 0; i < 5; i++) {
    const answer = document.querySelector(
        'input[name="question' + i + '"]:checked'
    );

    if (!answer) {
        alert(
            "APPLICATION INCOMPLETE.\n\n" +
            "Milton P. Crumb has reported that question " +
            (i + 1) +
            " was left unanswered."
        );
        return;
    }
}


    
const testimony = document.getElementById("testimony").value.trim();
const testimonySection = document.getElementById("testimonyResponse");
const testimonyText = document.getElementById("testimonyResponseText");

if (testimony !== "") {
    const randomIndex = Math.floor(Math.random() * testimonyResponses.length);

    
if (randomIndex === 3) {
    const excerpt = testimony.slice(0, 80);

    testimonyText.textContent =
        'You stated: "' + excerpt +
        (testimony.length > 80 ? '...' : '') +
        '"\n\nThis information has been added to your permanent record.\n\nWe cannot tell you what that means.';
} else {
    testimonyText.textContent = testimonyResponses[randomIndex];
}

    // Milton changes crayons between paragraphs.
const paragraphs = testimonyText.textContent
    .split(/\n\s*\n/)
    .filter(paragraph => paragraph.trim() !== "");

const crayonColors = [
    "milton-crayon-1",
    "milton-crayon-2",
    "milton-crayon-3",
    "milton-crayon-4"
];

// Pick a different starting crayon each time.
const startingColor = Math.floor(Math.random() * crayonColors.length);

testimonyText.replaceChildren();

paragraphs.forEach(function(paragraph, index) {
    const line = document.createElement("span");

    line.className =
        crayonColors[(startingColor + index) % crayonColors.length];

    line.textContent = paragraph;
    line.style.display = "block";

    if (index > 0) {
        line.style.marginTop = "20px";
    }

    testimonyText.appendChild(line);
});
    testimonySection.style.display = "block";
} else {
    testimonyText.textContent = "";
    testimonySection.style.display = "none";
}

const FORCE_BART = false;
const FORCE_DENIAL = false;
const FORCE_PROMOTION = false;

const supremeOverride = FORCE_BART || Math.random() < 0.15;

document.getElementById("hyraxOverride").dataset.active =
    supremeOverride ? "true" : "false";

const availableVerdicts = verdicts.filter(function(item) {
    return item.special !== true;
});


let selectedVerdict;

if (FORCE_PROMOTION) {
    selectedVerdict = availableVerdicts.find(function(item) {
        return item.title === "The Unexpected Promotion";
    });

} else if (FORCE_DENIAL) {
    const deniedVerdicts = verdicts.filter(function(item) {
        return item.type === "denied";
    });

    const randomIndex = Math.floor(Math.random() * deniedVerdicts.length);
    selectedVerdict = deniedVerdicts[randomIndex];

} else if (FORCE_BART || supremeOverride) {
    selectedVerdict = verdicts.find(function(item) {
        return item.special === true;
    });

} else {
    const randomIndex = Math.floor(Math.random() * availableVerdicts.length);
    selectedVerdict = availableVerdicts[randomIndex];
}


document.getElementById("verdictStatus").textContent =
    "STATUS: " + selectedVerdict.status;
    document.getElementById("verdictStatus").className =
    "status-" + selectedVerdict.type;


document.getElementById("verdictTitle").textContent =
    selectedVerdict.title;


document.getElementById("verdictDetail").textContent =
    selectedVerdict.detail;

let verdict = selectedVerdict.message;


    



  

const verdictParagraphs = verdict.split("\n\n");
const verdictTextElement = document.getElementById("verdictText");

verdictTextElement.replaceChildren();

verdictParagraphs.forEach(function(paragraph, index) {
    const p = document.createElement("p");
    p.textContent = paragraph;

    if (index === verdictParagraphs.length - 1 && index > 0) {
        p.classList.add("verdict-final-remark");
    }

    verdictTextElement.appendChild(p);
});


const finePrintElement = document.getElementById("verdictFinePrint");

if (selectedVerdict.finePrint) {
    finePrintElement.textContent = selectedVerdict.finePrint;
    finePrintElement.style.display = "block";
} else {
    finePrintElement.textContent = "";
    finePrintElement.style.display = "none";
}



startReview();


const appealSection = document.getElementById("appealSection");
const percival = document.getElementById("percivalCharacter");

if (selectedVerdict.type === "denied") {
    appealSection.style.display = "block";
    percival.style.display = "block";
} else {
    appealSection.style.display = "none";
    percival.style.display = "none";
}

document.getElementById("appealResponse").textContent = "";

}






function restartApplication() {
   document.querySelectorAll('#questionsContainer input[type="radio"]').forEach(function(option) {

        option.checked = false;
    });

document.getElementById("testimony").value = "";
document.getElementById("verdictText").textContent = "";
document.getElementById("verdict").style.display = "none";
document.getElementById("application").style.display = "none";
document.getElementById("welcome").style.display = "block";
appealDodges = 0;
document.getElementById("appealButton").style.transform = "";
}


function fileAppeal() {
    document.getElementById("appealResponse").textContent =
        "APPEAL SUCCESSFULLY SUBMITTED.\n\n" +
        "Your appeal has been forwarded to the Department of Unsolicited Opinions.\n\n" +
        "Unfortunately, that department was destroyed in 2009.";

    document.getElementById("appealResponse").style.whiteSpace = "pre-line";
    document.getElementById("percivalCharacter").style.display = "none";
}

let appealDodges = 0;

function dodgeAppeal() {
    if (window.matchMedia("(hover: none)").matches) {
        return;
    }

    if (appealDodges >= 3) {
        return;
    }

    appealDodges++;

    const button = document.getElementById("appealButton");

   

const directions = [
    "translate(180px, -70px)",
    "translate(-180px, -70px)",
    "translate(220px, -30px)",
    "translate(-220px, -30px)",
    "translate(0px, -110px)",
    "translate(120px, -120px)",
    "translate(-120px, -120px)"
];



    
let randomIndex;

do {
    randomIndex = Math.floor(Math.random() * directions.length);
} while (button.style.transform === directions[randomIndex]);

button.style.transform = directions[randomIndex];

}

function startReview() {
    const reviewScreen = document.getElementById("review");
    const reviewMessage = document.getElementById("reviewMessage");

    document.getElementById("application").style.display = "none";
    reviewScreen.style.display = "block";

    reviewMessage.textContent = "Receiving survival application...";
    
const shuffledMessages = [...reviewMessages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

shuffledMessages.push("Forwarding application for final determination...");

let messageIndex = 0;

const reviewInterval = setInterval(function() {
    reviewMessage.textContent = shuffledMessages[messageIndex];
    messageIndex++;

    
if (messageIndex >= shuffledMessages.length) {
    clearInterval(reviewInterval);

    
setTimeout(function() {
    reviewScreen.style.display = "none";

    if (document.getElementById("hyraxOverride").dataset.active === "true") {
        document.getElementById("hyraxOverride").style.display = "block";
        const bartAudio = document.getElementById("bartAudio");
bartAudio.currentTime = 0;
bartAudio.play().catch(function(error) {
    console.log("Bart's scream could not play:", error);
});

        setTimeout(function() {
            document.getElementById("hyraxOverride").style.display = "none";
            document.getElementById("verdict").style.display = "block";
        }, 5000);

    } else {
        document.getElementById("verdict").style.display = "block";
    }
}, 1400);

}
}, 1400);
}



