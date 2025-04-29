import "./Modal.css"
export default function Modal({isVisible, errorMessage=null}){
    if(isVisible){
        return(
            <div className="Parent">
                <div className="modal">
                    <h1 style={{color: errorMessage ? "red" : "green"}}>{errorMessage != null ? errorMessage : "The form has been submitted successfully"}</h1>
                </div>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
}