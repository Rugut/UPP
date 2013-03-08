Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 133,width: 396,
	iconCls: 'bogus',
	title: 'Хранилище дополнительной информации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:81px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:92px;top:56px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:92px;top:33px;width:296px;height:19px;',
		},
	]
});