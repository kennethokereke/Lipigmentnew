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
export default class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        return (

            <View style={styles.SignContainer}>
                 <Text>Terms</Text>
                
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
  alignItems:'center',
  justifyContent:'center'
    }
})
