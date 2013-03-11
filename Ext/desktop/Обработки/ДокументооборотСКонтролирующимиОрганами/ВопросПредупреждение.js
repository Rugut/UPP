Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВопросПредупреждение',
	{
	extend: 'Ext.window.Window',
	height: 218,width: 663,
	iconCls: 'bogus',
	title: 'ВНИМАНИЕ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:193px;width:663px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОтмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыПродолжить',
				},
			]
		},
	]
});