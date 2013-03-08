Ext.define('Справочники.ЗаявкиКандидатов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 649,
	iconCls: 'bogus',
	title: 'Кандидаты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:341px;top:33px;width:300px;height:19px;',
		},
	]
});