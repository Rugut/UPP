Ext.require(['Данные.Документы.ОтменаСкидокНоменклатуры'], function () 
{
	Ext.define('Документы.ОтменаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:739px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отмена скидок номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 127,
			height: 19,
			style: 'position:absolute;left:51px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'От:',
			style: 'position:absolute;left:183px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 163,
			height: 19,
			style: 'position:absolute;left:204px;top:33px;width:163px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:62px;width:384px;height:24px;',
			items:
			[
			]
		},
		{
			id: 'Документы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:86px;width:722px;height:152px;',
			height: 152,width: 722,
			columns:
			[
				{
					text:'N',
					width:'50',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Установка скидок номенклатуры',
					width:'305',
					dataIndex:'УстановкаСкидокНоменклатуры',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'124',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Вид скидки',
					width:'87',
					dataIndex:'ВидСкидки',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'93',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'94',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Условие',
					width:'192',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Значение условия',
					width:'100',
					dataIndex:'ЗначениеУсловия',
					flex:1,
				},
				{
					text:'Тип скидки',
					width:'137',
					dataIndex:'ТипСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтменаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'УстановкаСкидокНоменклатуры',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'ВидСкидки',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'Условие',
					},
					{
						name:'ЗначениеУсловия',
					},
					{
						name:'ТипСкидкиНаценки',
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
						var грид = Ext.getCmp('Документы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтменаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтменаСкидокНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:7px;top:244px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 636,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:244px;width:636px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтменаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтменаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтменаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтменаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:269px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 636,
			height: 19,
			style: 'position:absolute;left:95px;top:269px;width:636px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:739px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});