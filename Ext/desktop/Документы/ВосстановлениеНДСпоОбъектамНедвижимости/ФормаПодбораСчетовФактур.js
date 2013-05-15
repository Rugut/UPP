Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактур',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:577px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор счетов-фактур',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:55px;width:561px;height:204px;',
			height: 204,width: 561,
			columns:
			[
				{
					text:'',
					width:'40',
					dataIndex:'Выбрана',
					flex:1,
				},
				{
					text:'Счет фактура',
					width:'100',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'100',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Код операции (для декларации)',
					width:'100',
					dataIndex:'КодОперацииДляДекларации',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'100',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'100',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'100',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВосстановлениеНДСпоОбъектамНедвижимости/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Выбрана',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'КодОперацииДляДекларации',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОсновноеСредство',
			text: 'Основное средство:',
			style: 'position:absolute;left:8px;top:8px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновноеСредство',
			style: 'position:absolute;left:118px;top:8px;width:248px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:577px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:31px;width:561px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Выделить все',
				},
				{
					text:'Снять выделение всех',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
			]
		},
	]
});