Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПредупреждениеПриПереходеНа534',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:273px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
		{
			xtype: 'checkbox',
			boxLabel: 'Больше не показывать это сообщение',
			style: 'position:absolute;left:8px;top:225px;width:217px;height:15px;',
		},
	]
});