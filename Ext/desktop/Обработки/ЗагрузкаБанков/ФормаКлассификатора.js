Ext.require(['Данные.Обработки.ЗагрузкаБанков'], function () 
{
	Ext.define('Обработки.ЗагрузкаБанков.ФормаКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:479px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка ""Классификатора банков РФ""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:479px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
				},
				'-',
				{
					text:'Далее',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:463px;height:331px;',
			height: 331,width: 463,
			items:
			[
				{
					title:'Выбор источника',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Укажите источник загрузки',
			style: 'position:absolute;left:6px;top:6px;width:449px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'с диска "Информационно-технологическое сопровождение"',
			style: 'position:absolute;left:6px;top:31px;width:330px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'с сайта агентства "РосБизнесКонсалтинг"',
			style: 'position:absolute;left:6px;top:51px;width:240px;height:15px;',
		},
			]
		},
					]
				},
				{
					title:'Классификатор',
					items:
					[
		{
			id: 'ДеревоБанков',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:449px;height:258px;',
			height: 258,width: 449,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Загрузка',
					flex:1,
				},
				{
					text:'Коды: ОКАТО / БИК',
					width:'93',
					dataIndex:'КодРегиона',
					flex:1,
				},
				{
					text:'Наименование',
					width:'207',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип банка',
					width:'100',
					dataIndex:'ТипБанка',
					flex:1,
				},
				{
					text:'Корр. счет',
					width:'100',
					dataIndex:'КоррСчет',
					flex:1,
				},
				{
					text:'Индекс',
					width:'100',
					dataIndex:'Индекс',
					flex:1,
				},
				{
					text:'Город',
					width:'100',
					dataIndex:'Город',
					flex:1,
				},
				{
					text:'Адрес',
					width:'100',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Телефон',
					width:'100',
					dataIndex:'Телефон',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаБанков/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Загрузка',
					},
					{
						name:'КодРегиона',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТипБанка',
					},
					{
						name:'КоррСчет',
					},
					{
						name:'Индекс',
					},
					{
						name:'Город',
					},
					{
						name:'Адрес',
					},
					{
						name:'Телефон',
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
						var грид = Ext.getCmp('ДеревоБанков');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаБанков.ФормаКлассификатораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаБанков.ФормаКлассификатораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДопРеквизитов',
			text: 'Надпись',
			style: 'position:absolute;left:6px;top:290px;width:449px;height:15px;',
		},
					]
				},
				{
					title:'Конфликты',
					items:
					[
		{
			id: 'ДеревоИзмененныхБанков',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:449px;height:211px;',
			height: 211,width: 449,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Загрузка',
					flex:1,
				},
				{
					text:'',
					width:'31',
					dataIndex:'КодРегиона',
					flex:1,
				},
				{
					text:'Наименование',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Классификатор',
					width:'120',
					dataIndex:'ЗнКлассификатора',
					flex:1,
				},
				{
					text:'База',
					width:'120',
					dataIndex:'ЗнБазы',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'ИзмененРеквизит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаБанков/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Загрузка',
					},
					{
						name:'КодРегиона',
					},
					{
						name:'Наименование',
					},
					{
						name:'ЗнКлассификатора',
					},
					{
						name:'ЗнБазы',
					},
					{
						name:'ИзмененРеквизит',
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
						var грид = Ext.getCmp('ДеревоИзмененныхБанков');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаБанков.ФормаКлассификатораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаБанков.ФормаКлассификатораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКонфликты',
			text: 'Список банков, уже имеющихся в базе, но отличающихся от классификатора некоторыми параметрами. \r\nПометьте те банки, изменения для которых необходимо принять.',
			style: 'position:absolute;left:6px;top:6px;width:449px;height:43px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Различия информационной базы с классификатором',
			style: 'position:absolute;left:6px;top:54px;width:449px;height:16px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});