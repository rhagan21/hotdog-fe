import { useEffect, useState } from "react";



const FormComponent = () => {
    const [errorMessage, setError] = useState('');
    const [successMessage, setSuccess] = useState('');
    const [answer, setAnswer] = useState('');

    const addAnswer = async (answer: string) => {
        try {
            const response = await fetch('http://localhost:3000/api/answers', {
                method: 'POST',
                body: JSON.stringify({
                    "answer": {
                        "entry": answer
                    }    
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error);
                throw new Error(errorData.error);
            }
    
            const data = await response.json();
            setSuccess("Successfully submitted!");
            return true;
        } catch (error) {
            setError(error.message);
            return false;
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addAnswer(answer)
    }

    const validateInput = (answer: string) => {
        setSuccess('');
        setAnswer(answer);
        let invalidList = ["yes", "no", "i don't know", "idk", "i dont know", "that's fine", "thats fine"];
        if (invalidList.includes(answer.toLowerCase())) {
            setError("Invalid value");
        } else if (answer.length < 1) {
            setError("Please enter a value");
        } else {
            setError('');
        }
    }

    return (
        <form >
            <div>
                <label>Is a hotdog a sandwich? Why or why not? </label>
                <input 
                    type="text" 
                    id="answer"
                    name="answer" 
                    required
                    onChange={(e) => validateInput(e.target.value)}
                />
                <div className="messageContainer">
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </div>
            </div>
            <button 
                type="submit"
                onClick={handleSubmit}
                disabled={errorMessage.length > 0}
            >Submit</button>
            <div className="messageContainer">
                {successMessage && <p className="success">{successMessage}</p>}
            </div>
        </form>
    );
}

export default FormComponent;