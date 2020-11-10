/* The instructions are:

OK - Create TWO new components: UserInput and UserOutput
OK - UserInput should hold an input element, UserOutput two paragraphs
OK - Output multiple UserOutput components in the App component (any paragraph texts of your choice)
OK - Pass a username (of your choice) to UserOutput via props and display it there
OK - Add state to the App component (=> the username) and pass the username to the UserOutput component
OK - Add a method to manipulate the state (=> an event-handler method)
OK - Pass the event-handler method reference to the UserInput component and bind it to the input-change event
OK - Ensure that the new input entered by the user overwrites the old username passed to UserOutput
OK - Add two-way-binding to your input (in UserInput) to also display the starting username
Ok - Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets */

import React, {Component} from 'react';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class Challenge01 extends Component {

   state = {
      username: [
         {name: 'Fulano-01'},
         {name: 'Fulano-02'},
         {name: 'Fulano-03'}
      ],
   };

   manipulatedNameInState = event => {
      this.setState({
         username: [
            {name: event.target.value},
            {name: event.target.value},
            {name: event.target.value}
         ],
      });
   };

   render() {
      return(
         <div>
            <UserInput 
               value={this.state.username[0].name} 
               type="text" 
               changed={this.manipulatedNameInState} 
            />

            <UserOutput name={this.state.username[0].name} />
            <UserOutput name={this.state.username[1].name} />
            <UserOutput name={this.state.username[2].name} />
         </div>
      );
   };
}

export default Challenge01;