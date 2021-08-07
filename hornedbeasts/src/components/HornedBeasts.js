import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';



class HornedBeasts extends React.Component {
    constructor(props){
                super(props);
                this.state = {
                    numOfclicks : 0
                }
            }
            
              incremenclicks = () => {
                this.setState({
                    numOfclicks: this.state.numOfclicks + 1
                })
              };
          

    getData = () => {
        this.props.handleData (this.props.title, this.props.imgUrl, this.props.description, true  );
    };




    render() {
        return (
            <>


                {
                    
                        <Card  onClick={this.incremenclicks} style={{ width: "18rem", height: "30rem" }}>
                            <Card.Img onClick={this.getData}  variant="top" src={this.props.imgUrl} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                Number of Likes 🦄 {this.state.numOfclicks}
                                </Card.Text>
                                <Card.Footer>
                                    {this.props.description}
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    
                }








            </>
        )
    }
}

export default HornedBeasts;