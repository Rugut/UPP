Ext.define('Обработки.ВыгрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	height: 513,width: 611,
	iconCls: 'bogus',
	title: 'Выгрузка данных в формате CommerceML',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:611px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ВыгрузитьДанные',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:603px;height:405px;',
			height: 405,width: 603,
			items:
			[
				{
					title:'СтраницаДанные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:71px;width:591px;height:334px;',
			height: 334,width: 591,
			items:
			[
				{
					title:'СтраницаВыгрузкиТоваров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:262px;',
			height: 262,width: 591,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:42px;width:591px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталога',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаВыгрузкиПрайса',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПрайса',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:591px;height:259px;',
			height: 259,width: 591,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:42px;width:591px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СтраницаВыгрузкиДокументов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:66px;width:591px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Очистить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКонтрагент',
			style: 'position:absolute;left:256px;top:0px;width:201px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСДокументДата',
			style: 'position:absolute;left:101px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоДокументДата',
			style: 'position:absolute;left:212px;top:23px;width:84px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:302px;top:23px;width:19px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:94px;width:591px;height:233px;',
			height: 233,width: 591,
			columns:
			[
				{
					text:'Строка',
				},
				{
					text:'Обрабатывать',
				},
			]
		},
					]
				},
				{
					title:'ВыгрузкаПрайсаCML_1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:110px;width:242px;height:219px;',
			height: 219,width: 242,
			columns:
			[
				{
					text:'Использовать',
				},
				{
					text:'Свойство',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:248px;top:136px;width:343px;height:193px;',
			height: 193,width: 343,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:248px;top:108px;width:343px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПрайсаCML_1',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаПоУмолчанию',
			style: 'position:absolute;left:130px;top:42px;width:102px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПрайсCML_1',
			text: '...',
			style: 'position:absolute;left:356px;top:66px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДействительноС',
			style: 'position:absolute;left:130px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДействительноПо',
			style: 'position:absolute;left:257px;top:66px;width:91px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:48px;width:355px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:24px;width:591px;height:21px;',
			height: 21,width: 591,
			items:
			[
				{
					title:'Файл',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаВыгрузки',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'Каталог',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталогаВыгрузки',
			style: 'position:absolute;left:101px;top:0px;width:355px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
	]
});