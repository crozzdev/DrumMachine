# DrumMachine Project

This is the project for the DrumMachine, which is the third one to get the FrontEnd Libraries certification offered by freeCodeCamp. More info [here](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine)

The project has two folder.

- reactApp: the project built using React and only vanilla CSS
- vanillaApp: the project built using only vanilla JS and CSS

Both are packaged using Vite. Be careful to each README inside. This project fulfills the following user stories:

- User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

- User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

- User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

- User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

- User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

- User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

- User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

## Installation

1. Clone the repository: `git clone https://github.com/your-username/drum-machine.git`
2. Navigate to the project directory: `cd drum-machine`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev:react` this is because I was experimenting having both the vanilla and react version under the same project folder, this is why you will see two different vite configurations:

- vite.config.js -> for the vanilla version
- vite.react.config.js -> for the react version

2. Open your browser and navigate to `http://localhost:3000`
3. Click on the drum pads to play different sounds

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
