Ext.define('Документы.РезервированиеТоваров.ФормаРаспределения',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Размещение комплектующих для комплектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть1',
				},
				{
					text:'Разместить',
				},
				{
					text:'Закрыть',
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
					text:'Размещаем',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'РазместитьВсе',
				},
				{
					text:'Действие7',
				},
				{
					text:'НеРазмещатьНичего',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});