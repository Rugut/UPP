Ext.define('Справочники.КлассификаторОКОПФ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 130,width: 400,
	iconCls: 'bogus',
	title: 'Классификатор ОКОПФ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:325px;top:33px;width:67px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:140px;top:33px;width:141px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:140px;top:57px;width:252px;height:19px;',
		},
	]
});