import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles';
import emailjs from '@emailjs/browser'

export const Contacts: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('Contact form', 'template_ianmyid', form.current, {
                publicKey: 'MAykU9OEqHuX8ooow',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"name"}/>
                    <S.Field required type={"email"} placeholder={"email"} name={"email"}/>
                    <S.Field required type={"tel"} placeholder={"phone"} name={"phone"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required as={"textarea"} placeholder={"message"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

