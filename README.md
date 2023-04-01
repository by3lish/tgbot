# TgBot
Telegram bot APİ-nin web saytlarda çalışması üçün modul/wrapper.
Nümunə :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TgBot lib by E.</title>
    <script src="tgbot.js"></script>
    <script>
        // Telegram bot tokenini bot dəyişkəninə tanıdın
        const bot = new TelegramBot('TELEGRAM BOT TOKEN');
        // Mesajları qəbul edəcək şəxsin telegram user id nömrəsini user dəyişəninə tanıdın
        let user = '1161722176'
        // Göndər butonuna tıklandığı an işə düşəcək funksiya
        function gonder(){
            // mesaj id-li input text box-dan mesajın mətnini alırıq
            var mesaj = document.getElementById("mesaj").value;
            bot.sendMessage(user, mesaj, null, function(err, response) {
              if (err) {
                console.error('Mesaj göndəriləndə xata baş verdi:', err);
              } else {
                console.log('Mesaj göndərildi:', response);
              }
            });
        }
    </script>
</head>
<body>
        <input placeholder="Mesajı daxil edin..." type="text" id="mesaj">
        <button onclick="gonder()">Göndər</button>
</body>
</html>
```
# İstifadə sahələri
- Saytların feedback səhifələrində
- Canlı dəstək səhifələrində
- Şikayət səhifələrində
