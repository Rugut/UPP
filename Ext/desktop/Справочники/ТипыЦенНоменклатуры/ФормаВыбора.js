Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 496,
	iconCls: 'bogus',
	title: 'Типы цен номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:480px;height:259px;',
			height: 259,width: 480,
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
					text:'ВалютаЦены',
				},
				{
					text:'БазовыйТипЦен',
				},
				{
					text:'Рассчитывается',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:496px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});