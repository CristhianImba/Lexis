const api_url = 
      "https://rickandmortyapi.com/api/character";

async function getapi(url) {
    
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);

    show(data);
}
getapi(api_url);

function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Species</th>
          <th>Gender</th>
          <th>Status</th>
         </tr>`;

    for (let r of data.results) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.species}</td>
    <td>${r.gender}</td> 
    <td>${r.status}</td>          
</tr>`;
    }
    document.getElementById("characters").innerHTML = tab;
}