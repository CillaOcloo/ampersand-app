import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity, } from 'react-native'
import { QRCode } from 'react-native-custom-qr-codes-expo';

const  HomeScreen  =({navigation}) => {
    const handleScanner =()=> {
        navigation.navigate ('Scanner')
    }
    return(
        <View  style= {styles.container}>
             {/* <View style= {styles.imageContainer}>
                 <Image
                     style = {styles.image}
                     source  ={require('../../assets/secondlogo.png')}
                 /> 
                 
             </View> */}

             <View style={styles.textContainer}>
                 <View style={styles.text}>
                     <Text style={styles.textHeader}>Exchange Contact Information</Text>
                     <Text style={styles.textDetails}>Scan QR code below to share your contacts</Text>

                 </View>
             </View>

             <View style={styles.QRContainer}>
             <QRCode/>
             </View>

             <View style= {styles.imgContainer} >
               
                <Image 
                   style= {styles.img}
                   source ={require('../../assets/carissa.jpg')}
                    />
             <View style={styles.subtext} >
            <Text  style={styles.imgtextHeader}>Cilla Gardner</Text>
            <Text style={styles.imgtextDetails}>Chief Executive Officer</Text>
            
            </View>            
        </View>
        <View style = {styles.line}></View> 
        <View style ={styles.btnContainer}>
        <TouchableOpacity >
             <Text  style ={styles.btntext} >Want to add a new connection?</Text>
            
             </TouchableOpacity>
              
                   
              <TouchableOpacity onPress={handleScanner} style={styles.button}>
                <Text  style={styles.buttonText}>Scan QR</Text>

              </TouchableOpacity>
                </View>
        
            </View>
          

    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 15,
    },
//     imageContainer: {
//        flex: 0.2,
//        justifyContent: 'center',
//        alignItems: 'center',
//        marginBottom: 20,
//    },
//    image: {  
//        height: 57,
//        width: 200,
//         alignContent:'center'
      
//    },
   textContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',  
},

text: { 
    marginHorizontal: 25,
    marginBottom: 30,   
},

textHeader: {
    color: 'black',
    fontSize:20,
    marginBottom:10,
    alignContent:'center',
    justifyContent: 'center'    
},
textDetails:{
    fontSize: 17,
    color: 'gray',  
    borderBottomColor: "#bec5cc",
    borderBottomWidth: 0.2,     
},
QRContainer:{
    flex: 0.3,
    alignSelf:'center',
     
    marginBottom:95,   
},
imgContainer: {
    flex: 0.4,
    flexDirection:'row',
   
    
},
img: {
    width: 65,
    height: 65,
    borderRadius: 75,
    marginStart:20,
    marginTop:50,
   
},
subtext:{
   marginLeft:10,
   marginTop:30,
  
   
  
},
imgtextHeader:{
    fontSize: 20,
    color: '#4d4d4d',
    marginTop:30,
    marginLeft:7,
    marginBottom:7,

},
imgtextDetails:{
    fontSize: 15,
    color: 'gray',
    marginLeft:7,
  
   
},
line : {
    width : '100%',
    height : 1,
    backgroundColor : 'gray',    
    marginBottom:10,  
     
},
btnContainer:{
    
    marginBottom:18,
    flexDirection:'row',
  
},
btntext:{
    fontSize: 15, 
    marginLeft:30,
    color: '#4d4d4d',
    marginBottom: 4,
   
},
button:{
    borderWidth:1,
    padding:8,
    borderColor:'red',
    marginLeft:25,  
},
buttonText:{
    fontSize:17,
    

}




})


