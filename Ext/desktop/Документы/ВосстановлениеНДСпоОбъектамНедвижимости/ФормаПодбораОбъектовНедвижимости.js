Ext.require(['Данные.Документы.ВосстановлениеНДСпоОбъектамНедвижимости'], function () 
{
	Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораОбъектовНедвижимости',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:538px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор объектов недвижимости',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ОбъектыНедвижимостиПодбор',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:79px;width:522px;height:191px;',
			height: 191,width: 522,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Выбран',
					flex:1,
				},
				{
					text:'Объект недвижимости',
					width:'120',
					dataIndex:'ОбъектНедвижимости',
					flex:1,
				},
				{
					text:'Дата ввода в эксплуатацию (БУ)',
					width:'80',
					dataIndex:'ДатаВводаВЭксплуатациюБУ',
					flex:1,
				},
				{
					text:'Дата начала начисления амортизации (НУ)',
					width:'80',
					dataIndex:'ДатаНачисленияАмортизацииНУ',
					flex:1,
				},
				{
					text:'Стоимость объекта недвижимости',
					width:'120',
					dataIndex:'СтоимостьОбъектаНедвижимости',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВосстановлениеНДСпоОбъектамНедвижимости/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Выбран',
					},
					{
						name:'ОбъектНедвижимости',
					},
					{
						name:'ДатаВводаВЭксплуатациюБУ',
					},
					{
						name:'ДатаНачисленияАмортизацииНУ',
					},
					{
						name:'СтоимостьОбъектаНедвижимости',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ОбъектыНедвижимостиПодбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораОбъектовНедвижимостиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораОбъектовНедвижимостиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГруппыУчетаОС',
			text: 'Группы учета ОС:',
			style: 'position:absolute;left:8px;top:7px;width:90px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппыУчетаОС',
			width: 427,
			height: 19,
			style: 'position:absolute;left:103px;top:7px;width:427px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать только объекты недвижимости, введенные в эксплуатацию в 2006 году',
			style: 'position:absolute;left:8px;top:31px;width:440px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:538px;height:25px;',
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
			style: 'position:absolute;left:8px;top:55px;width:522px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Выделить все',
				},
				{
					text:'Снять выделение всех',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Очистить',
				},
			]
		},
	]
	});
});