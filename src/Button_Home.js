import React from 'react';
import { Button } from 'reactstrap';
import { FaHome } from 'react-icons/fa';

class Button_Home extends React.Component {
    render() {
        return (
            <div>
                <Button className="Button-Home">
                    <b> < FaHome /> </b></Button>{' '}

            </div>
        );
    }
}

export default Button_Home;