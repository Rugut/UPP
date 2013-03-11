Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ФормаОтчета2012Кв1',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 670,
	iconCls: 'bogus',
	title: '4-ФСС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Заполнить',
				},
				{
					text:'РазделительЗаполнить',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'ВыгрузитьПакет',
				},
				{
					text:'ПодменюОчистить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Расшифровать',
				},
				{
					text:'Поиск',
				},
				{
					text:'Отправить',
				},
				{
					text:'Отправка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьОтправки',
				},
				{
					text:'Справка',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Проверить',
				},
				{
					text:'ПолучитьРезультат',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:670px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СохранитьИЗакрыть',
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
					title:'Раздел1_1',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_1',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_1',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_2',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_2',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_2',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_3',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_3',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_3',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_31',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:239px;width:640px;height:24px;',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_31',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_31',
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокуРаздел1_31',
			text: 'Добавить',
			style: 'position:absolute;left:491px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокуРаздел1_31',
			text: 'Удалить',
			style: 'position:absolute;left:571px;top:265px;width:75px;height:19px;',
		},
					]
				},
				{
					title:'Раздел1_4',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:257px;width:640px;height:26px;',
			height: 26,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_4',
			style: 'position:absolute;left:226px;top:7px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_4',
			style: 'position:absolute;left:351px;top:7px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_41',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:262px;width:640px;height:22px;',
			height: 22,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_41',
			style: 'position:absolute;left:226px;top:2px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_41',
			style: 'position:absolute;left:351px;top:2px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_42',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:262px;width:640px;height:22px;',
			height: 22,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_42',
			style: 'position:absolute;left:226px;top:2px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_42',
			style: 'position:absolute;left:351px;top:2px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_43',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:262px;width:640px;height:22px;',
			height: 22,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_43',
			style: 'position:absolute;left:226px;top:2px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_43',
			style: 'position:absolute;left:351px;top:2px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_44',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:262px;width:640px;height:22px;',
			height: 22,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_44',
			style: 'position:absolute;left:226px;top:2px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_44',
			style: 'position:absolute;left:351px;top:2px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел1_5',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:262px;width:640px;height:22px;',
			height: 22,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_5',
			style: 'position:absolute;left:226px;top:3px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел1_5',
			style: 'position:absolute;left:351px;top:3px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2_6_7',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_6_7',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_6_7',
			style: 'position:absolute;left:352px;top:5px;width:288px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2_8_9',
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_8_9',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_8_9',
			style: 'position:absolute;left:352px;top:5px;width:288px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:654px;height:37px;',
			height: 37,width: 654,
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