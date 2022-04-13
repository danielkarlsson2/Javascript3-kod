import { useState, useRef, useEffect } from 'react'

const ChangeItem = ({ item, changeText }) => {

    const [text, setText] = useState(item.product)
    const input = useRef()

    useEffect(() => {
        input.current.focus()
    }, [])

    const handleSub = e => {
        e.preventDefault()
        changeText(text)

    }

  return (
    <form className='Change-item' onSubmit={handleSub}>
        <input type="text" ref={input} value={text} onChange={e => setText(e.target.value)} />
        <button className='btn btn-check'><i className="fa-solid fa-circle-check"></i></button>
    </form>
  )
}

export default ChangeItem