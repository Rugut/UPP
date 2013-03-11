Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаДополнительно',
	{
	extend: 'Ext.window.Window',
	height: 371,width: 486,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:486px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:113px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:214px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:117px;width:470px;height:221px;',
			height: 221,width: 470,
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
			style: 'position:absolute;left:8px;top:93px;width:470px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки1',
				},
				{
					text:'СнятьФлажки1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиМенеджер',
			style: 'position:absolute;left:258px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:296px;top:6px;width:20px;height:19px;',
		},
	]
});