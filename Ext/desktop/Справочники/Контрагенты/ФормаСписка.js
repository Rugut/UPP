Ext.define('Справочники.Контрагенты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 694,
	iconCls: 'bogus',
	title: 'Контрагенты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаКонтрагентов',
			style: 'position:absolute;left:235px;top:33px;width:451px;height:19px;',
		},
	]
});