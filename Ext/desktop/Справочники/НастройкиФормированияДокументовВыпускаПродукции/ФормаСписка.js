Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:754px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов выпуска продукции',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:33px;width:488px;height:344px;',
			height: 344,width: 488,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'1200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Выполнено по',
					width:'88',
					dataIndex:'ГраницаФормирования',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'1200',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Вид документов',
					width:'1600',
					dataIndex:'ВидРегулярногоДокумента',
					flex:1,
				},
				{
					text:'Детализация',
					width:'1200',
					dataIndex:'ПериодДетализации',
					flex:1,
				},
				{
					text:'УУ',
					width:'21',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'21',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'21',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'Организация',
					width:'1200',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'1600',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Склад',
					width:'1200',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Выпуск',
					width:'60',
					dataIndex:'ОтразитьВыпуск',
					flex:1,
				},
				{
					text:'Материалы',
					width:'60',
					dataIndex:'ОтразитьМатериалы',
					flex:1,
				},
				{
					text:'Автоматич.',
					width:'60',
					dataIndex:'ФормироватьДокументыАвтоматически',
					flex:1,
				},
				{
					text:'Регламентное задание',
					width:'1200',
					dataIndex:'РегламентноеЗадание',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'1200',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкиФормированияДокументовВыпускаПродукции").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ГраницаФормирования',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидРегулярногоДокумента',
					},
					{
						name:'ПериодДетализации',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
					},
					{
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'Организация',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Склад',
					},
					{
						name:'ОтразитьВыпуск',
					},
					{
						name:'ОтразитьМатериалы',
					},
					{
						name:'ФормироватьДокументыАвтоматически',
					},
					{
						name:'РегламентноеЗадание',
					},
					{
						name:'Комментарий',
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
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:244px;height:344px;',
			height: 344,width: 244,
			columns:
			[
				{
					text:'Наименование',
					width:'3500',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкиФормированияДокументовВыпускаПродукции").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('СправочникДерево');
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
			style: 'position:absolute;left:0px;top:0px;width:754px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});