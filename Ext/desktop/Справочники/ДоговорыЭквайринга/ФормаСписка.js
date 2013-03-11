Ext.define('Справочники.ДоговорыЭквайринга.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 658,
	iconCls: 'bogus',
	title: 'Договоры эквайринга',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:642px;height:259px;',
			height: 259,width: 642,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Эквайрер',
				},
				{
					text:'Договор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
			]
		},
	]
});