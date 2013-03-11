Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФорма3Информ.ФормаОтчета2011Кв4',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 670,
	iconCls: 'bogus',
	title: 'Форма № 3-информ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'РазделительОтправка',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Отправить',
				},
				{
					text:'Поиск',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Проверить',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отправка',
				},
				{
					text:'ПодменюОчистить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'Справка',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Записать',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:104px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Раздел1',
				},
				{
					title:'Раздел2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:76px;width:654px;height:28px;',
			height: 28,width: 654,
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
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:299px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:414px;width:654px;height:24px;',
			height: 24,width: 654,
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
			style: 'position:absolute;left:263px;top:5px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:43px;',
			height: 43,width: 654,
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