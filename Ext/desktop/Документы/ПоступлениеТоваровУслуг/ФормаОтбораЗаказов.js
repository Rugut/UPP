Ext.require(['Данные.Документы.ПоступлениеТоваровУслуг'], function () 
{
	Ext.define('Документы.ПоступлениеТоваровУслуг.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:783px;height:518px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать заказы покупателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:781px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Далее>>',
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
			style: 'position:absolute;left:8px;top:41px;width:767px;height:167px;',
			height: 167,width: 767,
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
			style: 'position:absolute;left:258px;top:64px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:64px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата поступления:',
			style: 'position:absolute;left:16px;top:64px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:8px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРазмещений',
			text: 'Наличие размещений:',
			style: 'position:absolute;left:16px;top:8px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:40px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Поступление товара:',
			style: 'position:absolute;left:16px;top:40px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:364px;top:8px;width:273px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:64px;width:42px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:96px;width:210px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеПросроченоДнейОплаты',
			style: 'position:absolute;left:318px;top:120px;width:42px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:120px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОплаты',
			text: 'Состояние оплаты:',
			style: 'position:absolute;left:16px;top:96px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОплаты',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:16px;top:120px;width:132px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:258px;top:120px;width:102px;height:19px;',
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
			style: 'position:absolute;left:6px;top:24px;width:753px;height:114px;',
			height: 114,width: 753,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслуг/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:406px;top:4px;width:219px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:413px;top:17px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВариантОтбора',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:325px;top:17px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:84px;top:17px;width:80px;height:19px;',
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
			style: 'position:absolute;left:188px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:16px;top:17px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:168px;top:17px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:17px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:644px;height:25px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'Инвертировать',
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
			style: 'position:absolute;left:8px;top:250px;width:767px;height:234px;',
			height: 234,width: 767,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'НеЗаполнять',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Переносить',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'22',
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
					width:'90',
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
					width:'86',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор',
					width:'124',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Контактное лицо',
					width:'100',
					dataIndex:'КонтактноеЛицоКонтрагента',
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
					width:'76',
					dataIndex:'ЗаказыОстаток',
					flex:1,
				},
				{
					text:'Кол.',
					width:'34',
					dataIndex:'ЗаказыКоличество',
					flex:1,
				},
				{
					text:'Тара',
					width:'30',
					dataIndex:'ТараКоличество',
					flex:1,
				},
				{
					text:'Ост. опл.',
					width:'84',
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
					width:'89',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Проведен',
					width:'80',
					dataIndex:'Проведен',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслуг/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НеЗаполнять',
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
						name:'КонтактноеЛицоКонтрагента',
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
						name:'ТараКоличество',
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
						Ext.require(['Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Заказы',
			style: 'position:absolute;left:8px;top:212px;width:767px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:783px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<<Назад',
				},
				'-',
				{
					text:'Перенести',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:419px;top:36px;width:356px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Способ заполнения:',
			style: 'position:absolute;left:311px;top:36px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:767px;height:391px;',
			height: 391,width: 767,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:753px;height:332px;',
			height: 332,width: 753,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Склад/Склад заказа',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'86',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Размещено',
					width:'70',
					dataIndex:'РазмещенноеКоличество',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'100',
					dataIndex:'Размещение',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'133',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслуг/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Склад',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'РазмещенноеКоличество',
					},
					{
						name:'Размещение',
					},
					{
						name:'ФлагЗаполнено',
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
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			id: 'ВозвратнаяТара',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:753px;height:334px;',
			height: 334,width: 753,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Склад/Склад заказа',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'100',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Размещено',
					width:'70',
					dataIndex:'РазмещенноеКоличество',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'100',
					dataIndex:'Размещение',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'133',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслуг/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Склад',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'РазмещенноеКоличество',
					},
					{
						name:'Размещение',
					},
					{
						name:'ФлагЗаполнено',
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
						var грид = Ext.getCmp('ВозвратнаяТара');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			id: 'Услуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:753px;height:332px;',
			height: 332,width: 753,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'100',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано1',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'100',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслуг/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано1',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'ФлагЗаполнено',
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
						var грид = Ext.getCmp('Услуги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Оборудование',
					items:
					[
		{
			id: 'Оборудование',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:753px;height:332px;',
			height: 332,width: 753,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Код',
					width:'47',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'77',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Склад/Склад заказа',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Добавить в документ',
					width:'86',
					dataIndex:'ДобавитьВДокумент',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'70',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Осталось получить',
					width:'70',
					dataIndex:'ОсталосьПолучить',
					flex:1,
				},
				{
					text:'Заполнено',
					width:'70',
					dataIndex:'Заполнено',
					flex:1,
				},
				{
					text:'Флаг заполнено',
					width:'100',
					dataIndex:'ФлагЗаполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеТоваровУслуг/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Склад',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ДобавитьВДокумент',
					},
					{
						name:'Запланировано',
					},
					{
						name:'ОсталосьПолучить',
					},
					{
						name:'Заполнено',
					},
					{
						name:'ФлагЗаполнено',
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
						var грид = Ext.getCmp('Оборудование');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоступлениеТоваровУслуг.ФормаОтбораЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Заполнение табличных частей',
			style: 'position:absolute;left:8px;top:14px;width:767px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Товары',
			style: 'position:absolute;left:23px;top:38px;width:102px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Возвратная тара',
			style: 'position:absolute;left:145px;top:38px;width:106px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Услуги',
			style: 'position:absolute;left:23px;top:61px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:419px;top:61px;width:356px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаполнениеСкладов',
			text: 'Заполнение склада:',
			style: 'position:absolute;left:311px;top:61px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оборудование',
			style: 'position:absolute;left:145px;top:61px;width:106px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});