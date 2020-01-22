import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'


class App extends Component {

    onChange = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            console.log(event.target.result)
        };
        reader.readAsText(file);
    }

    render() {

        return (

            <div className="content" >
                <h1>Helpp Flow Consulting</h1>
                <div className="file">
                    <input type="file" accept=".xml" onChange={e =>
                        this.onChange(e)} />
                        <button>enviar</button>
                </div>
            </ div >

        )
    }
}
export default App;