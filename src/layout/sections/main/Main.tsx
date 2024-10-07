import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"center"}>
                    <div>
                        <S.Name>Empower Your Business with Intelligent Workflow Solutions</S.Name>
                        <S.MainTitle>
                            <Typewriter
                                options={{
                                    strings: ['Discover innovative software solutions for your business needs.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


