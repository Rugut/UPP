Ext.define('Справочники.ШкалыОценокКомпетенций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 298,width: 442,
	iconCls: 'bogus',
	title: 'Шкала оценок компетенций',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:354px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:220px;height:19px;',
		},
	]
});