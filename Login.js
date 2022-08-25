// import objects
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    Button, 
    ImageBackground, 
    TouchableOpacity 
} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // variables definition
    };
  }

  render() {
      // js programming for objects
      const btnClick = () => {
          console.log("Has dado click al boton");
      }

    return (
        <View style={styles.background}>
            <ImageBackground
                source={require("./Imagenes/background.jpg")}
                style={styles.background}
            >
                <Text style={styles.textoudg}> UdeG </Text>
                
                <Image 
                    style={styles.logoudg}
                    source={require("./Imagenes/logoudg.png")}
                    />
                <TextInput 
                    style={styles.input}
                    placeholder="Codigo"
                    />
                <TextInput 
                    placeholder="NIP"
                    style={styles.input}
                    secureTextEntry={true}
                    />
                <View style={styles.btnEntrar}>
                    <TouchableOpacity>
                        <Button
                            style={styles.button}
                            title="Log in"
                            onPress={btnClick}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
  }
}


// styles
const styles = StyleSheet.create({
    background:{
        // backgroundColor: "#FFAEBC",
        flex: 1,  
    },
    btnEntrar:{
        width:100,
        height: 80,
        alignSelf: "center",
        marginTop: 30,
    },
    input:{
        borderWidth: 2,
        fontSize: 25,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        // alignSelf: "center"
    },
    logoudg:{
        width: 200,
        height:300,
        alignSelf: "center",
    },
    textoudg:{
        fontSize: 40,
        color: "#A0E7E5",
        textAlign: "center"
    },
})
