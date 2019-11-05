import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, TouchableNativeFeedback, ScrollView, TextInput, Image,ActivityIndicator} from 'react-native'

class App extends React.Component {

  state = {
    role: true
  }

  splash = () => {
    if (this.state.role) {
      return (
        <View style={{ height: '100%', width: '100%',justifyContent:'center',alignItems:'center' }}>
          <Image
            source={require('./sdr/assets/3d-abstract.jpg')}
            style={{ height: 110, width: 110 }} />
            <ActivityIndicator size="large"/>
            <Text>
              Mohon tunggu sebentar
            </Text>
        </View>
      )
    }
  }
  render() {
    setTimeout(()=>{
      this.setState({
        role:false
      })
    } ,5000)
    return (
      
      <View style={{ flex: 1}}>
        {this.splash()}
        
        <View>
          <Text style={tulisan.dgh}>
            my app
          </Text>
          <View style={{alignItems:'center',marginTop:50}}>
          <Text style={{color:'blue',fontSize:45}}>
                  Really
          </Text>
         </View>
          <View>
            <View style={{paddingHorizontal:30}}>
              <TextInput
                placeholder='password'
                style={{ padding:10, borderWidth: 1,marginTop:50 }}/>
              <TextInput
                placeholder='email'
                style={{ padding: 10, borderWidth: 1,marginTop:1}}/>
          </View>
          </View>
          <View style={tulisan.container}>
            <View style={tulisan.button}>
              <TouchableOpacity onPress={() => { alert('tombol di    klik') }}>
                <Text style={tulisan.text}>
                  login
              </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop:300,alignItems:'center'}}>
          <Text>
            @fandzaf
          </Text>
        </View>
      </View>
    )

  }
}
export default App

const tulisan = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  button: {
    height: 40,
    width: 150,
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop: 250,
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: 'white'

  },
  dgh: {

    fontSize: 30,
    color: 'white',
    backgroundColor: 'red',
    width: '100%',
    height: 50
  },

})
