Ext.define('Справочники.СотрудникиОрганизаций.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 108,width: 442,
	iconCls: 'bogus',
	title: 'Сотрудники',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код1',
			style: 'position:absolute;left:354px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование1',
			style: 'position:absolute;left:112px;top:33px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:112px;top:56px;width:322px;height:19px;',
		},
	]
});