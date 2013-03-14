Ext.define('Справочники.НазначенияИспользованияСпецификаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:517px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Назначения использования спецификаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:501px;height:259px;',
			height: 259,width: 501,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:517px;height:25px;',
			items:
			[
				'-',
			]
		},
	]
});