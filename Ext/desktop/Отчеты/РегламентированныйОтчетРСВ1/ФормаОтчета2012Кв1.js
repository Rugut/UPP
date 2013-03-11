Ext.define('Отчеты.РегламентированныйОтчетРСВ1.ФормаОтчета2012Кв1',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 670,
	iconCls: 'bogus',
	title: 'РСВ-1 ПФР',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Справка',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Отправка',
				},
				{
					text:'РазделительЗаполнить',
				},
				{
					text:'Расшифровать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'Отправить',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'ПодменюОчистить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель7',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Действие2',
				},
				{
					text:'Записать',
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
					title:'Раздел1',
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
					title:'Раздел2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:237px;width:640px;height:24px;',
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
					title:'Раздел31',
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
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел32',
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
					title:'Раздел33',
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
					]
				},
				{
					title:'Раздел34',
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
					title:'Раздел35',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:234px;width:640px;height:24px;',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел35',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел35',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
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
					title:'Раздел36',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел36',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел36',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел37',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел37',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел37',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел38',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел38',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел38',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел4',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:234px;width:640px;height:24px;',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел4',
			style: 'position:absolute;left:226px;top:4px;width:120px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел4',
			style: 'position:absolute;left:351px;top:4px;width:289px;height:20px;',
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
					title:'Раздел5',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:234px;width:640px;height:24px;',
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
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:564px;top:23px;width:49px;height:19px;',
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