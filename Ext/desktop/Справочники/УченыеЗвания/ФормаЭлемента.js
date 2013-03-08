Ext.define('Справочники.УченыеЗвания.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 438,
	iconCls: 'bogus',
	title: 'Ученое звание',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:378px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:33px;width:240px;height:19px;',
		},
	]
});