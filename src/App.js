import React, {createContext} from 'react';
import './App.css';
import Child1 from './Child1'

export const NameContext = createContext()
function App({name}) {
  return (
    <NameContext.Provider value={name}>
      <Child1 />
    </NameContext.Provider>
  );
}

App.defaultProps = {
  name: 'Greg'
}

export default App;
