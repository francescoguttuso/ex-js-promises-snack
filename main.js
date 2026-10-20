//SNACK 1
const getPostTitle = (id) => {
  const promessa = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((obj) => resolve(obj.title))
      .catch(reject);
  });
  return promessa;
};

getPostTitle(1)
  .then((title) => console.log(title))
  .catch((error) => console.error(error));

//SNACK 1 BONUS
const getPost = (id) => {
  const promessa = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        return fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((user) => {
            return {
              ...post,
              user,
            };
          });
      })
      .then((postCompleto) => resolve(postCompleto))
      .catch(reject);
  });

  return promessa;
};

getPost(1)
  .then((post) => console.log(post))
  .catch((error) => console.error(error));

//SNACK 2

const lanciaDado = () => {
  const promessa = new Promise((resolve, reject) => {
    console.log("Sto lanciando il dado...");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Il dado si incastra");
      } else {
        resolve(Math.floor(Math.random() * 6) + 1);
      }
    }, 3000);
  });

  return promessa;
};

lanciaDado()
  .then((numero) => console.log("Numero uscito:", numero))
  .catch((errore) => console.error(errore));

//SNACK 2 BONUS

const creaLanciaDado = () => {
  let ultimoRisultato;

  const lanciaDado = () => {
    const promessa = new Promise((resolve, reject) => {
      console.log("Sto lanciando il dado...");
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject("Il dado si incastra");
        } else {
          resolve(Math.floor(Math.random() * 6) + 1);
        }
      }, 3000);
    });

    return promessa
      .then((numero) => {
        if (numero === ultimoRisultato) {
          console.log("Incredibile");
        }

        ultimoRisultato = numero;
        return numero;
      })
      .catch((error) => console.error(error));
  };
  return lanciaDado;
};

const lancia = creaLanciaDado();

lancia();
lancia();
lancia();
