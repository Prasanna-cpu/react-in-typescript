import React from 'react'




const App = () => {
  let name: string = "Kumar";
  let hobbies: string[];

  let role: [number, string];

  type Person = {
    name: string;
    age?: number;//Optional
  };

  let person: Person = {
    name: "Ram",

  };

  return (
    <div className="App">
      <h3>Hello {name}</h3>
    </div>
  );
};

export default App