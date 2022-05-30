/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { 
  DefaultTheme,
  NavigationContainer,
 } from '@react-navigation/native';

import Tabs from './src/navigation/tabs';

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState(DefaultTheme);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <NavigationContainer theme={theme}>
        <Tabs />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};
export default App;
