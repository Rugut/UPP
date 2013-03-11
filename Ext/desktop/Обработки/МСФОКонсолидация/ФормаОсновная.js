Ext.define('Обработки.МСФОКонсолидация.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 122,width: 254,
	iconCls: 'bogus',
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
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});