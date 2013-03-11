Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПротоколаФСГС',
	{
	extend: 'Ext.window.Window',
	height: 298,width: 403,
	iconCls: 'bogus',
	title: 'Протокол',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:403px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстПротокола',
			style: 'position:absolute;left:8px;top:80px;width:387px;height:185px;',
		},
	]
});