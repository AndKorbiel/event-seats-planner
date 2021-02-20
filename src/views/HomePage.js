import { connect } from 'react-redux';

function HomePage(props) {
    return (
        <div>
            <h1>Hello from home page!</h1>
            <h2>{props.testValue}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        testValue: state.value
    }
}

export default HomePage = connect(mapStateToProps, null)(HomePage);
