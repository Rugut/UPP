Ext.define('Справочники.МаршрутыСогласования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:702px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Маршруты согласования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:520px;height:320px;',
			height: 320,width: 520,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:702px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
	]
});