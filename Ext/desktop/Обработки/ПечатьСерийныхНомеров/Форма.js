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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:95px;width:764px;height:361px;',
			height: 361,width: 764,
			columns:
			[
				{
					text:'Номенклатура',
					width:'161',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Качество',
					width:'105',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'105',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Серия',
					width:'139',
					dataIndex:'Серия',
					flex:1,
				},
				{
					text:'Серийный номер',
					width:'145',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Количество',
					width:'113',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьСерийныхНомеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Номенклатура',
					},
					{
						name:'Качество',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Серия',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'Количество',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Параметры печати',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФорматЭтикетки',
			width: 143,
			height: 19,
			style: 'position:absolute;left:223px;top:57px;width:143px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Формат:',
			style: 'position:absolute;left:118px;top:58px;width:101px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
		{
			xtype: 'fieldset',
			title: 'Строки для печати',
			style: 'position:absolute;left:8px;top:79px;width:764px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
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
	]
});