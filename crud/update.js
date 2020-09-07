import React, { Component } from './node_modules/react';
import { Container, Header, Content, Text, Title, Left, Right, 
  Button, Icon, Body, Form, Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header span>
          <Body>
            <Title style={{alignSelf:'center'}}>PROFILE</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Address</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Religion</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Date of Birth</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Number/Telp</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nationality</Label>
              <Input />
            </Item>
            <Button full rounded style={{alignSelf:'center', marginTop:30, marginLeft:10, marginRight:10}}>
            <Text>Update</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}