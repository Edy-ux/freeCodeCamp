/*Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject.
These are methods used to determine the outcome of the promise. The syntax looks like this  */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
})


//Lindando com o sucesso da promessa

/* Quando você faz uma solicitação ao servidor, leva algum tempo e, depois que ela é concluída, 
você geralmente deseja fazer algo com a resposta do servidor. Isso pode ser alcançado usando o método 
then O método then é executado imediatamente após sua promessa ser cumprida com determinação. 
Aqui está um exemplo: */

makeServerRequest.then(result => {
    console.log(result)
})

makeServerRequest.catch(result => {
    console.log(error);
})