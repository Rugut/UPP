Ext.require(['Данные.Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный'], function () 
{
	Ext.define('Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:725px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
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
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:67px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата:',
			style: 'position:absolute;left:183px;top:33px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 132,
			height: 19,
			style: 'position:absolute;left:218px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:380px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:466px;top:33px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:324px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 630,
			height: 19,
			style: 'position:absolute;left:87px;top:324px;width:630px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:380px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:466px;top:57px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:57px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНачало',
			width: 132,
			height: 19,
			style: 'position:absolute;left:67px;top:58px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:201px;top:57px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодКонец',
			width: 132,
			height: 19,
			style: 'position:absolute;left:218px;top:57px;width:132px;height:19px;',
		},
		{
			id: 'ОсновныеСредства',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:709px;height:211px;',
			height: 211,width: 709,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'ОС',
					width:'87',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Напр. перевода',
					width:'114',
					dataIndex:'НаправлениеПереводаОСиИС',
					flex:1,
				},
				{
					text:'Местонахождение',
					width:'116',
					dataIndex:'МестонахождениеОбъекта',
					flex:1,
				},
				{
					text:'МОЛ',
					width:'116',
					dataIndex:'МОЛ',
					flex:1,
				},
				{
					text:'Счет учета ОС',
					width:'100',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Срок полезного использования',
					width:'100',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Счет снижения стоимости',
					width:'100',
					dataIndex:'СчетСниженияСтоимости',
					flex:1,
				},
				{
					text:'Начислять амортизацию',
					width:'100',
					dataIndex:'НачислятьАмортизацию',
					flex:1,
				},
				{
					text:'Метод начисления амортизации',
					width:'100',
					dataIndex:'МетодНачисленияАмортизации',
					flex:1,
				},
				{
					text:'Счет начисления амортизации ОС',
					width:'100',
					dataIndex:'СчетНачисленияАмортизации',
					flex:1,
				},
				{
					text:'Ликвидационная стоимость',
					width:'100',
					dataIndex:'ЛиквидационнаяСтоимость',
					flex:1,
				},
				{
					text:'Коэфф.ускорения',
					width:'100',
					dataIndex:'КоэффициентУскорения',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Предполагаемый объем продукции',
					width:'78',
					dataIndex:'ПредполагаемыйОбъемПродукции',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации',
					width:'80',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'НаправлениеПереводаОСиИС',
					},
					{
						name:'МестонахождениеОбъекта',
					},
					{
						name:'МОЛ',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'СчетСниженияСтоимости',
					},
					{
						name:'НачислятьАмортизацию',
					},
					{
						name:'МетодНачисленияАмортизации',
					},
					{
						name:'СчетНачисленияАмортизации',
					},
					{
						name:'ЛиквидационнаяСтоимость',
					},
					{
						name:'КоэффициентУскорения',
					},
					{
						name:'СчетЗатрат',
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
						name:'ПредполагаемыйОбъемПродукции',
					},
					{
						name:'СуммаНачисленнойАмортизации',
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
						var грид = Ext.getCmp('ОсновныеСредства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:354px;top:57px;width:20px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:709px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить ОС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:725px;height:25px;',
			dock: 'top',
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
			style: 'position:absolute;left:0px;top:351px;width:725px;height:25px;',
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