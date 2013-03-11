Ext.define('Справочники.РолиИсполнителей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 428,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Код',
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