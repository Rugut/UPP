Ext.define('Документы.ЗакрытиеЗаказовНаПроизводство.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 449,width: 595,
	iconCls: 'bogus',
	title: 'Отобрать заказы на производство',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:76px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:180px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПричинаЗакрытия',
			style: 'position:absolute;left:159px;top:221px;width:209px;height:19px;',
		},
	]
});