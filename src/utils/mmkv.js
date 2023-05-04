import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

const mmkvSet= ({
    key = null,
    value = null
}) => {
    try{
        storage.set(key, value)
    }catch(err){
        console.log()
    }
}

const mmkvGetString = (key) => {
    try{
        return  storage.getString(key)
    }catch{
        return null
    }
}

const mmkvGetNumber = (key) => {
    try{
        return  storage.getNumber(key)
    }catch{
        return null
    }
}

const mmkvGetBoolean = (key) => {
    try{
        return  storage.getBoolean(key)
    }catch{
        return null
    }
}

const mmkvDelete = (key) => {
    storage.delete(key)
}

const mmkvClearAll = () => {
    storage.clearAll()
}


export {
    mmkvSet,
    mmkvGetString,
    mmkvGetNumber,
    mmkvGetBoolean,
    mmkvClearAll,
    mmkvDelete,
} 