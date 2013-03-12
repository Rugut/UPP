Ext.define('Справочники.ДетализацияАналитическогоБаланса.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:364px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Детализация аналитического баланса',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:348px;height:280px;',
			height: 280,width: 348,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:364px;height:25px;',
			items:
			[
			]
		},
	]
});