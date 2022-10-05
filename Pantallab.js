import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
      console.log("Petición enviada a servidor");
      if (this.readyState == 4 && this.status == 200) {
        // save data from server on JS object
        var datos=JSON.parse(xhttp.responseText);
        _this.setState({datosServer:datos}); // save object
        console.log("JSON recibido");
      }
  };
  xhttp.open("GET", "https://herradapinternet.000webhostapp.com/mostrarDatos.php", true);
  xhttp.send();
  }

  render() {

    // creacion de la celda que despliega los datos
    const celda = ({item}) => {
      return(
        <View style={styles.celdaContainer}>
          <Text style={styles.celda}>id: {item.id}</Text>
          <Text style={styles.celda}>nombre: {item.nombre}</Text>
          <Text style={styles.celda}>codigo: {item.codigo}</Text>
          <Text style={styles.celda}>tarea: {item.tarea}</Text>
        </View>
      )
    }

    return (
      <View style={styles.background}>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Bienvenido: {this.props.route.params.nombre} </Text>
          <Text style={styles.info}>Código: {this.props.route.params.codigo} </Text>
        </View>

        {/* Creates list and display all data received from server */}
        <FlatList
          data={this.state.datosServer}
          renderItem={celda}
          keyExtractor={(item,index) => index.toString()}
          style={styles.flatList}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#FFD1D1",
    flex: 1,  
    opacity: 1
  },
  celdaContainer:{
    marginHorizontal:20,
    marginVertical:20,
    borderWidth:2,
    borderColor:"black",
    padding:10,
    borderRadius:15,
    flex:1,
    backgroundColor: "#FFE3E1",
  },
  celda:{
    fontSize:20,
    fontFamily:"serif",
    color:"black",
  },
  infoContainer:{
    padding:20,
    borderBottomWidth:2,
    backgroundColor: "#FF9494",
    alignContent:"center",
  },
  info:{
    fontFamily:"serif",  
    fontSize:15,  
    fontWeight:"bold",
    alignSelf:"center",
  },
  flatList:{
    flex: 1,
    marginBottom: 30,
  },
})