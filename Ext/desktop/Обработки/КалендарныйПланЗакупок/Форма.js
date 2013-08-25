Ext.require(['Данные.Обработки.КалендарныйПланЗакупок'], function () 
{
	Ext.define('Обработки.КалендарныйПланЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Календарный план закупок',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			width: 700,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Помощник заполнения',
				},
				'-',
				{
					text:'Помощник установки соответствия заказов покупателей и заказов поставщикам',
				},
					]
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Помощник заполнения',
				},
				'-',
				{
					text:'Помощник установки соответствия заказов покупателей и заказов поставщикам',
				},
			]
		},
		{
			id: 'ДеревоПодбора',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:684px;height:280px;',
			height: 280,width: 684,
			columns:
			[
				{
					text:'Номенклатура. Контрагент. Заказ.',
					width:'220',
					dataIndex:'НоменклатураКонтрагентЗаказ',
					flex:1,
				},
				{
					text:'Требуемое кол.',
					width:'88',
					dataIndex:'НеобходимоеКоличество',
					flex:1,
				},
				{
					text:'Заказанное кол.',
					width:'88',
					dataIndex:'ЗаказанноеКоличество',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'ЦенаУпрУчета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаУпрУчета',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'128',
					dataIndex:'СуммаВзаиморасчетовЗаказаПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НоменклатураКонтрагентЗаказ',
					},
					{
						name:'НеобходимоеКоличество',
					},
					{
						name:'ЗаказанноеКоличество',
					},
					{
						name:'ЦенаУпрУчета',
					},
					{
						name:'СуммаУпрУчета',
					},
					{
						name:'СуммаВзаиморасчетовЗаказаПредставление',
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
						var грид = Ext.getCmp('ДеревоПодбора');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КалендарныйПланЗакупок.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КалендарныйПланЗакупок.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период планирования, с:',
			style: 'position:absolute;left:8px;top:33px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:143px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:225px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:243px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:509px;top:57px;width:183px;height:19px;',
			width: 183,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьУровеньРазворотаДерева',
			text: 'Уровень разворота дерева:',
			style: 'position:absolute;left:364px;top:57px;width:144px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:684px;height:24px;',
			width: 684,
			height: 24,
			items:
			[
				'-',
				{
					text:'Новый заказ',
				},
				'-',
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Настройка отбора',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Список заказов',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:143px;top:57px;width:201px;height:19px;',
			width: 201,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокОтображения',
			text: 'Порядок отображения:',
			style: 'position:absolute;left:8px;top:57px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:325px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Закупки',
			style: 'position:absolute;left:8px;top:84px;width:684px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПолеВводаОтветственный.Представление',
			width: 183,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:509px;top:33px;width:183px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КалендарныйПланЗакупок.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КалендарныйПланЗакупок.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КалендарныйПланЗакупок.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КалендарныйПланЗакупок.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйЗаЗакупки',
			text: 'Ответственный за закупки:',
			style: 'position:absolute;left:364px;top:33px;width:144px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:700px;height:25px;',
			width: 700,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
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