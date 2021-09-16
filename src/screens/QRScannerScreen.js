import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';



      const QRScannerScreen  = ({navigation}) => {
        const handleScannerCode = () =>{
          
        }
        
          const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);

        useEffect(() => {
          (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          })();
        }, []);

        const handleBarCodeScanned = ({ type, data }) => {
          setScanned(true);
          navigation.navigate('My Profile')
          // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        };

        if (hasPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        }
        
        
           return (
            <View  style={styles.maincontainer}> 
               <View style={styles.scannerContainer}>
                   <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                          style={StyleSheet.absoluteFillObject}
                        />
                        {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
                        </View>


            <View style ={styles.btnContainer}>
              <TouchableOpacity >
                  <Text  style ={styles.btntext} >Want to share your contact?</Text>
                  
                  </TouchableOpacity>
                    
                        
                    <TouchableOpacity onPress={handleScannerCode} style={styles.button}>
                      <Text  style={styles.buttonText}>Send QR</Text>

                    </TouchableOpacity>
                      </View>
              
          </View>
          




          
        );
      }


export default QRScannerScreen;
const styles = StyleSheet.create({
    container:{
       marginHorizontal: 0,    
    },
    scannerContainer:{
      flex:1,
    
    },
    maincontainer:{
      flex:1,
    },
    
    btnContainer:{
      
      marginTop:20,
      flexDirection:'row',
    
  },
  btntext:{
    fontSize: 15, 
    marginLeft:25,
    color: '#4d4d4d',
    marginBottom: 12,
   
},
button:{
  
  borderWidth:1,
    padding:10,
    borderColor:'red',
    marginLeft:30, 
    marginBottom: 12, 
},
buttonText:{
    fontSize:17,
    

}

  
})