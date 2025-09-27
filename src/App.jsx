import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"

function App() {
  return (
    <div>
      <Card />
      <Card />
      <Button />
      <Student first="John" age={20} isStudent={true} />
      <Student first="Doe" age={22} isStudent={false} />
      <Student first="Smith" age={19} isStudent={true} />
      <Student lastname="Johnson" height={170} />

    </div>
  )
}


export default App
