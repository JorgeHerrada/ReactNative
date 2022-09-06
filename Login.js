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
    TouchableOpacity,
    Alert
    // KeyboardAvoidingView
} from 'react-native';

// importar para navegar entre pantallas
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // variables definition
        codigo:"",
        nip:"",
    };
  }

  render() {
    // js programming for objects
    const btnClick = () => {
       
        var xhttp = new XMLHttpRequest(); // creates object for xmlhttp request

        // defines what to do when readySate changes
        xhttp.onreadystatechange = function() {
            // If readyState=4 server is up and if status=200 succesfull request
            if (this.readyState == 4 && this.status == 200) {
                
                console.log(xhttp.responseText);  

                // Valid login?
                if (xhttp.responseText[0] == "A"){
                    console.log("LOGEADO");
                    changeScreen(); // go to different screen
                }
                else
                {
                    console.log("Credenciales incorrectas");
                    badLoginalert(); // pop up alert
                }
                
            }
        };
        
        // defines the metod (get) // url where to go (dinamic with user input) // asynchronous process (true)
        xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo=" + this.state.codigo + "&nip=" + this.state.nip, true);
        xhttp.send(); // send the request defined above
        
    }
    
    // Display pop up alert 
    const badLoginalert = () =>
    Alert.alert(
        "Login invalido",
        "Los datos introducidos son inválidos, intenta de nuevo.",
        [
            { text: "OK"}
        ]
    );
    
    // Change the current screen with navigation   
    const changeScreen = () => {
        this.props.navigation.navigate("pantalla2");
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
                    keyboardType='numeric'
                    // get input and save in var codigo
                    onChangeText={codigo => this.setState({codigo})}
                />
                <TextInput 
                    placeholder="NIP"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={nip => this.setState({nip})}
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
    container: {
        flex: 1
    },
    background:{
        backgroundColor: "#FFAEBC",
        flex: 1,  
        opacity: 0.95
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
        marginHorizontal: 30,
        borderRadius: 8,
    },
    logoudg:{
        width: 200,
        height:300,
        alignSelf: "center",
        opacity: 0.7
    },
    textoudg:{
        fontSize: 40,
        color: "#A0E7E5",
        textAlign: "center"
    },
})
