import React, { Component } from 'react'

export class Formhandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }
    handleusername=event=>{
this.setState({[event.target.name]:event.target.value});
    }
    handlesubmit=(event)=>{
        alert(`sucessfully submitted data`);
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container" >
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleusername}/>
                    </div>   
                    <div>
                        <label>comments</label>
                        <input type="text" name="comments" value={this.state.comments} onChange={this.handleusername}/>
                     </div>
                        <div>
                        <label>Topic</label>
                        <select name="topic" value={this.state.topic} onChange={this.handleusername}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="Java">Java</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Formhandling
