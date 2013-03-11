Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 474,
	iconCls: 'bogus',
	title: 'Статьи оборотов по бюджетам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:292px;height:280px;',
			height: 280,width: 292,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:474px;height:25px;',
			items:
			[
			]
		},
	]
});