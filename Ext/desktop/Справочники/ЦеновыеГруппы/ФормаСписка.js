Ext.define('Справочники.ЦеновыеГруппы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 627,
	iconCls: 'bogus',
	title: 'Справочник Ценовые группы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:460px;height:259px;',
			height: 259,width: 460,
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
					text:'Порядок',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:627px;height:25px;',
			items:
			[
				{
					text:'ПереместитьВверх',
				},
				{
					text:'ПереместитьВниз',
				},
			]
		},
	]
});