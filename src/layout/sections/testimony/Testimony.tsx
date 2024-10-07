import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from '../skills/Skills_Styled';

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Welcome to Intelli-Flow</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #464faf;
    
    ${SectionTitle} {
        letter-spacing: 3px;
    }
    
    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`