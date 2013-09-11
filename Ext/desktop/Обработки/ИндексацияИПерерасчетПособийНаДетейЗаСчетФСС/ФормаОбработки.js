Ext.require(['Данные.Обработки.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС'], function () 
{
	Ext.define('Обработки.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:646px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Индексация и перерасчет государственных пособий гражданам, имеющим детей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:630px;height:377px;',
			height: 377,width: 630,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Индексации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:124px;width:213px;height:135px;',
			height: 135,width: 213,
			columns:
			[
				{
					text:'Индексировать с ...',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Процент',
					width:'100',
					dataIndex:'Процент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Период',
					},
					{
						name:'Процент',
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
						var грид = Ext.getCmp('Индексации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'РазмерыПособий',
			xtype: 'grid',
			style: 'position:absolute;left:220px;top:124px;width:410px;height:135px;',
			height: 135,width: 410,
			columns:
			[
				{
					text:'Вид пособия',
					width:'311',
					dataIndex:'ВидПособия',
					flex:1,
				},
				{
					text:'Размер',
					width:'74',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидПособия',
					},
					{
						name:'Размер',
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
						var грид = Ext.getCmp('РазмерыПособий');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОЗаконах',
			text: 'Индексация государственных пособий гражданам, имеющим детей, производится на основании статьи 4.2 Федерального закона от 19 мая 1995 года № 81-ФЗ. Размеры и сроки индексации определяются законами о федеральном бюджете на соответствующий финансовый год.',
			style: 'position:absolute;left:31px;top:35px;width:599px;height:40px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:99px;width:213px;height:25px;',
			width: 213,
			height: 25,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокПерерасчетов',
			text: 'Перерасчет начисленных пособий на детей',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
		},
		{
			xtype: 'label',
			text: 'История индексации пособий на детей',
			style: 'position:absolute;left:0px;top:83px;width:630px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:165px;width:213px;height:24px;',
			width: 213,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодПерерасчета',
			text: 'Перерасчет пособий за период с:',
			style: 'position:absolute;left:0px;top:35px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НачалоПериода',
			width: 120,
			height: 19,
			style: 'position:absolute;left:185px;top:35px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:312px;top:35px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОкончаниеПериода',
			width: 120,
			height: 19,
			style: 'position:absolute;left:333px;top:35px;width:120px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:89px;width:630px;height:160px;',
			height: 160,width: 630,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПолучателиПособий',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:43px;width:630px;height:117px;',
			height: 117,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Колонка',
					flex:1,
				},
				{
					text:'',
					width:'6',
					dataIndex:'Отметка',
					flex:1,
				},
				{
					text:'Организация',
					width:'179',
					dataIndex:'Группа',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Пособие',
					width:'100',
					dataIndex:'ВидПособия',
					flex:1,
				},
				{
					text:'Дата события, период выплаты',
					width:'160',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'СуммаНачисленная',
					flex:1,
				},
				{
					text:'Сумма к доначислению',
					width:'120',
					dataIndex:'СуммаКДоначислению',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Колонка',
					},
					{
						name:'Отметка',
					},
					{
						name:'Группа',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидПособия',
					},
					{
						name:'Период',
					},
					{
						name:'СуммаНачисленная',
					},
					{
						name:'СуммаКДоначислению',
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
						var грид = Ext.getCmp('ПолучателиПособий');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:483px;top:19px;width:147px;height:24px;',
			width: 147,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:519px;top:19px;width:111px;height:24px;',
			width: 111,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:0px;top:0px;width:116px;height:35px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПериод',
			text: 'Месяц регистрации исправлений:',
			style: 'position:absolute;left:0px;top:61px;width:182px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:277px;width:630px;height:76px;',
			height: 76,width: 630,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Исправления',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:76px;',
			height: 76,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Документ-исправление',
					width:'220',
					dataIndex:'ДокументИсправление',
					flex:1,
				},
				{
					text:'Организация',
					width:'220',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ДокументИсправление',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('Исправления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:322px;top:0px;width:202px;height:24px;',
			width: 202,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'8f03b34-cd46-47e9-aa63-1701c9fa614',
				},
				{
					text:'',
					tooltip:'0ebc47b-f4d9-439c-acd3-fdc624fbac2',
					iconCls:'x-Post',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаОтрытиеСписка',
			text: 'Показать список документов-исправлений',
			style: 'position:absolute;left:0px;top:255px;width:630px;height:16px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 120,
			height: 19,
			style: 'position:absolute;left:185px;top:61px;width:120px;height:19px;',
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
			style: 'position:absolute;left:0px;top:393px;width:646px;height:25px;',
			width: 646,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});