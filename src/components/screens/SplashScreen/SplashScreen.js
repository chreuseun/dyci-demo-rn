import React from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View
} from 'react-native'

const SplashScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:40, fontWeight:'bold'}}>
                SVMS
            </Text>
            <Text style={{fontSize:18, fontWeight:'bold'}}>
                Dr. Yanga's Colleges Inc.
            </Text>
            <View style={{marginTop:20, flexDirection:'row',justifyContent:'space-between', width:'100%', paddingHorizontal:90}}>  
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
                <View style={{borderWidth:5, borderColor:'#ADADAD',backgroundColor:'#dfdfdf', width:10,height:10, borderRadius:20}}></View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default SplashScreen
