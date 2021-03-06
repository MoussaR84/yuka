import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, set } from "react-native-reanimated";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../assets/colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {ratingScoreText ,ratingProductComment}  from '../utilis/index';
import AsyncStorage from '@react-native-community/async-storage';

export default function ProductSScreen({ route }) {
  const[id,setId]=useState();
  const [productHistory, setProductHistory] = useState([]);
  useEffect(() => {
    const fetchProductHistory = async () => {
      const rawSavedHistory= await AsyncStorage.getItem("productHistory");
      if(rawSavedHistory !==null){
        setProductHistory(JSON.parse(rawSavedHistory));
      }
    }
    fetchProductHistory();
  },[])


  console.log('productHistory',productHistory);

  // console.log(nutrition_grade_fr);
  // const ratingProduct = () => {
  //   if (nutrition_grade_fr === "a") {
  //     return colors.green;
  //   } else if (nutrition_grade_fr === "b") {
  //     return colors.black;
  //   } else if (nutrition_grade_fr === "c") {
  //     return colors.red;
  //   } else if (nutrition_grade_fr === "d") {
  //     return colors.brown;
  //   } else if (nutrition_grade_fr === "e") {
  //     return colors.black;
  //   } else {
  //     return colors.grey;
  //   }
  // };


  // const ratingProductComment = () => {
  //   {item.nutrition_grade_fr ==="a"
  //   ? "excellent":item.nutrition_grade_fr ==="b"?
  //   "satisfaisant":item.nutrition_grade_fr ==="c"?
  //   "bon":item.nutrition_grade_fr ==="d" ? 
  //   "mauvais" :item.nutrition_grade_fr ==="e"?
  //   "médiocre" : "pas enregistré données inaccessibles"}
  // };
 

return (

    <View>
   {productHistory.map(item=>{
 return (
     <ScrollView>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.contenaireProduct}>
        <View style={styles.card}>
        <View style={styles.product}>
            <Image
              style={{ height: 100, width: 80, borderRadius: 10 }}
              source={{ uri: item.image_url }}
            />
          </View>
          <View style={styles.presentation}>
            <Text style={styles.nameProduct}>{item.product_name}</Text>
            <Text style={styles.brand}>{item.brands}</Text>
            
            <FontAwesome
              name="circle"
              size={24}
              style={styles.circle}
              
              color={
                item.nutrition_grade_fr ==="a"
                ? colors.green : item.nutrition_grade_fr ==="b"?
                colors.orange :item.nutrition_grade_fr ==="c"?
                colors.red : item.nutrition_grade_fr ==="d" ? 
                colors.brown :item.nutrition_grade_fr ==="e"?
                colors.black : colors.grey
              }
            />
            {/* <Text style={styles.ratingScoreText}>{ratingProductComment = () => {
    {item.nutrition_grade_fr ==="a"
    ? "excellent":item.nutrition_grade_fr ==="b"?
    "satisfaisant":item.nutrition_grade_fr ==="c"?
    "bon":item.nutrition_grade_fr ==="d" ? 
    "mauvais" :item.nutrition_grade_fr ==="e"?
    "médiocre" : "pas enregistré données inaccessibles"}
  }}
            
            /100</Text>
            <Text style={styles.ratingprod}>{ratingProductComment()}</Text> */} 
          </View>
        </View> 
            </View>
         
          </SafeAreaView>
      </ScrollView>
   
   )

   })}
    </View>
  ) 
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"flex-start",
    justifyContent: "center",
  },

  contenaireProduct:{

    paddingRight:10,
    paddingLeft:6,
    
  },

  card: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    flex:1,
    alignItems:"flex-start",
    flexDirection: "row",
    marginTop:10,
    justifyContent: "space-between",
    height:120,
    
    
  },

    presentation: {
    alignItems: "center",
    marginBottom: 60,
    justifyContent:"center"

  },

  qualityTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
 
  nameProduct: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    
  },

  brands:{
  color:"grey",
  

  

  },
  ratingScoreText: {
    fontWeight: "bold",
    alignItems:"flex-start"
  },
  
  product: {
    marginBottom: 40,
   
    
  },





});



  