document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

// handles skater info form submission

  const form = document.querySelector('#form')

  const handleFormSubmit = function(evt){
    evt.preventDefault();
    console.log('Form submitted');

    // getting info from form
    const newSkaterName = document.createElement('h3');
    newSkaterName.textContent =  evt.target.skater_name.value;

    const newSkaterNum = document.createElement('h2');
    newSkaterNum.textContent =  evt.target.skater_num.value;

    const newSkaterPosition = document.createElement('h4');
    newSkaterPosition.textContent = evt.target.position.value;

    //creating new skater
    const newSkater = document.createElement('li');
    newSkater.appendChild(newSkaterNum);
    newSkater.appendChild(newSkaterName);
    newSkater.appendChild(newSkaterPosition);

    const team = document.querySelector('ul');
    team.appendChild(newSkater);

    form.reset();

};
  form.addEventListener('submit', handleFormSubmit);

// handling delete all button

  const deleteAll = document.querySelector('#delete-all');

  const handleDeleteAll = function(evt){
    console.log('all skaters deleted');

    const skaterList = document.querySelector('ul');
    skaterList.innerHTML = "";
  };

  deleteAll.addEventListener('click', handleDeleteAll);

});
