Ext.define('Справочники.НомераГТД.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:434px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номера ГТД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:418px;height:259px;',
			height: 259,width: 418,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Номер',
					width:'180',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
			]
		},
	]
});