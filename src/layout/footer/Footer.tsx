import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';

const socialListData = [
        {
        iconId: "linkedin"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Intelli-Flow</S.Name>
                <S.SocialList>

                    {socialListData.map((s, index)=> {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink href={'https://www.linkedin.com/company/intelli-flow'}>
                                    <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Intelli-Flow, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

