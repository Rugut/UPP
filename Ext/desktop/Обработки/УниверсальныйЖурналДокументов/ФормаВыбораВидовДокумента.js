Ext.require(['Данные.Обработки.УниверсальныйЖурналДокументов'], function () 
{
	Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаВыбораВидовДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:292px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выбор объектов: Документ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:276px;height:25px;',
			width: 276,
			height: 25,
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
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:31px;width:276px;height:226px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:292px;height:25px;',
			width: 292,
			height: 25,
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
});