Ext.define('Обработки.ОбработкаТабличнойЧастиТовары.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:405px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка табличной части',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:107px;width:712px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Инвертировать флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:712px;height:215px;',
			height: 215,width: 712,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
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
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'220',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'220',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'60',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Ед. хранения',
					width:'54',
					dataIndex:'ЕдиницаХранения',
					flex:1,
				},
				{
					text:'% руч.ск',
					width:'60',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'% автоматических скидок',
					width:'100',
					dataIndex:'ПроцентАвтоматическихСкидок',
					flex:1,
				},
				{
					text:'% наценки',
					width:'60',
					dataIndex:'ПроцентРозничнойНаценки',
					flex:1,
				},
				{
					text:'Розн. цена (руб.)',
					width:'80',
					dataIndex:'ЦенаВРознице',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'%НДС',
					width:'40',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'100',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Сумма (регл.)',
					width:'100',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'250',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Качество',
					width:'61',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Ограничение скидки наценки',
					width:'62',
					dataIndex:'ОграничениеСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбработкаТабличнойЧастиТовары/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
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
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
					},
					{
						name:'Количество',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Цена',
					},
					{
						name:'ЕдиницаХранения',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ПроцентАвтоматическихСкидок',
					},
					{
						name:'ПроцентРозничнойНаценки',
					},
					{
						name:'ЦенаВРознице',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'Всего',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'Качество',
					},
					{
						name:'Склад',
					},
					{
						name:'ОграничениеСкидкиНаценки',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:8px;top:4px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:640px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаВариантаЗачения',
			width: 400,
			height: 19,
			style: 'position:absolute;left:234px;top:4px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:558px;top:353px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Всего',
			width: 80,
			height: 19,
			style: 'position:absolute;left:640px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:366px;top:353px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсегоНДС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:448px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:380px;width:728px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
			xtype: 'fieldset',
			title: 'Товары',
			style: 'position:absolute;left:8px;top:89px;width:712px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переносить в документ только отмеченные позиции',
			style: 'position:absolute;left:8px;top:353px;width:290px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:25px;width:712px;height:60px;',
			height: 60,width: 712,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Установить серию по ГТД',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтранаПроисхождения',
			text: 'Страна происхождения:',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтранаПроисхождения',
			width: 400,
			height: 19,
			style: 'position:absolute;left:226px;top:0px;width:400px;height:19px;',
		},
					]
				},
				{
					title:'Упорядочить строки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:60px;',
			height: 60,width: 712,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'60',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбработкаТабличнойЧастиТовары/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});