import React from 'react';
import { Text, View, StyleSheet,Image ,Button,TouchableOpacity,Linking } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

import Header from './Head'
import NavBar from './NavigaterBar'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.newstext}>
        News
      </Text>
      
      <ScrollView style={styles.scrollView} horizontal={true}>

        <TouchableOpacity style={styles.layoutnew} onPress={() =>Linking.openURL("https://std.moc.go.th/std")}>
        <Image style={styles.newlink} source={{uri:"https://www.moc.go.th/th/file/get/file/202108229420152087bee681a367a58af29afcf1160148.png"}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.layoutnew} onPress={() =>Linking.openURL("https://account.moc.go.th/")}>
        <Image style={styles.newlink} source={{uri:"https://www.moc.go.th/th/file/get/file/20211230838acd8369b6fa15068c0553df9e6174121051.png"}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.layoutnew} onPress={() =>Linking.openURL("https://pcoc.moc.go.th/view/report_monitor_products_and_service.aspx")}>
        <Image style={styles.newlink} source={{uri:"https://www.moc.go.th/th/file/get/file/2021092012df53fea8b3adfa6c2ec456dd22e204120828.png"}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.layoutnew} onPress={() =>Linking.openURL("https://xn--42ca1c5gh2k.com/?doing_wp_cron=1648183167.4098389148712158203125")}>
        <Image style={styles.newlink} source={{uri:"https://www.moc.go.th/th/file/get/file/20210505fb38783a2b015451aca2b2894dd08140103810.png"}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.layoutnew} onPress={() =>Linking.openURL("https://data.moc.go.th/")}>
        <Image style={styles.newlink} source={{uri:"https://www.moc.go.th/th/file/get/file/202201140ba089c0f59973af7976cb7aba8a1c30180002.png"}} />
        </TouchableOpacity>

      </ScrollView>

      <Text style={styles.newstext}>
        Price Check
      </Text>

      <ScrollView style={styles.scrollView} horizontal={true}>

        <View style={styles.layout}>
          <Image 
              style={styles.fruit}
              source={require('../assets/image/fruit.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              ผลไม้
            </Text>
            <Text style={styles.textbut}
              onPress={() =>
                navigation.navigate('Fruit')
              }>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.seafood}
              source={require('../assets/image/seafood.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              อาหารทะเล
            </Text>
            <Text style={styles.textbut}
              onPress={() =>
                navigation.navigate('SeaFood')
              }>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.meat}
              source={require('../assets/image/meat.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              เนื้อสัตว์
            </Text>
            <Text style={styles.textbut}
              onPress={() =>
                navigation.navigate('Meat')
              }>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.oil}
              source={require('../assets/image/oil.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              น้ำมัน
            </Text>
            <Text style={styles.textbut}
              onPress={() =>
                navigation.navigate('Oil')
              }>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.rice}
              source={require('../assets/image/rice.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              ข้าว
            </Text>
            <Text style={styles.textbut}
            onPress={() =>
              navigation.navigate('Rice')
            }>
              เช็คราคา
            </Text>
          </View>
          
        </View>

        <View style={styles.layout}>
          <Image 
              style={styles.vegetable}
              source={require('../assets/image/vegetable.png')}
            />
          <View style={styles.textandbut}>
            <Text style={styles.text}>
              ผัก
            </Text>
            <Text style={styles.textbut}
            onPress={() =>
              navigation.navigate('Vegetable')
            }>
              เช็คราคา
            </Text>
          </View>
          
        </View>
      
      </ScrollView>

      <NavBar/>

    </View>
  )
}

const styles = StyleSheet.create({
  navigaterbar:{
    backgroundColor:'#1E3774',
    borderRadius:15,
    marginHorizontal:10,
    marginBottom:5,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  navigatericonbox:{
    padding:5,
    backgroundColor:'white',
    borderRadius:10,
    marginVertical:8
  },
  navigatericon: {
    width: 30,
    height:30,
  },
  container: {
    flex:1,
    flexDirection:'column',
  },
  newstext : {
    color:'rgb(0,0,0)',
    marginLeft:10,
    fontSize:30,
    
  },
  news:{
    marginTop: 10,
    height:'45%',
    backgroundColor:'rgba(0,0,0,0.2)',
    borderRadius:25,
    marginHorizontal: 20,
  }
  ,
  scrollView: {
    height:'25%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius:25,
    marginHorizontal: 20,
    backgroundColor:'rgba(0,0,0,0.2)',
    
  },
  topic: {
    color: 'black',
    fontSize: 40,
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  textandbut:{
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
  }
  ,
  text:{
    textAlign:'center',
    color:'white',
    fontSize:30
  },
  textbut:{
    width:100,
    marginVertical:10,
    color:'black',
    fontSize:22,
    backgroundColor:'rgb(254,203,1)',
    borderRadius:10,
    textAlign:'center',
  }
  ,
  layout:{
    borderRadius:25,
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:5,
    marginHorizontal:5,
    marginVertical:15,
    backgroundColor:'#1E3774',
  }
  ,layoutnew:{
    borderRadius:25,
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:0,
    marginHorizontal:10,
    marginVertical:15,
  }
  ,
  seafood:{
    width:125,
    height:125,
    justifyContent:'center',
  }
  ,fruit:{
    width:150,
    height:100,
  }
  ,meat:{
    width:150,
    height:75,
  }
  ,
  oil:{
    width:125,
    height:125,
  },
  rice:{
    width:150,
    height:110,
  },
  vegetable:{
    width:150,
    height:100,
  },
  newlink:{
    width: 850,
    height:240,
    borderRadius:25,
  }
})

export default Home;