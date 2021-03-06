import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { themeColors } from '../styles/variables'

const Header = styled.section`
    padding: 0.5em;
    background: #fff;
    color: ${themeColors.headgins};
    font-size: 28px;
    font-weight: lighter;
`;

export function PageHeader(Props) {
    return (
        <Container maxWidth={false} disableGutters>
            <Header>
                <h1>{Props.title}</h1>
            </Header>
        </Container>
    )
}