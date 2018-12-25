import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, Slider} from 'react-native';

export default class Panel extends React.Component{
	render(){
		return (
	        <View style={[
	              styles.colorPreview,
	              {
	                backgroundColor: bcolor,
	                alignItems:'center',
	                justifyContent:'center'
	              }
	            ]}
	        >
	        <SvgUri flex={1} width="400" height="400" fill={mixtureColor} source={require('../brow.svg')} />
	        </View>

        )
	}
}

	const styles = StyleSheet.create({
		  colorPreview: {
		    flex: 1,
		    borderRadius: 3,
		    flexDirection: 'column',
		    alignItems: 'flex-end',
		    justifyContent: 'flex-end',
		    paddingVertical: 8,
		    paddingHorizontal: 12
		  }
	});