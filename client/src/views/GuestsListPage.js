import GuestListController from '../components/Guest-list-controller';
import GuestInputController from '../components/Guest-input-controller';
import { connect } from 'react-redux';
import { getGuestsRequest } from "../redux/actions";
import { PageHeader } from '../components/PageHeader'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


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
            <PageHeader title="Guests list" />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <button onClick={props.fetchData}>Click to fetch</button>
                        <GuestInputController />
                        <GuestListController />
                        <GuestInputController />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(getGuestsRequest())
    }
}

export default connect(null, mapDispatchToProps)(GuestsListPage);