Ext.define('Справочники.ЕдиницыИзмерения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 322,width: 568,
	iconCls: 'bogus',
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
					text:'Объем',
				},
				{
					text:'Вес',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:568px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});