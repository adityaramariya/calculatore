import { useState } from "react";


function Button({ value, getButtonValue }) {
    const [initialValue, setValue] = useState(value);
    
    return (
        <button
            type="button"
            value={initialValue}
            onClick={getButtonValue}
        >
            {initialValue}
        </button>
    )
}

export default Button;