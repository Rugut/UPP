Ext.define('Справочники.ВидыПараметровВыпускаПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 600,
	iconCls: 'bogus',
	title: 'Виды параметров выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:433px;height:259px;',
			height: 259,width: 433,
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
					text:'Комментарий',
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
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
	]
});