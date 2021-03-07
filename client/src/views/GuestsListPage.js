import GuestListController from '../components/Guest-list-controller';
import GuestInputController from '../components/Guest-input-controller';
import { connect } from 'react-redux';
import { getGuestsRequest } from "../redux/actions";
import { PageHeader } from '../components/PageHeader'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useEffect } from 'react';

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

    useEffect(() => {
        props.fetchData()
    }, [])

    return (
        <div className={classes.root}>
            <PageHeader title="Guests list" />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
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