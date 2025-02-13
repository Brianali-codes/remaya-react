import { createContext, useContext, useState } from "react";

// Create Context
const AmountContext = createContext();

// Context Provider (Wrap your app with this)
export function AmountProvider({ children }) {
    const [amount, setAmount] = useState(50);

    return (
        <AmountContext.Provider value={{ amount, setAmount }}>
            {children}
        </AmountContext.Provider>
    );
}

// Custom hook to access the state
export function useAmount() {
    return useContext(AmountContext);
}

// The small paragraph component
export function AmountComponent() {
    const { amount } = useAmount();
    return <span>{amount}</span>; // Just displays the amount
}
