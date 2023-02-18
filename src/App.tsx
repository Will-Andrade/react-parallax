import React, { useRef } from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

// The layer is a page that takes up the entire screen
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef<IParallax | null>(null);

  return (
    <Parallax pages={4} ref={ref}>
      <ParallaxLayer
        offset={0} 
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'cover'
        }}
      />

      <ParallaxLayer 
        offset={2} 
        speed={1}
        factor={4}
        style={{
          backgroundImage: `url(${land})`,
          backgroundSize: 'cover'
        }}
      />

      <ParallaxLayer
        sticky={{ start: 0.9, end: 2.5 }}
        style={{ textAlign: 'center' }}
      >
        <img src={cat} alt="kitty parachute" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}
        speed={0.05}
        onClick={() => ref.current?.scrollTo(3)}
      >
        <h2>Welcome to my parallax!</h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.2}
        speed={2}
        onClick={() => ref.current?.scrollTo(0)}
      >
        <h2>Hello, World.</h2>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
