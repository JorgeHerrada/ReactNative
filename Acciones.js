import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Acciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.datos}> Nombre: {this.props.route.params.nombre} </Text>
        <Text style={styles.datos}> Codigo: {this.props.route.params.codigo} </Text>
        <Button 
          title='Altas'
          onPress={() => this.props.navigation.navigate("altas",{nombre: this.props.route.params.nombre, codigo: this.props.route.params.codigo})}
        />
        <Button title='Bajas'/>
        <Button title='Cambios'/>
        <Button 
            title='Lista'
            onPress={() => this.props.navigation.navigate("pantalla2",{nombre: this.props.route.params.nombre, codigo: this.props.route.params.codigo})}
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
})