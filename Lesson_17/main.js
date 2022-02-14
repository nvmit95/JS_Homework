var button = document.getElementsByTagName('button')[0];
var container = document.getElementsByClassName('container')[0];
var tabsContainer = document.getElementsByClassName('tabs-container')[0];
var userContainer = document.getElementsByClassName('user-container')[0];

function getUserList() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://reqres1.in/api/users?page=2', true);

  xhr.send();

  xhr.onload = function () {
    var statusType = +String(this.status)[0];
    statusType === 2
      ? addUserList(JSON.parse(this.responseText).data)
      : this.status;
    localStorage.setItem('users', this.responseText);
  };

  xhr.onerror = function () {
    console.error(this.status);
    createError();
  };

  xhr.onloadend = function () {
    console.log('Запрос завершен');
  };
}

function createError() {
  var isError = document.getElementsByClassName('error')[0];
  if (isError) return;

  var error = document.createElement('div');
  error.classList.add('error');
  error.textContent = 'Произошла ошибка при загрузке данных!';

  container.appendChild(error);
}

function addUserList(userList) {
  var userOrder = 1;
  var activeTab;

  if (tabsContainer.children.length) return;

  userList.map(function (user) {
    var tab = document.createElement('div');
    tab.setAttribute('class', 'tab');
    tab.setAttribute('id', user.id);
    if (userOrder === 1) {
      tab.classList.add('active');
      activeTab = tab;
      getUserById(userList, user.id);
    }
    tab.textContent = 'Пользователь ' + userOrder;
    userOrder++;
    tabsContainer.appendChild(tab);
  });

  tabsContainer.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('tab')) {
      if (activeTab) {
        activeTab.classList.remove('active');
      }
      target.classList.add('active');
      activeTab = target;
      getUserById(userList, target.id);
    }
  });
}

function getUserById(userList, id) {
  userContainer.style.background = 'rgba(0, 0, 255, .2)';
  var user = userList.find(function (user) {
    return user.id === +id;
  });

  userContainer.innerHTML =
    '<div class="user-photo">' +
    '<img src="' +
    user.avatar +
    '" alt="user-photo"/>' +
    '</div>' +
    '<div class="user-info">' +
    '<p>' +
    user['first_name'] +
    ' ' +
    user['last_name'] +
    '</p>' +
    '<p>Email: ' +
    user.email +
    '</p>' +
    '</div>';
}

button.addEventListener('click', function () {
  var usersInStorage = localStorage.getItem('users');

  if (usersInStorage) {
    addUserList(JSON.parse(usersInStorage).data);
  } else {
    getUserList();
  }
});
