Ext.define('Отчеты.ВзаиморасчетыСКомитентами.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 399,width: 620,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:374px;width:620px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:604px;height:360px;',
			height: 360,width: 604,
			items:
			[
				{
					title:'ОсновныеПараметры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:336px;height:261px;',
			height: 261,width: 336,
			columns:
			[
				{
					text:'ПредставлениеГруппировки',
				},
				{
					text:'ТипИтога',
				},
				{
					text:'ДополнительныеПоля',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:49px;width:336px;height:24px;',
			items:
			[
				{
					text:'КнопкаВыбораГруппировокИзСписка',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:65px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:171px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:346px;top:73px;width:250px;height:261px;',
			height: 261,width: 250,
			columns:
			[
				{
					text:'ИспользованиеПоказателя',
				},
				{
					text:'ПредставлениеПоказателя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:346px;top:49px;width:250px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:254px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:386px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:386px;height:304px;',
			height: 304,width: 386,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Поле',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
			]
		},
					]
				},
			]
		},
	]
});