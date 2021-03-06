import React, { Component, PropTypes } from "react";

export default class Input extends Component {
    constructor(props, context) {
        super(props, context);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = { value: props.value };
    }

    static propTypes = {
        type: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
        onBlurChange: PropTypes.func
    };

    static defaultProps = {
        type: "text"
    };

    componentWillReceiveProps(newProps) {
        this.setState({ value: newProps.value });
    }

    onChange(event) {
        this.setState({ value:  event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    onBlur(event) {
        if (this.props.onBlurChange && (this.props.value || "") !== event.target.value) {
            this.props.onBlurChange(event);
        }
    }

    render() {
        return <input {...this.props} value={this.state.value} onBlur={this.onBlur} onChange={this.onChange} />
    }
}
