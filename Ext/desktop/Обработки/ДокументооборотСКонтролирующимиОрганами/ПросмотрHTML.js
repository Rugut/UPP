Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрHTML',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:684px;height:544px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Просмотр HTML',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:519px;width:684px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});