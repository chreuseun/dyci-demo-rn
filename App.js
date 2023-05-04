import React,{useEffect} from 'react';

import {SplashScreen} from 'src/components/screens'
import {useAppZustandStore} from 'src/zustand'
import PublicNavigator from 'src/navigation/public/PublicNavigator';
import PrivateNavigator from 'src/navigation/private/PrivateNavigator';


const App = () => {
  const {isAuthorizing,isAuthorized,updateAppIsAuthorized,updateAppIsAuthorizing} = useAppZustandStore(s => s)

  useEffect(()=>{
    console.log('--- APP START')

    setTimeout(()=>{
      // checking if user is logged in else display LOGIN SCREEN
      updateAppIsAuthorizing(false)
    },3000)
  }, [])

  if(!isAuthorizing && !isAuthorized){
    return <PublicNavigator/>
  }

  if(isAuthorized){
    return <PrivateNavigator/>
  }


  return <SplashScreen/>


};

export default App;
