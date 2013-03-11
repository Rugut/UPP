Ext.define('Отчеты.ПланированиеЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 800,
	iconCls: 'bogus',
	title: 'Планирование закупок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'СформироватьЗаказ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьНастройки',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительСформироватьЗаказ',
				},
				{
					text:'Восстановитьнастройки',
				},
				{
					text:'Сформировать',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'Восстановитьнастройки',
				},
				{
					text:'СформироватьЗаказ',
				},
				{
					text:'Действие2',
				},
				{
					text:'ФормированиеВнутреннихЗаказов',
				},
				{
					text:'ФормированиеВнутреннихЗаказов',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'РазделительФормированиеВнутреннихЗаказов',
				},
				{
					text:'СохранитьНастройки',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:123px;',
			height: 123,width: 784,
			items:
			[
				{
					title:'СтраницаПараметры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонПродаж',
			style: 'position:absolute;left:248px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачПродаж',
			style: 'position:absolute;left:148px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПродаж',
			text: '...',
			style: 'position:absolute;left:330px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонЗакупок',
			style: 'position:absolute;left:248px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачЗакупок',
			style: 'position:absolute;left:148px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗакупок',
			text: '...',
			style: 'position:absolute;left:330px;top:30px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОкруглятьВБольшуюСторону',
			style: 'position:absolute;left:586px;top:54px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТипЦенНоменклатуры',
			style: 'position:absolute;left:148px;top:78px;width:201px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОтбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:67px;',
			height: 67,width: 770,
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
			style: 'position:absolute;left:6px;top:6px;width:770px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СтраницаДополнительныеПоля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:67px;',
			height: 67,width: 770,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СтраницаПоказатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:91px;',
			height: 91,width: 770,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Показатель',
				},
			]
		},
					]
				},
			]
		},
	]
});