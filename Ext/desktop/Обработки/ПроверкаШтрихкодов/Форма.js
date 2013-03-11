Ext.define('Обработки.ПроверкаШтрихкодов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 500,
	iconCls: 'bogus',
	title: 'Обработка  Проверка штрихкодов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'ЗагрузитьИзТерминала',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:275px;width:500px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:484px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:119px;width:484px;height:148px;',
			height: 148,width: 484,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'Считано',
				},
				{
					text:'Осталось',
				},
			]
		},
	]
});