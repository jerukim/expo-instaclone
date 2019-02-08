import React, { Component } from 'react';
import { Text, SafeAreaView, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { auth } from '../../store';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      username: '',
      password: '',
    };
  }

  handleSubmit = async () => {
    const { email, name, username, password } = this.state;
    const { navigate } = this.props.navigation;
    const { user } = await this.props.auth(email, name, username, password);

    if (user.id) navigate('App');
  };

  render() {
    const { navigate } = this.props.navigation;
    const { email, username } = this.state;
    const defaultUsername = email.slice(0, email.indexOf('@') || email.length);
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 40, textAlign: 'center' }}>Instagram</Text>
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          // onEndEditing={() => console.log('end editing')}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Name"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />

        <Button onPress={this.handleSubmit} title="Sign up" />

        <Text style={{ textAlign: 'center' }}>
          <Text>Already have an account? </Text>
          <Text
            style={{ color: 'rgb(45, 130, 236)' }}
            onPress={() => navigate('Login')}
          >
            Sign In.
          </Text>
        </Text>
      </SafeAreaView>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  auth: (email, name, username, password) =>
    dispatch(auth('signup', username, password, email, name)),
});

export default connect(
  mapState,
  mapDispatch
)(Signup);
