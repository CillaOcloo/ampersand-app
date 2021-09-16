import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

 const FirstWelcomeScreen =({navigation}) =>{
     const handleStart = ()=> {
         navigation.navigate('Welcome')
     }
     return(
         <View style= {styles.container}>
             <View style= {styles.imageContainer}>
                 <Image
                     style = {styles.image}
                     source  ={require('../../assets/secondlogo.png')}
                 /> 

             </View>
             <View style={styles.textContainer}>
                 <View style={styles.text}>
                     <Text style={styles.textHeader}>AMPERSAND</Text>
                     <Text style={styles.textDetails}>CONTACTS</Text>

                 </View>
             </View>

             <View style={styles.buttonContainer}>
             <TouchableOpacity onPress={handleStart} style={styles.button}>
                <Text  style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
            <View style = {styles.line}></View>

             </View>

         </View>
     )

 };
 export default FirstWelcomeScreen;

 const styles = StyleSheet.create({
     container:{
         flex:1,
         marginTop: 25,
     },
     imageContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        
        height: 70,
        width: 250,
        alignContent:'center'
       
    },
    textContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
       
       
    },

    text: {
        marginTop:20,
        marginHorizontal: 25,
        marginBottom: 4,
      
        
    },
    textHeader: {
        color: 'black',
        fontSize:20,
        alignContent:'center',
        justifyContent: 'center'    
    },
    textDetails:{
        fontSize: 18,
        color: 'black',  
        borderBottomColor: "#bec5cc",
        borderBottomWidth: 0.2,
       
          
    },
    
    line : {
        width : '27%',
        height : 2,
        fontWeight:'bold',
        backgroundColor : 'red',     
    },
    buttonContainer:{
        flex: 0.1,
        borderBottomColor: '#bec5cc',
        borderBottomWidth: 0.2,
        alignItems: 'center',  
        marginBottom:30,  
    },
   
    buttonText: {
        color: "black",
        fontSize: 15,
        textTransform: "uppercase",
           
      },


     
   

 })
    