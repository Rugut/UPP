Ext.define('Справочники.ТранспортныеУпаковки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Транспортные упаковки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:608px;height:335px;',
			height: 335,width: 608,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Номер',
					width:'42',
				},
				{
					text:'Наименование',
					width:'365',
				},
				{
					text:'Коэффициент',
					width:'80',
				},
				{
					text:'Владелец',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});