const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a valid ${height}`;
    } else if (weight === '' || height < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid ${weight}`;
    } else {
      const bmi = (weight / ((height*weight)/10000)).toFixed(2)

      results.innerHTML = `<span>${bmi}</span>`;
    }

})