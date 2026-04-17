// =====================================================
// 🔐 TELA DE LOGIN
// =====================================================

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function LoginScreen({ navigation }) {

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [salvar, setSalvar] = useState(false);

  return (
    <View style={{ flex:1, backgroundColor:'#fff', padding:20, justifyContent:'center' }}>

      {/* TÍTULO */}
      <Text style={{ fontSize:34, fontWeight:'bold', textAlign:'center' }}>
        Moto Aqui
      </Text>

      {/* SUBTÍTULO */}
      <Text style={{ textAlign:'center', color:'#666', marginBottom:40 }}>
        Entre na sua conta
      </Text>

      {/* CPF */}
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={{ backgroundColor:'#f5f5f5', padding:15, borderRadius:12, marginBottom:15 }}
      />

      {/* SENHA */}
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{ backgroundColor:'#f5f5f5', padding:15, borderRadius:12 }}
      />

      {/* CHECKBOX */}
      <TouchableOpacity onPress={() => setSalvar(!salvar)}>
        <Text style={{ marginVertical:20 }}>
          {salvar ? '☑' : '☐'} Salvar login
        </Text>
      </TouchableOpacity>

      {/* BOTÃO ENTRAR */}
      <TouchableOpacity
        style={{ backgroundColor:'#FFD700', padding:15, borderRadius:12 }}
        onPress={() => navigation.navigate('SelectType')}
      >
        <Text style={{ textAlign:'center', fontWeight:'bold' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/* CADASTRAR */}
      <TouchableOpacity onPress={() => navigation.navigate('SelectType')}>
        <Text style={{ textAlign:'center', marginTop:15 }}>
          Criar conta
        </Text>
      </TouchableOpacity>

    </View>
  );
        }
