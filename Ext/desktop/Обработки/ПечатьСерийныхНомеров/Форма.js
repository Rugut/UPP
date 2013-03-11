Ext.define('Обработки.ПечатьСерийныхНомеров.Форма',
	{
	extend: 'Ext.window.Window',
	height: 462,width: 780,
	iconCls: 'bogus',
	title: 'Обработка  Печать серийных номеров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Печатать',
				},
				{
					text:'Печатать',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:95px;width:764px;height:361px;',
			height: 361,width: 764,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'Качество',
				},
				{
					text:'Характеристика',
				},
				{
					text:'Серия',
				},
				{
					text:'СерийныйНомер',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФорматЭтикетки',
			style: 'position:absolute;left:223px;top:57px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШиринаЭтикетки',
			style: 'position:absolute;left:450px;top:57px;width:21px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВысотаЭтикетки',
			style: 'position:absolute;left:553px;top:57px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КоличествоКопий',
			text: 'Изменить количество',
			style: 'position:absolute;left:576px;top:57px;width:190px;height:19px;',
		},
	]
});