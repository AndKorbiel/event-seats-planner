import { connect } from 'react-redux';
import { testActionRequest } from '../redux/actions';

function HomePage(props) {
    return (
        <div>
            <h1>Hello from home page!</h1>
            <h2>{props.testValue}</h2>
            <button onClick={props.testFechData}>Click to fetch</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        testValue: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testFechData: () => { dispatch(testActionRequest()) }
    }
}

export default HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
