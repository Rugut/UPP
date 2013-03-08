Ext.define('Справочники.Регионы.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 722,
	iconCls: 'bogus',
	title: 'Заполнение справочника Регионы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РодительскийРегион',
			style: 'position:absolute;left:199px;top:8px;width:515px;height:19px;',
		},
	]
});