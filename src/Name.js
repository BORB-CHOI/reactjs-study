import React, { Component } from 'react';

class Name extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <div>안녕하세요! "{this.state.name}"님의 to-do-list입니다</div>
            </form>
        );
    }
}

export default Name;