/** @jsx React.DOM */
var MessageBox = React.createClass({
    getInitialState: function() {
        return {userInput: ''};
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var text = React.findDOMNode(this.refs.text).value.trim();
        console.log(text);
    },

    handleChange: function(e) {
        this.setState({userInput: e.target.value});
    },

    tick: function(){
        var msg = 'test msg';
        this.setState({userInput: msg});
    },

    render: function () {
        if (!this.timer) {
            this.timer = setInterval(this.tick, 5000);
        } 

        return (
            <div className="input__container">
                <form className="input__form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="text" value={this.state.userInput} onChange={this.handleChange} />
                    <button type="submit" className="input__button" onClick={this.handleAdd}>Send</button>
                </form>
            </div>
        );
    }
});


var reactComponent = React.render(
    <MessageBox />,
    document.getElementById('input')
);