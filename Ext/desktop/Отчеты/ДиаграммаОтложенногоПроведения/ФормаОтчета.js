Ext.define('Отчеты.ДиаграммаОтложенногоПроведения.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 947,
	iconCls: 'bogus',
	title: 'Диаграмма отложенного проведения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:947px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Статистика',
				},
			]
		},
	]
});