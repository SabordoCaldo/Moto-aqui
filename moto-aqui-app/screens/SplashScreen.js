// =====================================================
// 🚀 TELA DE CARREGAMENTO (SPLASH)
// =====================================================

import { View, Text, Image } from 'react-native';
import { useEffect } from 'react';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#000' }}>

      {/* LOGO */}
      <Image
        source={require('../assets/logo.png')}
        style={{ width:200, height:200 }}
        resizeMode="contain"
      />

      {/* NOME */}
      <Text style={{ color:'#FFD700', fontSize:28, fontWeight:'bold', marginTop:10 }}>
        Moto Aqui
      </Text>

    </View>
  );
}
