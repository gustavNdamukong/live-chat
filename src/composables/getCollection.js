import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)
    
    // register the firestore collection reference
    let collectionRef = db.collection(collection)
        .orderBy('createdAt')
        
    const unsubscribe = collectionRef.onSnapshot((snap) => {
        console.log('SNAPSHOT')
        let results = []
        snap.docs.forEach(doc => {
            // must wait for the server to create the timestamp & send it back
            // we don't want to edit data until it has done this
            // Basically; we need the 'doc.data().createdAt' check so we are comparing with data created on the 
            // Firestore server & the local reference which may not be up to date
            doc.data().createdAt && results.push({...doc.data(), id: doc.id })
        })
        // update values
        documents.value = results
        error.value = null
    }, err => {
        // onSnapshot() takes an optional 2nd argument to handle any error that might occur in the process
        // we auto have access to the error object. That's why we do not need a try-catch approach in this case
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })

    // unsubscribe from prev collection when watcher is stopped (the current component in which onInvalidate is 
    // declared unmounts)
    watchEffect((onInvalidate) => {
        // unsubscribe from the real-time listener. Note that 'unsubscribe' becomes a func because onSnapshot()
        // always returns a func, and because we assigned 'unsubscribe' to it, unsubscribe() then became a func
        // we can use to turn off the watching of the collection.
        onInvalidate(() => unsubscribe())
    })

    return { error, documents }
}

export default getCollection