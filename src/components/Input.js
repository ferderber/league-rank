import React, {Component} from 'react';

import styles from './Input.css';

class Input extends Component {
    render() {
        const {name} = this.props;
        return (<input
            className={styles.input}
            type="text"
            placeholder={name}
            onChange={this.props.onChange}
            name={name}
            value={this.props.value}/>);

    }
}

export default Input;