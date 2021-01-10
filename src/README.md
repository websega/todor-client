## Todor -  app for your to-do list

Приложение для составления списка дел. С авторизацией, фильтрами, несколькими папками и редактором.

---
#### Scripts client
- Install packages    ```npm i```
- Start dev-server    ```npm run start```
- Development build   ```npm run dev```
- Production build    ```npm run build```
- Сode check          ```npm run lint```
- Check and fix       ```npm run lint:fix```

---
#### Scripts server
- Install packages    |```npm i```
- Start server        |```npm run start```
- Start nodedemon     |```npm run dev```

Для конфигурации сервера в директории `server/config` необходимо создать файл `default.json`:

```json
{
  "serverPort": 5000,
  "dbUrl": "вставьте сюда connection string из диалога подключения к кластеру",
  "secretKey": "произвольный секретный ключ"
}
```
