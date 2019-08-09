import React from 'react';
import Axios from 'axios';

export default class DataGrab extends React.Component {
    constructor() {
        super();

    }
    componentDidMount = () => {
        this.fetchData()
    } 
    fetchData = () => {
        Axios.get('http://localhost:5000/api/restricted/data')
        .then(res => {
            console.log(Axios.get); 
        })
            .catch (error => {
                console.log("error", error);
            });
          };

          render() {
              return(
              <div className=''> 
              </div>
        )
        
    }
}
