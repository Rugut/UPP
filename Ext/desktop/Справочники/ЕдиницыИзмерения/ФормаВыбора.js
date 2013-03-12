Ext.define('Справочники.ЕдиницыИзмерения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:568px;height:322px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Единицы измерения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:552px;height:280px;',
			height: 280,width: 552,
			columns:
			[
				{
					text:'',
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
					text:'Объем',
					width:'80',
				},
				{
					text:'Вес',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:568px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});