Ext.define('Отчеты.РегламентированныйОтчетАвансыПФР.ФормаОтчета2004Кв1',
	{
	extend: 'Ext.window.Window',
	height: 460,width: 780,
	iconCls: 'bogus',
	title: 'Авансы в ПФР',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'РазделительЗаполнить',
				},
				{
					text:'Очистить',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Записать',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:764px;height:346px;',
			height: 346,width: 764,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'ФизЛица',
				},
				{
					title:'Раздел1',
				},
				{
					title:'Раздел2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
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
			style: 'position:absolute;left:244px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2',
			style: 'position:absolute;left:366px;top:5px;width:396px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2_1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_1',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_1',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2_2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_2',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_2',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2_3',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_3',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_3',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2_4',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_4',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2_4',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:764px;height:50px;',
			height: 50,width: 764,
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
			style: 'position:absolute;left:271px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:116px;top:24px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЧисленностьМ1',
			style: 'position:absolute;left:410px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЧисленностьМ2',
			style: 'position:absolute;left:535px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЧисленностьМ3',
			style: 'position:absolute;left:657px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:443px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
	]
});