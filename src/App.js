import React from "react";
import RouterURL from "./RouterURL";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RouterURL />
      </BrowserRouter>
    </div>
  )
}

export default App;

