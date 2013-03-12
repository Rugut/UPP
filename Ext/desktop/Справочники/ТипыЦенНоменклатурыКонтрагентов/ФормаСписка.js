Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Контрагент',
					width:'176',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Тип цены номенклатуры',
					width:'180',
				},
				{
					text:'Включает НДС',
					width:'80',
				},
				{
					text:'Описание',
					width:'220',
				},
				{
					text:'Комментарий',
					width:'220',
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