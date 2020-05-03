# Тестовое задание: игра "Гоночки"
В этом репозитории находится выполненое тестовое задание (backend) для BlueSweater Studio

# Инструкция по установке
1) Клонировать репозиторий
```git clone git@github.com:SweaterPower/racing-bluesweater-task.git```
2) Перейти в папку проекта
```cd racing-bluesweater-task```
3) Установить пакеты
```npm install```
4) Развернуть базу данных
```cd docker && docker-compose up -d --build```
5) Сгенерировать 4 млн. пользователей для тестирования
```npm run fixtures```
6) Запуск
```npm start```

После этого сервер будет доступен на http://localhost:3000/

Для тестирования пагинации можно использовать метод changePage (в консоли браузера)
```changePage(500);```
