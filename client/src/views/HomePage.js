import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { PageHeader } from '../components/PageHeader'

function HomePage(props) {
    return (
        <div>
            <PageHeader title="Hello from home page!"></PageHeader>
            <Container>
                <h2>Here goes the content</h2>
            </Container>
        </div>
    )
}

export default HomePage = connect(null, null)(HomePage);
