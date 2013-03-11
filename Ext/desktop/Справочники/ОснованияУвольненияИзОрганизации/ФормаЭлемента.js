Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 163,width: 378,
	iconCls: 'bogus',
	title: 'Основание увольнения (статья ТК РФ)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:107px;top:33px;width:263px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:378px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:138px;width:378px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстОснования',
			style: 'position:absolute;left:8px;top:76px;width:362px;height:54px;',
		},
	]
});