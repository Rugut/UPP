Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрОтказаИОН',
	{
	extend: 'Ext.window.Window',
	height: 603,width: 575,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:578px;width:575px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:28px;width:559px;height:542px;',
			height: 542,width: 559,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТекстСообщения',
				},
			]
		},
	]
});