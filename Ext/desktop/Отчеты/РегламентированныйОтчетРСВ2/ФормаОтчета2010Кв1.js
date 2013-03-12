Ext.define('Отчеты.РегламентированныйОтчетРСВ2.ФормаОтчета2010Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'РСВ-2 ПФР',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Показать отправки',
				},
				'-',
				'-',
				{
					text:'Отправить',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Очистить',
				},
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Проверить выгрузку',
				},
				{
					text:'Расшифровать',
				},
				{
					text:'Обновить',
				},
				{
					text:'Поиск',
				},
				{
					text:'Расширить поле бланка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:670px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Раздел 1, Раздел 2.1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:640px;height:24px;',
			height: 24,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел12',
			style: 'position:absolute;left:227px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел12',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел12',
			text: 'Добавить',
			style: 'position:absolute;left:491px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел12',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 2.2',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел22',
			text: 'Добавить',
			style: 'position:absolute;left:491px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел22',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:640px;height:24px;',
			height: 24,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел22',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел22',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел30',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел30',
			style: 'position:absolute;left:351px;top:5px;width:289px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:353px;top:265px;width:132px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:584px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:654px;height:47px;',
			height: 47,width: 654,
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
			style: 'position:absolute;left:82px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:169px;top:23px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:564px;top:23px;width:49px;height:19px;',
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
			style: 'position:absolute;left:8px;top:432px;width:654px;height:26px;',
			height: 26,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:7px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:7px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:41px;',
			height: 41,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:35px;',
			height: 35,width: 654,
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
	]
});