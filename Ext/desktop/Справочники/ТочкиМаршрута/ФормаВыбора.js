Ext.define('Справочники.ТочкиМаршрута.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Точки маршрута',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:453px;height:259px;',
			height: 259,width: 453,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'350',
				},
				{
					text:'Подразделение',
					width:'350',
				},
				{
					text:'Рабочий центр',
					width:'350',
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
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
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