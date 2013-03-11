Ext.define('Справочники.МаршрутыСогласования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 702,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Наименование',
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
				},
			]
		},
	]
});