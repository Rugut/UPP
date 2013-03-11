Ext.define('Справочники.НоменклатурныеУзлы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 641,
	iconCls: 'bogus',
	title: 'Номенклатурные узлы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:569px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:431px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:94px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:326px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:625px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:625px;height:220px;',
			height: 220,width: 625,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидНорматива',
				},
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
					text:'СтатьяЗатрат',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:641px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});