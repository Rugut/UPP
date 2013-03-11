Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораКБК',
	{
	extend: 'Ext.window.Window',
	height: 408,width: 597,
	iconCls: 'bogus',
	title: 'Выбор КБК',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:597px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
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
				},
				{
					text:'НаименованиеДохода',
				},
			]
		},
	]
});