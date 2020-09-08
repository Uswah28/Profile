import React, {
    Component
} from 'react';

import {
    Container, Content, Button, Text, Item, Input, Form
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
            <Container>
                <Content>
                    <Form>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                placeholder='Name'
                                onChangeText={name =>
                                    this.setState({ name: name })
                                }
                                value={this.state.name}
                            />
                        </Item>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                placeholder='Address'
                                onChangeText={address =>
                                    this.setState({ address : address })
                                }
                                value={this.state.address}
                            />
                        </Item>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                keyboardType='numeric'
                                placeholder='Date'
                                onChangeText={date =>
                                    this.setState({ date: date })
                                }
                                value={this.state.date}
                            />
                        </Item>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                placeholder='E-mail'
                                onChangeText={email =>
                                    this.setState({ email: email })
                                }
                                value={this.state.email}
                            />
                        </Item>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                keyboardType='numeric'
                                placeholder='Number/Telp'
                                onChangeText={number =>
                                    this.setState({ number: number })
                                }
                                value={this.state.number}
                            />
                        </Item>

                    </Form>
                    <Button rounded success block
                        style={{ marginLeft: 12, marginRight: 12, marginTop: 20 }}
                        onPress={() => {
                            this.onSubmit();
                            this.props.navigation.navigate('Read')
                        }}>
                        <Text>Create</Text>
                    </Button>
                    <Button rounded block
                        style={{ marginLeft: 12, marginRight: 12, marginTop: 20 }}
                        onPress={() => { this.props.navigation.navigate('Read') }} >
                        <Text>Read</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}