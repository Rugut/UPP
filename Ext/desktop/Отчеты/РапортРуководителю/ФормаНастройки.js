Ext.require(['Данные.Отчеты.РапортРуководителю'], function () 
{
	Ext.define('Отчеты.РапортРуководителю.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:448px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка показателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:8px;width:434px;height:379px;',
			height: 379,width: 434,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:420px;height:24px;',
			width: 420,
			height: 24,
			items:
			[
				{
					text:'Параметры',
					tooltip:'Параметры показателя',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Из списка',
					tooltip:'Выбор показателей из списка',
				},
			]
		},
		{
			id: 'ТабличноеПолеПоказателей',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:420px;height:244px;',
			height: 244,width: 420,
			columns:
			[
				{
					text:'Показатель',
					width:'257',
					dataIndex:'ПредставлениеПоказателя',
					flex:1,
				},
				{
					text:'Показатель',
					width:'100',
					dataIndex:'Показатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РапортРуководителю/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПредставлениеПоказателя',
					},
					{
						name:'Показатель',
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
						var грид = Ext.getCmp('ТабличноеПолеПоказателей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РапортРуководителю.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РапортРуководителю.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаТекДата',
			width: 88,
			height: 19,
			style: 'position:absolute;left:94px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Публиковать в файл:',
			style: 'position:absolute;left:12px;top:168px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Текущая дата:',
			style: 'position:absolute;left:12px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вид отчета:',
			style: 'position:absolute;left:243px;top:99px;width:61px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:306px;top:99px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКаталог',
			width: 276,
			height: 19,
			style: 'position:absolute;left:150px;top:168px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Публиковать по почте:',
			style: 'position:absolute;left:12px;top:192px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаАдресаЭлПочты',
			width: 276,
			height: 19,
			style: 'position:absolute;left:150px;top:192px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автообновление:',
			style: 'position:absolute;left:12px;top:99px;width:108px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаИнтервалАвтообновления',
			style: 'position:absolute;left:122px;top:99px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать выходные',
			style: 'position:absolute;left:297px;top:50px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Дата формирования',
			style: 'position:absolute;left:6px;top:6px;width:420px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:306px;top:26px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дней до текущей даты:',
			style: 'position:absolute;left:184px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата формирования:',
			style: 'position:absolute;left:12px;top:50px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтчета',
			text: 'НадписьДатаОтчета',
			style: 'position:absolute;left:126px;top:50px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Параметры публикации',
			style: 'position:absolute;left:6px;top:146px;width:420px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Дополнительно',
			style: 'position:absolute;left:6px;top:77px;width:420px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'минут',
			style: 'position:absolute;left:184px;top:99px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Время автопубликаций:',
			style: 'position:absolute;left:12px;top:248px;width:136px;height:19px;',
		},
		{
			id: 'ТабличноеПолеВремяПубликации',
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:272px;width:276px;height:80px;',
			height: 80,width: 276,
			columns:
			[
				{
					text:'Время',
					width:'100',
					dataIndex:'Время',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РапортРуководителю/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Время',
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
						var грид = Ext.getCmp('ТабличноеПолеВремяПубликации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РапортРуководителю.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РапортРуководителю.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:150px;top:248px;width:276px;height:24px;',
			width: 276,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать при старте системы',
			style: 'position:absolute;left:12px;top:123px;width:204px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Отправлять с:',
			style: 'position:absolute;left:12px;top:216px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыУчетнойЗаписи',
			width: 276,
			height: 19,
			style: 'position:absolute;left:150px;top:216px;width:276px;height:19px;',
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
			style: 'position:absolute;left:0px;top:395px;width:448px;height:25px;',
			width: 448,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Сохранить изменения и переформировать отчет',
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});