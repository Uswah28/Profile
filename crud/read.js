import React, {
  Component,
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
  } from 'react-native';

  import {Header, Content, CardItem, Card, Container} from 'native-base';

  import axios from 'axios';
  import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

export default class Read extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: [],
        modalVisible: false,
      }
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  getData() {
    axios.get('http://192.168.43.129:5000/exercises/')
        .then(Response => {
            const name = Response.data;
            this.setState({ name: name })
            console.log(name)
        })
        .catch((Error) => {
            console.log(Error);
        })
}

componentDidUpdate() {
    this.getData()
}

  componentDidMount(){
    this.getData();
     axios.get('http://192.168.43.129:5000/exercises/')
     .then(Response => {
         const name = Response.data;
         this.setState({name})
         console.log(name)
     })
     .catch((Error) => {
         console.log(Error);
     })
 }

 //key = (item, index) => index.toString()
  createTwoButtonAlert(id, name, address, date, email, number) {
      Alert.alert(
          "What will you do?",
          "Select Action",
          [
              {
                  text: "Cancel",
                  onPress: () => console.log("Ask me later pressed")
              },
              {
                  text: "EDIT",
                  onPress: () => {
                      this.props.navigation.navigate('Update', { ID: id, NAME: name, ADDRESS: address, DATE: date, EMAIL: email, NUMBER: number});
                  },
                  style: "cancel"
              },
              {
                  text: "DELETE", onPress: () => {
                      axios.delete(`http://192.168.43.129:5000/exercises/${id}`).then(res => console.log(res.data));
                      this.getData()
                  }
              }
          ],
          { cancelable: false }
      );
  }

  render() {

      return (
        <Container style={styles.container}>
        <View>
              <Header style={styles.header}>
                  <Text style={styles.textHeader}>DATA PROFILE </Text>
                </Header>
              <FlatList
                  keyExtractor={(item) => item.id}
                  data={this.state.name}
                  renderItem={({ item }) => (
                      <TouchableHighlight
                          onPress={() => {
                              console.log(item._id);
                              this.createTwoButtonAlert(item._id, item.name, item.address, item.date, item.email, item.number)
                          }}
                          style={styles.rowFront}>
                          <Content>
                              <Card>
                                  <CardItem>
                                      <Text>{item.name}{"\n"}{item.address}{"\n"}{item.date}{"\n"}{item.email}{"\n"}{item.number}</Text>
                                  </CardItem>
                              </Card>
                          </Content>
                      </TouchableHighlight>
                  )}
              />
          </View>
          </Container>
      );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#724f1e',
      alignItems: 'stretch'
    },
    header: {
      alignContent: 'center',
      backgroundColor: '#442700'
    },
    rowFront: {
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        height: 100,
    },
    textHeader: {
      alignSelf: 'center',
      fontSize: 20,
      color: '#fff',
      fontFamily: 'mono'
    },
  });