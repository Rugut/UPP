Ext.define('Обработки.ПодборМатериаловИАналогов.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:722px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор материалов и аналогов для выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:706px;height:255px;',
			height: 255,width: 706,
			columns:
			[
				{
					text:'Продукция / материал / аналог',
					width:'182',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'89',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'82',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'№ операции',
					width:'54',
					dataIndex:'НомерОперацииМаршрута',
					flex:1,
				},
				{
					text:'Используется для выпуска',
					width:'34',
					dataIndex:'Используется',
					flex:1,
				},
				{
					text:'Норматив',
					width:'60',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Количество',
					width:'60',
					dataIndex:'КоличествоВыпуск',
					flex:1,
				},
				{
					text:'Всего',
					width:'60',
					dataIndex:'КоличествоВсего',
					flex:1,
				},
				{
					text:'Единица',
					width:'45',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Приоритет',
					width:'59',
					dataIndex:'Приоритет',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'74',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'77',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'ВидВыпуска',
					width:'67',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Заказ выпуска',
					width:'100',
					dataIndex:'ЗаказВыпуска',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборМатериаловИАналогов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Спецификация',
					},
					{
						name:'НомерОперацииМаршрута',
					},
					{
						name:'Используется',
					},
					{
						name:'Количество',
					},
					{
						name:'КоличествоВыпуск',
					},
					{
						name:'КоличествоВсего',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Приоритет',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ВидВыпуска',
					},
					{
						name:'Заказ',
					},
					{
						name:'ЗаказВыпуска',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:722px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:706px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Автозамена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Склад остатков:',
			style: 'position:absolute;left:8px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОстатков',
			style: 'position:absolute;left:101px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:315px;width:706px;height:95px;',
			height: 95,width: 706,
			columns:
			[
				{
					text:'Материал',
					width:'100',
					dataIndex:'Материал',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'100',
					dataIndex:'ХарактеристикаМатериала',
					flex:1,
				},
				{
					text:'Свободный остаток (на складе и в производстве)',
					width:'100',
					dataIndex:'Остаток',
					flex:1,
				},
				{
					text:'Ед.',
					width:'45',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборМатериаловИАналогов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Материал',
					},
					{
						name:'ХарактеристикаМатериала',
					},
					{
						name:'Остаток',
					},
					{
						name:'ЕдиницаИзмерения',
					},
				]
			},
		},
	]
});