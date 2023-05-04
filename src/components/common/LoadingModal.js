import React from 'react'

import {View, ActivityIndicator,Modal,Text} from 'react-native'

import {MAIN} from 'src/styles/colors'

const LoadingModal = ({show = false, message = 'Loading...'}) => {
    if(!show){
        return null
    }

    return (
        <Modal transparent>
            <View style={{height:'100%', backgroundColor:'#EFEFEFAF',width:'100%', justifyContent:"center",alignItems:'center'}}>
                <ActivityIndicator size={'large'} color={MAIN}/>
                <Text>{message}</Text>
            </View>
        </Modal>
    )
}

export default LoadingModal