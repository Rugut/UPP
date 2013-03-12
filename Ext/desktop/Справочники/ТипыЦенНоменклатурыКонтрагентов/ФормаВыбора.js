Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'180',
				},
				{
					text:'Валюта',
					width:'80',
				},
				{
					text:'Включает НДС',
					width:'80',
				},
				{
					text:'Комментарий',
					width:'180',
				},
				{
					text:'Тип цены номенклатуры',
					width:'175',
				},
				{
					text:'Описание типа цены номенклатуры контрагента',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
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