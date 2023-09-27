import { Conatiner } from './style'

import { BsPlusCircle, BsXCircle} from 'react-icons/bs'

export function Noteitem({isNew, value, onClick, ...rest}){
    return(
        <Conatiner isNew = {isNew}>
            <input 
                type = 'text'
                value = {value}
                readOnly = {!isNew}
                {...rest}
            />

            <button
                type='button'
                className={isNew ? 'button_add' : 'button_delit'}
                onClick={onClick}
            >
                {isNew ? <BsPlusCircle/> : <BsXCircle/>}
            </button>
        </Conatiner>

    )

}