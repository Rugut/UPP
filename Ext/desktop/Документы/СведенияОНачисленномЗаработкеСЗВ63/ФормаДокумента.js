Ext.define('Документы.СведенияОНачисленномЗаработкеСЗВ63.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:846px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о сумме выплат и иных вознаграждений СЗВ-6-3',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:428px;width:621px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:846px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:846px;height:25px;',
			items:
			[
				{
					text:'Проверить в CheckXML',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				{
					text:'Записать файл на диск',
				},
				{
					text:'Показать файл',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ПФР',
			style: 'position:absolute;left:732px;top:428px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:830px;height:41px;',
			height: 41,width: 830,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:830px;height:35px;',
			height: 35,width: 830,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:830px;height:96px;',
			height: 96,width: 830,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:439px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:525px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:625px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:0px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:439px;top:24px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:525px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:72px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:94px;top:72px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:218px;top:72px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:292px;top:72px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Код категории:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц',
			style: 'position:absolute;left:94px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Отчетный период:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:94px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:439px;top:48px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:218px;top:24px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:292px;top:24px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДоговора',
			text: 'Тип договора:',
			style: 'position:absolute;left:218px;top:48px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДоговора',
			style: 'position:absolute;left:292px;top:48px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписьАДВ62',
			text: 'Опись АДВ-6-2 за отчетный период:',
			style: 'position:absolute;left:439px;top:72px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписьАДВ62',
			style: 'position:absolute;left:625px;top:72px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:170px;width:830px;height:251px;',
			height: 251,width: 830,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:830px;height:24px;',
			items:
			[
				{
					text:'Начисленные суммы',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:269px;height:211px;',
			height: 211,width: 269,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'220',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:283px;top:230px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Заработок по месяцам',
			style: 'position:absolute;left:283px;top:40px;width:148px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:283px;top:65px;width:329px;height:157px;',
			height: 157,width: 329,
			columns:
			[
				{
					text:'Месяц',
					width:'42',
				},
				{
					text:'Заработок всего',
					width:'100',
				},
				{
					text:'В т.ч. облагается взносами',
					width:'149',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:631px;top:65px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:706px;top:65px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:631px;top:89px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:706px;top:89px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:631px;top:113px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:706px;top:113px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'Страховой №:',
			style: 'position:absolute;left:631px;top:137px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:706px;top:137px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Личные данные',
			style: 'position:absolute;left:631px;top:40px;width:125px;height:19px;',
		},
					]
				},
			]
		},
	]
});