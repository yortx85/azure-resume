window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterjdt.azurewebsites.net/api/GetResumeCounterjdt?code=_fkq-inA6k5FmZRqSpnv5uCmvS31xP1zEoSrYdVSzqKZAzFuZ36tJQ==';
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