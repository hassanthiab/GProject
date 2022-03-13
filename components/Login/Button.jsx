import React from 'react';
import styled from 'styled-components';
export default function({nameButton})
{
    return <StyledButton>{nameButton}</StyledButton>;
}

const StyledButton = styled.button`
    
background: #2196f3;
text-transform: uppercase ;
letter-spacing: 0.15rem;
box-shadow: 0 8px 32px 0 rgba (31,38,135, 0.37);
border-radius: 2rem;
width: 80%;
height: 3rem;
padding: 1rem;
border:none;
color:white;
outline:none;
cursor: pointer;

&:hover
    {
        transition: all 0.2s ease-in-out ;
        background: #fff;
        color: #010606;

    }
`;