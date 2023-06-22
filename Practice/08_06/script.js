/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


const Vehicle = {
    Name: 'Hondacity',
    model: 2021,
    color: 'Black',
    owner_name: 'Asad'
};

// standard function
// const Addvehicel = function(newvehicle){
//     const NewArticle = document.createElement('article');
//     NewArticle.innerHTML = `
//     <h1>${newvehicle.Name}</h1>
//     <ul>
//         <li>${newvehicle.owner_name}</li>
//         <li>${newvehicle.color}</li>
//         <li>${newvehicle.model}</li>
//     </ul>
//     `;
//     return NewArticle;
// }

// const Main = document.querySelector('main');
// Main.append(Addvehicel(Vehicle));


// With Arrow Function

const Addvehicel = newvehicle => {
    const NewArticle = document.createElement('article');
    NewArticle.innerHTML = `
    <h1>${newvehicle.Name}</h1>
    <ul>
        <li>${newvehicle.owner_name}</li>
        <li>${newvehicle.color}</li>
        <li>${newvehicle.model}</li>
    </ul>
    `;
    return NewArticle;
}

const Main = document.querySelector('main');
Main.append(Addvehicel(Vehicle));