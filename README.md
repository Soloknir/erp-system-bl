# ERP server

## Порядок запуска

Добавить файл **.env** по образу **.env.example**

```console
$ npm i
& npm run build
$ npm run migration:run
$ npm run seeders:run
$ npm run start
```

## Список пользователей

**ВНИМАНИЕ!** Пароль **"admin"** у всех пользователей

```
    {
      tabel: '001',
      username: 'Иванова И.И.',
    },
    {
      tabel: '002',
      username: 'Иванов И.И.',
    },
    {
      tabel: '003',
      username: 'Куплинов И.И.',
    },
    {
      tabel: '004',
      username: 'Веселов И.И.',
    },
    {
      tabel: '005',
      username: 'Смурнов И.И.',
    },
    {
      tabel: '006',
      username: 'Козлов И.И.',
    },
    {
      tabel: '007',
      username: 'Попов И.И.',
    },
    {
      tabel: '008',
      username: 'Смирнов И.И.',
    },
```
