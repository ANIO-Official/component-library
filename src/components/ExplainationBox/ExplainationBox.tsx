import type { ExplainationBoxProps } from "../../types";


export default function ExplainationBox({title, message, children, imageUrl}:ExplainationBoxProps){
    return(
        <>
        <h3>{title} Component</h3>
            <p>
              {message}
            </p>
            <img src={imageUrl}/><br/>
            {children}
            <br/>
        </>
    )
}