import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';



function HomeScreen({ navigation }) {
  return (
    <View style={{backgroundColor: '#FFC6C3'}}>
      <ScrollView>
        <View>
          <View style={estilo.banner}>
            <Image style={{height: 220, width: 400}} source={require('./src/img/logodaniela.png')}></Image> 
            <View style={estilo.botao}>            
              <TouchableOpacity onPress={() => navigation.navigate('Contato')}>                                    
                <Text style={{color: 'white'}}><Icon name="whatsapp" size={14} color="#fff"/>  Mais informações</Text>                
              </TouchableOpacity> 
            </View>           
          </View>          
          
          <View style={{alignItems: 'center'}}>
            <Image style={{width: 360, margin:30}} source={require('./src/img/capa.jpeg')}></Image>             
          </View>

          <View>
            <Text style={{fontSize: 24, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold'}}>Piscóloga Daniela Viera</Text>  
            <Text style={{fontSize: 16, marginStart: 40, marginTop: 20}}>Olá, que bom ter você aqui!</Text>          
            <Text style={{fontSize: 16, textAlign: 'justify', marginHorizontal: 30, marginVertical: 20}}>Sou Psicóloga graduada pela Universidade do Vale do Rio dos Sinos (Unisinos), mestre em Terapia Cognitiva Comportamental (INFAPA)  e atuo com psicoterapia para adultos e adolescentes de forma Online. O processo terapêutico tem como base o foco na troca de idéias, o que significa que eu juntamente com você vamos estar comprometidos em torno de questões que busquem soluções para os desafios da vida, e possibilidades de um melhor viver.</Text>
            <Text style={{fontSize: 16, marginStart: 40, marginTop: -15}}>Boas vindas!</Text>
          </View>            
                    
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Contato')}>
                <View style={{alignItems: 'center'}}>                    
                  <Text><Icon name="instagram" size={40} color="#fff"/></Text>
                </View>
              </TouchableOpacity> 
            </View>
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Contato')}>
                <View>                    
                <Text><Icon name="whatsapp" size={40} color="#fff"/></Text>
                </View>
              </TouchableOpacity> 
            </View>            
          </View>  

          <View>
            <Text style={estilo.titulo}>Áreas de Atuação</Text>            
          </View>

          <View style={estilo.areaTexto}>
              <Icon name="comments" size={40} color='#6B6E7A'/>              
              <Text style={estilo.subTitulo}>Psicoterapia</Text>
              <Text style={estilo.texto}>Tem como finalidade amparar pessoas que estão em dor emocional 
                ou que buscam por uma evolução pessoal, por meio do conhecimento de si mesmo. Nessa ação, o psicólogo 
                e o cliente buscam trabalhar conjuntamente para encontrar novas formas de ver e resolver as questões da vida.</Text>              
          </View>

          <View style={estilo.areaTexto}>
              <Icon name="user" size={40} color='#6B6E7A'/>
              <Text style={estilo.subTitulo}>Psicoterapia para Adultos</Text>
              <Text style={estilo.texto}>O processo terapêutico propõe-se a fazer com que a pessoa tenha 
                mais independência para gerir livremente a sua vida, buscando suas potencialidades e efetuando suas
                próprias escolhas com maior assertividade.</Text>              
          </View> 

          <View style={estilo.areaTexto}>
            <Icon name="users" size={40} color='#6B6E7A'/>
            <Text style={estilo.subTitulo}>Psicoterapia para Adolescentes</Text>
            <Text style={estilo.texto}>A fase da adolescência pode ser vivenciada de forma assertiva. 
              E podemos através do processo terapêutico, citar várias formas de enriquecer o convívio do adolescente 
              e apoiá-lo neste período de transição tão importante de sua vida.
            </Text>          
          </View>

          <View style={estilo.botaoEscuro}>            
            <TouchableOpacity onPress={() => navigation.navigate('Contato')}>                                    
              <Text style={{color: '#FFC6C3'}}><Icon name="whatsapp" size={14} color="#FFC6C3"/>  Agendar Atendimento</Text>                
            </TouchableOpacity> 
          </View>

          <View style={estilo.bannerInferior}>
            <Image source={require('./src/img/atendimento.jpeg')}></Image>
            <View style={estilo.areaBanner}>
              <Text style={estilo.tituloBanner}>Atendimento Online</Text>
              <Text style={estilo.txtBanner}>Consulte Horários Disponíveis</Text>
              <View style={estilo.botaoBanner}>            
                <TouchableOpacity onPress={() => navigation.navigate('Contato')}>                                    
                  <Text style={{color: 'white'}}><Icon name="whatsapp" size={14} color="#fff"/>  Clique para Agendar</Text>                
                </TouchableOpacity> 
              </View>
            </View>  
          </View> 

          <View>
            <Text style={{textAlign: 'center', marginVertical: 30, marginTop:60}}>2022 - Todos os Direitos Reservdos</Text>  
          </View>       
        
        </View>
      </ScrollView>
      
    </View>
  );
}

function Contato() {
  return (    
    <View style={{alignItems: 'center',justifyContent: 'center', backgroundColor: '#FFC6C3'}}>
      <Image style={{width: 420, height: 360}} source={require('./src/img/logosopros.png')}></Image>        
      <View style={{marginVertical: 70,}}>
        <Text style={{fontSize:30, color: '#6B6E7A'}}><Icon name="instagram" size={50} color="#6B6E7A"/> SoprosDeCuidados</Text>
        <Text style={{fontSize:30, color: '#6B6E7A'}}><Icon name="whatsapp" size={50} color="#6B6E7A"/> (51) 985-887-455</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Daniela Vieira">
        <Stack.Screen name="Daniela Vieira" component={HomeScreen} /> 
        <Stack.Screen name="Contato" component={Contato} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const estilo = StyleSheet.create({
  banner: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    height: 260,
    backgroundColor: '#FFF'       
  },
  titulo:{
    textAlign: 'center',    
    fontSize: 30,
    marginVertical: 20,
    fontWeight: 'bold',
    borderColor: '#fff',
    borderTopWidth: 2,
    paddingTop: 20,
    marginHorizontal: 20,    
  },
  subTitulo:{
    textAlign: 'center',    
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },  
  areaTexto:{
    borderWidth: 2,
    borderColor: '#6B6E7A',
    borderRadius: 16,    
    width: 380,
    margin: 20,
    alignItems: 'center',
    padding: 12,
    
  },
  texto:{
    color: '#6B6E7A',
  },   
  botaoEscuro:{
    backgroundColor: '#6B6E7A',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 120,
    marginBottom: 20,    
  },
  botao:{
    backgroundColor: '#EBA89F',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding:2,
    paddingHorizontal: 10,    
  },
  bannerInferior:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  botaoBanner:{
    backgroundColor: '#EBA89F',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding:2,
    paddingHorizontal: 10,          
  },
  areaBanner:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: -130,
    marginStart: 130
  },
  tituloBanner:{
    textAlign: 'center',    
    fontSize: 24,    
    fontWeight: 'bold',
    color: '#6B6E7A'
  },
  txtBanner:{
    fontSize: 16,    
    fontWeight: 'bold',
    color: '#6B6E7A',
    marginVertical: 10
  }

})
