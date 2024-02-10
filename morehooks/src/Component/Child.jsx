import React from 'react'

function Child({ post, dispatch }) {
    return (
        <div style={{ backgroundColor: 'purple', width: "70vw", height: "10vw", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", marginTop: "10px" }}>
            <span style={{ marginRight: "100px" }}>{post.toggle ? post.name : "This content is hidden "}</span>
            <button style={{ backgroundColor: "gray" }} onClick={() => dispatch({ type: "Toggle", payload: { id: post.id } })}>Toggle</button>
        </div>
    )
}

export default Child