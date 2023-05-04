import React,{useEffect} from 'react';

import {SplashScreen} from 'src/components/screens'
import {useAppZustandStore} from 'src/zustand'
import PublicNavigator from 'src/navigation/public/PublicNavigator';
import PrivateNavigator from 'src/navigation/private/PrivateNavigator';
import {ACCESS_TOKEN} from 'src/constants/keys'
import {mmkvGetString} from 'src/utils/mmkv'


const App = () => {
  const {isAuthorizing,isAuthorized,updateAppIsAuthorized,updateAppIsAuthorizing} = useAppZustandStore(s => s)

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

  if(!isAuthorizing && !isAuthorized){
    return <PublicNavigator/>
  }

  if(isAuthorized){
    return <PrivateNavigator/>
  }


  return <SplashScreen/>


};

export default App;
