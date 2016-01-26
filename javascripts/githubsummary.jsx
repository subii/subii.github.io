const GITHUB_API = 'https://api.github.com/users/';
var GitHubData = React.createClass({
    getInitialState() {
        return {}
    },
    componentDidMount() {

        $.get(`${GITHUB_API}${this.props.username}`, data => {
            this.setState(data)
        });
    },
    render() {
        return (
            <div>
            <img id='avatar' src={this.state.avatar_url} alt={this.state.name} width='250'/>
            <div id='name'>{this.state.name}</div>
            </div>
        )
    }
});

ReactDOM.render(<GitHubData username='subeeshcbabu' />, document.getElementById('github'));
