Ext.require(['Данные.Документы.ЗакрытиеВнутреннихЗаказов'], function () 
{
	Ext.define('Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отобрать внутренние заказы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:30px;width:579px;height:120px;',
			height: 120,width: 579,
			items:
			[
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеДатаОтгрузки',
			width: 102,
			height: 19,
			style: 'position:absolute;left:250px;top:68px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:68px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата отгрузки:',
			style: 'position:absolute;left:16px;top:68px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:12px;width:210px;height:19px;',
			width: 210,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРезервов',
			text: 'Наличие резервов:',
			style: 'position:absolute;left:16px;top:12px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:44px;width:210px;height:19px;',
			width: 210,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Состояние отгрузки:',
			style: 'position:absolute;left:16px;top:44px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:356px;top:12px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:310px;top:68px;width:42px;height:19px;',
			width: 42,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:67px;',
			height: 67,width: 565,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеВнутреннихЗаказов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ТабличноеПолеОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:281px;height:24px;',
			width: 281,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:352px;top:4px;width:219px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:205px;width:579px;height:25px;',
			width: 579,
			height: 25,
			items:
			[
				{
					text:'Включить все',
					tooltip:'Отметить все элементы',
				},
				{
					text:'Выключить все',
					tooltip:'Снять отметку со всех элементов',
				},
				'-',
				{
					text:'Вверх',
					tooltip:'',
				},
				{
					text:'Вниз',
					tooltip:'',
				},
				'-',
				{
					text:'По возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'По убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Настройка списка',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Анализ',
					tooltip:'Анализ текущего состояния заказа',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Отобрать заказы по условиям отбора',
				},
			]
		},
		{
			id: 'ТабличноеПолеЗаказы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:233px;width:579px;height:131px;',
			height: 131,width: 579,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Переносить',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'23',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Дата',
					width:'110',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'85',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид заказа',
					width:'100',
					dataIndex:'ВидЗаказа',
					flex:1,
				},
				{
					text:'Заказчик',
					width:'110',
					dataIndex:'Заказчик',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'100',
					dataIndex:'КонтактноеЛицо',
					flex:1,
				},
				{
					text:'Ост. отгр.',
					width:'80',
					dataIndex:'ЗаказыОстаток',
					flex:1,
				},
				{
					text:'Кол.',
					width:'35',
					dataIndex:'ЗаказыКоличество',
					flex:1,
				},
				{
					text:'Рез.',
					width:'35',
					dataIndex:'РезервыКоличество',
					flex:1,
				},
				{
					text:'Разм.',
					width:'35',
					dataIndex:'РазмещенияКоличество',
					flex:1,
				},
				{
					text:'Дата отгрузки',
					width:'80',
					dataIndex:'ДатаОтгрузки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Проведен',
					width:'70',
					dataIndex:'Проведен',
					flex:1,
				},
				{
					text:'Причина закрытия',
					width:'120',
					dataIndex:'ПричинаЗакрытияЗаказа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеВнутреннихЗаказов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Переносить',
					},
					{
						name:'Ссылка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидЗаказа',
					},
					{
						name:'Заказчик',
					},
					{
						name:'КонтактноеЛицо',
					},
					{
						name:'ЗаказыОстаток',
					},
					{
						name:'ЗаказыКоличество',
					},
					{
						name:'РезервыКоличество',
					},
					{
						name:'РазмещенияКоличество',
					},
					{
						name:'ДатаОтгрузки',
					},
					{
						name:'Организация',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Проведен',
					},
					{
						name:'ПричинаЗакрытияЗаказа',
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
						var грид = Ext.getCmp('ТабличноеПолеЗаказы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Заказы',
			style: 'position:absolute;left:8px;top:188px;width:579px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:408px;top:6px;width:179px;height:19px;',
			width: 179,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:317px;top:6px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:76px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:180px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:8px;top:6px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:160px;top:6px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеВводаПричинаЗакрытия.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:160px;top:164px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаЗакрытия',
			text: 'Причина закрытия заказов:',
			style: 'position:absolute;left:8px;top:164px;width:148px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:595px;height:25px;',
			width: 595,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Перенести',
					tooltip:'Перенести документы в табличную часть',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});