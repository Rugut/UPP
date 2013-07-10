Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаВыбораВидовДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:292px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор объектов: Документ',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:31px;width:276px;height:226px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:276px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:292px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});