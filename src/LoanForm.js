import "./LoanForm.css";
import Modal from "./Modal";
import { useState } from "react";
function LoanForm() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [loanInputs, setLoanInputs] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salaryRange: "",
    });
    function handleDivClick(){
        if(showModal){
            setShowModal(false)
        }
    }
    const btnIsDisabled = loanInputs.name === ""||loanInputs.age === ""||loanInputs.phoneNumber ==="";
    const {age, phoneNumber} = loanInputs
    return (
        <div className={"parent"}
        onClick={handleDivClick}>
            <div className="container">
                <div className={"header"}>
                    <h2 className={"formHeader"}>Requesting a Loan</h2>
                    <p></p>
                </div>
                <form className={"form"}>
                    <div className="name">
                        <label htmlFor="">Name: </label>
                        <input
                            type="text"
                            value={loanInputs.name}
                            onChange={(event) =>
                                setLoanInputs({ ...loanInputs, name: event.target.value })
                            }
                        />
                    </div>
                    <div className="phone">
                        <label>Phone Number: </label>
                        <input
                            type="number"
                            value={loanInputs.phoneNumber}
                            onChange={(event) =>
                                setLoanInputs({
                                    ...loanInputs,
                                    phoneNumber: event.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="age">
                        <label>
                            Age:{" "}
                        </label>
                        <input
                            type="number"
                            value={loanInputs.age}
                            onChange={(event) =>
                                setLoanInputs({ ...loanInputs, age: event.target.value })
                            }
                        />
                    </div>
                    <div className="check">
                        <label htmlFor="">Are you an employee?</label>
                        <input
                            type="checkbox"
                            checked={loanInputs.isEmployee}
                            onChange={(event) => {
                                setLoanInputs({
                                    ...loanInputs,
                                    isEmployee: event.target.checked,
                                });
                            }}
                        />
                    </div>
                    <div className="salary">
                        <label htmlFor="">Salary: </label>
                        <select
                            value={loanInputs.salaryRange}
                            onChange={(event) =>
                                setLoanInputs({
                                    ...loanInputs,
                                    salaryRange: event.target.value,
                                })
                            }
                        >
                            <option value="" disabled>
                                Choose an option
                            </option>
                            <option>less than $500</option>
                            <option>between $500 and $2000</option>
                            <option>above $2000</option>
                        </select>
                    </div>
                    <button disabled={btnIsDisabled} onClick={(event)=>{event.preventDefault();  if(age < 18 || age > 60){setErrorMessage("The age is not allowed")}else if(phoneNumber.length < 10 || phoneNumber.length > 12){setErrorMessage("The phone number format is incorrect")} else{setErrorMessage(null)};setShowModal(true)}} className={btnIsDisabled? "disabled" : ""}>Submit</button>
                </form>
                <Modal isVisible={showModal} errorMessage={errorMessage}/>
            </div>
        </div>
    );
}
export default LoanForm;
