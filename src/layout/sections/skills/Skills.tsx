import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import { SectionTitle } from '../../../components/SectionTitle';
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styled';
import  {Fade}  from "react-awesome-reveal";

const skillData = [
    {
        iconId: "code",
        title: "Our Story",
        description: "We started Intelli-Flow in 2020 with the goal of creating innovative software solutions that make people's lives easier. Since then, we've grown into a team of 50 employees and have worked with clients from around the world."
    },
    {
        iconId: "css",
        title: "Our Technology",
        description: "We use the latest technology and tools to develop software solutions that are fast, reliable, and scalable. Our expertise includes cloud computing and artificial intelligence."
    },
    {
        iconId: "react",
        title: "Our Approach",
        description: "We work closely with our clients to understand their unique needs and develop customized solutions that meet those needs. Our agile development process ensures that our clients are involved every step of the way."
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>Our Company</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} direction={"down"}>
                        {skillData.map((s, index)=> {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          description={s.description}/>
                        })}
                    </Fade>
                    </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

