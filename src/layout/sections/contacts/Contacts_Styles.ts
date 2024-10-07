import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

const Contacts = styled.section`
    ${SectionTitle} {
        letter-spacing: 3px;
    }
`
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
       resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${Theme.colors.secondaryBg};
    border: 1px solid ${Theme.colors.borderColor};
    padding: 7px 15px;

    color: ${Theme.colors.font};
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;

    &::placeholder {
        color: ${Theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.borderColor};;
    }
`

export const S = {
    Contacts,
    Form,
    Field
}