import React from 'react'
import styled from 'styled-components'

const { useEffect, useState } = React;

const bank = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
},{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
},{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
},{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
},{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
},{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
},{
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
},{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
},{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}]



const App = () => {
  //we are setting our state so that we can trigger sound when we press our drumPad buttons
  const [padTriggered, setPadTriggered] = useState('Start Jammin!')
  
  
  const playSound = (e) => {
    //drumPad = our 'bank' filterd by 'pad' which is each id in 'bank' which will be our events target id
    const drumPad = bank.filter(pad => pad.id === e.target.id)
    
    //sound =  getting  each 'keyTrigger' in 'drumPad'
    const sound = document.getElementById(drumPad[0].keyTrigger)
    
    //our sounds starting point
    sound.currentTime = 0
    
    //will play our sound
    sound.play()
    
    //setPadTriggered will display the drumPad's id
    setPadTriggered(drumPad[0].id)
  }
  
  const handleKeyPress = (e) => {
    //drumPad = our 'bank' filtered by 'pad' which is each keyCode in 'bank' which will be our events keyCode 
    const drumPad = bank.filter(pad => pad.keyCode === e.keyCode)
    
    // button = getting each id in 'drumPad'
    const button = document.getElementById(drumPad[0].id)
    
    //we add the click() method to our 'button'
    button.click()
  }
  
  useEffect(() => {
    // we will listen for a 'keydown' event and when it apears we will trigger our handleKeyPress function
    document.addEventListener('keydown', handleKeyPress)
  },[])
  
  return(
    <Wrapper id="wrapper">
      <Title id="title">Drum Machine</Title>
       <DrumMachine id="drum-machine">
           {bank.map(pad => (
            <Button id={pad.id} className="drum-pad" onClick={playSound}>
              {pad.keyTrigger}
              <audio id={pad.keyTrigger} className="clip" src={pad.url}/>
            </Button>
           ))}
         <Display id="display">
           {padTriggered}
          </Display>
       </DrumMachine>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  padding: 80px;
  font-size: 80px;
  font-family: 'Lobster', cursive;
  color: papayawhip;
/*   color: #f6bd60; */
`
const DrumMachine = styled.div`
  width: 310px;
  height: 310px;
  background-color: #f5cac3;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
`
const Display = styled.div`
  padding: 10px;
  font-weight: 500;
  font-size: 25px;
  color: #f28482;
  font-family: 'Lobster', cursive;
`
const Button = styled.button`
  height: 70px;
  width: 70px;
  margin:10px;
  background-color: #f7ede2;
  border: 0px;
  border-radius: 10px;
  color: #f28482;
  font-size: 20px;
  transition: 400ms;
  &:hover {
    background-color: #f28482;
    color: #f7ede2;
  }
`

export default App