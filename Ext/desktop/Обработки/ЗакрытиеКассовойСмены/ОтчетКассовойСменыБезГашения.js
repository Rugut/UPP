Ext.define('Обработки.ЗакрытиеКассовойСмены.ОтчетКассовойСменыБезГашения',
	{
	extend: 'Ext.window.Window',
	height: 93,width: 314,
	iconCls: 'bogus',
	title: 'Отчет кассовой смены без гашения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:68px;width:314px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
			]
		},
	]
});