import React, { Component } from 'react';

class Form extends Component {
    state = { 
        amount: '',
        term: ''
     }

    handleSumbit = (e) => {
        e.preventDefault();

        // Read the value from the state
        const {amount, term} = this.state;

        // pass the data to the main component
        this.props.loanInformation(amount, term);
    }

    handleChange = (e) => {
        // Read form data
        const { name, value } = e.target;

        // Update the state
        this.setState({
            [name] : Number(value)
        })
    }

    validateForm = () => {
        // destructuring
        const {amount, term} = this.state;

        const notValid = !amount || !term;

        return notValid;
    }


    render() { 

        // Extract some contents from the state
        // const {amount} = this.state;

        return ( 
            <form onSubmit={this.handleSumbit}>
                <div>
                    <label>Lånebeløp</label>
                    <input 
                        onChange={this.handleChange}
                        name="amount" 
                        className="u-full-width" 
                        type="number" 
                        placeholder="For eks. 5000" />
                </div>
                <div>
                    <label>Nedbetalingstid</label>
                    <select 
                        onChange={this.handleChange}
                        name="term" 
                        className="u-full-width">
                        <option value="">Velg</option>
                        <option value="3">3 måneder</option>
                        <option value="6">6 måneder</option>
                        <option value="12">12 måneder</option>
                        <option value="24">24 måneder</option>
                    </select>
                </div>
                <div>
                    <input 
                        disabled={this.validateForm()}
                        type="submit" 
                        value="Beregn" 
                        className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default Form;