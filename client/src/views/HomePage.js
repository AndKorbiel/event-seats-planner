import { connect } from 'react-redux';

function HomePage(props) {
    return (
        <div>
            <h1>Hello from home page!</h1>
        </div>
    )
}

export default HomePage = connect(null, null)(HomePage);
