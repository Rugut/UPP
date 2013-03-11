Ext.define('Обработки.ПомощникПланирования.ФормаРежимСложенияОбъединения',
	{
	extend: 'Ext.window.Window',
	height: 246,width: 251,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:221px;width:251px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});