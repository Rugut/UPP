Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 550,
	iconCls: 'bogus',
	title: 'Типы цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:534px;height:280px;',
			height: 280,width: 534,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Владелец',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВалютаЦены',
				},
				{
					text:'ТипЦеныНоменклатуры',
				},
				{
					text:'ЦенаВключаетНДС',
				},
				{
					text:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:550px;height:25px;',
			items:
			[
			]
		},
	]
});