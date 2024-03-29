# **Интерактивный одностраничный сайт Mesto**
Данный адаптивный одностраничный сайт является учебным проектом от школы ЯндексПрактикум.
Сайт выполнен по макету из Figma для мобильных и декстопных экранов.
## ***Технологии***
***
Сайт выполнен с использованием технологий - HTML, CSS и Java Script.
Настроена сборка с помощью Webpack.
Реализовано взаимодействие с backend(закрытый сервис Яндекс.Практикум).

В ходе выполнения проекта затрагиваются такие темы как: адаптивная верстка, резиновая верстка, flex-верстка, Grid Layout, медиазапросы, DOM.
Логика написанная на Java Script: 
- Открытие и закрытие по клику диалогового окна "Редактировать профиль", для редактирования информации о пользователе.
- Добавление 6-ти карточек на страницу при ее загрузке.
- Открытие и закрытие диалогового окна "Новое место", для добавления новой карточки.
- Добаление новой карточки на страницу при отправке формы и автоматическое закрытие соответствующего диалогового окна.
- Возможность "поставить" лайк карточке. И отображение их количества.
- Открытие диалогового окна "Удаление карточки"по клику на соответствующую иконку. Удаление карточки при подтверждении.
- Открытие и закрытие изображения по клику.
- Закрытие диалогового окна по клику за его пределами.
- Закрытие диалогового окна по нажатию клавиши ESC.
- Открытие и закрытие диалогового окна для смены аватара пользователя.

Так же реализована валидация форм:
- Редактировать профиль:
    * в поле «Имя» должно быть от 2 до 40 символов;
    * в поле «О себе» должно быть от 2 до 200 символов;
- Новое место:
    * в поле «Название» должно быть от 2 до 30 символов,
    * в поле «Ссылка на картинку» должен быть URL.

Структура проекта выполнена по методологии БЭМ.
## ***Проект***
***
Перейти на сайт: https://buntashova.github.io/mesto/
