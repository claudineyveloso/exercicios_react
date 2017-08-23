import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName=" Veloso">
        <Member name='Claudiney'/>
        <Member name='Rafael'/>
        <Member name='Jose'/>
    </Family>
    , document.getElementById('app')
)
