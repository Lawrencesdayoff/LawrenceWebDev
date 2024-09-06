import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text, SimpleRope } from '@pixi/react';
import { Point } from 'pixi.js'
import { useMemo } from 'react';

export const Dating_Sim = () =>
{
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (

    <Stage options={{ background: 0xffffff }}>
                <SimpleRope
            points={[
            new Point(0, 150),
            new Point(100, 100),
            new Point(150, 150),
            new Point(200, 100),
            new Point(400, 150),
            ]}
    image={'https://pixijs.io/pixi-react/img/bunny.png'}
  />
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={200}
        y={200}
        anchor={{ x: 0.4, y: 0.4 }}
      />

      <Container x={400} y={330}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />

      </Container>
    </Stage>
  );
};