import React, {Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorhandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state={
        orders:[],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json')
             .then(response=>{
                 const fetchedData= [];
                 for(let key in response.data){
                    fetchedData.push({
                        ...response.data[key],
                        id: key
                    });
                 }
                //console.log(fetchedData);
                this.setState({loading: false, orders: fetchedData});
             })
             .catch(error=>{
                this.setState({loading: false});
             });
    }

    render(){
        return(
            <div>
                {this.state.orders.map(order=>(
                    <Order ingredients={order.ingredients}
                           price={order.price}
                           key={order.id} />
                ))}
            </div>
        );
    }
}

export default withErrorhandler(Orders, axios);