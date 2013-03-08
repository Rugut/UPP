Ext.define('Документы.Опрос.ФормаВводаОтветаТекст',
	{
	extend: 'Ext.window.Window',
	height: 153,width: 341,
	iconCls: 'bogus',
	title: 'Ответ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТекст',
			style: 'position:absolute;left:8px;top:29px;width:325px;height:91px;',
		},
	]
});