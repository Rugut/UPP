Ext.define('Документы.ЭлектронноеПисьмо.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Электронное письмо',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Отправить',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Удалить',
				},
				'-',
				'-',
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Простой текст',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Ввести событие',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Редактировать внешним HTML редактором',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Структура подчиненности',
				},
				'-',
				{
					text:'Проверить получателей',
				},
				'-',
				'-',
				'-',
				{
					text:'Проверить получателей',
				},
				{
					text:'Отправить',
				},
				{
					text:'HTML',
				},
				{
					text:'Создать опрос',
				},
				'-',
				{
					text:'Скрытые копии',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кому',
			style: 'position:absolute;left:102px;top:57px;width:552px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКому',
			text: 'Кому:',
			style: 'position:absolute;left:7px;top:57px;width:85px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Ответить всем',
				},
				{
					text:'Восстановить исходный текст',
				},
				{
					text:'Редактирование',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Удалить',
				},
				{
					text:'Показать заголовок письма',
				},
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Ввести событие',
				},
				{
					text:'Адресная книга',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Переслать',
				},
				{
					text:'Структура подчиненности',
				},
				'-',
				{
					text:'Ответить всем',
				},
				{
					text:'Переслать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Создать опрос',
				},
				{
					text:'Скопировать',
				},
				'-',
				'-',
				{
					text:'Адресная книга',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Печать',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКопии',
			text: 'Копии:',
			style: 'position:absolute;left:7px;top:81px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Копии',
			style: 'position:absolute;left:102px;top:81px;width:552px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:105px;width:647px;height:24px;',
			height: 24,width: 647,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкрытыеКопии',
			style: 'position:absolute;left:95px;top:0px;width:552px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Тема:',
			style: 'position:absolute;left:7px;top:129px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Тема',
			style: 'position:absolute;left:102px;top:129px;width:552px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтКого',
			text: 'От кого:',
			style: 'position:absolute;left:7px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:176px;width:647px;height:261px;',
			height: 261,width: 647,
			items:
			[
				{
					title:'Письмо',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Группа:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			items:
			[
				{
					text:'Открыть ссылку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКодировкаПисьма',
			text: 'Кодировка:',
			style: 'position:absolute;left:6px;top:59px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредмет',
			text: 'Предмет:',
			style: 'position:absolute;left:6px;top:31px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаУчетнойЗаписи',
			style: 'position:absolute;left:101px;top:6px;width:277px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:212px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:101px;top:212px;width:538px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Комментарий:',
			style: 'position:absolute;left:6px;top:190px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:101px;top:190px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтправления',
			style: 'position:absolute;left:488px;top:83px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:488px;top:59px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:488px;top:6px;width:151px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:166px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:101px;top:166px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаТранспорта',
			style: 'position:absolute;left:488px;top:107px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предмет',
			style: 'position:absolute;left:101px;top:31px;width:538px;height:19px;',
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:201px;',
			height: 201,width: 632,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Обновить',
				},
				{
					text:'',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Открыть',
				},
				{
					text:'Удалить',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Обновить',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Открыть',
				},
			]
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:201px;',
			height: 201,width: 632,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сохранить',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сохранить',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Открыть',
				},
				{
					text:'Открыть',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отправитель',
			style: 'position:absolute;left:102px;top:33px;width:552px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не рассмотрено, рассмотреть после:',
			style: 'position:absolute;left:7px;top:153px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РассмотретьПосле',
			style: 'position:absolute;left:222px;top:153px;width:150px;height:19px;',
		},
	]
});