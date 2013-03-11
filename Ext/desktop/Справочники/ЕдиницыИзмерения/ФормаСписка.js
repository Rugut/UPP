Ext.define('Справочники.ЕдиницыИзмерения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 688,
	iconCls: 'bogus',
	title: 'Единицы измерения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:672px;height:280px;',
			height: 280,width: 672,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Владелец',
				},
				{
					text:'Код',
				},
				{
					text:'ЕдиницаПоКлассификатору',
				},
				{
					text:'Наименование',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Вес',
				},
				{
					text:'Объем',
				},
				{
					text:'ШтрихКод',
				},
				{
					text:'ПорогОкругления',
				},
				{
					text:'ПредупреждатьОНецелыхМестах',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			items:
			[
			]
		},
	]
});