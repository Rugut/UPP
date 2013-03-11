Ext.define('Обработки.ПроведениеПоПартиям.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 241,width: 400,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:216px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальноеКоличествоСтрокВТранзакции',
			style: 'position:absolute;left:284px;top:112px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальноеКоличествоДокументовВВыборке',
			style: 'position:absolute;left:284px;top:135px;width:94px;height:19px;',
		},
	]
});