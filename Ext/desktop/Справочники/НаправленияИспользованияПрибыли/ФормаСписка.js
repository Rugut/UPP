Ext.define('Справочники.НаправленияИспользованияПрибыли.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Направления использования прибыли',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:340px;height:280px;',
			height: 280,width: 340,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:356px;height:25px;',
			items:
			[
			]
		},
	]
});