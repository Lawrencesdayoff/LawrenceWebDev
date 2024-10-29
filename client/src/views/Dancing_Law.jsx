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
                    ,"/assets/DancingLaw6.png"]

return(
<Stage width ={250} height= {500} options={{ background: 0xffffff }} renderOnComponentChange = {true}>
        <AnimatedSprite
        eventMode= {'static'}
        anchor={{ x: 0, y: 0.0 }}
        scale = {0.45}
        images={dancingLaw}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.1}
      />
    </Stage>
)
}

export default Dancing_Law;