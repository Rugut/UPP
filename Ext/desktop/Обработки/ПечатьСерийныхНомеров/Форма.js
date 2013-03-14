Ext.define('Обработки.ПечатьСерийныхНомеров.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Печать серийных номеров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Печатать',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печатать',
				},
				'-',
				'-',
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
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
					width:'161',
				},
				{
					text:'Качество',
					width:'105',
				},
				{
					text:'Характеристика',
					width:'105',
				},
				{
					text:'Серия',
					width:'139',
				},
				{
					text:'Серийный номер',
					width:'145',
				},
				{
					text:'Количество',
					width:'113',
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
			xtype: 'label',
			name: 'Надпись6',
			text: 'Формат:',
			style: 'position:absolute;left:118px;top:58px;width:101px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШиринаЭтикетки',
			style: 'position:absolute;left:450px;top:57px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ширина (мм):',
			style: 'position:absolute;left:372px;top:57px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВысотаЭтикетки',
			style: 'position:absolute;left:553px;top:57px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Высота (мм):',
			style: 'position:absolute;left:479px;top:57px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать сразу',
			style: 'position:absolute;left:8px;top:57px;width:98px;height:18px;',
		},
		{
			xtype: 'button',
			name: 'КоличествоКопий',
			text: 'Изменить количество',
			style: 'position:absolute;left:576px;top:57px;width:190px;height:19px;',
		},
	]
});