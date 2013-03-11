Ext.define('Обработки.ПроведениеДокументовПоРегистрамНДС.Форма',
	{
	extend: 'Ext.window.Window',
	height: 398,width: 338,
	iconCls: 'bogus',
	title: 'Проведение документов по регистрам НДС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:338px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:338px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:70px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:171px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:53px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:153px;width:322px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Обновить',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});