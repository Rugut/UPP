Ext.require(['Данные.Документы.КорректировкаОстатковПоПрогнознымБалансам'], function () 
{
	Ext.define('Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:530px;height:493px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка остатков по прогнозным балансам',
	
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
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Сценарий.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата остатков:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 100,
			height: 19,
			style: 'position:absolute;left:422px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:393px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:393px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:441px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 428,
			height: 19,
			style: 'position:absolute;left:94px;top:441px;width:428px;height:19px;',
		},
		{
			id: 'НовыеОстаткиПоСчетамБюджетирования',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:168px;width:514px;height:220px;',
			height: 220,width: 514,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'120',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'120',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма упр.',
					width:'120',
					dataIndex:'СуммаУпр',
					flex:1,
				},
				{
					text:'Валютная сумма',
					width:'120',
					dataIndex:'ВалютнаяСумма',
					flex:1,
				},
				{
					text:'Сумма сценария',
					width:'120',
					dataIndex:'СуммаСценария',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаОстатковПоПрогнознымБалансам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Счет',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'Валюта',
					},
					{
						name:'СуммаУпр',
					},
					{
						name:'ВалютнаяСумма',
					},
					{
						name:'СуммаСценария',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('НовыеОстаткиПоСчетамБюджетирования');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьБалансУпр',
			text: 'Баланс (сумма упр.):',
			style: 'position:absolute;left:336px;top:393px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБалансСценарий',
			text: 'Баланс (сумма упр.):',
			style: 'position:absolute;left:336px;top:417px;width:186px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Состояние.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:417px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:417px;width:84px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Новые остатки по счетам бюджетирования',
			style: 'position:absolute;left:8px;top:127px;width:514px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Способ корректировки остатков',
			style: 'position:absolute;left:8px;top:81px;width:514px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Только по счетам, указанным в табличной части',
			style: 'position:absolute;left:13px;top:102px;width:271px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По всем счетам',
			style: 'position:absolute;left:291px;top:102px;width:110px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:143px;width:514px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:530px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:468px;width:530px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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