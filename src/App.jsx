import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreeting from "./Usergreeting"
import List from "./List"
import Listing from "./Listing"
import ClickingButton from "./Clickingbutton"
import ClickingImage from "./Clickimage"
import Hookings from "./Hookings"
import Counter from "./Counter"

function App() {

  // thsi is for the listing component

  const countries = [
    { id: 1, name: 'Nigeria', populations: 100 },
    { id: 2, name: 'Ghana', populations: 85 },
    { id: 3, name: 'Kenya', populations: 75 },
    { id: 4, name: 'South Africa', populations: 90 },
    { id: 5, name: 'Egypt', populations: 120 }
  ];

  const cars = [
    { id: 6, name: 'Toyota', model: 'Corolla', populations: 20000 },
    { id: 7, name: 'Honda', model: 'Civic', populations: 22000 },
    { id: 8, name: 'BMW', model: 'X5', populations: 60000 },
    { id: 9, name: 'Mercedes', model: 'C-Class', populations: 55000 },
    { id: 10, name: 'Ford', model: 'Mustang', populations: 45000 }
  ];






  return (
    <div>
      <Card />
      <Card />
      <Button />
      <Student first="John" age={20} isStudent={true} />
      <Student first="Doe" age={22} isStudent={false} />
      <Student first="Smith" age={19} isStudent={true} />
      <Student lastname="Johnson" height={170} />

      <UserGreeting isLoggedin={true} />

      <UserGreeting isLoggedin={false} />
      <List />

      {/* if the list is empty it will not render the component */}
      {countries.length > 0 ? <Listing items={countries} category="Countries" /> : null}
      {cars.length > 0 && <Listing items={cars} category="Cars" />}



      {/* for click event */}
      <ClickingButton />

      {/* for the click image */}
      <ClickingImage />

      {/* for usestate hook */}
      <Hookings />

      {/* for */}
      <Counter />

    </div>
  )
}


export default App
