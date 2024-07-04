import { useEffect, useState } from "react";



const FormComponent = () => {
    const [errorMessage, setError] = useState('');
    const [successMessage, setSuccess] = useState('');

    const handleSubmit = () => {
        console.log("handlesubmit")
        if (errorMessage.length > 0) {
            console.log("Valid form");
            // do submission here
            setSuccess("Successfully submitted");
        } else {
            console.log("Invalid form");
        }
    }

    const validateInput = (e: any) => {
        let invalidList = ["yes", "no", "i don't know", "idk", "i dont know", "that's fine", "thats fine"];
        if (invalidList.includes(e.target.value.toLowerCase())) {
            setError("Invalid value");
        } else if (e.target.value.length < 1) {
            setError("Please enter a value");
        } else {
            setError('');
            console.log("Valid value");
        }
    }

    return (
        <form>
            <div>
                <label>Is a hotdog a sandwich?</label>
                <input 
                    type="text" 
                    id="answer"
                    name="answer" 
                    required
                    onBlur={validateInput}
                />
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            </div>
            <button 
                type="submit"
                onClick={handleSubmit}
                disabled={!!errorMessage}
            >Submit</button>
            {successMessage && <p>{successMessage}</p>}
        </form>
    );
}

export default FormComponent;