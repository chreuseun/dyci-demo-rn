import React from 'react'
import {SafeAreaView,StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {DARK,} from 'src/styles/colors'

const PrivateTemplate = ({
    children,
    title = ''
}) => {
    const navigation = useNavigation()

    const onDrawerTogglePress = () => {
        navigation.toggleDrawer();
    }

    return(
        <SafeAreaView>
            <View style={styles.headerCont}>
                <TouchableOpacity onPress={onDrawerTogglePress}>
                    <View style={styles.toggleButtonCont}/>
                </TouchableOpacity>
                <View style={{flex:1,padding:8, alignItems:'flex-start', justifyContent:'center'}}>
                    <Text style={{fontSize:20,textAlignVertical:'center',fontWeight:'bold',  marginLeft:4,color:'#363636'}}>{title}</Text>
                </View>
            </View>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerCont: {
        borderBottomWidth: 0.2, padding:8, borderBottomColor: DARK,
        flexDirection:'row',
        backgroundColor:'#FFF'
    },
    toggleButtonCont:{
      width:45, height:45, backgroundColor: DARK, borderRadius:10,elevation:100
    }

})

export default PrivateTemplate