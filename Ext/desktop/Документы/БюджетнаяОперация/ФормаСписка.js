Ext.require(['Данные.Документы.БюджетнаяОперация'], function () 
{
	Ext.define('Документы.БюджетнаяОперация.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:403px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Бюджетные операции',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:702px;height:260px;',
			height: 260,width: 702,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'73',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'71',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Период планирования',
					width:'79',
					dataIndex:'ПериодПланирования',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'107',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'158',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'67',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Сумма',
					width:'102',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'133',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'Проект',
					width:'120',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/БюджетнаяОперация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ПериодПланирования',
					},
					{
						name:'Сценарий',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'Сумма',
					},
					{
						name:'ЦФО',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Состояние',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.БюджетнаяОперация.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.БюджетнаяОперация.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:702px;height:99px;',
			height: 99,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборСценарийЗначение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:105px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сценарий:',
			style: 'position:absolute;left:0px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЦФОЗначение',
			width: 257,
			height: 19,
			style: 'position:absolute;left:445px;top:48px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:345px;top:48px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборСтатьяОборотовЗначение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:105px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья оборотов:',
			style: 'position:absolute;left:0px;top:24px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборПроектЗначение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:105px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:0px;top:48px;width:105px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПланированияС',
			width: 105,
			height: 19,
			style: 'position:absolute;left:445px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПланированияПо',
			width: 105,
			height: 19,
			style: 'position:absolute;left:573px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Период с:',
			style: 'position:absolute;left:345px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по',
			style: 'position:absolute;left:555px;top:0px;width:14px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборОтветственный',
			width: 257,
			height: 19,
			style: 'position:absolute;left:445px;top:24px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:345px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборКонтрагент',
			width: 220,
			height: 19,
			style: 'position:absolute;left:105px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:0px;top:72px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборНоменклатура',
			width: 257,
			height: 19,
			style: 'position:absolute;left:445px;top:72px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:345px;top:72px;width:99px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:682px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Пакетный ввод бюджетных операций',
				},
				'-',
				{
					text:'Изменение документов бюджетирования',
				},
				'-',
				{
					text:'Обороты по статьям бюджетов',
				},
			]
		},
	]
	});
});