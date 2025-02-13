import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAmount } from "./pages/AmountComponent";


// this is gonna load the client id from the env file.

const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

function DonateButton() {
    const { amount, setAmount } = useAmount(); // ✅ Extract amount separately
  return (
    <PayPalScriptProvider options={{ "client-id": paypalClientId  }}>
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
