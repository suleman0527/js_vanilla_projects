const form = document.querySelector(`form`)
form.addEventListener(`submit`, function (e) {
  e.preventDefault()
  const height = parseInt(document.querySelector(`#height`).value)
  const weight = parseInt(document.querySelector(`#weight`).value)
  const results = document.querySelector(`#results`)
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${height}`
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2)
    //show the results
    results.innerHTML = `<span>${bmi}</span>`

    if (bmi <= 18.6) {
      comment.innerHTML = `the bmi is ${bmi} and is Under Weight`
    } else if (bmi > 18.6 && bmi <= 24.9) {
      comment.innerHTML = `the bmi is ${bmi} and is Normal Range`
    } else if (bmi > 24.9) {
      comment.innerHTML = `the bmi is ${bmi} and is OverWeight`
    }
  }
})
