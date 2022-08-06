import React, { Component } from "react";
import "./App.css";
import MenuRender from "./components/menuRender";
import { Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            loadingMessage: "Loading",
            activeIndex: 0
        };
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

s
    callAPI(storeID) {
        fetch(`http://alr-menu.com/api/menu?storeID=${storeID}`)
            .then(res => res.text())
            .then((res) => {
                if (res === "404")
                    this.setState({ loadingMessage: "404 - Page Not Found" });
                else 
                    this.setState({ apiResponse: JSON.parse(res) });
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI(this.props.match.params.storeid);
    }

    render() {
        return (this.state.apiResponse !== "" ?
            <div className="App">
                <Header textAlign="center" size="huge" dividing>{this.state.apiResponse.storeName}</Header>
                <MenuRender apiResponse={this.state.apiResponse}/>
            </div> : <h1> {this.state.loadingMessage} </h1>
        );
    }
}

export default withRouter(App);