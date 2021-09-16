import React from 'react'
import { View,  Text,StyleSheet,Image, TouchableOpacity, } from 'react-native'
import { Entypo,  Fontisto,  MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, } from '@expo/vector-icons';



const DetailsScreen=({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text style ={styles.header}>Member Profile </Text> 


            <View style= {styles.imageContainer}>
                <Image 
                    style= {styles.image}
                    source ={require('../../assets/carissa.jpg')}
                    />


            <View style={styles.textContainer}>
            <View style={styles.text} >
            <Text  style={styles.textHeader}>Cilla Gardner</Text>
            <Text style={styles.textDetails}>Sales Executive</Text>
            </View>
        </View> 
     </View>


     
     <View style={styles.iconsContainer}>
     <TouchableOpacity>
         <View style={styles.secondIcon} >
         <Entypo name="twitter-with-circle" size={45} color="black" />
         </View >
         </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.secondIcon}>
         <Entypo name="linkedin-with-circle" size={45} color="black" />
         </View>
         </TouchableOpacity>
     </View>
    

     
      <View style={styles.iconsNav}>
      <TouchableOpacity>
				<View  style={styles.icons}>
                <MaterialIcons name="local-phone" size={24} color="black" />
                <Text style={styles.iconsDetails} >+233 (255) 542 901</Text>
				</View>

                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.icons}>
                  <Fontisto name="email" size={24} color="black" />
                  <Text style={styles.iconsDetails}>cilla13@gmail.com</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View  style={styles.icons}>
                 <SimpleLineIcons name="location-pin" size={24} color="black" />
                 <Text style={styles.iconsDetails}>Beijing, China</Text>
                </View>
                </TouchableOpacity>

				

				
                </View>


    


    
            </View>
            


    )
}
export default DetailsScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginTop: 15,
        
        
    },
    header:{
        
        fontSize: 20,
        alignSelf:'center' ,
        marginTop: 20,
        padding : 24, 
    },
    imageContainer: {
        flex: 0.3,
        flexDirection:'row',
        marginTop:45,
        marginLeft:25,
        
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 75,
    },
    
    text: {
        marginTop:15,
        marginHorizontal: 25,
        marginBottom: 4,
        
    },
    textHeader: {
        color: 'black',
        fontSize:20,
         
    },
     
    
     textDetails:{
        fontSize: 18,
        color: 'gray',  
       
    },
    iconsContainer:{
       
        marginLeft:25,
       flexDirection:'row',
       marginTop:1,
      
       
      
    },
    secondIcon:{
        marginRight:10,
    },

    iconsNav:{
        marginLeft:25,
        marginTop:30,
    },
    icons:{
        flexDirection:'row',
        marginBottom:20
    },
    iconsDetails:{
        marginLeft:10,
        fontSize:17,
    }

  
})
   