document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

// handles skater info form submission

  const form = document.querySelector('#form')

  const handleFormSubmit = function(evt){
    evt.preventDefault();
    console.log('Form submitted');

    // getting info from form
    const newSkaterName = document.createElement('p');
    newSkaterName.textContent =  evt.target.skater_name.value;

    const newSkaterNum = document.createElement('h2');
    newSkaterNum.textContent =  evt.target.skater_num.value;

    const newSkaterClass = evt.target.position.value;


    const newSkaterPosition = document.createElement('p');
    newSkaterPosition.textContent = newSkaterClass;

    const newSkaterTeam = evt.target.team.value;


    //creating new skater
    const newSkater = document.createElement('li');
    newSkater.classList.add(newSkaterClass);
    newSkater.classList.add(newSkaterTeam);
    newSkater.appendChild(newSkaterNum);
    newSkater.appendChild(newSkaterName);


    if (newSkaterTeam === 'team1'){
    const team1 = document.querySelector('ul.team1');
    team1.appendChild(newSkater);
  } else {
    const team2 = document.querySelector('ul.team2');
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
    team1List.innerHTML = "<h2>team one</h2> <button type=\"button\" id=\"team1-starpass\">star pass</button>";
    ;

    const team2List = document.querySelector('ul.team2');
    team2List.innerHTML = "<h2>team two</h2> <button type=\"button\" id=\"team2-starpass\">star pass</button>";
  };

  deleteAll.addEventListener('click', handleDeleteAll);

  // star pass

  const team1StarPass = document.querySelector('#team1-starpass');

    const handleStarPass1 = function(evt){
      console.log('team 1 star pass');

      const team1Jammer = document.querySelector('li.jammer.team1')
      team1Jammer.classList.replace('jammer', 'blocker')

      const team1Pivot = document.querySelector('li.pivot.team1');
      team1Pivot.classList.replace('pivot', 'jammer');
    };

  team1StarPass.addEventListener('click', handleStarPass1);

  // star pass team 2

  const team2StarPass = document.querySelector('#team2-starpass');

    const handleStarPass2 = function(evt){
      console.log('team 2 star pass');

      const team2Jammer = document.querySelector('li.jammer.team2')
      team2Jammer.classList.replace('jammer', 'blocker')

      const team2Pivot = document.querySelector('li.pivot.team2');
      team2Pivot.classList.replace('pivot', 'jammer');
    };

  team2StarPass.addEventListener('click', handleStarPass2);
});
