import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.datos}>{this.props.route.params.nombre} </Text>
        <Text style={styles.datos}>{this.props.route.params.codigo} </Text>
        <Text style={styles.datos}> Ingresa los datos de alta: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Nombre"
            // get input and save in variable
            // onChangeText={codigo => this.setState({codigo})}
        />
        <TextInput 
            style={styles.input}
            placeholder="Código"
            // get input and save in variable
            // onChangeText={codigo => this.setState({codigo})}
        />
        <TextInput 
            style={styles.input}
            placeholder="Tarea"
            // get input and save in variable
            // onChangeText={codigo => this.setState({codigo})}
        />
        <TextInput 
            style={styles.input}
            placeholder="Imagen"
            // get input and save in variable
            // onChangeText={codigo => this.setState({codigo})}
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