import { create } from 'zustand'

const APP_INITIAL_STATE = {
    isAuthorizing:true,
    isAuthorized:false
}

const appZustandStore = create((set) => ({
  ...APP_INITIAL_STATE,
  updateAppIsAuthorizing: (isAuthorizing) => set(state => ({...state, isAuthorizing})),
  updateAppIsAuthorized: (isAuthorized) => set(state => ({...state, isAuthorized})),
  updateAppZustandState: () => set(state => ({...state}))
}))


export default appZustandStore