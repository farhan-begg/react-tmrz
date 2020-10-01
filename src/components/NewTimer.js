import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './NewTimer.css'

import { addTimer } from '../actions'

export default function NewTimer() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    return (
        <div className="NewTimer">
            <input
                type='text'
                placeholder="New Timer Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => dispatch(addTimer(name))}
            >Save</button>
        </div>
    )
}