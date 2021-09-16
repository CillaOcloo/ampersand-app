import React from 'react'
import { View, StyleSheet,Image, TouchableOpacity, Text } from 'react-native'



 const WelcomeScreen =({navigation}) =>{
     const handleRegister = ()=> {
         navigation.navigate ('Register')
     }
      const handleSignIn = ()=> {
          navigation.navigate ('Sign In')
      }
     return(
         <View style= {styles.container}>
             <View style= {styles.imageContainer}>
                 <Image
                     style = {styles.image}
                     source  ={require('../../assets/bc88836d8a30238b376f2a5b2c31a688--cabrera-navy-and-white.jpg')}
                 /> 

             </View>
             <View style={styles.textContainer}>
                 <View style={styles.text}>
                     <Text style={styles.textHeader}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                     <Text style={styles.textDetails}>Sign in or register with your Ampersand email</Text>
                 </View>


                 <View style ={styles.navContainer}>
                   <TouchableOpacity onPress={handleRegister}>
                      <Text style ={styles.navRegister}>REGISTER</Text>
                      <Text style = {styles.line}></Text>
                        </TouchableOpacity>
                       
                      
                   
                        <TouchableOpacity onPress ={handleSignIn}>
                           <Text  style ={styles.navSign} >SIGN IN</Text>
                           <Text style = {styles.leftLine}></Text>
                             </TouchableOpacity>
                            

               </View>     
             </View>
            

         </View>
     )

 };
 export default WelcomeScreen;

 const styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
    imageContainer:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      
    },
    image: {
      
        height: 350,
        width: 450,
       
  },
  textContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
   
   
},

text: {
    marginTop:20,
    marginHorizontal: 25,
    
  
    
},
textHeader: {
    color: '#4d4d4d',
    fontSize:18,
    fontWeight:'bold',
    alignContent:'center',
    justifyContent: 'center'    
},
textDetails:{
    fontSize: 15,
    color: '#4d4d4d',  
    marginTop:10,
    marginBottom:80,
    borderBottomColor: "#bec5cc",
    borderBottomWidth: 0.2,
   
      
},
navContainer:{
    flex: 0.4,
    marginTop: 55,
    flexDirection:'row',
    

},
navRegister:{
    fontSize: 15,
    fontWeight:'bold',
   marginRight:90,
   color: '#4d4d4d',
   marginBottom: 4,
},
navSign:{
    fontSize: 15,
    fontWeight: 'bold',
   marginLeft:19,
   color: '#4d4d4d',
   marginBottom: 4,
},
line : {
    
    width : '50%',
    height : 2,
    backgroundColor : 'red', 
      
},
leftLine:{
    width : '110%',
    height : 2,
    alignContent:'flex-start',
    justifyContent:'flex-start',
    backgroundColor : 'red', 

},

})