Ext.define('Справочники.ГруппыПочтовойРассылки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 406,
	iconCls: 'bogus',
	title: 'Группы почтовой рассылки',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:324px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:189px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:406px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:390px;height:320px;',
			height: 320,width: 390,
			items:
			[
				{
					title:'СоставГруппы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:376px;height:270px;',
			height: 270,width: 376,
			columns:
			[
				{
					text:'Объект',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:376px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Очистить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие9',
				},
			]
		},
					]
				},
				{
					title:'ИспользованиеВУчетныхЗаписях',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:376px;height:270px;',
			height: 270,width: 376,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'УчетнаяЗапись',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:376px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
			]
		},
	]
});