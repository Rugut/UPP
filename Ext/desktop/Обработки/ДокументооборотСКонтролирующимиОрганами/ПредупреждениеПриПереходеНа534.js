Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПредупреждениеПриПереходеНа534',
	{
	extend: 'Ext.window.Window',
	height: 273,width: 653,
	iconCls: 'bogus',
	title: 'Внимание!',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:248px;width:653px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
	]
});