var TelegramBot = function(token) {
    this.token = token;
  };
  
  TelegramBot.prototype.makeRequest = function(method, params, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.telegram.org/bot' + this.token + '/' + method, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    };
    xhr.send(JSON.stringify(params));
  };
  
  TelegramBot.prototype.sendMessage = function(chatId, text, options, callback) {
    if (text === ''){
      alert('Boş mesaj göndərilə bilməz')
    } else {
    var params = { chat_id: chatId, text: text };
    if (options) {
      params = Object.assign(params, options);
    }
    this.makeRequest('sendMessage', params, callback);
  }
  };
  
  TelegramBot.prototype.sendPhoto = function(chatId, photoUrl, options, callback) {
    if (photoUrl === ''){
      alert('Linki daxil etmədiniz')
    } else {
    var params = { chat_id: chatId, photo: photoUrl };
    if (options) {
      params = Object.assign(params, options);
    }
    this.makeRequest('sendPhoto', params, callback);
  }
  };