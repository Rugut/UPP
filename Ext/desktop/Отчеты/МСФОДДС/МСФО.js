Ext.define('Отчеты.МСФОДДС.МСФО',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 732,
	iconCls: 'bogus',
	title: 'МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:732px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Очистить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РежимВводаИнформации',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:732px;height:25px;',
			items:
			[
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
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:716px;height:253px;',
			height: 253,width: 716,
			items:
			[
				{
					title:'ДДС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиДДС',
			style: 'position:absolute;left:233px;top:208px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийДДС',
			style: 'position:absolute;left:359px;top:208px;width:349px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:362px;width:719px;height:23px;',
			height: 23,width: 719,
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
			style: 'position:absolute;left:83px;top:3px;width:636px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:33px;width:719px;height:75px;',
			height: 75,width: 719,
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
			style: 'position:absolute;left:379px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:239px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:499px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Примечание',
			style: 'position:absolute;left:499px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:53px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});