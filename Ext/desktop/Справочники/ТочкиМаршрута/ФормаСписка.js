Ext.define('Справочники.ТочкиМаршрута.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 560,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Подразделение',
				},
				{
					text:'РабочийЦентр',
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
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
			]
		},
	]
});