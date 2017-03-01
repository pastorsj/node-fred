import React, { Component } from 'react';
import './App.css';
import api from './api.json';

import { Header, Grid, Table, Icon, Segment, List, Container } from 'semantic-ui-react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api: api,
            searchApi: api
        };
    }

    render() {
        return (
            <Container>
                <Header as='h2' textAlign='center' icon>
                    <Icon name='database' circular/>
                    {api.title}
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Segment raised fluid>
                                <List>
                                    {
                                        api && api.routes && Object.keys(api.routes).map((key, index) => {
                                            return (
                                                <List.Item href={'#' + key} key={index}>{key}</List.Item>
                                            );
                                        })
                                    }
                                </List>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            {
                                api && api.routes && Object.keys(api.routes).map((key, index) => {
                                    const route = api.routes[key];

                                    return (
                                        <Segment id={key} key={index} raised>
                                            <Header as='h1'>{key}</Header>
                                            <Header as='h3'>{route.method}</Header>
                                            <Header as='h4'>{route.description}</Header>
                                            <Header as='h3'>Parameters</Header>
                                            <Table celled padded stackable collapsing>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell>Route</Table.HeaderCell>
                                                        <Table.HeaderCell>Description</Table.HeaderCell>
                                                        <Table.HeaderCell>Type</Table.HeaderCell>
                                                        <Table.HeaderCell>Default Value</Table.HeaderCell>
                                                        <Table.HeaderCell>Required?</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {
                                                        Object.keys(route.parameters).map((parameter, index2) => {
                                                            return (
                                                                <Table.Row key={index2}>
                                                                    <Table.Cell color='green'>
                                                                        {parameter}
                                                                    </Table.Cell>
                                                                    <Table.Cell>
                                                                        {route.parameters[parameter].description}
                                                                    </Table.Cell>
                                                                    <Table.Cell>
                                                                        {route.parameters[parameter].type}
                                                                    </Table.Cell>
                                                                    <Table.Cell>
                                                                        {route.parameters[parameter].default}
                                                                    </Table.Cell>
                                                                    <Table.Cell textAlign='center' verticalAlign='middle'>
                                                                        {route.parameters[parameter].required ? (<Icon name='check' circular size='small' />) : (<Icon name='remove' circular size='small' />)}
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                            );
                                                        })
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </Segment>
                                    );
                                })
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default App;
