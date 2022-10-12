import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.datos}> nombre: {this.props.route.params.nombre} </Text>
        <Text style={styles.datos}> codigo: {this.props.route.params.codigo} </Text>
        <Text style={styles.datos}> imagen URL: {this.props.route.params.imagen} </Text>
        <Image
            style={{width:100,height:100}}
            source={{uri:this.props.route.params.imagen}}
            // source={require(this.props.route.params.imagen)}
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