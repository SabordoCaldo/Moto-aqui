// =====================================================
// 👥 ESCOLHA CLIENTE OU MOTORISTA
// =====================================================

import { View, Text, TouchableOpacity } from 'react-native';

export default function SelectTypeScreen({ navigation }) {

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20, backgroundColor:'#fff' }}>

      <Text style={{ fontSize:28, textAlign:'center', marginBottom:40 }}>
        Como deseja usar?
      </Text>

      {/* CLIENTE */}
      <TouchableOpacity
        style={{ backgroundColor:'#FFD700', padding:18, borderRadius:12, marginBottom:15 }}
        onPress={() => navigation.navigate('RegisterClient')}
      >
        <Text style={{ textAlign:'center', fontWeight:'bold' }}>
          Sou Cliente
        </Text>
      </TouchableOpacity>

      {/* MOTORISTA */}
      <TouchableOpacity
        style={{ backgroundColor:'#000', padding:18, borderRadius:12 }}
        onPress={() => navigation.navigate('RegisterDriver')}
      >
        <Text style={{ textAlign:'center', color:'#fff', fontWeight:'bold' }}>
          Sou Motorista
        </Text>
      </TouchableOpacity>

    </View>
  );
}
