Ext.define('Справочники.ОформленияСтрокПисем.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 366,
	iconCls: 'bogus',
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
				},
				{
					text:'Наименование',
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