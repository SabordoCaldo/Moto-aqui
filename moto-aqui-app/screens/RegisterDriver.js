// =====================================================
// 🚗 CADASTRO MOTORISTA
// =====================================================

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterDriver() {

  return (
    <View style={{ flex:1, padding:20, justifyContent:'center', backgroundColor:'#fff' }}>

      <Text style={{ fontSize:26, textAlign:'center', marginBottom:20 }}>
        Cadastro Motorista
      </Text>

      <TextInput placeholder="Nome" style={{ backgroundColor:'#f5f5f5', padding:15, borderRadius:12, marginBottom:10 }} />
      <TextInput placeholder="CPF" style={{ backgroundColor:'#f5f5f5', padding:15, borderRadius:12, marginBottom:10 }} />
      <TextInput placeholder="Modelo da moto" style={{ backgroundColor:'#f5f5f5', padding:15, borderRadius:12, marginBottom:20 }} />

      <TouchableOpacity style={{ backgroundColor:'#000', padding:15, borderRadius:12 }}>
        <Text style={{ textAlign:'center', color:'#fff', fontWeight:'bold' }}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}
