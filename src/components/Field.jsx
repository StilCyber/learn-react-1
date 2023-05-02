import { useState } from 'react';
import '../styles/Field.css';

const Field = () => {

    const [value, setValue] = useState('Введите текст')

    return (
        <div className='field'>
            <div className='field__text'>Поле ввода</div>
            <h2>{value}</h2>
            <input type="text" className='field__input' value={value} onChange={event => setValue(event.target.value)}></input>
        </div>
    )
}

export default Field;