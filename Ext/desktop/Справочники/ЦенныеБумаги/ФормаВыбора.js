Ext.define('Справочники.ЦенныеБумаги.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 450,
	iconCls: 'bogus',
	title: 'Ценные бумаги',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:434px;height:259px;',
			height: 259,width: 434,
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
			style: 'position:absolute;left:0px;top:0px;width:450px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});