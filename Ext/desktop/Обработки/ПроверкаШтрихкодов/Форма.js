Ext.define('Обработки.ПроверкаШтрихкодов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Проверка штрихкодов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'Загрузить из терминала',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:275px;width:500px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не удалять отсканированные позиции из таблицы проверки',
			style: 'position:absolute;left:8px;top:56px;width:327px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:484px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
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
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Серия',
					width:'250',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'250',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Считано',
					width:'65',
					dataIndex:'Считано',
					flex:1,
				},
				{
					text:'Осталось',
					width:'65',
					dataIndex:'Осталось',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроверкаШтрихкодов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Считано',
					},
					{
						name:'Осталось',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроверяемыйДокумент',
			text: 'Проверяемый документ:',
			style: 'position:absolute;left:8px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроверяемыйДокументОбъект',
			text: '',
			style: 'position:absolute;left:140px;top:33px;width:352px;height:19px;',
		},
	]
});