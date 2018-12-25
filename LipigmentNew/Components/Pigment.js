import React from 'react';
import { StyleSheet,ScrollView, Text, View, Platform, TouchableOpacity, Slider, Picker, Dimensions, Image} from 'react-native';
import tinycolor from 'tinycolor2';
//import { Dropdown } from 'react-native-material-dropdown';
//import Panel from './components/Panel';
import Dropdown from './Dropdown';

import {
  SlidersColorPicker,
  HueGradient,
  SaturationGradient,
  LightnessGradient,
  HueSlider,
  SaturationSlider,
  LightnessSlider
} from 'react-native-color';

import SvgUri from 'react-native-svg-uri';

import mixture from 'color-mixture'

import {Header} from 'react-native-elements'

export default class App extends React.Component {
  //const color = tinycolor('#123456').toHsl();

  constructor(props){
    super(props);


    this.state = {
      color:tinycolor('#123456').toHsl(),
      mode:'hex',
      bgColor:tinycolor('#c85e29').toHsl(),
      swatches:['#765133','#604725','#5e3b28','#5c422b','#584026','#4b3c27','#583b25','#573a25','#643c30','#513429','#3f2c26',
          '#3f2d25','#372b2a','#50463e','#342c2a','#322b29','#282627','#282626','#252324','#fff','#fff'],
      index:1,
      skinColor:'Black',
      colorIndex1:tinycolor('#f44242').toHexString(),
      colorIndex2:tinycolor('#a641f4').toHexString(),
      colorIndex3:tinycolor('#d1b492').toHexString(),
      mixtureColor:tinycolor('#123456').toHsl(),
      mixtureColor2:tinycolor('#123456').toHsl(),
      counter:0,
      value:50,
      value2:0,
      firstPickerDisplayed:false,
      secondPickerDisplayed:false,
      ColorCategorys: ["MORE NEUTRAL BROWN", "SLIGHTLY COOL BLONDE", "SLIGHTLY COOL BROWN", "COOL BROWNS CONTAINING YELLOW-ORANGE OR RED", 
      "VERY COOL BROWNS THAT CONTAIN MORE GREEN", "EXTREMELY COOL BROWN AND BLACK-BROWN", "MORE NEUTRAL GRAY-TAUPE", "COOL GRAY-TAUPE",
      "EXTREMELY COOL GRAY-TAUPE", "WARM BLONDE AND BROWN", "EXTREMELY WARM BROWN", "COMMONLY USED MODIFIERS (TITANIUM DIOXIDE FREE)",
      ],
      ColorCategory: "MORE NEUTRAL BROWN",
      Category:"Category-2",
      swatches1:['#765133','#604725','#5e3b28','#5c422b','#584026','#4b3c27','#583b25','#573a25','#643c30','#513429','#3f2c26',
          '#3f2d25','#372b2a','#50463e','#342c2a','#322b29','#282627','#282626','#252324','#fff','#fff'],
      swatches2:['#f7d279','#fbd26b','#f3d390','#d1b492','#d0ae66','#e3b754','#f4dc36','#fcca35','#a3855e','#b3914e','#bd933a',
          '#b08931','#896a2d','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
      swatches3:['#e18a37','#c85e29','#b07938','#b07d32','#9c6b2f','#996b32','#8d6329','#875329','#834f27','#864529','#723425',
          '#6a2c25','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
      colordict:{
        "#765133":"Tamarind","#604725":"Classic Brown", "#5e3b28":"Latte","#5c422b":"Mochaccino",
        "#584026":"Chocolate Truffle", "#4b3c27":"Espresso","#583b25":"Chocolate Cognac","#573a25":"Navajo Brown",
        "#643c30":"Dark Coffee","#513429":"boni Express","#3f2c26":"Rum Raisin","#3f2d25":"Rich Brown",
        "#372b2a":"Cocoa","#50463e":"Eskimo Gray","#342c2a":"Teddy Bear Brown","#322b29":"Fudge Brown",
        "#282627":"Ebony Brown","#282626":"Eclipse","#252324":"Black Magic",
        "#f7d279":"Golden Honey","#fbd26b":"Beautiful Blonde","#f3d390":"Breezy Blonde","#d1b492":"Pecan",
        "#d0ae66":"Sahara","#e3b754":"Warm It","#f4dc36":"Non Violets","#fcca35":"Purple Out","#a3855e":"Taupe",
        "#b3914e":"Milk N’ Honey", "#bd933a":"Breve","#b08931":"Butterscotch","#896a2d":"Cool It",
        "#e18a37":"Grey Vanish","#c85e29":"Un-Grey","#b07938":"Autumn Gold","#b07d32":"Brown Cafe",
        "#9c6b2f":"Cream Latte","#996b32":"Sandalwood","#8d6329":"Olive Mod","#875329":"Cappuccino",
        "#834f27":"Hazelnut","#864529":"Milk Chocolate","#723425":"Caribbean Mod","#6a2c25":"Auburn",
        "#333333":"Original Black", "#5d3a2c":"Upscale Brown","#484034":"Cashmere","#583421":"Dark Coffee",
        "#513429":"Eboni Express", "#4b3c27":"Expresso", "#643c30":"Dark Toffee",
      },
      namedict:{
        "Tamarind":"#765133","Classic Brown":"#604725", "Latte":"#5e3b28","Mochaccino":"#5c422b",
        "Chocolate Truffle":"#584026", "Espresso":"#4b3c27","Chocolate Cognac":"#583b25","Navajo Brown":"#573a25",
        "Dark Coffee":"#643c30","boni Express": "#513429","Rum Raisin":"#3f2c26","Rich Brown":"#3f2d25",
        "Cocoa":"#372b2a","Eskimo Gray":"#50463e","Teddy Bear Brown":"#342c2a","Fudge Brown":"#322b29",
        "Ebony Brown":"#282627","Eclipse":"#282626","Black Magic":"#252324",
        "Golden Honey":"#f7d279","Beautiful Blonde":"#fbd26b","Breezy Blonde":"#f3d390","Pecan":"#d1b492",
        "Sahara":"#d0ae66","Warm It":"#e3b754","Non Violets":"#f4dc36","Purple Out":"#fcca35","Taupe":"#a3855e",
        "Milk N’ Honey":"#b3914e", "Breve":"#bd933a","Butterscotch":"#b08931","Cool It":"#896a2d",
        "Grey Vanish":"#e18a37","Un-Grey":"#c85e29","Autumn Gold":"#b07938","Brown Cafe":"#b07d32",
        "Cream Latte":"#9c6b2f","Sandalwood":"#996b32","Olive Mod":"#8d6329","Cappuccino":"#875329",
        "Hazelnut":"#834f27","Milk Chocolate":"#864529","Caribbean Mod":"#723425","Auburn":"#6a2c25",
        "Original Black":"#333333", "Upscale Brown":"#5d3a2c","Cashmere":"#484034","Dark Coffee":"#583421","Eboni Express":"#513429","Expresso":"#4b3c27",
        "Dark Toffee":"#643c30",

      },
      categoryDict:{
        "MORE NEUTRAL BROWN":["Sandalwood","Hazelnut"], "SLIGHTLY COOL BLONDE":["Sahara","Breezy Blonde", "Butterscotch","Milk N’ Honey","Latte"], 
        "SLIGHTLY COOL BROWN":["Cappuccino","Tamarind","Cashmere"], 
        "COOL BROWNS CONTAINING YELLOW-ORANGE OR RED":["Upscale Brown","Dark Coffee","Dark Toffee","Eboni Express", "Rich Brown", "Teddy Bear Brown", "Chocolate Cognac"], 
      "VERY COOL BROWNS THAT CONTAIN MORE GREEN":["Classic Brown", "Fudge Brown"], "EXTREMELY COOL BROWN AND BLACK-BROWN":["Expresso","Eclipse","Black Magic"], 
      "MORE NEUTRAL GRAY-TAUPE":["Pecan"], "COOL GRAY-TAUPE":["Taupe"],"EXTREMELY COOL GRAY-TAUPE":["Eskimo Gray"], 
      "WARM BLONDE AND BROWN":["Golden Honey", "Beautiful Blonde", "Brown Cafe", "Milk Chocolate"], "EXTREMELY WARM BROWN":["Auburn"], 
      "COMMONLY USED MODIFIERS (TITANIUM DIOXIDE FREE)":["Warm It","Un-Grey","Rum Raisin","Purple Out","Cool It"],
      }
    };
  }

  updateHue = h => this.setState({ color: { ...this.state.color, h } });


  updateValue = h =>{
    this.setState({value:h});
    const color1 = new mixture.Color(this.state.colorIndex1);
    const color2 = new mixture.Color(this.state.colorIndex2);
    // if(this.state.value2!==0){
    //   this.setState({value2:0});
    // }
    const mix = color1.mix(color2,h/100);
    let t = tinycolor(mix).toHsl();
    // let p = tinycolor(mix).toHexString();
    // console.log(p);
    this.setState({mixtureColor:t,mixtureColor2:t})
  }

  updateValue2 = h =>{
    this.setState({value2:h});
    const color1 = new mixture.Color(this.state.colorIndex3);
    const color2 = new mixture.Color(tinycolor(this.state.mixtureColor).toHexString());
    const mix = color2.mix(color1,h/100);
    let t = tinycolor(mix).toHsl();
    //let p = tinycolor(mix).toHexString();
    //console.log(tinycolor(color1).toHexString() + " "+ tinycolor(color2).toHexString());
    this.setState({mixtureColor2:t})
  }

  updateSkinColor = (color) => {
      this.setState({ skinColor: color })
   }


   _onPressButton = () => {
    console.log('+++');
   }


  showFirstPicker() {
    this.setState({ firstPickerDisplayed: true });
  }

  hideFirstPicker() {
    this.setState({ firstPickerDisplayed: false });
  }

  _onFirstPickerValueChange = ()=>{
    (itemValue, itemIndex) => {
      this.setState({Category: itemValue,
                     displayFirstPicker:false})
      console.log(this.state.Category);
    }
  }

  displayFirstPicker = ()=>{
     if(this.state.firstPickerDisplayed){
        return (<Picker
          selectedValue={this.state.Category}
          style={{ height: 50, alignItems:'stretch', justifyContent:'center'}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({Category: itemValue,
                          firstPickerDisplayed:false});
            }}>
          <Picker.Item label="Aqua-Velvet-Micro Edge" value="Aqua-Velvet-Micro Edge" />
          <Picker.Item label="Category-2" value="Category-2" />
        </Picker>
        );
      }else{
        return (
            <View style={{flex:1, backgroundColor:'#FFF', alignItems:'stretch', justifyContent:'center'}}>
              <TouchableOpacity  onPress = {  ()=> {this.setState({firstPickerDisplayed:true})}}
                  style={{width:'80%',height:'30%', backgroundColor:'#DCDCDC', alignItems:'stretch', justifyContent:'center',alignSelf:'center', borderRadius:10}}
              >
                <Text style = {{alignSelf:'center'}}>{this.state.Category}</Text>
              </TouchableOpacity>
            </View>
          );
      }
  }


  displaySecondPicker = ()=>{
     if(this.state.secondPickerDisplayed){
        return (<Picker
          selectedValue={this.state.ColorCategory}
          style={{ height: 50, alignItems:'stretch', justifyContent:'center'}}
          textStyle={{fontSize: 5, color:'#123456'}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ColorCategory: itemValue,
                          secondPickerDisplayed:false});
            }}>
          <Picker.Item label="MORE NEUTRAL BROWN" value="MORE NEUTRAL BROWN" />
          <Picker.Item label="SLIGHTLY COOL BLONDE" value="SLIGHTLY COOL BLONDE" />
          <Picker.Item label="SLIGHTLY COOL BROWN" value="SLIGHTLY COOL BROWN" />
          <Picker.Item label="COOL BROWNS CONTAINING YELLOW-ORANGE OR RED" value="COOL BROWNS CONTAINING YELLOW-ORANGE OR RED" />
          <Picker.Item label="VERY COOL BROWNS THAT CONTAIN MORE GREEN" value="VERY COOL BROWNS THAT CONTAIN MORE GREEN" />
          <Picker.Item label="EXTREMELY COOL BROWN AND BLACK-BROWN" value="EXTREMELY COOL BROWN AND BLACK-BROWN" />
          <Picker.Item label="MORE NEUTRAL GRAY-TAUPE" value="MORE NEUTRAL GRAY-TAUPE" />
          <Picker.Item label="COOL GRAY-TAUPE" value="COOL GRAY-TAUPE" />
          <Picker.Item label="EXTREMELY COOL GRAY-TAUPE" value="EXTREMELY COOL GRAY-TAUPE" />
          <Picker.Item label="WARM BLONDE AND BROWN" value="WARM BLONDE AND BROWN" />
          <Picker.Item label="EXTREMELY WARM BROWN" value="EXTREMELY WARM BROWN" />
          <Picker.Item label="COMMONLY USED MODIFIERS (TITANIUM DIOXIDE FREE)" value="COMMONLY USED MODIFIERS (TITANIUM DIOXIDE FREE)" />
        </Picker>
        );
      }else{
        return (
            <View style={{flex:1, backgroundColor:'#FFF', alignItems:'stretch', justifyContent:'center'}}>
              <TouchableOpacity  onPress = {  ()=> {this.setState({secondPickerDisplayed:true})}}
                  style={{width:'80%',height:'30%', backgroundColor:'#DCDCDC', alignItems:'stretch', justifyContent:'center',alignSelf:'center', borderRadius:10}}
              >
                <Text style = {{alignSelf:'center'}}>{this.state.ColorCategory}</Text>
              </TouchableOpacity>
            </View>
          );
      }
  }


  displayGroupColor = ()=> {
    let t = this.state.categoryDict[this.state.ColorCategory].slice();
    var swatches1 = [];
    var swatches2 = [];
    for(i=0;i<Math.min(t.length,5);i++){
      swatches1.push(this.state.namedict[t[i]])
    }
    for(i=5;i<t.length;i++){
      swatches2.push(this.state.namedict[t[i]]);
    }
     return (
     <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
        {swatches1.map((swatch,index)=>(
          <View key={index} style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <View style={{height:50}}>
            <Text>
              {t[index]}
            </Text>
          </View>
          <TouchableOpacity
            style={{backgroundColor: swatch, width:40, height:40, borderRadius:20, marginTop:5}}
            onPress={() => {
                  if(swatch=="#fff") return;
                  if(this.state.index==1){
                     this.setState({colorIndex1:swatch});
                  }else if(this.state.index==2){
                    this.setState({colorIndex2:swatch});
                  }else if(this.state.index==3){
                    this.setState({colorIndex3:swatch});
                  }
                  const c = this.state.counter+1;
                  if(this.state.index==2 || this.state.index==1 || this.state.index==3){
                    const color1 = new mixture.Color(this.state.colorIndex1);
                    const color2 = new mixture.Color(this.state.colorIndex2);
                    var mix = color1.mix(color2,this.state.value/100);
                    const color3 = new mixture.Color(this.state.colorIndex3);
                    this.setState({color:swatch, mixtureColor:tinycolor(mix).toHsl(),counter:c});
                    mix = color3.mix(this.state.mixtureColor,this.state.value2/100);
                    this.setState({mixtureColor2:tinycolor(mix).toHsl()})
                  }else if(this.state.index==3){
                    //this.setState({bgColor:swatch});
                  }
              }
            }
          />
        </View>
        ))}
     </View>
     );
  }


  render() {
    const colorHex = tinycolor(this.state.color).toHexString();
    //const mixtureColor2 = tinycolor(this.state.mixtureColor).toHexString();
    const mixtureColor = tinycolor(this.state.mixtureColor2).toHexString();
    const bcolor = tinycolor(this.state.bgColor).toHexString();
    const t = this.state.swatches;

      let {height, width} = Dimensions.get('window');
      let h = height-40;
      let w = width;


    return (
      <ScrollView>
      <View style={styles.container}>

        <Header
        backgroundColor = 'white'
        leftComponent={{ icon: 'home', color: '#000' }}
        centerComponent={{ text: 'Lipigment', style: { color: '#000' } }}
        rightComponent={{ icon: 'menu', color: '#000' }}
        />

        {/*<View style = {{backgroundColor:'#dcdcdc', marginBottom:-10,marginTop:-10}}>
        <Dropdown
          animationDuration={20}
          data={data}
        />
        </View>  */}


         {/* <Picker selectedValue = {this.state.skinColor} onValueChange = {this.updateSkinColor}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>.  */}

        <View style={styles.content}>
          <View style={[
              styles.colorPreview,
              {
                height:200,
                backgroundColor: bcolor,
                alignItems:'center',
                justifyContent:'center'
              }
            ]}
        >
        <SvgUri flex={1} width="400" height="400" fill={mixtureColor} source={require('../brow.svg')} />
        </View>
        </View>

        {/*
        <View style = {{backgroundColor:'#dcdcdc',marginTop:-10,marginBottom:0,height:50}}>
        <Dropdown
          animationDuration={20}
          data={data}
        />
        </View>  */}

        <ScrollView style={{flex:1,margin:0}}>
          <Dropdown title="Choose your skinColor style" color = {'#f8f8f8'}>
            <View style = {{flexDirection:'row', flex:1, height:60,margin:0}}>
              <TouchableOpacity  onPress = {  ()=> {this.setState({bgColor:'#FFDFC4'})}}
                  style={{flex:1,alignItems:'stretch', justifyContent:'center', backgroundColor:'#FFDFC4'}}
              >
                <Text style={{alignSelf:'center',alignContent:'center',fontSize:30,fontFamily:'Times New Roman',color:'white',paddingTop:0}}>I</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = { ()=>{this.setState({bgColor:'#E1B899'})}}
                  style={{flex:1,alignItems:'stretch', justifyContent:'center', backgroundColor:'#E1B899'}}
              >
                <Text style={{alignSelf:'center',alignContent:'center',fontSize:30,fontFamily:'Times New Roman',color:'white',paddingTop:0}}>II</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = { ()=>{this.setState({bgColor:'#E5A073'})}}
                  style={{flex:1,alignItems:'stretch', justifyContent:'center', backgroundColor:'#E5A073'}}
              >
                <Text style={{alignSelf:'center',alignContent:'center',fontSize:30,fontFamily:'Times New Roman',color:'white',paddingTop:0}}>III</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = { ()=>{this.setState({bgColor:'#BA6C49'})}}
                                style={{flex:1,alignItems:'stretch', justifyContent:'center', backgroundColor:'#BA6C49'}}
              >
                <Text style={{alignSelf:'center',alignContent:'center',fontSize:30,fontFamily:'Times New Roman',color:'white',paddingTop:0}}>IV</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = { ()=>{this.setState({bgColor:'#AD6452'})}}
                                style={{flex:1,alignItems:'stretch', justifyContent:'center', backgroundColor:'#AD6452'}}
              >
                <Text style={{alignSelf:'center',alignContent:'center',fontSize:30,fontFamily:'Times New Roman',color:'white',paddingTop:0}}>V</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = { ()=>{this.setState({bgColor:'#704139'})}}
                                style={{flex:1,alignItems:'stretch', justifyContent:'center', backgroundColor:'#704139'}}
              >
                <Text style={{alignSelf:'center',alignContent:'center',fontSize:30,fontFamily:'Times New Roman',color:'white',paddingTop:0}}>VI</Text>
              </TouchableOpacity>
            </View>
          </Dropdown>
        </ScrollView>



        <ScrollView style={{flex:1}}>
          <Dropdown title="Choose your eyebrow style" color = {'#f8f8f8'}>
              <View style = {{flex:1,flexDirection:'row', height:80}}>
                <TouchableOpacity
                    style={{flex:1,alignItems:'center', justifyContent:'center', backgroundColor:'#fff'}}
                >
                  <Image style = {{flex:1, alignItems: 'center', height:80, width:150}} source={require('../images/brow_black.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{flex:1,alignItems:'center', justifyContent:'center', backgroundColor:'#fff'}}
                >
                  <Image style = {{flex:1, alignItems: 'center', height:80, width:150}} source={require('../images/brow_black.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{flex:1,alignItems:'center', justifyContent:'center', backgroundColor:'#fff'}}
                >
                  <Image style = {{flex:1, alignItems: 'center', height:80, width:150}} source={require('../images/brow_black.png')} />
                </TouchableOpacity>
              </View>
          </Dropdown>
        </ScrollView>


        <Dropdown title="PIGMENT MIXER" color = {'#f8f8f8'}>
          <View style = {{flex:1, marginTop:10}}>
            {/*<Text style={{fontFamily: 'Cochin', fontSize:20, textAlignVertical: "center",textAlign: "center"}}> PIGMENT MIXER </Text>*/}
            <View style={{flex:1,marginTop:10,flexDirection:'column'}}>
              <Text style={{fontFamily: 'Helvetica', color:'#800080',fontSize:15, textAlignVertical: "center",textAlign: "center",marginBottom:-10}}> PIGMENT </Text>
              <View style={{flex: 0.25, flexDirection: 'row',justifyContent: 'center',alignItems:'flex-start'}}>
              <View style={{flex:1,justifyContent: 'center', alignItems:'center', margin: 5}}>
                <TouchableOpacity
                  style={{width: 50, height: 50, borderRadius:50, backgroundColor: this.state.index==1 && this.state.counter!=0?colorHex:this.state.colorIndex1}}
                  onPress={() =>
                    this.setState({ index: 1 ,counter:0})
                  }
                >
                </TouchableOpacity>
                <Text style={{fontFamily:'Helvetica', textAlignVertical: "center",textAlign: "center"}}> TAMARIND </Text>
                </View>

              <Slider
                style={{height:50,width:200}}
                step={1}
                maximumValue={100}
                onValueChange={this.updateValue}
                value={50}
              />

              <View style={{flex:1,justifyContent: 'center', alignItems:'center', margin: 5}}>
              <TouchableOpacity
                style={{width: 50, height: 50, borderRadius:50, margin: 5, backgroundColor: this.state.index==2 && this.state.counter!=0 ?colorHex:this.state.colorIndex2}}
                onPress = {() =>
                    this.setState({index:2, counter:0})
                }
              >
              </TouchableOpacity>
              <Text style={{fontFamily:'Helvetica', textAlignVertical: "center",textAlign: "center"}}> GOLDEN HONEY</Text>
              </View>

              </View>
              </View>

            <View style={{flex:1,marginTop:10,flexDirection:'column'}}>
                <Text style={{fontFamily: 'Helvetica', color:'#800080',fontSize:15, textAlignVertical: "center",textAlign: "center",marginBottom:-10}}> MODIFIER </Text>
                <View style = {{flex:1,flexDirection:'row', height:140, alignItems:'center', justifyContent:'center'}}>
                  <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center',alignItems:'center'}}>
                    <Slider
                      style={{height:50,width:200}}
                      step={1}
                      maximumValue={100}
                      onValueChange={this.updateValue2}
                      value={0}
                    />

                    <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
                      <TouchableOpacity
                        style={{width: 50, height: 50, borderRadius:50, backgroundColor: this.state.index==3 && this.state.counter!=0 ?colorHex:this.state.colorIndex3}}
                        onPress = {() =>
                          this.setState({index:3, counter:0})
                        }
                      >
                      </TouchableOpacity>
                      <Text style={{textAlignVertical: "center",textAlign: "center"}}>Cocoa</Text>
                    </View>
                  </View>
                </View>
            </View>

              {/*<View style={{flex:1,marginTop:10,flexDirection:'column'}}>*/}
              {/*<Text style={{fontFamily: 'Helvetica', color:'#800080',fontSize:15, textAlignVertical: "center",textAlign: "center",marginBottom:-10}}> MODIFIER </Text>*/}

              </View>
              </Dropdown>


             <View style ={{flex:2,backgroundColor:'#fff'}}>
            <Dropdown title="PIGMENT LINES" color = {"#f8f8f8"}>
                <View style={{height:100,justifyContent:'center'}}> 
                  {this.displayFirstPicker()}
                </View>
            </Dropdown>
             <Dropdown title="PIGMENT COLORS" color = {"#f8f8f8"}>
              <View style={{height:100,justifyContent:'center'}}> 
                  {this.displaySecondPicker()}
                </View>
                <View style = {{flex:1,height:120}}>
                    {this.displayGroupColor()}
                </View>
             </Dropdown>
           </View>
      </View>

      </ScrollView>

    );
  }
}



const styles = StyleSheet.create({

  overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'transparent',
  },

  swatchesText: {
    marginTop: 16,
    lineHeight: 18,
    fontSize: 13,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif'
      },
      ios: {
        fontWeight: '400',
        letterSpacing: -0.08
      }
    }),
    color: '#555'
  },
  swatchesContainer: {
    flex:1,
    height:60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  swatch: {
    flex: 1,
    height:40,
    width:40,
    alignSelf:'center',
    borderRadius: 20,
  },

  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    //marginTop: Platform.OS === 'ios' ? 20 : 0,
    marginLeft: 0,
    marginRight:0,
  },

  content: {
    flex: 0.8,
    marginHorizontal: 0
  },

  colorPreview: {
    flex: 1,
    borderRadius: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12
  },

  lightText: {
    lineHeight: 22,
    fontSize: 17,
    color: 'white',
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600',
        letterSpacing: -0.41
      }
    })
  },

  sliderRow: {
    marginTop: 5
  },

  darkText: {
    lineHeight: 22,
    fontSize: 17,
    marginTop: 6,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600',
        letterSpacing: -0.41
      }
    })
  },

    colorBox:{

        flex: 1,
        marginLeft:60,
        width:300,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderColor:'#123456',
        borderWidth:5,
        borderRadius:150,
    },

    colorInCir:{
        flex: 0.9,
        width:300,
        alignItems: 'stretch',
        alignSelf:'center',
        justifyContent: 'center',
        paddingVertical: 0,
        paddingHorizontal: 20,
    },
});