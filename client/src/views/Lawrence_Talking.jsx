import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text, SimpleRope, Graphics,AnimatedSprite, } from '@pixi/react';
import { Point , TextStyle} from 'pixi.js'
import '@pixi/events';
import { useMemo, useCallback} from 'react';
import Button from '../components/Button';
import { useState } from 'react';
import { el } from '@faker-js/faker';

const Lawrence_Talking = () => {
    
  const noddingLaw = ["/assets/nodding0.png", "/assets/smiling.png" ,"/assets/nodding1.png"]
  const talkingLaw = ["/assets/smiling.png", "/assets/talking.png"]
  const animationSets = [noddingLaw, talkingLaw]
  const [lawAnimations, setAnimation] = useState(talkingLaw);
  const ChangeAnimation = (animationset) => {
    setAnimation(animationset)
    
  }
  const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 400
  })

  return (

    <Stage width ={250} height= {500} options={{ background: 0xffffff }} renderOnComponentChange = {true}>
        <AnimatedSprite
        eventMode= {'static'}
        anchor={{ x: 0.45, y: 0.0 }}
        scale = {0.5}
        images={lawAnimations}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.1}
        click={() => {
            console.log(lawAnimations)
          }}
      />
      {/* <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={200}
        y={200}
        anchor={{ x: 0.4, y: 0.4 }}
      /> */}

        <Text style={style} x={0} y={180} text="Please" />
        <Text style={style} x={0} y={220} text="Hire" />
        <Text style={style} x={0} y={260} text="Me!" />
        <Text style={style} x={0} y={400} text="Let's" />
        <Text style={style} x={0} y={440} text="Chat!!" />
    </Stage>
  )
}

export default Lawrence_Talking;