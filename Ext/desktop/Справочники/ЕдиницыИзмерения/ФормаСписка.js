Ext.define('Справочники.ЕдиницыИзмерения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:688px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:' ',
					width:'32',
				},
				{
					text:'Владелец',
					width:'120',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'По классификатору',
					width:'120',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Коэффициент',
					width:'80',
				},
				{
					text:'Вес',
					width:'80',
				},
				{
					text:'Объем',
					width:'80',
				},
				{
					text:'Штрихкод',
					width:'120',
				},
				{
					text:'Порог округления',
					width:'70',
				},
				{
					text:'Предупреждать',
					width:'70',
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