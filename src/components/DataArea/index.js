import React, {Component} from 'react';
import API from '../../utils/api.js'

export default class DataArea extends Component{
    state = {
        users: [{}]
    }

    componentDidMount(){
        API.getUsers().then(results => {
            console.log(results)
            this.setState({
                users: results.data.results
            })
        })
    }
    render() {
        return (
            <h1> DataArea here </h1>
        )
    }
}