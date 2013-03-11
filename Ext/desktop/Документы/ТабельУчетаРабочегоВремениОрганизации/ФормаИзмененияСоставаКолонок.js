Ext.define('Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаИзмененияСоставаКолонок',
	{
	extend: 'Ext.window.Window',
	height: 467,width: 306,
	iconCls: 'bogus',
	title: 'Состав колонок табеля',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:442px;width:306px;height:25px;',
			items:
			[
				{
					text:'Ок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});