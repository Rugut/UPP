Ext.define('Справочники.РолиИсполнителей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:428px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Роли исполнителей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:412px;height:259px;',
			height: 259,width: 412,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Код',
					width:'80',
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