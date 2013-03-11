Ext.define('Справочники.ПричиныСписания.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 350,
	iconCls: 'bogus',
	title: 'Справочник Причины списания',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:334px;height:280px;',
			height: 280,width: 334,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:350px;height:25px;',
			items:
			[
			]
		},
	]
});