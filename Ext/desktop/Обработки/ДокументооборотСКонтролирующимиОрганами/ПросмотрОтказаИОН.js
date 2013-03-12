Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрОтказаИОН',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:575px;height:603px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:578px;width:575px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
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
					text:'N',
					width:'28',
				},
				{
					text:'Текст сообщения',
					width:'100',
				},
			]
		},
	]
});