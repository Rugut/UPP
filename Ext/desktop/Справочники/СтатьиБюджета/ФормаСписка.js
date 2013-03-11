Ext.define('Справочники.СтатьиБюджета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 644,
	iconCls: 'bogus',
	title: 'Статьи бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:462px;height:259px;',
			height: 259,width: 462,
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
					text:'СтатьяОборотов',
				},
				{
					text:'Знак',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'КоманднаяПанельПереместитьВверх',
				},
				{
					text:'КоманднаяПанельПереместитьВниз',
				},
			]
		},
	]
});