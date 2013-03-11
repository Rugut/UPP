Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 334,width: 376,
	iconCls: 'bogus',
	title: 'Элемент Характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:275px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:360px;height:196px;',
			height: 196,width: 360,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:309px;width:376px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие18',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКП',
			style: 'position:absolute;left:93px;top:57px;width:275px;height:19px;',
		},
	]
});