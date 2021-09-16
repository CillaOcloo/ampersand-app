import React from 'react'
import { StyleSheet, View, Text, Image, TextInput,ScrollView,TouchableOpacity, SafeAreaView } from 'react-native'

export default function LoginScreen({navigation}) {
    const handleSignIn =()=> {
        navigation.navigate ('Ampersand')
    }
    return (
        <ScrollView style = {styles.container}>  
            <View style= {styles.imageContainer} >
               
                <Image 
                   style= {styles.image}
                   source ={require('../../assets/01555887-67f2-4ad1-bf71-44685b71d731__62134.1599669993.jpg')}
                   />
            </View>
                           

            <View style= {styles.formContainer}> 

                < View style= {styles.detailsContainer}>
                    <View style= {styles.details}>
                        <Text style= {styles.detailsText}> Email</Text>
                        <TextInput
                        placeholder ={'cilla22@gmail.com'} 
                        style= {styles.detailsInput}
                        textAlign={'right'}
                        />

                    </View>
                    <View style = {styles.line}></View>
                    </View>
                      
                    < View style= {styles.detailsContainer}>
                    <View style= {styles.details}>
                        <Text style= {styles.detailsText}>Password</Text>
                        <TextInput
                        placeholder ={'........'} 
                        style= {styles.detailsInput}
                        textAlign={'right'}
                        />

                    </View>
                  
                </View>
            </View>
  
          <View style= {styles.buttonContainer}>
              <View style= {styles.buttonCoontent}>

                   <TouchableOpacity  onPress={handleSignIn} style={styles.button}>
                       <Text style={styles.buttonText}>SIGN IN</Text>
                   </TouchableOpacity>
               </View>

               <View style ={styles.btnContainer}>
                  <Text style={styles.btnText}>Forgot? </Text>
                  <TouchableOpacity  style={styles.btn2}>
                      <Text style={styles.btnText}>Reset Password</Text>
                      <View style = {styles.mainline}></View>
                  </TouchableOpacity>

                 
               </View>
               </View>
         

               </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,    
       
    },
    
    imageContainer:{
        flex:0.4,
        marginBottom:50,
      
    },
    image: {
      width: 400,
      height: 300,     
  },
  formContainer:{
    flex:0.7,
    marginHorizontal:30,
  },
  detailsContainer:{
    flex:0.5,
    marginTop:10,
    color:'#6036B1'
   
  },
  details:{
    flexDirection:'row',
    width:'100%'
  },
  detailsText:{
    flex:0.4,
    fontSize:17,
    fontWeight:'bold',
    marginBottom:9,
    marginTop:10,

  },
  detailsInput:{
    flex:0.6,
    fontWeight:'bold',
    color:'lightgray',
    fontSize:17,
    marginBottom:9,
    marginTop:10,

  },
 
  
  
buttonContainer:{
    flex: 0.1,
    alignItems: 'center',    
},
button: {
    width:320,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'red',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
   
},

buttonText: {
    color: "white",
    
    fontSize: 18,
    textTransform:'capitalize',  
  },
  line:{
    width:'100%',
    height: 1,
    backgroundColor:'lightgray'
  },
 
 
  btnContainer:{
      flex:0.2,
      fontSize:15,
      flexDirection:'row',
      marginTop:35,
      marginHorizontal:17,
      marginEnd:200,
     
  },
  mainline:{
       width:'100%',
       height: 2,
       backgroundColor:'red'

 },
  
 


    
   
    
})

