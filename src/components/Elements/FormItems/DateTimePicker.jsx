import Flatpickr from "react-flatpickr";
import React, { Component } from "react";

import { locale } from 'index.js'
 
import 'flatpickr/dist/flatpickr.css'
 
 
import "flatpickr/dist/l10n/es.js"
import "flatpickr/dist/l10n/fr.js"
import "flatpickr/dist/l10n/de.js"

 
class DateTimePicker extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      date: new Date()
    };
    
    this.handleChange = this.handleChange.bind( this );
    
    this.handleChange(this.state.date);
  }
 
  handleChange(date) {

      this.setState = ({
              date: date
       });

      var event = {
              target : {
                  name : this.props.name,
                  value : date
              }
      };
      
      this.props.onChange(event);
  }

  render() {
    const { date } = this.state;
    return (
      <Flatpickr
      	options={{ locale: locale}}
        data-enable-time
        value={date}
        onChange={array => {
          this.handleChange( array[0] );
        }}
      />
    );
  }
}

export default DateTimePicker;