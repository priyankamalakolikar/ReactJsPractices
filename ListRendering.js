import React from 'react'

export default function ListRendering() {
    const sname=['priya','ansh','krish']
    const namelist=sname.map(n=><h1>{n}</h1>)
    return (
        <div>
            {namelist}
        </div>
    )
}
