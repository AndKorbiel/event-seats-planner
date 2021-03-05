import GuestListController from '../components/Guest-list-controller';
import GuestInputController from '../components/Guest-input-controller';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {getGuestsRequest} from "../redux/actions";


import styled from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function GuestsListPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                    <button onClick={props.fetchData}>Click to fetch</button>
                    <GuestListController />
                    <GuestInputController />
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(getGuestsRequest())
    }
}

export default connect(null, mapDispatchToProps)(GuestsListPage);