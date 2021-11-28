import { useState, useEffect } from "react";
import MCUShows from "./mcu-shows/MCUShows";

const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
 }

 const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
 ];

 

function App() {
  const [index, setIndex] = useState(0);

  const [num, setNum] = useState(0);

  useEffect(() => {
alert('The next MCU character has been displayed')
  }, [num]);

  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates={releaseDates} randomChar={setIndex} charList={mcuCharacters.length} currentChar={num} nextChar={setNum} />
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
