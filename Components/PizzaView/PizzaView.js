import React from 'react'
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const PizzaView = ({route}) => {
  const {pizza} = route.params
  return (
    <SafeAreaView>
      <View style={{display: 'flex', justifyContent: 'space-between', height: '94%', padding: 10}} >
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{padding: 10}}>
            <Image 
              style={{width: 350, height: 350}}
              source={{ uri: pizza.image }}
            />
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <View style={{width: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{fontSize: 24}}>
                {pizza.title}
              </Text>
              <Icon 
                size={30}
                name='heart-outline'
                color='red'
              />
            </View>
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <View style={{width: '70%', display: 'flex'}}>
              <Text style={{fontSize: 16, color: 'gray'}}>
                {pizza.description}
              </Text>  
            </View>
          </View>
        </View>
        <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{color: 'gray', fontSize: 20}}>Price:</Text>
            <Text style={{fontSize: 24}}>{pizza.price}</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Get </Text>
            <Icon 
                size={20}
                name='cash-outline'
                color='white'
              />
          </TouchableOpacity>
          </View>
        </View>
       
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', 
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 10, 
    borderRadius: 25,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  text: {
    color: 'white', 
    fontSize: 16, 
  },
  icon: {
    width: 20, 
    height: 20, 
    color: 'white',
    marginLeft: 5, 
  },
});

export default PizzaView
