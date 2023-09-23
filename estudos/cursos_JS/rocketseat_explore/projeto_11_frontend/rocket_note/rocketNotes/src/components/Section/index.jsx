import {Component} from './stely'

export function Section({title, children}) {
    return(
        <Component>
            <h2>{title}</h2>
            {children}
        </Component>
    )
}