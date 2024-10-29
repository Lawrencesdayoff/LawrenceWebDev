import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text, SimpleRope, Graphics,AnimatedSprite, } from '@pixi/react';
import { Point , TextStyle} from 'pixi.js'
import '@pixi/events';
import { useMemo, useCallback} from 'react';
import Button from '../components/Button';
import { useState } from 'react';


const Dancing_Law = () => {
  
  const dancingLaw = ["/assets/DancingLaw1.png"
                      ,"/assets/DancingLaw2.png"
                      ,"/assets/DancingLaw3.png"
                      ,"/assets/DancingLaw4.png"
                      ,"/assets/DancingLaw5.png" 
                      ,"/assets/DancingLaw6.png"
                      , "/assets/PointingLaw.png"];
  const [dance, setDancingAnimation] = useState(dancingLaw);
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
return(
<Stage width ={250} height= {500} options={{ background: 0xffffff }} renderOnComponentChange = {true}>
        <AnimatedSprite
        eventMode= {'static'}
        anchor={{ x: 0, y: 0.0 }}
        scale = {0.45}
        images={dance}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.05}
      />
        <Text style={style} x={0} y={180} text="Hot Single" />
        <Text style={style} x={0} y={220} text="Web Devs" />
        <Text style={style} x={0} y={260} text="in your Area!" />
        <Text style={style} x={0} y={400} text="Let's" />
        <Text style={style} x={0} y={440} text="Chat!!" />
    </Stage>
)
}

export default Dancing_Law;