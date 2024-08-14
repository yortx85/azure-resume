window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://jdtgetresumecounter.azurewebsites.net/api/GetResumeCounter?code=3qD5hDnEmEDPCHa5JhoIZxvG-DA1ktIXzKyE58IwFck_AzFu4R6fUw%3D%3D';
const localFunctionApiUrl = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}