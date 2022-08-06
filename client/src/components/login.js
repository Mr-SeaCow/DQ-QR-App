import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class LoginForm extends Component {

    state = {
        loading: false,
        data: {
            email: '',
            password: ''
        },
        errors: {
            emailError: false,
            passwordError: false
        },
        submittedEmail: '',
        submittedPassword: '',
    }

    handleChange = (e, { name, value }) => this.setState({ data: { ...this.state.data, [name]: value } })

    handleSubmit = (e) => {
        const { email, password } = this.state.data;
        const validEmail = this.validateEmail();
        const validPassword = this.validatePassword();

        this.setState({errors: {emailError: !validEmail, passwordError: !validPassword}})

        if (!validEmail || !validPassword) {
            e.preventDefault();
            return;
        }

        this.setState({ loading: true, submittedEmail: email, submittedPassword: password });
    }

    validateEmail() {
        const reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!reg.test(this.state.data.email)) {
            this.setState({ errors: {...this.state.errors, emailError: true }});
            return false;
        }
        this.setState({ errors: {...this.state.errors, emailError: false }});
        return true
    }

    validatePassword() {
        console.log(this.state.data.password.length )
        if (this.state.data.password.length === 0) {
            this.setState({ errors: {...this.state.errors, passwordError: true }});
            console.log("Invalid password.");
            return false;
        }
        this.setState({ errors: {...this.state.errors, passwordError: false }});
        return true
    }

    render() {
        const { data, errors } = this.state

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log-in to your account
                  </Header>
                    <Form size='large' loading={this.state.loading}>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                name='email'
                                value={data.email}
                                onChange={this.handleChange}
                                error={errors.emailError ? {
                                    content: 'Please enter a valid email address.',
                                    pointing: 'below'
                                } : false}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={data.password}
                                onChange={this.handleChange}
                                error={errors.passwordError ? {
                                    content: 'Please enter a password.',
                                    pointing: 'below'
                                } : false}
                            />
                            <input type="submit" value="Login" content='login' class="ui button fluid large teal" onClick={this.handleSubmit} />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }


}

export default LoginForm