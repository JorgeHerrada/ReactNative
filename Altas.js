import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre:"",
        codigo:"",
        tarea:"",
        urli:"",
    };
  }

  render() {

    const btnGuardar = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log("Petición enviada a servidor");
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                if(xhttp.responseText==="1")
                {
                    // alerta de exito
                    console.log("Agregado correctamente");
                }else{
                    // alerta de error
                    console.log("Error, no se pudo agregar");

                }
            }
        };
        xhttp.open("GET", "https://herradapinternet.000webhostapp.com/altas.php?nombre=" + this.state.nombre + "&codigo=" + this.state.codigo + "&tarea=" + this.state.tarea + "&imagen=" + this.state.urli, true);
        xhttp.send();
    }

    return (
      <View style={styles.background}>
        <Text style={styles.datos}>{this.props.route.params.nombre} </Text>
        <Text style={styles.datos}>{this.props.route.params.codigo} </Text>
        <Text style={styles.datos}> Ingresa los datos de alta: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Nombre"
            // get input and save in variable
            onChangeText={nombre => this.setState({nombre})}
        />
        <TextInput 
            style={styles.input}
            placeholder="Código"
            // get input and save in variable
            onChangeText={codigo => this.setState({codigo})}
        />
        <TextInput 
            style={styles.input}
            placeholder="Tarea"
            // get input and save in variable
            onChangeText={tarea => this.setState({tarea})}
        />
        <TextInput 
            style={styles.input}
            placeholder="Imagen"
            // get input and save in variable
            onChangeText={urli => this.setState({urli})}
        />
        <Button 
            title='Enviar'
            onPress={btnGuardar}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    datos:{
      color:'black',
      alignSelf:'center',
    },
    input:{
        borderWidth: 2,
        fontSize: 25,
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 8,
        color:'black',
    },
    background:{
        backgroundColor:"#FFD1D1",
        flex: 1,  
        opacity: 1
    },
  })