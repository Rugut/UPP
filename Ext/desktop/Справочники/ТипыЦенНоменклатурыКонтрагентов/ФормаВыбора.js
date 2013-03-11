Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 608,
	iconCls: 'bogus',
	title: 'Типы цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:280px;',
			height: 280,width: 592,
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
					text:'ЦенаВключаетНДС',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ТипЦеныНоменклатуры',
				},
				{
					text:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
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