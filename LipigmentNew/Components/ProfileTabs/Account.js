import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    SafeAreaView,
    Image,
    Platform,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native'




const { width, height } = Dimensions.get('window')
export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    signOut = () => {
        this.props.signOut()
    }

    Lipigment = () => {
        this.props.Lipigment()
    }





    render() {
        return (

            <View style={styles.SignContainer}>
                <View style={{ height: height * 3 / 100 }} />
                <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', width: width-80, alignItems: 'center' }}>
                    <View >
                        <Text style={{ fontSize: 14, color: 'rgb(138,52,140)', fontWeight: 'bold' }}>Name</Text>
                        <Text style={{ fontSize: 14, color: 'grey', marginTop: 6 }}>Metia Story</Text>
                    </View>
                    <Text>Change</Text>
                </View>
                <View style={{ height: height * 3 / 100 }} />
                <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', width: width-80, alignItems: 'center' }}>
                    <View >
                        <Text style={{ fontSize: 14, color: 'rgb(138,52,140)', fontWeight: 'bold' }}>Email</Text>
                        <Text style={{ fontSize: 14, color: 'grey', marginTop: 4 }}>test@yopmail.com</Text>
                    </View>
                    <Text>Change</Text>
                </View>
                <View style={{ height: height * 3 / 100 }} />
                <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', width: width-80, alignItems: 'center' }}>
                    <View >
                        <Text style={{ fontSize: 14, color: 'rgb(138,52,140)', fontWeight: 'bold' }}>Registration Number</Text>
                        <Text style={{ fontSize: 14, color: 'grey', marginTop: 4 }}>555-5555-555</Text>
                    </View>
                    <Text>      </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 20, left:40 }} >
                
                <Text onPress={()=>alert('Change Password')}>Change Password</Text>
                <Text style={{marginTop: 20, color:'rgb(138,52,140)'}} onPress={()=>this.Lipigment()} >Lipigment</Text>
                <Text style={{marginTop: 14}} onPress={()=>this.signOut()}>Sign Out</Text>
               
                   
                </View>
                
            </View>

        );
    }
    _handlePress() {
        console.log('Pressed!');
    }
}



const styles = StyleSheet.create({
    SignContainer: {
        flex: 1,
      

    }
})
