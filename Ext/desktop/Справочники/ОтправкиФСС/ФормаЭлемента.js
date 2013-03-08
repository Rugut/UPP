Ext.define('Справочники.ОтправкиФСС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 308,width: 352,
	iconCls: 'bogus',
	title: 'Отправка на сервер ФСС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторОтправкиНаСервере',
			style: 'position:absolute;left:95px;top:33px;width:249px;height:19px;',
		},
	]
});