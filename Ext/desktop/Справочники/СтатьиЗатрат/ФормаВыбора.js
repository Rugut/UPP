Ext.define('Справочники.СтатьиЗатрат.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 728,
	iconCls: 'bogus',
	title: 'Статьи затрат',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:546px;height:280px;',
			height: 280,width: 546,
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
					text:'ВидЗатрат',
				},
				{
					text:'СтатусМатериальныхЗатрат',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'ВидЗатратНалоговогоУчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});