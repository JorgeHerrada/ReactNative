import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datosServer:[],
        codigos:"",
        // getCodigos:"",
    };
  }
  
  render() {
  // ejecuta cada que se carga la vista
  const loadData = () => {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("Petición enviada a servidor");
        if (this.readyState == 4 && this.status == 200) {
            // save data from server on JS object
            var datos=JSON.parse(xhttp.responseText);
            _this.setState({datosServer:datos}); // save object
            console.log("JSON recibido");
            // console.log(datos);
            // console.log(_this.state.datosServer);

            // convert object to array so it can be used in the SelectDropdown
            getCodigos();
          }
        };
        xhttp.open("GET", "https://herradapinternet.000webhostapp.com/mostrarDatos.php", true);
        xhttp.send();
  }
        
    // convert object to array so it can be used in the SelectDropdown
    const getCodigos = () => {
      var _codigos = this.state.datosServer.map((obj) => obj.codigo);
      this.setState({codigos:_codigos});
      console.log(this.state.codigos + "AQUI DEBERIA HABER CODIGOS");
    }

    const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    // const codigos = this.state.datosServer.map((obj) => obj.codigo);  
    // let result = objArray.map(a => a.foo);  

    return (
      <View style={styles.background}>
        <Text style={styles.datos}>{this.props.route.params.nombre} </Text>
        <Text style={styles.datos}>{this.props.route.params.codigo} </Text>
        <Text style={styles.datos}> Elige el código a dar de baja: </Text>
        <Text>{this.state.codigos} -- Aqui deberia haber codigos</Text>
        <SelectDropdown
            // Send only values of the object
            data={Object.values(this.state.codigos)} 
            // data={Object.values(countries)} 
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        <Button
          onPress={loadData}
          title="Cargar Registros"
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
