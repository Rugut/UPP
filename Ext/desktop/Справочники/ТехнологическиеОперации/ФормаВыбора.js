Ext.require(['Данные.Справочники.ТехнологическиеОперации'], function () 
{
	Ext.define('Справочники.ТехнологическиеОперации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические операции',
	
	layout: {type: "fit",align: "stretch"},
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
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Единица',
					width:'87',
					dataIndex:'БазоваяЕдиницаИзмерения.Представление',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'91',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Норма времени (сек.)',
					width:'80',
					dataIndex:'НормаВремени',
					flex:1,
				},
				{
					text:'Основная статья затрат на производство',
					width:'144',
					dataIndex:'ОсновнаяСтатьяЗатратНаПроизводство.Представление',
					flex:1,
				},
				{
					text:'Основной способ распределения затрат на выпуск',
					width:'350',
					dataIndex:'ОсновнойСпособРаспределенияЗатратНаВыпуск.Представление',
					flex:1,
				},
				{
					text:'Способ отражения зарплаты в бухучете',
					width:'120',
					dataIndex:'СпособОтраженияЗарплатыВБухучете.Представление',
					flex:1,
				},
				{
					text:'Основная номенклатурная группа',
					width:'120',
					dataIndex:'ОсновнаяНоменклатурнаяГруппа.Представление',
					flex:1,
				},
				{
					text:'Расценка',
					width:'133',
					dataIndex:'Расценка',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТехнологическиеОперации").data,
					fields: ['Картинка','Код','Наименование','БазоваяЕдиницаИзмерения.Представление','Коэффициент','НормаВремени','ОсновнаяСтатьяЗатратНаПроизводство.Представление','ОсновнойСпособРаспределенияЗатратНаВыпуск.Представление','СпособОтраженияЗарплатыВБухучете.Представление','ОсновнаяНоменклатурнаяГруппа.Представление','Расценка','Валюта.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеОперации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						name:'НормаВремени',
					},
					{
						name:'ОсновнаяСтатьяЗатратНаПроизводство',
					},
					{
						name:'ОсновнойСпособРаспределенияЗатратНаВыпуск',
					},
					{
						name:'СпособОтраженияЗарплатыВБухучете',
					},
					{
						name:'ОсновнаяНоменклатурнаяГруппа',
					},
					{
						name:'Расценка',
					},
					{
						name:'Валюта',
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
						Ext.require(['Справочники.ТехнологическиеОперации.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТехнологическиеОперации.ФормаВыбораСобытия");
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
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТехнологическиеОперации").data,
					fields: ['Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеОперации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						Ext.require(['Справочники.ТехнологическиеОперации.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТехнологическиеОперации.ФормаВыбораСобытия");
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
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
	});
});