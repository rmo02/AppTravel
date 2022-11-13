import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import SPACING from "../config/SPACING";
import COLORS from "../config/COLORS";
import TOURS from "../config/TOURS";
import CATEGORIES from "../config/CATEGORIES";
import ADVANTURES from "../config/ADVANTURES";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'


const WIDTH = Dimensions.get('screen').width

const HomeScreen = () => {
  const [ activeCategory, setActiveCategory ] = useState(0);

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{padding:SPACING * 2}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{padding:10,
        fontSize:SPACING * 3,
           fontWeight:'bold',
           color:COLORS.dark}}>Discover
        </Text>
        <Image 
        style={{
          height:SPACING * 5,
          width:SPACING * 5,
          borderRadius:SPACING * 5}}
        source={require('../assets/images/Avatar.png')}/>
        </View>
        <ScrollView style={{marginVertical:SPACING * 2}} horizontal>
          {CATEGORIES.map((category, index)=>(
            <TouchableOpacity
            onPress={()=>setActiveCategory(index)}
            style={{marginRight:SPACING}} 
            key={category.id}>
              <Text style={[{fontSize:SPACING*2, color:COLORS.dark}, activeCategory === index && {color:COLORS.primary}]} >{category.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={{fontSize:SPACING * 1.7, color:COLORS.dark}}>
          {CATEGORIES[activeCategory].tours.length + " "}
          {CATEGORIES[activeCategory].title}
          </Text>
          <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={SPACING*0.7}
          decelerationRate='fast'
          pagingEnabled
          style={{marginVertical:SPACING*2}}>
            {CATEGORIES[activeCategory].tours.map((tour, index) => (
              <TouchableOpacity 
              style={{width:WIDTH*0.7,
                 height: WIDTH*0.9,
                  overflow:'hidden',
                  borderRadius:SPACING * 2,
                  marginRight:SPACING*2}}
              key={index}>
                <View style={{position:'absolute',
                 zIndex:1,
                  width:'100%',
                   height:'100%',
                   backgroundColor:COLORS.transparent,
                   justifyContent:'space-between',
                   padding:SPACING}}>
                  <TouchableOpacity 
                  style={{alignSelf:'flex-end',
                  justifyContent:'center',
                  alignItems:'center',
                   padding:SPACING/2,
                    color:COLORS.white,
                    borderRadius:SPACING * 5}}>
                    <Ionicons name="heart-outline" color={COLORS.primary} size={SPACING * 3}/>
                  </TouchableOpacity>
                  <Text style={{fontSize: SPACING * 2, color:COLORS.white, fontWeight:'700', marginLeft:SPACING}}>{tour.title}</Text>
                </View>
                <Image
                style={{width:'100%', height:'100%'}}
                source={tour.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:SPACING * 2, fontWeight:'bold', color:COLORS.dark}}>Felling Adventurous?</Text>

            <TouchableOpacity>
            <Text style={{fontSize:SPACING * 1.4, fontWeight:'500', color:COLORS.primary}}>Show all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal 
          pagingEnabled
          style={{marginVertical: SPACING * 2}}>
                {ADVANTURES.map(adventure => (
                <TouchableOpacity key={adventure.id}
                style={{marginRight:SPACING * 3, padding: SPACING, alignItems:'center'}}>
                  <View style={{width:SPACING*3, height: SPACING*3}}>
                    <Image
                    source={adventure.image} 
                    resizeMode='contain' 
                    style={{width:'100%', height:'100%'}}
                    />
                  </View>
                  <Text style={{textTransform:'uppercase', fontSize:SPACING, marginTop:SPACING}}>
                    {adventure.title}
                  </Text>
                </TouchableOpacity>))}
          </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
