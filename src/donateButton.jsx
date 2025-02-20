import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAmount } from "./pages/AmountComponent";

function DonateButton() {
    const { amount, setAmount } = useAmount(); // ✅ Extract amount separately
  return (
    <PayPalScriptProvider options={{ "client-id": "Aal6Yu8ZzIqqY9dkcaOhGrgXs8q-CIh-H4sffz5g3EKcee7jG5tSm8KyVUW7vjFrJ9mVUY34ZHb7A1CQ" }}>
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
