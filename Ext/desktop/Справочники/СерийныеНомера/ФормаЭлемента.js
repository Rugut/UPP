Ext.define('Справочники.СерийныеНомера.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 422,
	iconCls: 'bogus',
	title: 'Серийные номера',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:100px;top:58px;width:314px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:100px;top:33px;width:314px;height:19px;',
		},
	]
});