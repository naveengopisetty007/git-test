import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader } from 'reactstrap';

class DishDetail extends Component {

    render() {        
        const dish = this.props.dd;        

        if (dish != null && dish.comments != null) {
            
            const cc = dish.comments.map((comment) => {
                return (
                    <div>{comment.comment} <br/>
                        -- {comment.author}
                        {comment.date}
                        <br/>
                    </div>            
                );
            });
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>                    
                    <div className="col-12 col-md-5 m-1">
                        <h2>Comments</h2>
                        {cc}
                    </div>
                </div>

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;