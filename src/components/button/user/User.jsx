import {StyledUser} from'./user.styles';

const User = ({ name, email }) =>{
    return( 
        <StyledUser>
            <h2>$name={name}</h2>
            <p>$email={email}</p>
        </StyledUser>
    );
};

export default User;