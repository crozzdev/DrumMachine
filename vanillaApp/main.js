const $drumPads = document.getElementsByClassName('drum-pad')
const $powerToggle = document.getElementById('power-switch')
const $bankToggle = document.getElementById('bank-switch')
const $volumeSlider = document.getElementById('volume-slider')
const $display = document.getElementById('display')

const Sounds = [
    {
        id: "Q",
        sound: { title: "Heater-1", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
        soundBank: { title: "Chord_1", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" }
    },
    {
        id: "W",
        sound: { title: "Heater-2", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
        soundBank: { title: "Chord_2", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" }
    },
    {
        id: "E",
        sound: { title: "Heater-3", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
        soundBank: { title: "Chord_3", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" }
    },
    {
        id: "A",
        sound: { title: "Heater-4", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
        soundBank: { title: "Shaker", src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" }
    },
    {
        id: "S",
        sound: { title: "Open-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
        soundBank: { title: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" }
    },
    {
        id: "D",
        sound: { title: "Open-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
        soundBank: { title: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" }
    },
    {
        id: "Z",
        sound: { title: "Kick-n'-Hat", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
        soundBank: { title: "Punchy-Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" }
    },
    {
        id: "X",
        sound: { title: "Kick", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
        soundBank: { title: "Side-Stick", src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" }
    },
    {
        id: "C",
        sound: { title: "Closed-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
        soundBank: { title: "Snare", src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }
    }

];

const ids = Sounds.map(sound => sound.id)
const drumPadsArray = Array.from($drumPads)
const drumPadsLength = $drumPads.length

// Define the event listener function
const playAudio = function () {
    $display.innerText = this.id
    const audio = this.firstElementChild;
    audio.currentTime = 0;
    audio.volume = $volumeSlider.value;
    audio.play();
}

const setSounds = () => {
    for (let index = 0; index < drumPadsLength; index++) {
        const $drumPad = $drumPads[index]
        const $drumPadAudio = $drumPad.firstElementChild
        if ($bankToggle.checked) {
            $drumPad.id = Sounds[index].soundBank.title
            $drumPadAudio.src = Sounds[index].soundBank.src
        } else {
            $drumPad.id = Sounds[index].sound.title
            $drumPadAudio.src = Sounds[index].sound.src
        }

    }
}

const enableSounds = () => {
    // Add the event listener to each drum pad
    for (let i = 0; i < $drumPads.length; i++) {
        $drumPads[i].addEventListener('click', playAudio);
    }
}

const turnOff = () => {
    Array.from($drumPads).forEach(element => {
        const $drumPad = element.firstElementChild
        $drumPad.src = "#"
        element.removeEventListener('click', playAudio);
    });
}

const checkAndEnable = () => {
    if ($powerToggle.checked) {
        enableSounds()
        setSounds()

    } else {
        turnOff()
    }
}


checkAndEnable()

$powerToggle.addEventListener("change", checkAndEnable)
$bankToggle.addEventListener("change", setSounds)
$volumeSlider.addEventListener("input", () => {
    $display.innerText = `Volume: ${Math.floor(parseFloat($volumeSlider.value) * 100)}`
})
window.addEventListener("keydown", ({ key }) => {
    const upperKey = key.toUpperCase();
    if (ids.includes(upperKey)) {
        const $drumPad = drumPadsArray.find(element => element.innerText === upperKey);
        if ($drumPad) {
            playAudio.call($drumPad);
        }
    }
});