import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAmount } from "./pages/AmountComponent";

function DonateButton() {
    const { amount } = useAmount();

    return (
        <PayPalScriptProvider
            options={{
                "client-id": "AbvlNtN_1eH_Z2h_4_cxHh4md93zISrmICfiQDdp6maSPrFaaGSE7dg-5htB-imH3LlqqlRPV96awNEs", // Live client ID
                "intent": "capture",
                "currency": "USD"  // No 'env' needed
            }}
        >
            <PayPalButtons
                createOrder={(data, actions) => {
                    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
                        alert("Please enter a valid donation amount.");
                        return;
                    }

                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount.toFixed(2),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert(`Thank you for your donation, ${details.payer.name.given_name}!`);
                    });
                }}
                onError={(err) => {
                    console.error("PayPal error:", err);
                    alert("An error occurred during the payment process. Please try again.");
                }}
            />
        </PayPalScriptProvider>
    );
}

export default DonateButton;
