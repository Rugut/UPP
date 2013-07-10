Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхСЗВК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:756px;height:455px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод данных СЗВ-К',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ЗаписиОСтаже',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:165px;width:740px;height:152px;',
			height: 152,width: 740,
			columns:
			[
				{
					text:'',
					width:'1200',
					dataIndex:'НевидимаяКолонка',
					flex:1,
				},
				{
					text:'Организация',
					width:'60',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Вид деятельности',
					width:'60',
					dataIndex:'ВидДеятельности',
					flex:1,
				},
				{
					text:'',
					width:'1800',
					dataIndex:'НевидимаяКолонка1',
					flex:1,
				},
				{
					text:'Начало периода',
					width:'60',
					dataIndex:'ДатаНачалаЗаписи',
					flex:1,
				},
				{
					text:'Конец периода',
					width:'60',
					dataIndex:'ДатаОкончанияЗаписи',
					flex:1,
				},
				{
					text:'Территориальные условия',
					width:'30',
					dataIndex:'ТерриториальныеУсловия',
					flex:1,
				},
				{
					text:'РК',
					width:'30',
					dataIndex:'РайонныйКоэффициент',
					flex:1,
				},
				{
					text:'',
					width:'1800',
					dataIndex:'НевидимаяКолонка5',
					flex:1,
				},
				{
					text:'',
					width:'1800',
					dataIndex:'ПодписьДолжности',
					flex:1,
				},
				{
					text:'Код особых',
					width:'80',
					dataIndex:'НевидимаяКолонка2',
					flex:1,
				},
				{
					text:'Исчисляемый трудовой стаж',
					width:'1900',
					dataIndex:'НевидимаяКолонка3',
					flex:1,
				},
				{
					text:'условий труда',
					width:'80',
					dataIndex:'ОсобыеУсловияТруда',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'ОснованиеТрудовогоСтажа',
					flex:1,
				},
				{
					text:'Годы',
					width:'27',
					dataIndex:'НулевойПараметрТрудовогоСтажа',
					flex:1,
				},
				{
					text:'Месяцы',
					width:'33',
					dataIndex:'ПервыйПараметрТрудовогоСтажа',
					flex:1,
				},
				{
					text:'Дни',
					width:'30',
					dataIndex:'ВторойПараметрТрудовогоСтажа',
					flex:1,
				},
				{
					text:'Вид отпуска',
					width:'40',
					dataIndex:'ТретийПараметрТрудовогоСтажа',
					flex:1,
				},
				{
					text:'Код позиции списка',
					width:'2700',
					dataIndex:'КодПозицииСписка',
					flex:1,
				},
				{
					text:'Должность',
					width:'2700',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Выслуга лет',
					width:'1500',
					dataIndex:'НевидимаяКолонка4',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'ОснованиеВыслугиЛет',
					flex:1,
				},
				{
					text:'Часы/месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Минуты',
					width:'30',
					dataIndex:'ВторойПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Ставка',
					width:'30',
					dataIndex:'ТретийПараметрВыслугиЛет',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НевидимаяКолонка',
					},
					{
						name:'Организация',
					},
					{
						name:'ВидДеятельности',
					},
					{
						name:'НевидимаяКолонка1',
					},
					{
						name:'ДатаНачалаЗаписи',
					},
					{
						name:'ДатаОкончанияЗаписи',
					},
					{
						name:'ТерриториальныеУсловия',
					},
					{
						name:'РайонныйКоэффициент',
					},
					{
						name:'НевидимаяКолонка5',
					},
					{
						name:'ПодписьДолжности',
					},
					{
						name:'НевидимаяКолонка2',
					},
					{
						name:'НевидимаяКолонка3',
					},
					{
						name:'ОсобыеУсловияТруда',
					},
					{
						name:'ОснованиеТрудовогоСтажа',
					},
					{
						name:'НулевойПараметрТрудовогоСтажа',
					},
					{
						name:'ПервыйПараметрТрудовогоСтажа',
					},
					{
						name:'ВторойПараметрТрудовогоСтажа',
					},
					{
						name:'ТретийПараметрТрудовогоСтажа',
					},
					{
						name:'КодПозицииСписка',
					},
					{
						name:'Должность',
					},
					{
						name:'НевидимаяКолонка4',
					},
					{
						name:'ОснованиеВыслугиЛет',
					},
					{
						name:'ПервыйПараметрВыслугиЛет',
					},
					{
						name:'ВторойПараметрВыслугиЛет',
					},
					{
						name:'ТретийПараметрВыслугиЛет',
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
						var грид = Ext.getCmp('ЗаписиОСтаже');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ИтоговыйСтаж',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:363px;width:740px;height:60px;',
			height: 60,width: 740,
			columns:
			[
				{
					text:'Вид стажа',
					width:'2200',
					dataIndex:'ВидСтажа',
					flex:1,
				},
				{
					text:'Код стажа',
					width:'1200',
					dataIndex:'КодСтажа',
					flex:1,
				},
				{
					text:'Лет',
					width:'60',
					dataIndex:'Лет',
					flex:1,
				},
				{
					text:'Месяцев',
					width:'60',
					dataIndex:'Месяцев',
					flex:1,
				},
				{
					text:'Дней',
					width:'60',
					dataIndex:'Дней',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ВидСтажа',
					},
					{
						name:'КодСтажа',
					},
					{
						name:'Лет',
					},
					{
						name:'Месяцев',
					},
					{
						name:'Дней',
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
						var грид = Ext.getCmp('ИтоговыйСтаж');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:339px;width:740px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Заполнить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:141px;width:740px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расположить',
				},
				{
					text:'Заполнить по трудовой деятельности',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расположить',
				},
				'-',
				{
					text:'Заполнить по трудовой деятельности',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПоСостоянию',
			text: 'по состоянию на 31 декабря 2001 года',
			style: 'position:absolute;left:448px;top:8px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТерриториальныеУсловияДляСЗВК',
			text: 'Территориальные условия:',
			style: 'position:absolute;left:8px;top:8px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТерриториальныеУсловияДляСЗВК',
			width: 97,
			height: 19,
			style: 'position:absolute;left:151px;top:8px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициентДляСЗВК',
			text: 'Районный коэффициент:',
			style: 'position:absolute;left:255px;top:8px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициентДляСЗВК',
			style: 'position:absolute;left:387px;top:8px;width:52px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСведенияДляОценки',
			text: 'Сведения для оценки пенсионных прав застрахованного лица :',
			style: 'position:absolute;left:8px;top:323px;width:338px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСведенияОСтаже',
			text: 'Сведения о стаже застрахованного лица:',
			style: 'position:absolute;left:8px;top:125px;width:226px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодыТрудовойДеятельности',
			text: 'Периоды трудовой или иной общественно полезной деятельности:',
			style: 'position:absolute;left:8px;top:32px;width:352px;height:15px;',
		},
		{
			id: 'ПериодыДеятельности',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:50px;width:740px;height:68px;',
			height: 68,width: 740,
			columns:
			[
				{
					text:'Организация',
					width:'3200',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Вид общественно полезной деятельности',
					width:'2200',
					dataIndex:'ВидДеятельности',
					flex:1,
				},
				{
					text:'Период',
					width:'1800',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Организация',
					},
					{
						name:'ВидДеятельности',
					},
					{
						name:'Период',
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
						var грид = Ext.getCmp('ПериодыДеятельности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:430px;width:756px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});