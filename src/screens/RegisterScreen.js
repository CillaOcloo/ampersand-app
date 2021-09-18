import React ,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

  const RegisterScreen = ({navigation}) => {
    
    const handleRegister = ()=> {
      navigation.navigate ('Sign In')
    }
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

      return(
         <KeyboardAwareScrollView>
           <View style= {styles.maincontainer}>
            <ImageBackground source={{uri:image}} style={{width:350,height:400}}>
            <TouchableOpacity  onPress={pickImage} style= {styles.container}>
                 <AntDesign name="user" size={90} color="red" style={{marginTop:50}} />
                  <Text style = {styles.subHeader}>ADD PROFILE PHOTO</Text>  
                  </TouchableOpacity>

            </ImageBackground>
                 
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
       </KeyboardAwareScrollView>
    
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
      flex:0.6,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    subHeader:{
      color:'red',
      fontWeight:'bold',
      fontSize:17,
      alignItems:'center',
      justifyContent:'center',
    

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