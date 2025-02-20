import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAmount } from "./pages/AmountComponent";


// this is gonna load the client id from the env file.

function DonateButton() {
    const { amount, setAmount } = useAmount(); // ✅ Extract amount separately
  return (
    <PayPalScriptProvider options={{ "client-id": "AUvlRciDFcuw_d73Zl3baFuSXWus_lRnVsvaRSJvOAuOKZeJyE4bYGXOtml__qQJbsNDhY216uw24b6f" }}>
      <PayPalButtons 
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                value: amount.toString(),// Set donation amount
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
      />
    </PayPalScriptProvider>
  );
}

export default DonateButton;
