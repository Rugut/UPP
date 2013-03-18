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
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Кадровое планирование...',
				},
				{
					text:'Вакансии...',
				},
				{
					text:'Источники информации...',
				},
				{
					text:'Состояния кандидатов...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				'-',
				{
					text:'Кадровое планирование...',
				},
				'-',
				{
					text:'Вакансии...',
				},
				'-',
				{
					text:'Источники информации...',
				},
				'-',
				{
					text:'Состояния кандидатов...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:703px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
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
					text:'Принять как кандидата...',
				},
				{
					text:'Привязать к существующему кандидату',
				},
				'-',
				{
					text:'Открыть...',
				},
				{
					text:'Пометить как прочтенное',
				},
				'-',
				{
					text:'Переместить в нежелательную почту',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:609px;top:0px;width:80px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Все письма...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОПисьме',
			text: 'С данным отправителем ранее уже велась переписка',
			style: 'position:absolute;left:302px;top:31px;width:180px;height:33px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:191px;width:689px;height:348px;',
			height: 348,width: 689,
			tabBar:{hidden:true},
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
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:588px;top:25px;width:101px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
					text:'Ответить',
				},
				'-',
				{
					text:'Новое письмо',
				},
				{
					text:'Скопировать письмо',
				},
				{
					text:'Изменить письмо',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Ответить всем',
				},
				{
					text:'Переслать',
				},
				'-',
				{
					text:'Установить """"Рассмотрено""""',
				},
				{
					text:'Установить """"Не рассмотрено""""',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:235px;top:68px;width:454px;height:96px;',
			height: 96,width: 454,
			tabBar:{hidden:true},
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
					xtype: 'tbfill'
				},
				{
					text:'Переключить видимость справки формы',
				},
			]
		},
	]
});