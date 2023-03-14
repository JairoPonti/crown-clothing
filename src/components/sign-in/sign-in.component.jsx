import { signInWithGooglePopup, createDocumentUserFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
 
   const logGoogleUser = async () => {
         const { user } = await signInWithGooglePopup();
         const userDocRef = await createDocumentUserFromAuth(user)
        //  console.log(response);
   }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={ logGoogleUser }>
                Sign in with Google popup
            </button>
        </div>
    )
}

export default SignIn;