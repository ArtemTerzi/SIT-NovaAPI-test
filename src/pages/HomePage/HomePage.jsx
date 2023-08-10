import DevInfo from "components/DevInfo";
import { AboutDeveloper, AdditionalInfo, Home, TS } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Home>
      <AdditionalInfo>
        <AboutDeveloper>
          <DevInfo />
        </AboutDeveloper>
        <b>
          <i>
            Welcome! <br />
            Here you will see the result of the test task. <br />
          </i>
        </b>
        <TS>
          <b>FUNCTIONAL REQUIREMENTS:</b> <br />
          <span style={{ fontSize: 16 }}>
            <b>1)</b> The user enters the TTN number or his invoice number in
            the input field on the page.
            <br />
            <b>2)</b> The application sends a request to receive data on the
            current status of the place of delivery of the goods.
            <br />
            <b>3)</b> We display information about the shipment to the user.{" "}
            <br />
            <b>4)</b> The user must see all previous TTN numbers in the form of
            a list in the sitebar. Even after reloading the page. <br />
            <b>5)</b> By clicking on the TTN number already added to the entered
            list, a request for the status of finding the product (delivery)
            should be automatically performed and the corresponding information
            displayed. In this case, the TTN number should be automatically
            displayed in the input field. <br />
            <b>6)</b> The TTN number of the invoice must be checked when
            entering it for correctness. Or by means of comparing each character
            with the required encoding range or regular expression. <br />
            <b>7)</b> It should be possible to clear all old TTN. <br />
            <b>8)</b> If the format is incorrect, after pressing the button to
            get the delivery status of the TTN, a prompt must be shown and the
            request should not be sent. <br />
            <b>9)</b> By going to the second tab, the user should be able to see
            a list of Nova Poshta branches, for which you need to make an
            appropriate request to the Nova Poshta API and display them as a
            list at your discretion.
          </span>
        </TS>
      </AdditionalInfo>
    </Home>
  );
};

export default HomePage;
