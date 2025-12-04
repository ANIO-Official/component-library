import type { ExplainationBoxProps } from "../../types";


export default function ExplainationBox({title, message, children, imageUrl}:ExplainationBoxProps){
    return(
        <div className="text-start">
        <h3 className="text-success">-------{title} Component-------</h3>
            <p >
              {message}
            </p>
            <img src={imageUrl}/><br/>
            {children}
            <br/>
        </div>
    )
}