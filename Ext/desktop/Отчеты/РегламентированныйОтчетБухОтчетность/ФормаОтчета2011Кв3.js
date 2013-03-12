Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.ФормаОтчета2011Кв3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Бухгалтерская отчетность',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Расшифровка',
				},
				{
					text:'Заполнить бухгалтерский баланс',
				},
				'-',
				{
					text:'Выгрузить',
				},
				{
					text:'Проверить выгрузку',
				},
				{
					text:'Расширить поле бланка',
				},
				{
					text:'Настройки отчета...',
				},
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Сохранять',
				},
				{
					text:'Очистить все отчеты',
				},
				'-',
				{
					text:'Отправить',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Проверить в Интернете',
				},
				'-',
				{
					text:'Очистить бухгалтерский баланс',
				},
				'-',
				{
					text:'Подготовить к отправке',
				},
				{
					text:'Подготовить к отправке и подписать',
				},
				'-',
				{
					text:'Показать отправки',
				},
				'-',
				'-',
				{
					text:'Заполнить все отчеты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:700px;height:44px;',
			height: 44,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:299px;top:24px;width:49px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внешние данные',
			style: 'position:absolute;left:263px;top:0px;width:105px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:429px;width:700px;height:22px;',
			height: 22,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:3px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:3px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:37px;',
			height: 37,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:698px;height:35px;',
			height: 35,width: 698,
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
			style: 'position:absolute;left:8px;top:119px;width:700px;height:310px;',
			height: 310,width: 700,
			items:
			[
				{
					title:'Бухгалтерский баланс',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиБаланс',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийБаланс',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиБаланс',
			text: 'Добавить',
			style: 'position:absolute;left:440px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиБаланс',
			text: 'Удалить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастроитьДопСтрокиБаланс',
			text: 'Настроить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Отчет о прибылях и убытках',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиФормаОтчета',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийФормаОтчета',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиФормаОтчета',
			text: 'Добавить',
			style: 'position:absolute;left:440px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиФормаОтчета',
			text: 'Удалить',
			style: 'position:absolute;left:526px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастроитьДопСтрокиФормаОтчета',
			text: 'Настроить',
			style: 'position:absolute;left:612px;top:265px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});