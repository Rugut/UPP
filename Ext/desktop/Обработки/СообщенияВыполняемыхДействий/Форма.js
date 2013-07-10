Ext.define('Обработки.СообщенияВыполняемыхДействий.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внимание!',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:279px;width:483px;height:24px;',
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
		],
	}],
	dockedItems:
	[
	]
});