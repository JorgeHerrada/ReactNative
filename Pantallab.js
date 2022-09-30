import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
    };
  }

  // ejecuta cada que se carga la vista
  componentDidMount(){
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // save data from server on JS object
      var datos=JSON.parse(xhttp.responseText);
      _this.setState({datosServer:datos}); // save object
    }
  };
  xhttp.open("GET", "https://herradapinternet.000webhostapp.com/mostrarDatos.php", true);
  xhttp.send();
  }

  render() {

    // creacion de la celda que despliega los datos
    const celda = ({item}) => {
      return(
        <View style={{margin:10,borderWidth:1,borderColor:"black",flex:1,marginBottom:50,marginTop:10}}>
          <Text>id: {item.id}</Text>
          <Text>nombre: {item.nombre}</Text>
          <Text>codigo: {item.codigo}</Text>
          <Text>tarea: {item.tarea}</Text>
        </View>
      )
    }

    return (
      <View>
        <Text> Bienvenido: {this.props.route.params.nombre} </Text>
        <Text> Código: {this.props.route.params.codigo} </Text>

        {/* Creates list and display all data received from server */}
        <FlatList
          data={this.state.datosServer}
          renderItem={celda}
          keyExtractor={(item,index) => index.toString()}
        />

      </View>
    );
  }
}