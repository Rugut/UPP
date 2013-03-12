Ext.define('Справочники.ТранспортныеУпаковки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:612px;height:340px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'24',
				},
				{
					text:'Номер',
					width:'39',
				},
				{
					text:'Наименование',
					width:'350',
				},
				{
					text:'Коэффициент',
					width:'79',
				},
				{
					text:'Владелец',
					width:'350',
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