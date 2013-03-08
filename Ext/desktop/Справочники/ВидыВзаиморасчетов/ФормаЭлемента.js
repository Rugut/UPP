Ext.define('Справочники.ВидыВзаиморасчетов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 422,
	iconCls: 'bogus',
	title: 'Виды взаиморасчетов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:354px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:216px;height:19px;',
		},
	]
});