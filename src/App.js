import React, {Component} from 'react';
import './App.css';
import './components/UserOutput'
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput"

class App extends Component {
    state = {
        username: "test"
    }

    changeUserName(event) {
        console.log(event);
        const newName = event.target.value;
        this.setState({
            username: newName
        })
    }

    render() {
        return (
            <div>
                <UserInput username={this.state.username} changed={(ev) => this.changeUserName(ev)}/>
                <UserOutput username={this.state.username}/>

            </div>
        );
    }
}

export default App;
