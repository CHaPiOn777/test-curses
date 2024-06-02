# Задание:
## Существует API эндпоинт 
 
```GET
    https://logiclike.com/docs/courses.json
```
API эндпоинт возвращает список образовательных курсов платформы. Каждый курс имеет “тэги”, темы к которым этот курс относится. Например курс шахматы относится к темам “Головоломки”, “Шахматы” и “Логика и мышление”. 

Ваша задача разработать простую страницу, согласно макету, которая выводит список курсов и позволяет отфильтровать курсы по выбранной теме(tags). Весь контент, включая список тем должен формироваться динамически исходя из ответа от бэкэнда.

## [Макет:] (https://www.figma.com/file/gngIKlPiSuWmtoJPIfWHs8/Interview-Frontend?type=design&node-id=711-535&mode=design&t=RUg2M0Dhe5nPRGyb-4)

Поведение на разных разрешениях экрана показано в виде отдельного фрейма. Блок с “тэгами” является фиксированным по ширине. Блок справа занимает все оставшееся место. В одной строчке выводится ровно 3 курса, которые делят между собой доступное место.
## Требования
* Использовать React, TypeScript, SCSS
* Pixel perfect
* Код пишите так, как вы бы писали на реальном проекте
* Можно использовать любые библиотеки, кроме стейт менеджеров (Redux, Zustand, MobX, ...)
* Поддержка браузеров: код должен работать в Chrome последней версии
* Код должен быть размещен в CodeSandbox, либо в репозитории GitHub/GitLab/Bitbucket
* Уделите внимание оптимизации кода, код не должен делать лишних перерендеров, которых можно было бы избежать

Успехов! 
