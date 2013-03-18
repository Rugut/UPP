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
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'Консолидация по отчетности',
			style: 'position:absolute;left:14px;top:54px;width:172px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Консолидация по информационной базе',
			style: 'position:absolute;left:14px;top:74px;width:232px;height:15px;',
		},
	]
});