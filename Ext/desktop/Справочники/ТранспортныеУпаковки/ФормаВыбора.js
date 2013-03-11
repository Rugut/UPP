Ext.define('Справочники.ТранспортныеУпаковки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 376,width: 624,
	iconCls: 'bogus',
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
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});