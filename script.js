const subjects = [
    "Pigeons", 
    "Cats", 
    "The moon", 
    "Birds", 
    "The internet", 
    "Dinosaurs", 
    "Aliens", 
    "Bigfoot", 
    "Vending machines", 
    "Smartphones", 
    "Traffic lights", 
    "Rainbows", 
    "Squirrels", 
    "The Bermuda Triangle", 
    "Elves",
    "Robots",
    "Ghosts",
    "Mermaids",
    "Whales",
    "Ancient civilizations",
    "Time travelers"
];

const actions = [
    "are government drones", 
    "are secretly plotting", 
    "control our thoughts", 
    "are working with aliens", 
    "are hiding something", 
    "feed on our fears", 
    "are part of a larger conspiracy", 
    "communicate through telepathy", 
    "predict the future", 
    "are powered by crystals", 
    "collect our personal data", 
    "are manipulating our weather", 
    "influence our dreams", 
    "disguise themselves as pets", 
    "are sent to distract us",
    "are actually advanced AI",
    "create illusions to mislead us",
    "are capable of mind control",
    "have infiltrated our society",
    "are testing our reactions",
    "are orchestrating world events"
];

const consequences = [
    "to spy on us.", 
    "to take over the world.", 
    "to manipulate our emotions.", 
    "to hide the truth about history.", 
    "to steal our snacks.", 
    "to control the government.", 
    "to cause global warming.", 
    "to start a new religion.", 
    "to alter our memories.", 
    "to hide the existence of unicorns.", 
    "to keep us in line.", 
    "to harvest our energy.", 
    "to bring about the apocalypse.", 
    "to turn humans into pets.", 
    "to distract us from the real issues.",
    "to replace key figures in society.",
    "to cause mass hysteria.",
    "to influence political decisions.",
    "to create division among people.",
    "to gather data for a future takeover."
];

let previousTheories = new Set(); // Store previously generated theories

function generateConspiracyTheory() {
    let theory;

    // Generate a unique theory
    do {
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const randomConsequence = consequences[Math.floor(Math.random() * consequences.length)];
        
        theory = `${randomSubject} ${randomAction} ${randomConsequence}`;
    } while (previousTheories.has(theory) && previousTheories.size < (subjects.length * actions.length * consequences.length)); // Check against the set

    previousTheories.add(theory); // Store the new theory
    return theory;
}

function fetchTheory() {
    // Show the loading message
    document.getElementById('loading').style.display = 'block';
    document.getElementById('theory').innerText = ''; // Clear previous theory

    // Simulate a short delay to mimic processing time
    setTimeout(() => {
        const theory = generateConspiracyTheory();
        
        // Display the theory
        document.getElementById('theory').innerText = theory;

        // Hide the loading message
        document.getElementById('loading').style.display = 'none';
    }, 1000); // Adjust the delay as needed (1000 ms = 1 second)
}

document.getElementById('generate-btn').addEventListener('click', fetchTheory);
