###### <div align=center> (README.md) </div>

# <div align=center>Welcome to test task for SIT </div>

## <div align=center>FUNCTIONAL REQUIREMENTS:</div>

- 1. The user enters the TTN number or his invoice number in the input field on the page.
- 2. The application sends a request to receive data on the current status of the place of delivery of the goods.
- 3. We display information about the shipment to the user.
- 4. The user must see all previous TTN numbers in the form of a list in the sitebar. Even after reloading the page.
- 5. By clicking on the TTN number already added to the entered list, a request for the status of finding the product (delivery) should be automatically performed and the corresponding information displayed. In this case, the TTN number should be automatically displayed in the input field.
- 6. The TTN number of the invoice must be checked when entering it for correctness. Or by means of comparing each character with the required encoding range or regular expression.
- 7. It should be possible to clear all old TTN.
- 8. If the format is incorrect, after pressing the button to get the delivery status of the TTN, a prompt must be shown and the request should not be sent.
- 9. By going to the second tab, the user should be able to see a list of Nova Poshta branches, for which you need to make an appropriate request to the Nova Poshta API and display them as a list at your discretion.

## <div align=center>Technology Stack:</div>

"Your Pet" utilizes modern technologies and libraries to create a convenient and
functional web application. Here are the key technologies used in the project:

- `React`: A framework for building the user interface.
  - `React Router DOM`: A library for navigation between application pages.
  - `React Toastify`: A library for displaying user notifications.
- `Redux Toolkit`: A toolkit for managing the application state.
- `Redux Persist`: A library for persisting the Redux state in local storage.
- `@emotion/styled`: A library for styling components using CSS in JavaScript.
