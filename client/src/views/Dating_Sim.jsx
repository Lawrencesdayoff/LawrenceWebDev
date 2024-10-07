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
    g.drawRect(10, 400, 200, 100);
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

    <Stage width ={250} height= {500} options={{ background: 0xffffff }}>
        <AnimatedSprite
        anchor={{ x: 0.45, y: 0.0 }}
        scale = {0.5}
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
        <Text style={style} x={0} y={180} text="Hot Single" />
        <Text style={style} x={0} y={220} text="Software Devs" />
        <Text style={style} x={0} y={260} text="in your Area!" />
        <Text style={style} x={0} y={400} text="Let's" />
        <Text style={style} x={0} y={440} text="Chat!!" />
    </Stage>
  );
};