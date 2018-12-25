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
    TouchableOpacity,
    ActivityIndicator,
    Animated
} from 'react-native'

import {LinearGradient } from 'expo'
import Expo from 'expo'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { validateEmailId } from '../../Validations';

const { width, height } = Dimensions.get('window')
export default class Startpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading:false
        };
        this.springValue = new Animated.Value(0.3)
    }

    componentWillMount(){
        this.spring()
    }

    spring () {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1
          }
        ).start()
      }

checkValidations(){
    if (this.state.email == null || this.state.email.trim().length == 0) {
        alert('Please Enter Email')

    }
   else  if (!validateEmailId(this.state.email)) {
    alert('Please Enter valid Email')
}
    else if (this.state.password.trim().length == 0) {
        alert('Please Enter password')
    }
    else {
        this.setState({loading:true})
        setTimeout(() => {
            this.setState({loading:false})
            this.props.navigation.navigate('Profile')
        }, 3000);
        
    }
}

    render() {
        
        return (
            <SafeAreaView style={styles.SignContainer}>
            
                <View style={styles.SignContainer}>
                
                <View style={{height:Platform.OS==='ios'?0:Expo.Constants.statusBarHeight}}/>
                    <View style={styles.Header}>
                        <Image style={{ height: 40, width: 40 }} source={require('../../assets/li_logo.png')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgb(138,52,140)' }}>Li Pigments</Text>
                        <View style={{ height: 40, width: 40 }} />
                    </View>
                    <KeyboardAwareScrollView enableOnAndroid={true}>
                    <View>

                    
                    <View style={{ height: height * 3 / 100 }} />
                    <Image style={{ alignSelf: 'center'  }} source={require('../../assets/login_logo.png')} />
                    <View style={{ height: height * 6 / 100 }} />
                    <Animated.View style={{ transform: [{scale: this.springValue}]  }}>
                    <LinearGradient
                        colors={['#ffffff', '#d3d3d3']}
                        style={{ height: 50, width: width - 40, alignSelf: 'center',borderRadius:12 }}>
                     
                        <TextInput
                            style={{ height: 50, width: width - 40, textAlign: 'center',fontSize:20,padding:0,paddingHorizontal:10}}
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            placeholderTextColor={'black'}
                            
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                        />
                    </LinearGradient>
                    </Animated.View>
                    <View style={{ height: height * 1.6 / 100 }} />
                    <Animated.View style={{ transform: [{scale: this.springValue}]  }}>
                    <LinearGradient
                        colors={['#ffffff', '#d3d3d3']}
                        style={{ height: 50, width: width - 40, alignSelf: 'center',borderRadius:12 }}>
                        <TextInput
                            style={{ height: 50, width: width - 40, textAlign: 'center',fontSize:20,padding:0,paddingHorizontal:10 }}
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            placeholderTextColor={'black'}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </LinearGradient>
                    </Animated.View>
                    <View style={{ height: height * 5 / 100 }} />
                    <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor:'white',height: height * 13 / 100,width:width, shadowOffset: { width: 0, height: 2 },shadowColor: 'rgba(0,0,0,0.08)',shadowOpacity: 1,shadowRadius: 4,elevation: 2,alignItems:'center',justifyContent:'center' }} onPress={() => this.checkValidations()}>
                    <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'rgb(138,52,140)' }}>sign in</Text>
                    </TouchableOpacity>
                    <View style={{ height: height * 3 / 100 }} />
                    <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor:'rgb(138,52,140)',height: height * 13 / 100,width:width, shadowOffset: { width: 0, height: 2 },shadowColor: 'rgba(0,0,0,0.08)',shadowOpacity: 1,shadowRadius: 4,elevation: 2,alignItems:'center',justifyContent:'center' }} onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>sign up</Text>
                    </TouchableOpacity>
                </View>
                {
this.state.loading===true?<ActivityIndicator style={{flex:1}}size="large" color="#000000" />:null
                }
                </KeyboardAwareScrollView>
               
                </View>
               
            </SafeAreaView>
        );
    }
    _handlePress() {
        console.log('Pressed!');
    }
}



const styles = StyleSheet.create({
    SignContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignSelf: 'stretch',

    },

    Header: {
        backgroundColor: 'white',
        //paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2

    },
    utilitiesNav: {
        flexDirection: 'row',


    },
    logotext: {
        flexDirection: 'row',



    },
    credentialsContainer: {
        backgroundColor: 'red',

    },

    middlecredentials: {
        backgroundColor: 'blue',
        alignItems: 'center',
        height: 80,



    }






})

