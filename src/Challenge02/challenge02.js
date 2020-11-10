import React, {Component} from 'react';

import Validation from './components/Validation';
import Char from './components/Char';

class Challenge02 extends Component {

   state = {
      inputValue: '',
   }

   handleLength = event => {
      this.setState({
         inputValue: event.target.value,
      });
   };

   handleRemove = index => {
      const RemoveValue = this.state.inputValue.split('');
      RemoveValue.splice(index, 1);
      this.setState({inputValue: RemoveValue.join('')});
   };

   render() {
      return(
         <div>
            <input onChange={this.handleLength} />
            <p>{this.state.inputValue}</p>
            <Validation length={this.state.inputValue.length} />

            {this.state.inputValue.split('').map((letter, index) => {
               return <Char 
                  clicked={() => this.handleRemove(index)} 
                  key={index} 
                  letter={letter} 
               />
            })}

         </div>
      );
   };
}

export default Challenge02;