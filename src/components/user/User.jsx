import {StyledUser} from'./styles/GlobalStyles.js';

const User = ({ name, email }) =>{
    return( 
        <StyledUser>
            <h2>{name}</h2>
            <p>{email}</p>
        </StyledUser>
    );
};

export default User;