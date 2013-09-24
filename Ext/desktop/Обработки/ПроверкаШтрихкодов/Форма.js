Ext.require(['Данные.Обработки.ПроверкаШтрихкодов'], function () 
{
	Ext.define('Обработки.ПроверкаШтрихкодов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Проверка штрихкодов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			width: 500,
			height: 25,
			items:
			[
				{
					text:'Загрузить из терминала',
					tooltip:'c267e97-c502-4c5e-a32a-ccf971f05aa',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Таблица проверяемых товаров',
			style: 'position:absolute;left:8px;top:79px;width:484px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не удалять отсканированные позиции из таблицы проверки',
			style: 'position:absolute;left:8px;top:56px;width:327px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:484px;height:24px;',
			width: 484,
			height: 24,
			items:
			[
				{
					text:'Действие1',
					tooltip:'',
				},
				{
					text:'Действие2',
					tooltip:'',
				},
				{
					text:'Действие3',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Действие4',
					tooltip:'',
				},
			]
		},
		{
			id: 'Товары',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроверкаШтрихкодов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПроверкаШтрихкодов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроверкаШтрихкодов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
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
			text: 'НадписьПроверяемыйДокументОбъект',
			style: 'position:absolute;left:140px;top:33px;width:352px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:275px;width:500px;height:25px;',
			width: 500,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});