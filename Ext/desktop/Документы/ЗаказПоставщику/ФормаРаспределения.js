Ext.define('Документы.ЗаказПоставщику.ФормаРаспределения',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Заполнение комплектующих для комплектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разместить',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительЗакрыть1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:384px;height:229px;',
			height: 229,width: 384,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'НеРазмещено',
				},
				{
					text:'Заполняем',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'НеЗаполнятьНичего',
				},
				{
					text:'ЗаполнитьВсе',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});