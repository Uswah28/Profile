import React, {
    Component
} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import {
    Container, Content, Button, Item, Input, Form
} from 'native-base';

import axios from 'axios'

export default class Create extends Component {
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

    onSubmit = () => {
        const exercises = {
            name: this.state.name,
            address: this.state.address,
            date: this.state.date,
            email: this.state.email,
            number: this.state.number,
        }
        console.log(' EXERCISES ', exercises);

        axios.post('http://192.168.43.129:5000/exercises/add', exercises)
            .then(res => console.log(res.data))
    } 

    render() {
        return (
        <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <Container style={styles.container}>
            <View>
                  <Text style={styles.judul}> 
                    PROFILE
                  </Text>
                </View>
                <Content>
                    <Form>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='Name'
                                onChangeText={name =>
                                    this.setState({ name: name })
                                }
                                value={this.state.name}
                            />
                        </Item>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='Address'
                                onChangeText={address =>
                                    this.setState({ address: address })
                                }
                                value={this.state.address}
                            />
                        </Item>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='Date of Birth'
                                onChangeText={date =>
                                    this.setState({ date: date })
                                }
                                value={this.state.date}
                            />
                        </Item>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='E-mail'
                                onChangeText={email =>
                                    this.setState({ email: email })
                                }
                                value={this.state.email}
                            />
                        </Item>
                        <Item rounded style={styles.atas}>
                            <Input style={styles.input}
                                placeholder='Number/Telp'
                                onChangeText={number =>
                                    this.setState({ number: number })
                                }
                                value={this.state.number}
                            />
                        </Item>

                    </Form>
                    <View style={styles.tombol}>
                    <Button full rounded transparent
                        styles={styles.tombol}
                        onPress={() => {
                            this.onSubmit();
                            this.props.navigation.navigate('Read')
                        }}>
                        <Text style={styles.text}>SUBMIT</Text>
                    </Button>
                    </View>
                    <View style={styles.tombol}>
                    <Button full rounded transparent
                        styles={styles.tombol}
                        onPress={() => { this.props.navigation.navigate('Read') }} >
                        <Text style={styles.text}>DATA PROFILE</Text>
                    </Button>
                    </View>
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
      backgroundColor: '#a37b48',
      alignContent: 'center',
    },
    judul: {
      marginTop: 20,
      fontSize: 30,
      alignSelf: 'center',
      color: '#fff',
      fontFamily: 'mono'
    },
    atas : {
      backgroundColor : "#fff",
      marginTop : 10, 
      marginLeft: 10, 
      marginRight: 10,
    },
    tombol: {
        backgroundColor: '#442700',
      marginTop : 20, 
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