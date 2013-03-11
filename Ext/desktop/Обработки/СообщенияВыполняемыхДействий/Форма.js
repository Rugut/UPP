Ext.define('Обработки.СообщенияВыполняемыхДействий.Форма',
	{
	extend: 'Ext.window.Window',
	height: 303,width: 483,
	iconCls: 'bogus',
	title: 'Внимание!',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:279px;width:483px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
	]
});