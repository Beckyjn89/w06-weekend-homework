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

    const newSkaterClass = evt.target.position.value;


    const newSkaterPosition = document.createElement('h4');
    newSkaterPosition.textContent = newSkaterClass;

    const newSkaterTeam = evt.target.team.value;


    //creating new skater
    const newSkater = document.createElement('li');
    newSkater.classList.add(newSkaterClass);
    newSkater.appendChild(newSkaterNum);
    newSkater.appendChild(newSkaterName);
    newSkater.appendChild(newSkaterPosition);


    if (newSkaterTeam === 'team1'){
    const team1 = document.querySelector('ul.team1');
    team1.appendChild(newSkater);
  } else {
    const team2 = document.querySelector('ul.team2');
    console.log('trying to add player to team 2');
    team2.appendChild(newSkater);
  };


    form.reset();

};
  form.addEventListener('submit', handleFormSubmit);

// handling delete all button

  const deleteAll = document.querySelector('#delete-all');

  const handleDeleteAll = function(evt){
    console.log('all skaters deleted');

    const team1List = document.querySelector('ul.team1');
    team1List.innerHTML = "";

    const team2List = document.querySelector('ul.team2');
    team2List.innerHTML = "";
  };

  deleteAll.addEventListener('click', handleDeleteAll);

});
