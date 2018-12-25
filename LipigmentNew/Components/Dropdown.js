import React from 'react';
import {Component,StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native';

export default class Dropdown extends React.Component{
	constructor(props){
        super(props);

        this.icons = {
            'up'    : require('../images/Arrow-Up.png'),
            'down'  : require('../images/down-arrow.png'),
        };

        this.state = {
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value()
        };
    }

    toggle(){
        //console.log('test');
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
	        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

	    this.setState({
	        expanded : !this.state.expanded  //Step 2
	    });

	    this.state.animation.setValue(initialValue);  //Step 3
	    Animated.spring(     //Step 4
	        this.state.animation,
	        {
	            toValue: finalValue
	        }
	    ).start();  //Step 5
    }


    _setMaxHeight(event){
	    this.setState({
	        maxHeight   : event.nativeEvent.layout.height
	    });
	}

	_setMinHeight(event){
	    this.setState({
	        minHeight   : event.nativeEvent.layout.height
	    });
	}

  // componentDidMount(){
	 //   this.setState({
  //      animation:this.state.minHeight,
  //    });
  //     console.log(234)
  //     let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
  //       finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
  //
  //     this.setState({
  //       expanded : !this.state.expanded,  //Step 2
  //       animation: finalValue
  //     });
  //
  // }
  //

    render(){
	      const color = this.props.color;
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        //const temp = Math.min(this.state.minHeight,this.state.animation);
        // this.setState({
        //   animation: 50,
        // })

        return (
            <Animated.View  style={[styles.container,{height: this.state.animation}]} >
                <View style={[styles.titleContainer,{backgroundColor:color}]} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View >
        );
    }
}


const styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        overflow:'hidden',
        borderWidth: 0.5,
        borderColor: '#000',
    },
    titleContainer : {
        flexDirection: 'column',
        margin:0,
        height:50,
        backgroundColor:'#996b32',
    },
    title       : {
        flex    : 1,
        alignSelf: 'center',
        padding : 0,
        color   :'#2a2f43',
        fontWeight:'bold',
        fontFamily: 'Helvetica'
    },
    button      : {
        alignSelf:'center',
    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 0,
        paddingTop  : 0,
        margin:0,
    }
});
