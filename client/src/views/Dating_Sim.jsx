import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text, SimpleRope, Graphics,AnimatedSprite, } from '@pixi/react';
import { Point , TextStyle} from 'pixi.js'
import '@pixi/events';
import { useMemo, useCallback} from 'react';
import Button from '../components/Button';

export const Dating_Sim = () =>
{
  const noddingLaw = ["/src/assets/nodding0.png", "/src/assets/smiling.png" ,"/src/assets/nodding1.png"]
  const talkingLaw = ["/src/assets/smiling.png", "src/assets/talking.png"]
  const draw = useCallback((g) => {
    g.clear();
    g.lineStyle(2, 0xff00ff, 1);
    g.beginFill(0xff00bb, 0.25);
    g.drawRect(50, 25, 700, 100, 15);
    g.endFill();
    g.endFill();
  }, []);

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

    <Stage options={{ background: 0xffffff }}>
        <AnimatedSprite
        anchor={{ x: 0.4, y: 0.0 }}
        images={noddingLaw}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.1}
        pointerdown={() => {
          console.log("click");
          images ={talkingLaw}
        }}
      />
      {/* <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={200}
        y={200}
        anchor={{ x: 0.4, y: 0.4 }}
      /> */}
      <Graphics draw = {draw} />
        <Text text="Let's Chat Now?" anchor={{ x: - 1, y: -1.5 }} />
        <Text style={style} x={400} y={180} text="Hot Single Software Developers in your Area!" />
    </Stage>
  );
};