import { Component } from "./stely";

export function Tag({title, ...rest}){
    return(
        <Component {...rest}>
            {title}
        </Component>
    )
}