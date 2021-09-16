import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

  const RegisterScreen = ({navigation}) => {
    
    const handleRegister = ()=> {
      navigation.navigate ('Sign In')
    }
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
    }
      return(
         <ScrollView>
           <View style= {styles.maincontainer}>
            
                 <TouchableOpacity  onPress={openImagePickerAsync} style= {styles.container}>
                 <AntDesign name="user" size={100} color="red"  />
                  <Text style = {styles.subHeader}>ADD PROFILE PHOTO</Text>  
                  </TouchableOpacity>

                  <View style= {styles.formContainer}> 

                      <View style= {styles.detailsContainer}>
                            <View style= {styles.details}>
                              <Text style= {styles.detailsText}> Full Name</Text>
                              <TextInput
                                placeholder ={'Cilla Hackman'} 
                                style= {styles.detailsInput}
                                textAlign={'right'}
                              />

                            </View>
                            <View style = {styles.line}></View>
                        
                              
                            <View style= {styles.details}>
                              <Text style= {styles.detailsText}> Email</Text>
                              <TextInput
                                placeholder ={'cilla22@gmail.com'}
                                style= {styles.detailsInput}
                                textAlign={'right'}
                              />

                            </View>
                            <View style = {styles.line}></View>
                        
                        
                            <View style= {styles.details}>
                              <Text style= {styles.detailsText}> Phone Number</Text>
                              <TextInput
                                placeholder ={'+233 (255) 542 901'}
                                style= {styles.detailsInput}
                                textAlign={'right'}
                              />

                            </View>
                            <View style = {styles.line}></View>
                        
                        
                            <View style= {styles.details}>
                              <Text style= {styles.detailsText}> Role</Text>
                              <TextInput
                                placeholder ={'Director of Marketing'}
                                style= {styles.detailsInput}
                                textAlign={'right'}
                              />

                            </View>
                            <View style = {styles.line}></View>
                       
                        
                            <View style= {styles.details}>
                              <Text style= {styles.detailsText}> Twitter</Text>
                              <TextInput
                                placeholder ={'@cillahackman'}
                                style= {styles.detailsInput}
                                textAlign={'right'}
                              />

                            </View>
                            <View style = {styles.line}></View>
                        
                        
                            <View style= {styles.details}>
                              <Text style= {styles.detailsText}> Linkedin</Text>
                              <TextInput
                                placeholder ={'/cillahackman'}
                                style= {styles.detailsInput}
                                textAlign={'right'}
                              />

                            </View>
                            <View style = {styles.line}></View>
                           
               </View>
               <View style= {styles.buttonContainer}>
                   <TouchableOpacity onPress = {handleRegister}  style={styles.button}>
                       <Text style={styles.buttonText}>REGISTER</Text>
                   </TouchableOpacity>
               </View>
           </View>
       </View>
       </ScrollView>
    
      )

  }
export default RegisterScreen;
const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
      backgroundColor:'#fff',
      justifyContent: 'center',
      alignItems: 'center',   
  },
    container: {
      flex:0.3,
        
       justifyContent: 'center',
        alignItems: 'center',   
    },
    subHeader:{
      color:'red',
      fontWeight:'bold',
      fontSize:17,
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,

    },
    formContainer:{
      flex:0.7,
      marginHorizontal:30,
    },
    detailsContainer:{
      flex:0.9,
      marginTop:20,
      color:'#6036B1'
     
    },
    details:{
      flexDirection:'row',
      width:'100%'
    },
    detailsText:{
      flex:0.4,
     
      fontSize:17,
      marginBottom:10,
      marginTop:25,

    },
    detailsInput:{
      flex:0.6,

      color:'lightgray',
      fontSize:17,
      marginBottom:10,
      marginTop:25,

    },
   
      buttonContainer:{
        flex: 0.1,
        alignItems: 'center',    
        alignItems:'center',
        marginTop:20,
    },
    
    button: {
        width:300,
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
         textTransform:'uppercase'  
      },
      line:{
        width:'100%',
        height: 1,
        backgroundColor:'lightgray'
      }
     
      
      
      
})