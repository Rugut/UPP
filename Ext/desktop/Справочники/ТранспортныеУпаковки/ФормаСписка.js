Ext.define('Справочники.ТранспортныеУпаковки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 340,width: 612,
	iconCls: 'bogus',
	title: 'Справочник Транспортные упаковки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:596px;height:299px;',
			height: 299,width: 596,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерУпаковки',
				},
				{
					text:'Наименование',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:612px;height:25px;',
			items:
			[
			]
		},
	]
});