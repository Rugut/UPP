Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 480,
	iconCls: 'bogus',
	title: 'Настройки формирования документов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:58px;width:380px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:33px;width:380px;height:19px;',
		},
	]
});