import React from "react";
import { 
    CardContainer,
    CardWrapper,
    Img,
    CardH1,
    CardP1,
    CardEmail 
} from "./CardElements";

const CardSection = ({
    id,
    img,
    alt,
    header,
    title,
    p1,
    email
}) => {
    return (
        <>
        <CardContainer id={id}>
            <CardWrapper>
                <Img src={img} alt={alt}></Img>
                <CardH1>{header}</CardH1>
                <CardP1>{title}</CardP1>
                <CardP1>{p1}</CardP1>
                <CardEmail>{email}</CardEmail>
            </CardWrapper>
        </CardContainer>
        </>
    )
}

export default CardSection