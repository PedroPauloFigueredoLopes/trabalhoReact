import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
const Login = ({navigation}) => {
  const goToHomeScreen = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'CALCULADORA'}],
    });
  };
  
  click = () => {
    Alert.alert('ERROR');
    return
  }
  return (
    
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('../../imagens/favicon.png')}
      />
     <Text style={styles.login2} >Nome de usuario:</Text>
     <TextInput
     style={styles.login}
    
     />
     <Text style={styles.login2}>Senha:</Text>
      <TextInput 
     style={styles.login}
     secureTextEntry={true}
     
     />

      <TouchableOpacity
     style={styles.botao}
     onPress= {() => {goToHomeScreen()} }
     >
     <Text style={styles.botaoTexto}>Login</Text>
     </TouchableOpacity>
    <Text>ou</Text>
     <TouchableOpacity
   
     style={styles.botao2}
     onPress= {() => {this.click()} }
     >
     <Text style={styles.botaoTexto}>Conecte-se com o Facebook</Text>
     </TouchableOpacity>
     <Text>Não possui uma conta?</Text>
     <TouchableOpacity
     style={styles.botao3}
     onPress= {() => {this.click()} }
     >
     <Text style={styles.botaoTexto}>inscrever-se</Text>
     </TouchableOpacity>
     
     
   </View>
 );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#c842f5',
    paddingTop:50,
   
 },
 logo: {
   
   width: 150,
   height: 150,
   borderRadius:100
 },
 login:{
   marginTop:0,
   width:300,
   backgroundColor: '#ffff',
   fontSize: 18,
   fontWeight: 'bold',
   borderRadius: 3,
   borderBottomLeftRadius: 15,
   borderBottomRightRadius: 15,
   borderTopLeftRadius: 15,
   borderTopRightRadius: 15,
   

},
 botao:{
   width:300,
   height: 42,
   backgroundColor: '#c842f5',
   marginTop:10,
   borderRadius:4,
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 2,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
   borderBottomLeftRadius: 20,
   borderBottomRightRadius: 20,
   
   
 },
 botaoTexto:{
   fontSize:20,
   fontWeight: 'bold',
   
  
 },
 login2:{
   marginTop:20,
   width:300,
   fontSize: 20,
   fontWeight: 'bold',
   borderRadius: 3
   

 },
 botao2:{
   width:300,
   height: 42,
   backgroundColor: '#3b5998',
   marginTop:10,
   marginBottom: 20,
   borderRadius:4,
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 2,
   borderBottomLeftRadius: 20,
   borderBottomRightRadius: 20,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,

 },
 botao3:{
   width:300,
   height: 42,
   backgroundColor: '#c842f5',
   marginTop:10,
   borderRadius:4,
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 2,
   borderBottomLeftRadius: 20,
   borderBottomRightRadius: 20,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,

 }
})  


export default Login;