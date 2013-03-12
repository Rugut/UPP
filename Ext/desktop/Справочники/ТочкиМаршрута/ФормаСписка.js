Ext.define('Справочники.ТочкиМаршрута.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:560px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Точки маршрута',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:393px;height:259px;',
			height: 259,width: 393,
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
					width:'168',
				},
				{
					text:'Подразделение',
					width:'142',
				},
				{
					text:'Рабочий центр',
					width:'137',
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
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
			]
		},
	]
});