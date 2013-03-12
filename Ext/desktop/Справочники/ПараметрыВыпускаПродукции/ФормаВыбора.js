Ext.define('Справочники.ПараметрыВыпускаПродукции.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:433px;height:259px;',
			height: 259,width: 433,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'200',
				},
				{
					text:'Комментарий',
					width:'150',
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
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Действия формы выбрать',
				},
				'-',
			]
		},
	]
});