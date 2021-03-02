import React, { Component } from 'react'

export class InputRefs extends Component {
    constructor(props) {
        super(props)
    
        
             this.inputRef=React.createRef()
        
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div className="ui container">
                 <div>
                     <label>uname:</label>
                  <input  type="text" ref={this.inputRef}/>
                 </div>
               <div>
                   <label>psw:</label>
               <input  type="text"/>
               </div>
              <button type="submit">Submit</button>
            </div>
            
        )
    }
}

export default InputRefs
