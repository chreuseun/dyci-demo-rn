import React,{useEffect} from 'react';

import PrivateNavigator from 'src/navigation/private/PrivateNavigator';

import {SplashScreen} from 'src/components/screens'

const App = () => {

  useEffect(()=>{
    console.log('--- APP START')
  }, [])


  return <SplashScreen/>
};

export default App;
