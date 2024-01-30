import styled from "styled-components";
import { ProjectsContainer } from "../../components/Container/Container.styled";


export const AboutContainer = styled(ProjectsContainer)`
    padding-left: 50px;
    padding-right: 50px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 24px;
    line-height: 1.5;
    margin-top: 24px;

& > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    & div {
        margin-top: 24px;
    }
}
`;