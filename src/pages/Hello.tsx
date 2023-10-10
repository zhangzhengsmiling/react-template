import React, { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    (async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(1000);
        }, 1000);
      });
      console.log(data);
    })();
  }, []);

  return (
    <div
      className="Asdgf"
      style={{ width: '100%', height: '100px', background: 'orange', color: 'yellow' }}
    >
      this is hello
    </div>
  );
};

export default Hello;
