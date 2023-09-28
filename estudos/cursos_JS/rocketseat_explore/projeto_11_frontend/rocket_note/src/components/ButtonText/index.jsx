import {Component} from './style'

export function ButtonText({title, isActive = false, ...rest}){
    return(
        <Component 
            type="button" 
            {...rest} 
            isActive = {isActive}
        >
            {title}
        </Component>
    )
}