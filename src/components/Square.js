import React from 'react'

const Square = ({value, onClick, isWinningSquare}) => {
    // console.log("sqaure re-rendered")
    return( 
        <button type="button"  onClick={onClick} className={` square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`} >
        { value }
        </button>
    )
}

export default Square

/*
Notes:
const Square = (props) => {
    return <button type="button">{props.value}</button>
}
after destructing we can write it as above

==========================================================

CHildren key can be written as- here p tag is children
<Square>
    <p>gdyhwijfrmsk</p>
<Square/>
changes in the above code will be :
const Square({value , children})=>{
    return <button type="button">{children}</button>
    In this the children will be rendered and only their value will be seen
}
*/