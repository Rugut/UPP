Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиССайтом.Форма',
	{
	extend: 'Ext.window.Window',
	height: 424,width: 740,
	iconCls: 'bogus',
	title: 'Настройка обмена данными с WEB - сайтом',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:740px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Далее',
				},
				{
					text:'Назад',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:183px;top:0px;width:557px;height:399px;',
			height: 399,width: 557,
			items:
			[
				{
					title:'Главная',
					items:
					[
					]
				},
				{
					title:'НастройкаОбменаСWEBСайтом',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:170px;width:545px;height:116px;',
			height: 116,width: 545,
			items:
			[
				{
					title:'СтраницаКаталог',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогВыгрузки',
			style: 'position:absolute;left:84px;top:0px;width:461px;height:20px;',
		},
					]
				},
				{
					title:'СтраницаСайт',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPВыгрузкаПароль',
			style: 'position:absolute;left:378px;top:26px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPВыгрузкаИмяПользователя',
			style: 'position:absolute;left:84px;top:26px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменАдресСкрипта',
			style: 'position:absolute;left:84px;top:0px;width:461px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиИмяПользователя',
			style: 'position:absolute;left:84px;top:97px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиПорт',
			style: 'position:absolute;left:378px;top:74px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиСервер',
			style: 'position:absolute;left:84px;top:74px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиПароль',
			style: 'position:absolute;left:378px;top:97px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:423px;top:50px;width:122px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'НастройкиТовары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:545px;height:268px;',
			height: 268,width: 545,
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
			style: 'position:absolute;left:6px;top:97px;width:545px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'НастройкиЗаказы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:212px;top:95px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:212px;top:119px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:212px;top:143px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовыхКонтрагентов',
			style: 'position:absolute;left:212px;top:188px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовойНоменклатуры',
			style: 'position:absolute;left:212px;top:212px;width:339px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияНовойНоменклатуры',
			style: 'position:absolute;left:212px;top:236px;width:339px;height:19px;',
		},
					]
				},
				{
					title:'ДействияСЗаказами',
					items:
					[
					]
				},
				{
					title:'НастройкиТипаВыполненияОбменаДанными',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбменаЗаказами',
			style: 'position:absolute;left:26px;top:211px;width:271px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:139px;width:545px;height:43px;',
			height: 43,width: 545,
			items:
			[
				{
					title:'Главная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбменаТоварами',
			style: 'position:absolute;left:20px;top:24px;width:271px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'НастройкиАвтоматическогоОбменаДанными',
					items:
					[
					]
				},
				{
					title:'ИтоговаяСтраницаЗавершенияОбмена',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СозданнаяНастройкаОбмена',
			style: 'position:absolute;left:39px;top:73px;width:385px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить обмен',
			style: 'position:absolute;left:430px;top:73px;width:122px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:399px;',
			height: 399,width: 181,
			items:
			[
				{
					title:'СтраницаНастройки',
				},
			]
		},
	]
});