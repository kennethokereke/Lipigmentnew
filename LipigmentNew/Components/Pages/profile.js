import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    Platform,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import Expo from 'expo'
import Account from '../ProfileTabs/Account'
import Billing from '../ProfileTabs/Billing'
import Terms from '../ProfileTabs/Terms'

const { width, height } = Dimensions.get('window')
export default class Startpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            phone: '',
            selectedTab:1,
            selectedCountry: 'Select Country',
            countriesList: ['United States of America', 'India', 'Sri Lanka', 'Australia']
        };
    }

    getCountry = (i) => {
        this.setState({ selectedCountry: this.state.countriesList[i] })
    }

    changeView = (index) =>{
        switch (index) {
            case 1:
                this.setState({selectedTab:1})
                break;
                case 2:
                this.setState({selectedTab:2})
                break;
                case 3:
                this.setState({selectedTab:3})
                break;
            default:
                break;
        }
    }

    signOut = () => {
        this.props.navigation.navigate('SignIn')
    }

    Lipigment = () => {
        this.props.navigation.navigate('Lipigment')
    }

    showView = () =>{
        switch (this.state.selectedTab) {
            case 1:
                return(
                    <Account signOut={this.signOut} Lipigment={this.Lipigment} />
                ) 
               
                case 2:
                return(
                    <Billing/>
                )
                
                case 3:
                return(
                    <Terms/>
                )
                
            default:
                break;
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.SignContainer}>
                <View style={styles.SignContainer}>
               <View style={{height:Platform.OS==='ios'?0:Expo.Constants.statusBarHeight}}/>
                    <View style={styles.Header}>
                        <Image style={{ height: 40, width: 40 }} source={require('../../assets/li_logo.png')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgb(138,52,140)' }}>Profile</Text>
                        <View style={{ height: 40, width: 40 }} />
                    </View>
                    <View style={{ height: height * 5 / 100 }} />
                    <View style={{
                        borderRadius: 14,
                        shadowOffset: { width: 0, height: 2 },
                        shadowColor: 'rgba(0,0,0,0.08)',
                        shadowOpacity: 0.8,
                        borderWidth: 0.25,
                        shadowRadius: 4,
                        elevation: 2,
                        height: height / 1.4,
                        width: width - 20,
                        alignSelf: 'center'
                    }}>
                        <View style={{ height: height * 5 / 100 }} />
                        <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'rgb(138,52,140)', marginLeft: 30 }}>Mateia Story</Text>
                        <Text style={{ width: width / 1.5, fontSize: 16, color: 'rgba(0,0,0,0.7)', marginLeft: 30 }}>Loreum ipsum dolor sit amet, conse tetuer adipiscing elit.</Text>
                        <View style={{ height: height * 6 / 100 }} />
                        <View style={{ flexDirection: 'row', width: width - 40 }}>
                            <TouchableOpacity style={{ width: (width / 3) - 7, height: 36, backgroundColor: '#d3d3d3', borderTopLeftRadius: 18, borderTopRightRadius: 18, justifyContent: 'center', alignItems: 'center' }} onPress={()=>this.changeView(1)}>
                                <Text style={{ fontSize: 16, color: 'rgb(138,52,140)' }}>Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: (width / 3) - 7, height: 36, backgroundColor: 'rgb(138,52,140)', borderTopLeftRadius: 18, borderTopRightRadius: 18, justifyContent: 'center', alignItems: 'center' }} onPress={()=>this.changeView(2)}>
                                <Text style={{ fontSize: 16, color: 'rgb(255,255,255)' }}>Billing</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: (width / 3) - 7, height: 36, backgroundColor: 'rgb(95,183,186)', borderTopLeftRadius: 18, borderTopRightRadius: 18, justifyContent: 'center', alignItems: 'center' }} onPress={()=>this.changeView(3)}>
                                <Text style={{ fontSize: 16, color: 'rgb(255,255,255)' }}>Terms</Text>
                            </TouchableOpacity>
                        </View>
                       {
                           this.showView()
                       }
                    </View>
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
        paddingTop: Platform.OS === 'ios' ? 0 : 0,
        
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
