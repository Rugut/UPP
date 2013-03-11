Ext.define('Отчеты.ТоварныйКалендарь.ФормаНастройка',
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
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОК',
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
			style: 'position:absolute;left:6px;top:73px;width:590px;height:261px;',
			height: 261,width: 590,
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
			style: 'position:absolute;left:6px;top:49px;width:590px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'КнопкаВыбораГруппировокИзСписка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:65px;top:6px;width:80px;height:19px;',
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
					text:'Действие1',
				},
				{
					text:'Действие4',
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