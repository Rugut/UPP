Ext.define('Отчеты.РегламентированныйОтчетРСВ1.ФормаОтчета2012Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'РСВ-1 ПФР',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				'-',
				{
					text:'Расшифровать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:670px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
					title:'Раздел 1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1',
			style: 'position:absolute;left:227px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:237px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел2',
			text: 'Добавить',
			style: 'position:absolute;left:406px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел2',
			text: 'Удалить',
			style: 'position:absolute;left:486px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел2',
			text: '',
			style: 'position:absolute;left:275px;top:265px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел2',
			text: '',
			style: 'position:absolute;left:371px;top:265px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел2',
			text: 'Перейти',
			style: 'position:absolute;left:570px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 3.1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел31',
			text: 'Добавить',
			style: 'position:absolute;left:494px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел31',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел31',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел31',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:4px;width:220px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтраницы1',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:118px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки35',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:355px;top:265px;width:132px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки4',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:355px;top:265px;width:132px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки5',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:355px;top:265px;width:132px;height:19px;text-align:right;',
		},
					]
				},
				{
					title:'Раздел 3.2',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки31',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:355px;top:265px;width:132px;height:19px;text-align:right;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел32',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел32',
			style: 'position:absolute;left:351px;top:5px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3.3',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел33',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел33',
			style: 'position:absolute;left:351px;top:5px;width:289px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел2',
			text: '999 из 999',
			style: 'position:absolute;left:301px;top:265px;width:64px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Раздел 3.4',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел34',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел34',
			style: 'position:absolute;left:351px;top:5px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3.5',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:234px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел35',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел35',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:4px;width:220px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел35',
			text: 'Добавить',
			style: 'position:absolute;left:494px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел35',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 3.6',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел36',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел36',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:4px;width:220px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3.7',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел37',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел37',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:4px;width:220px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3.8',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел38',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел38',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:4px;width:220px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 4',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:234px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел4',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел4',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:4px;width:220px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел4',
			text: 'Добавить',
			style: 'position:absolute;left:494px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел4',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 5',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:234px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел5',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел5',
			style: 'position:absolute;left:351px;top:5px;width:289px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел37',
			text: 'Добавить',
			style: 'position:absolute;left:494px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел37',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
			xtype: 'combobox',
			style: 'position:absolute;left:433px;top:23px;width:116px;height:19px;',
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
			tabBar:{hidden:true},
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
			style: 'position:absolute;left:183px;top:7px;width:80px;height:19px;text-align:left;',
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
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
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