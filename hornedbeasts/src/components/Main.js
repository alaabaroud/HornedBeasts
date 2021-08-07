
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row,Container } from "react-bootstrap";
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            HornsNumber:0,
          
        }
    }
    
    event = (event) => {
        event.preventDefault();
        this.setState({
            HornsNumber: parseInt(event.target.value) 
        })
         
          
    }
    render() {
        return (
            <>
            <Form>
            <Form.Group>
    <Form.Label>Select Number of Horns</Form.Label>
    <Form.Control onChange= {this.event} as='select' name='HornsNumber'>
        <option value= {0} >All</option>
        <option value= {1} >one</option>
        <option value={2}>two</option>
        <option value={3}>three</option>
        <option value={100}>Hundred</option>
    </Form.Control>
</Form.Group>

</Form>
            <Container>
            <Row>
                {this.props.data.filter((element) => {
           if (this.state.HornsNumber===0)
           return true;
           else 
           return this.state.HornsNumber===element.horns
                           }).map((item, index) => {
                    return (
                        <Col lg={4}>
                            
                            <HornedBeasts
                             title={item.title}
                              imgUrl={item.image_url}
                               description={item.description}
                                 handleData = {this.props.handleData} />
                        </Col>
                    )

                }
                )}


</Row>
</Container>
            </>
        )
    }
}

export default Main;
