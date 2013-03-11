Ext.define('Справочники.НомераГТД.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 260,width: 428,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Комментарий',
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