Ext.define('Документы.ЗакрытиеЗаказовПокупателей.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 595,
	iconCls: 'bogus',
	title: 'Отобрать заказы покупателей',
	
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
			style: 'position:absolute;left:160px;top:212px;width:200px;height:19px;',
		},
	]
});