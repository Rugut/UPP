Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораКБК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:597px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор КБК',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:597px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:581px;height:367px;',
			height: 367,width: 581,
			columns:
			[
				{
					text:'КБК',
					width:'171',
				},
				{
					text:'Наименование дохода',
					width:'230',
				},
			]
		},
	]
});