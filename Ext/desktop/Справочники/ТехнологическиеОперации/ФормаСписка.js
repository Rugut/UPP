Ext.define('Справочники.ТехнологическиеОперации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические операции',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:598px;height:320px;',
			height: 320,width: 598,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'1800',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'91',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Расценка',
					width:'60',
					dataIndex:'Расценка',
					flex:1,
				},
				{
					text:'Норма времени',
					width:'100',
					dataIndex:'НормаВремени',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Основная статья затрат',
					width:'1200',
					dataIndex:'ОсновнаяСтатьяЗатратНаПроизводство',
					flex:1,
				},
				{
					text:'Основная номенклатурная группа',
					width:'1200',
					dataIndex:'ОсновнаяНоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Отражение зарплаты в бухучете',
					width:'1200',
					dataIndex:'СпособОтраженияЗарплатыВБухучете',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'3500',
					dataIndex:'ОсновнойСпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ТехнологическиеОперации").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеОперации/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Расценка',
					},
					{
						name:'НормаВремени',
					},
					{
						name:'Валюта',
					},
					{
						name:'ОсновнаяСтатьяЗатратНаПроизводство',
					},
					{
						name:'ОсновнаяНоменклатурнаяГруппа',
					},
					{
						name:'СпособОтраженияЗарплатыВБухучете',
					},
					{
						name:'ОсновнойСпособРаспределенияЗатратНаВыпуск',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ТехнологическиеОперации").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеОперации/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});