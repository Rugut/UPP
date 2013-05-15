Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораЗадолженностей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:354px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Подбор задолженности для платежа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:75px;width:764px;height:220px;',
			height: 220,width: 764,
			columns:
			[
				{
					text:'Вид взаиморасчетов',
					width:'100',
					dataIndex:'ВидВзаиморасчетов',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'186',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'195',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'87',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'129',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'120',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'Дата возникновения',
					width:'78',
					dataIndex:'ДатаВозникновения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборПараметровРасшифровкиПлатежа/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидВзаиморасчетов',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'СуммаПлатежа',
					},
					{
						name:'ДатаВозникновения',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:317px;width:102px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:121px;top:317px;width:133px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:300px;width:664px;height:46px;',
		},
		{
			xtype: 'fieldset',
			title: 'Задолженность для оплаты',
			style: 'position:absolute;left:8px;top:35px;width:764px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Планируемое поступление денежных средств',
			style: 'position:absolute;left:408px;top:317px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сумма взаиморасчетов',
			style: 'position:absolute;left:259px;top:317px;width:143px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По фактической задолженности',
			style: 'position:absolute;left:8px;top:8px;width:184px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По оперативной задолженности (с учетом заказов)',
			style: 'position:absolute;left:201px;top:8px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыбрано',
			text: 'Всего выбрано:',
			style: 'position:absolute;left:491px;top:8px;width:281px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:51px;width:764px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});