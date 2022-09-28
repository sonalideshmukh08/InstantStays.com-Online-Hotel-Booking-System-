import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    margin-top: 20px;
    display: grid;
    align-items: center;
    padding: 10px;
    p{
      text-align: center;
      margin: 0 !important;
      font-weight: bold
    }
    p:first-child{
      text-align: left
    }
`;


const ListHeader = ({ list }) => {
    return (
        <Header style={{gridTemplateColumns: `repeat(${list.length}, 0.5fr)`}}>
            {list.map((l, i) => <p key={i}>{l}</p>)}
        </Header>
    )
}

export default ListHeader
