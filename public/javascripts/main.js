document.addEventListener('DOMContentLoaded', (event) => {
  let ul = document.querySelector('ul')

  axios.get('/snacks')
    .then((results) =>{
      results.data.forEach((snack) => {
        let li = document.createElement('li')
        li.innerText = `${snack.snackName}:\n${snack.description}\n$${snack.price} each\n\n`
        ul.appendChild(li)
      })
    })
});
