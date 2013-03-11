Ext.define('Отчеты.ВедомостьВозвратнаяТара.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 311,width: 370,
	iconCls: 'bogus',
	title: 'Лимиты возвратной тары',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:286px;width:370px;height:25px;',
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
			style: 'position:absolute;left:8px;top:8px;width:354px;height:270px;',
			height: 270,width: 354,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:64px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:164px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:114px;width:340px;height:130px;',
			height: 130,width: 340,
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
			style: 'position:absolute;left:6px;top:90px;width:340px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
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
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:8px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:340px;height:220px;',
			height: 220,width: 340,
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
			style: 'position:absolute;left:6px;top:0px;width:340px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:340px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:340px;height:220px;',
			height: 220,width: 340,
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