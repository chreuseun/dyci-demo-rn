import React,{useEffect} from 'react';

import {SplashScreen} from 'src/components/screens'
import {useAppZustandStore} from 'src/zustand'
import PublicNavigator from 'src/navigation/public/PublicNavigator';
import {ACCESS_TOKEN} from 'src/constants/keys'
import {mmkvGetString} from 'src/utils/mmkv'
import DrawerNavigation from 'src/navigation/private/DrawerNavigation'


const App = () => {
  const {
    isAuthorizing,
    isAuthorized,
    updateAppIsAuthorized,
    updateAppIsAuthorizing
  } = useAppZustandStore(s => s)

  useEffect(()=>{
    setTimeout(()=>{
      const jwt=  mmkvGetString(ACCESS_TOKEN)

      if(!!jwt){
        updateAppIsAuthorized(true)
        updateAppIsAuthorizing(false)
      }else{
        updateAppIsAuthorized(false)
        updateAppIsAuthorizing(false)
      }
    },3000)
  }, [])

  // Public part of the app
  if(!isAuthorizing && !isAuthorized){
    return <PublicNavigator/>
  }

  // Private part of the app
  if(isAuthorized){
    return <DrawerNavigation/>
  }

  // DEFAULT TO DISPLAY
  return <SplashScreen/>


};

export default App;
