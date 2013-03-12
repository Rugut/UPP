Ext.define('Обработки.НаборПерсонала.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:925px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Набор персонала',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:878px;height:25px;',
			items:
			[
				{
					text:'Кадровое планирование...',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Кадровое планирование...',
				},
				{
					text:'Отчет по кандидатам',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Источники информации...',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Вакансии...',
				},
				{
					text:'Вакансии...',
				},
				{
					text:'Отчет по кандидатам',
				},
				'-',
				'-',
				'-',
				{
					text:'Эффективность затрат на привлечение',
				},
				{
					text:'Состояния кандидатов...',
				},
				{
					text:'Состояния кандидатов...',
				},
				{
					text:'Источники информации...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:703px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:539px;',
			height: 539,width: 689,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:689px;height:159px;',
			height: 159,width: 689,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:31px;width:275px;height:128px;',
			height: 128,width: 275,
			columns:
			[
				{
					text:'Тема',
					width:'173',
				},
				{
					text:'Отправитель',
					width:'100',
				},
				{
					text:'Ссылка',
					width:'27',
				},
				{
					text:'Не рассмотрено',
					width:'100',
				},
				{
					text:'Рассмотреть после',
					width:'100',
				},
				{
					text:'Статус письма',
					width:'100',
				},
				{
					text:'Значение группировки',
					width:'100',
				},
				{
					text:'Отправитель адрес электронной почты',
					width:'100',
				},
				{
					text:'Дата получения',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:609px;height:24px;',
			items:
			[
				{
					text:'Отправителю',
				},
				{
					text:'Принять как кандидата...',
				},
				'-',
				'-',
				'-',
				{
					text:'Открыть...',
				},
				{
					text:'Дате',
				},
				{
					text:'Переместить в нежелательную почту',
				},
				{
					text:'Принять почту',
				},
				{
					text:'Привязать к существующему кандидату',
				},
				{
					text:'Пометить как прочтенное',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:0px;width:80px;height:24px;',
			items:
			[
				{
					text:'Все письма...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОПисьме',
			text: 'С данным отправителем ранее уже велась переписка',
			style: 'position:absolute;left:302px;top:31px;width:180px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:191px;width:689px;height:348px;',
			height: 348,width: 689,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:53px;width:229px;height:295px;',
			height: 295,width: 229,
			columns:
			[
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Ссылка',
					width:'100',
				},
				{
					text:'Значение группировки',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:596px;height:24px;',
			items:
			[
				{
					text:'Должности',
				},
				{
					text:'Дате события',
				},
				{
					text:'Добавить кандидата...',
				},
				{
					text:'Обновить список кандидатов',
				},
				{
					text:'Открыть кандидата...',
				},
				{
					text:'Состоянию',
				},
				'-',
				{
					text:'Группе кандидатов',
				},
				{
					text:'Добавить файлы...',
				},
				{
					text:'Наименованию',
				},
				{
					text:'Вакансии',
				},
				{
					text:'Написать кандидату...',
				},
				'-',
				{
					text:'Ответственному',
				},
				{
					text:'Подразделению',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:588px;top:25px;width:101px;height:24px;',
			items:
			[
				{
					text:'Все кандидаты...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:268px;width:146px;height:80px;',
			height: 80,width: 146,
			columns:
			[
				{
					text:'Есть вложения',
					width:'21',
				},
				{
					text:'От кого',
					width:'100',
				},
				{
					text:'Кому',
					width:'100',
				},
				{
					text:'Дата отправления',
					width:'140',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:264px;top:212px;width:342px;height:24px;',
			items:
			[
				{
					text:'Скопировать письмо',
				},
				'-',
				{
					text:'Установить """"Не рассмотрено""""',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Установить """"Рассмотрено""""',
				},
				'-',
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Новое письмо',
				},
				{
					text:'Ответить всем',
				},
				{
					text:'Переслать',
				},
				{
					text:'Изменить письмо',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:235px;top:68px;width:454px;height:96px;',
			height: 96,width: 454,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:878px;top:0px;width:47px;height:25px;',
			items:
			[
				{
					text:'Переключить видимость справки формы',
				},
			]
		},
	]
});