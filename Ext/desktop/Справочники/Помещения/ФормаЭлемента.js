Ext.define('Справочники.Помещения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 130,width: 400,
	iconCls: 'bogus',
	title: 'Помещения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:314px;top:33px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:187px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:93px;top:57px;width:299px;height:19px;',
		},
	]
});