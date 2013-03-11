Ext.define('Документы.КомплектацияНоменклатуры.ФормаВыбораВыпускаемойНоменклатуры',
	{
	extend: 'Ext.window.Window',
	height: 174,width: 664,
	iconCls: 'bogus',
	title: 'Выберите выпускаемую номенклатуру',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:133px;',
			height: 133,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Спецификация',
				},
			]
		},
	]
});