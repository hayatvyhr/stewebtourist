function loginJs() {
  const handleRadioChange = () => {
    const logRegShowChecked = document.getElementById('log-reg-show').checked;
    const loginInfoBox = document.querySelector('.login-info-box');
    const registerInfoBox = document.querySelector('.register-info-box');

    if (logRegShowChecked) {
      registerInfoBox.style.display = 'none';
      loginInfoBox.style.display = 'block';
      document.querySelector('.white-panel').classList.add('right-log');
      document.querySelector('.register-show').classList.add('show-log-panel');
      document.querySelector('.login-show').classList.remove('show-log-panel');
    } else {
      registerInfoBox.style.display = 'block';
      loginInfoBox.style.display = 'none';
      document.querySelector('.white-panel').classList.remove('right-log');
      document.querySelector('.login-show').classList.add('show-log-panel');
      document.querySelector('.register-show').classList.remove('show-log-panel');
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.login-info-box').style.display = 'none';
    document.querySelector('.login-show').classList.add('show-log-panel');

    document.querySelectorAll('.login-reg-panel input[type="radio"]').forEach(function (radio) {
      radio.addEventListener('change', handleRadioChange);
    });
  });
}

export default loginJs;
