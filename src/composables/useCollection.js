import { ref } from 'vue'
import { db } from '../firebase/config'
// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way

const useCollection = (collection) => {
    //we put the error inside the 'useCollection' function this time, coz unlike situations like logging in; 
    // where in the useLogin composable we create just one error variable outside of the 'login' function; in 
    // the case of collections, there can be many different types of errors to handle. This is coz we will use 
    // collections in different parts of the website & therefore each collection error will be different
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null

        try {
            await db.collection(collection).add(doc)
        } catch(err) {
            console.log(err.message)
            error.value = 'Could not send the message'
        }
    }

    return { error, addDoc }
}

export default useCollection