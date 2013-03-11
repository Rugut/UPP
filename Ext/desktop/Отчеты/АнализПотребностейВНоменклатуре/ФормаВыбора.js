Ext.define('Отчеты.АнализПотребностейВНоменклатуре.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 252,
	iconCls: 'bogus',
	title: 'Выбор поля',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:236px;height:220px;',
			height: 220,width: 236,
			columns:
			[
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:173px;top:233px;width:71px;height:20px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:96px;top:233px;width:71px;height:20px;',
		},
	]
});