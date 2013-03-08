Ext.define('Справочники.Резервы.ФормаНастройкиРезервовЗК',
	{
	extend: 'Ext.window.Window',
	height: 249,width: 483,
	iconCls: 'bogus',
	title: 'Форма',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:7px;width:384px;height:19px;',
		},
	]
});