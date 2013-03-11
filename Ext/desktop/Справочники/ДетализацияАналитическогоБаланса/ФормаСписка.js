Ext.define('Справочники.ДетализацияАналитическогоБаланса.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 364,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
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