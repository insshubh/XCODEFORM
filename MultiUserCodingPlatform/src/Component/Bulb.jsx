import React, { useState } from 'react';

const BulbButton = () => {
    const [isOn, setIsOn] = useState(false);
  
    const toggleBulb = () => {
      setIsOn(!isOn);
    };
}
export default function Bulb() {
  return (
    
    <button onClick={toggleBulb}>
      {isOn ? 'Turn Off' : 'Turn On'}
    </button>
  );
};

