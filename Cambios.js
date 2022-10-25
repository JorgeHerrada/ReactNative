import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default class Cambios extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datosServer:[],
        codigos:"",
        registroModificar:"",
        tarea:"",
        urli:"",
        tareaVieja:"",
        imagenVieja:"",
    };
  }

  render() {
    // Carga la información de la base de datos
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
        // get all values for "codigo" key in all objects in the array "datosServer" and save them
        this.setState({codigos:this.state.datosServer.map((obj) => obj.codigo)});
        console.log("Codigos en la DB: " + this.state.codigos);
      }
  
      // Delete register from database where "codigo" = registroModificar
      const modidicarRegistro = () => {
        console.log("Modificando registro seleccionado: " + this.state.registroModificar);
  
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              if(xhttp.responseText === "1"){
                console.log("Elemento modificado con éxito.");
                
              }
              else{
                console.log("No se pudo modificar.");
              }
            }
        };
        xhttp.open("GET", "https://herradapinternet.000webhostapp.com/update.php?codigo=" + this.state.registroModificar + "&tarea=" + this.state.tarea + "&imagen=" + this.state.urli , true);
        xhttp.send();
      }

      // Carga la información de la base de datos
    const loadTareaImagen = (selectedItem) => {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        console.log("Registro MAMALON a modificar: " + selectedItem);
        xhttp.onreadystatechange = function() {
            console.log("Petición enviada a servidor");
            if (this.readyState == 4 && this.status == 200) {
                if(xhttp.responseText != "No hay datos en la DB"){
                    console.log("Se cargaron los datos actuales.");
                    // guardamos datos en json
                    var datos=JSON.parse(xhttp.responseText);
                    _this.setState({tareaVieja:datos[0]["tarea"]});
                    _this.setState({imagenVieja:datos[0]["imagen"]});
                    console.log(datos);
                    //console.log(datos[0]["imagen"]);
                    //console.log(datos[0]["tarea"]);
                }
                else{
                  console.log("No se pudo cargar los datos actuales.");
                }
            }
        };
        xhttp.open("GET", "https://herradapinternet.000webhostapp.com/mostrarTareaImagen.php?codigo=" + selectedItem, true);
        console.log("https://herradapinternet.000webhostapp.com/mostrarTareaImagen.php?codigo=" + selectedItem);
        xhttp.send();
      }
  
      return (
        <View style={styles.background}>
          <Text style={styles.datos}>{this.props.route.params.nombre} </Text>
          <Text style={styles.datos}>{this.props.route.params.codigo} </Text>
          <Text style={styles.datos}> Elige el código a dar de baja: </Text>
  
          <Text>Codigos en la DB: {this.state.codigos}</Text>
  
          <Button
            onPress={loadData}
            title="Cargar Registros"
          />
  
            <SelectDropdown
              // Send only values of the object
              data={Object.values(this.state.codigos)} 
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                // Guarda codigo seleccionado
                this.setState({registroModificar:selectedItem});
                // cargamos datos imagen y tarea actual del codigo seleccionado
                loadTareaImagen(selectedItem);
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

            <TextInput 
                style={styles.input}
                placeholder="Tarea"
                // get input and save in variable
                onChangeText={tarea => this.setState({tarea})}
                defaultValue={this.state.tareaVieja}
                />
            <TextInput 
                style={styles.input}
                placeholder="Imagen"
                // get input and save in variable
                onChangeText={urli => this.setState({urli})}
                defaultValue={this.state.imagenVieja}
            />
          
          <Button
            title='Cambiar registro seleccionado'
            onPress={modidicarRegistro}
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
