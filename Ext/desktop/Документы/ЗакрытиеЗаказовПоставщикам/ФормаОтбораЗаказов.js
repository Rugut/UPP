Ext.require(['Данные.Документы.ЗакрытиеЗаказовПоставщикам'], function () 
{
	Ext.define('Документы.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать заказы поставщикам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:579px;height:167px;',
			height: 167,width: 579,
			items:
			[
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеДатаПоступления',
			width: 102,
			height: 19,
			style: 'position:absolute;left:250px;top:64px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:64px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата поступления:',
			style: 'position:absolute;left:16px;top:64px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:8px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРазмещений',
			text: 'Наличие размещений:',
			style: 'position:absolute;left:16px;top:8px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:40px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Поступление товара:',
			style: 'position:absolute;left:16px;top:40px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:356px;top:8px;width:209px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:310px;top:64px;width:42px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:96px;width:210px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОплаты',
			style: 'position:absolute;left:310px;top:120px;width:42px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:120px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОплаты',
			text: 'Состояние оплаты:',
			style: 'position:absolute;left:16px;top:96px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОплаты',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:16px;top:120px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеДатаОплаты',
			width: 102,
			height: 19,
			style: 'position:absolute;left:250px;top:120px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			id: 'ТабличноеПолеОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:115px;',
			height: 115,width: 565,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеЗаказовПоставщикам/ВыбратьПоСсылке/100', timeout: 200},
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:8px;top:251px;width:579px;height:25px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				'-',
				{
					text:'Вверх',
				},
				{
					text:'Вниз',
				},
				'-',
				{
					text:'По возрастанию',
				},
				{
					text:'По убыванию',
				},
				'-',
				{
					text:'Настройка списка',
				},
				'-',
				{
					text:'Анализ',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			id: 'ТабличноеПолеЗаказы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:276px;width:579px;height:131px;',
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
					width:'87',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'80',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'110',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'100',
					dataIndex:'КонтактноеЛицо',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Валюта',
					width:'30',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Ост. пол.',
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
					text:'Ост. опл.',
					width:'80',
					dataIndex:'РасчетыОстаток',
					flex:1,
				},
				{
					text:'Разм.',
					width:'35',
					dataIndex:'РазмещенияКоличество',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'80',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Тип скидки',
					width:'80',
					dataIndex:'ТипСкидкиНаценки',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Дата поступления',
					width:'80',
					dataIndex:'ДатаПоступления',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
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
					width:'74',
					dataIndex:'Проведен',
					flex:1,
				},
				{
					text:'Причина закрытия',
					width:'116',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеЗаказовПоставщикам/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидОперации',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'КонтактноеЛицо',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ЗаказыОстаток',
					},
					{
						name:'ЗаказыКоличество',
					},
					{
						name:'РасчетыОстаток',
					},
					{
						name:'РазмещенияКоличество',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'ТипСкидкиНаценки',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДатаПоступления',
					},
					{
						name:'Организация',
					},
					{
						name:'Склад',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Заказы',
			style: 'position:absolute;left:8px;top:236px;width:579px;height:16px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:408px;top:6px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:320px;top:6px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:160px;top:212px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаЗакрытия',
			text: 'Причина закрытия заказов:',
			style: 'position:absolute;left:8px;top:212px;width:148px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:595px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Перенести',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});