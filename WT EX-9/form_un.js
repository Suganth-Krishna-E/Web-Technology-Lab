import React from 'react';

class Uncontrolled extends React.Component{
constructor(props)
{
    super(props);
    this.updateSubmit=this.updateSubmit.bind(this);
    this.input=React.createRef();

}
updateSubmit(event)
{
    alert("Your details are saved....");
    event.preventDefault();
}
render ()
{
    return (

        <form onSubmit={this.updateSubmit}>
            <h1>College Details</h1>
            <label>NAME:</label>
            <input type="text" ref={this.input}/><br/>
            <label>COLLEGE:</label> 
            <input type="text" ref={this.input}  /><br />
            <input type="submit" value="submit"/>
         </form>  

	 );
    }
}

export default Uncontrolled;