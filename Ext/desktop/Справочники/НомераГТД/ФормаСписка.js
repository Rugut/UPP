Ext.define('Справочники.НомераГТД.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:428px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номера ГТД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:412px;height:219px;',
			height: 219,width: 412,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Номер',
					width:'180',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:428px;height:25px;',
			items:
			[
			]
		},
	]
});