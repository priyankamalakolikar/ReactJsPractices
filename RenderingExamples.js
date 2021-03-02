import React, { Component } from 'react'

export class RenderingExamples extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // if(this.state.isLoggedIn)
        // return (
        //     <div>
        //         Welcome 
        //     </div>
        // )
        // else{
        //     return (
        //         <div>
        //            sorry
        //         </div>
        //     ) 
        // }

        //using turnaryoperator
        // return(
        //     this.state.isLoggedIn?<div>Welcome</div>:<div>sorry</div>
        // )

        //using shortcircuit and operator
        return this.state.isLoggedIn && <div>welcome all</div>
    }
}

export default RenderingExamples
