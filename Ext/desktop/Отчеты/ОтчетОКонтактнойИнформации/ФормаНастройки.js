Ext.define('Отчеты.ОтчетОКонтактнойИнформации.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 397,width: 490,
	iconCls: 'bogus',
	title: 'Настройка ""Отчет о контактной информации""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:490px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:356px;',
			height: 356,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:113px;width:460px;height:160px;',
			height: 160,width: 460,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Тип',
				},
				{
					text:'ВидКонтактнойИнформации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:89px;width:250px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'КнопкаУстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'КнопкаСнятьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтрокаПерсональныхВидовКИ',
			style: 'position:absolute;left:7px;top:311px;width:459px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:459px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
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
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});