// what displays on the home screen?
import React from 'react'

export default function Home(props) {
    document.title = 'EBNZR | ' + props.title
    return (
        <div>Home</div>
    )
}
