import React,{Component} from 'react';
import {Text, View, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity
,TextInput, ScrollView} from "react-native"
import { Video } from 'expo-av';

class App extends Component{

  saludo = () =>{ Alert.alert("Hola guapo")}
  
  render(){
    
    return(
      <ImageBackground source={{uri:"https://www.xtrafondos.com/wallpapers/rick-y-morty-temporada-4-4114.jpg"}}style={styles.container}>
        <ScrollView>
              <View style={styles.header}> 
                <View style={styles.headerLeft}>
                  <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                </View>
        
                <View style={styles.headerRight}>
                  <Button title="Login" onPress={this.saludo} style={styles.boton}/>
                </View>  
              </View>
    
    
            <View style={styles.body}>
              
                <Text style={styles.negrita}>BIENVENIDO A MI PRIMERA APP EN NATIVE UWU</Text>
                <TextInput 
                maxLength={8}
                placeholderTextColor="white" 
                placeholder="Nombre de usuario"
                style={{borderWidth:1 , borderColor:"white", padding: 5, marginTop:10, color: "white"}}></TextInput>
                  <Video
                    source={require("./assets/rolitauwu.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    useNativeControls={true}
                    shouldPlay={false}
                    isLooping
                    style={{ width: 300, height: 300 }}
                  />
    
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
                <Image source={ require("./assets/ola.png")} style={styles.logo}/>
              
          
          </View>

          <View style={styles.perfil}>
            <View>
              <Text style={styles.negrita}>
                Tomasasasuwu
              </Text>
            </View>
            <View>
              <Text  style={styles.negrita}>
                HolaGuapo
              </Text>
            </View>
              
            <View>
              <Image source={{uri: "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"}} style={styles.logoP}/>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      
    
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: "green",
    flexDirection: "column"
  },
  negrita:{
    color:"white",
    fontWeight: "bold"
  },  
  header:{
    flex:0.13,
    flexDirection: "row",
    marginTop: 40
  },  
  headerLeft:{
    flex:1
  },
  headerRight:{
    flex:0.4,
  },
  body:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
  },
  perfil:{
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },  
  logo:{
    width:80,
    height: 80,
    borderRadius: 200,
    resizeMode: "contain",
  },
  logoP:{
    width:80,
    height: 80,
    borderRadius: 200,
    resizeMode: "contain", 
  }
})
export default App
