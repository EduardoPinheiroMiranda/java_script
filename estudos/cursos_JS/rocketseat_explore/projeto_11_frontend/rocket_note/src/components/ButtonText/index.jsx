import {Component} from './style'

export function ButtonText({title, isActived, ...rest}){
    return(
        <Component 
        type="button" 
        {...rest} 
        isActived = {isActived}
        >
            {title}
        </Component>
    )
}