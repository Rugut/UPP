Ext.define('Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 620,
	iconCls: 'bogus',
	title: 'Отражения начисления НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:604px;height:280px;',
			height: 280,width: 604,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Организация',
				},
				{
					text:'Контрагент',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'ДействиеВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});