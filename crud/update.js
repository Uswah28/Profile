import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Form,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Container, Content, Input, Item, Button } from 'native-base';
import {} from '@react-navigation/native'


import axios from 'axios';

export default class Update extends Component {
  constructor(props) {
      super(props);

      this.state = {
        name: '',
        address: '',
        date: '',
        email:'',
        number:'',
      }
  }

  componentDidMount() {
      axios.get('http://192.168.43.129:5000/exercises/' + this.props.route.params.ID)
          .then(response => {
              this.setState({
            name: response.data.name,
            address: response.data.address,
            date: response.data.date,
            email: response.data.email,
            number: response.data.number
              })
          })
          .catch((error) => {
              console.log(error);
          })
  }

  onUpdate() {
      const exercises = {
        name: this.state.name,
        address: this.state.address,
        date: this.state.date,
        email: this.state.email,
        number: this.state.number
      }

      console.log(' UPDATE ', exercises);

      axios.post('http://192.168.43.129:5000/exercises/update/' + this.props.route.params.ID, exercises)
          .then(res => console.log(res.data))
  }

  render() {
      console.log(this.props.route.params.ID)
      return (
        <View>
        <SafeAreaView>
          <ScrollView>
          <Container style={styles.container}>
          <View>
                  <Text style={styles.judul}> 
                    PROFILE UPDATE
                  </Text>
                </View>
              <Content>
                  <Form>
                      <Item rounded
                         style={styles.atas}>
                          <Input style={styles.input}
                              placeholder='Name'
                              onChangeText={name =>
                                  this.setState({ name: name })
                              }
                              value={this.state.name}
                          />
                      </Item>
                      <Item rounded
                          style={styles.atas}>
                          <Input style={styles.input}
                              placeholder='Address'
                              onChangeText={address =>
                                  this.setState({ address: address })
                              }
                              value={this.state.address}
                          />
                      </Item>
                      <Item rounded
                          style={styles.atas}>
                          <Input style={styles.input}
                              keyboardType='numeric'
                              placeholder='Date'
                              onChangeText={date =>
                                  this.setState({ date: date })
                              }
                              value={this.state.date}
                          />
                      </Item>
                      <Item rounded
                          style={styles.atas}>
                          <Input style={styles.input}
                              placeholder='Email'
                              onChangeText={email =>
                                  this.setState({ email: email })
                              }
                              value={this.state.email}
                          />
                      </Item>
                      <Item rounded
                          style={styles.atas}>
                          <Input style={styles.input}
                              keyboardType='numeric'
                              placeholder='Number/Telp'
                              onChangeText={number =>
                                  this.setState({ number: number })
                              }
                              value={this.state.number}
                          />
                      </Item>

                  </Form>
                  <Button full rounded transparent 
                  styles={styles.tombol} 
                      onPress={() => {
                          this.onUpdate();
                          this.props.navigation.navigate('Read')
                      }}>
                      <Text style={styles.text}>UPDATE</Text>
                  </Button>
              </Content>
          </Container>
          </ScrollView>
        </SafeAreaView>
      </View>
      );
  }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    container: {
      backgroundColor: '#FEDBD0',
      alignContent: 'center',
    },
    judul: {
      marginTop: 20,
      fontSize: 30,
      alignSelf: 'center',
      color: '#01579b',
    },
    atas : {
      backgroundColor : "#fff",
      marginTop : 10, 
      marginLeft: 10, 
      marginRight: 10,
    },
    tombol: {
      marginTop : 20, 
      marginLeft: 10, 
      marginRight: 10,      
    },
    
    tombol1: {
      marginTop : 30, 
      marginLeft: 10, 
      marginRight: 10,      
    },
    input: {
      fontSize: 15
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
  });