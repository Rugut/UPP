Ext.require(['Данные.Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу'], function () 
{
	Ext.define('Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Расчет авансовых платежей по транспортному налогу',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 308,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:33px;width:308px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:63px;width:771px;height:24px;',
			width: 771,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ТранспортныеСредства',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:87px;width:771px;height:177px;',
			height: 177,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код вида',
					width:'61',
					dataIndex:'КодВида',
					flex:1,
				},
				{
					text:'Идентификационный номер',
					width:'73',
					dataIndex:'ИдентификационныйНомер',
					flex:1,
				},
				{
					text:'Марка',
					width:'82',
					dataIndex:'Марка',
					flex:1,
				},
				{
					text:'Регистрационный знак',
					width:'100',
					dataIndex:'РегистрационныйЗнак',
					flex:1,
				},
				{
					text:'Налоговая база',
					width:'76',
					dataIndex:'НалоговаяБаза',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'79',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Срок использования',
					width:'93',
					dataIndex:'СрокИспользования',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'87',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Ставка налога',
					width:'70',
					dataIndex:'СтавкаНалога',
					flex:1,
				},
				{
					text:'Сумма налога',
					width:'72',
					dataIndex:'СуммаНалога',
					flex:1,
				},
				{
					text:'Код налоговй льготы',
					width:'83',
					dataIndex:'КодНалоговйЛьготы',
					flex:1,
				},
				{
					text:'Сумма налоговой льготы',
					width:'99',
					dataIndex:'СуммаНалоговойЛьготы',
					flex:1,
				},
				{
					text:'Сумма налога к уплате',
					width:'94',
					dataIndex:'СуммаНалогаКуплате',
					flex:1,
				},
				{
					text:'Код ОКАТО',
					width:'100',
					dataIndex:'КодОКАТО',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетАвансовыхПлатежейПоТранспортномуНалогу/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'КодВида',
					},
					{
						name:'ИдентификационныйНомер',
					},
					{
						name:'Марка',
					},
					{
						name:'РегистрационныйЗнак',
					},
					{
						name:'НалоговаяБаза',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СрокИспользования',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СтавкаНалога',
					},
					{
						name:'СуммаНалога',
					},
					{
						name:'КодНалоговйЛьготы',
					},
					{
						name:'СуммаНалоговойЛьготы',
					},
					{
						name:'СуммаНалогаКуплате',
					},
					{
						name:'КодОКАТО',
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
						var грид = Ext.getCmp('ТранспортныеСредства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:274px;width:771px;height:24px;',
			width: 771,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'АвансовыеПлатежи',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:298px;width:771px;height:61px;',
			height: 61,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код ОКАТО',
					width:'100',
					dataIndex:'КодОКАТО',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетАвансовыхПлатежейПоТранспортномуНалогу/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'КодОКАТО',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('АвансовыеПлатежи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетАвансовыхПлатежейПоТранспортномуНалогу.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:787px;height:25px;',
			width: 787,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				{
					text:'Регистрация транспортных средств',
					tooltip:'Регистрация транспортных средств',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Кнопка заполнить нажатие',
				},
				'-',
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: 'НадписьПериодСоставленияОтчета',
			style: 'position:absolute;left:470px;top:33px;width:100px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:445px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:576px;top:33px;width:20px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:787px;height:25px;',
			width: 787,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
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