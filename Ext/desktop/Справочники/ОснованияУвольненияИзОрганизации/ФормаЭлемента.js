Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 163,width: 378,
	iconCls: 'bogus',
	title: 'Основание увольнения (статья ТК РФ)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:107px;top:33px;width:263px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстОснования',
			style: 'position:absolute;left:8px;top:76px;width:362px;height:54px;',
		},
	]
});