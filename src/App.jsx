
import Button from "./components/button/Button";
import User from "./components/button/user/User";
import { GlobalStyles } from "./styles/GlobalStyles";
import { USERS } from "./constants/users";


const App = ()=> {
  return (
  <>
  <GlobalStyles/>
  <h1>React</h1>
  <Button color='blue' padding='0.5rem' hover>
    Clilck Me
  </Button>
  <Button color='green' padding='1rem'>
    Click Me
    </Button>
  <Button color='orange' padding='1.5rem' rounded>
    Click Me
    </Button>
    {
      USERS.map(user=> (
        <User key={user.id} name={user.name} email={user.email}/>
      ))}
  </>
  )  
};

export default App;