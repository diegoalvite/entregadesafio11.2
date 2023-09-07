const button = document.getElementById("button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name").value;
  const surnameInput = document.getElementById("surname").value;
  const dateOfBirthInput = document.getElementById("dateOfBirth").value;

  const nombre = nameInput;
  const apellido = surnameInput;
  const fechaNacimiento = dateOfBirthInput;

  const datos = {
    name: nombre,
    username: apellido,
    birthdate: fechaNacimiento,
  };

  //*metodo post*//

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
