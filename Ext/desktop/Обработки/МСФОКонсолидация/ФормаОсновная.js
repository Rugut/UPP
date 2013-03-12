Ext.define('Обработки.МСФОКонсолидация.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:254px;height:122px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Консолидация МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:97px;width:254px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});