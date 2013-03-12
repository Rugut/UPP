Ext.define('Справочники.ОформленияСтрокПисем.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:366px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оформления строк писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:350px;height:259px;',
			height: 259,width: 350,
			columns:
			[
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:366px;height:25px;',
			items:
			[
			]
		},
	]
});