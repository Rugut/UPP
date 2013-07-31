Ext.require(['Данные.Обработки.ТранспортныеУпаковки'], function () 
{
	Ext.define('Обработки.ТранспортныеУпаковки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать штрихкодов транспортных упаковок',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'fieldset',
			title: 'Параметры заполнения',
			style: 'position:absolute;left:8px;top:33px;width:564px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументы',
			text: 'Документы:',
			style: 'position:absolute;left:8px;top:54px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Документы.Представление',
			width: 496,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:76px;top:54px;width:496px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ТранспортныеУпаковки.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТранспортныеУпаковки.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ТранспортныеУпаковки.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТранспортныеУпаковки.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Номенклатура, для которой необходима печать штрихкодов',
			style: 'position:absolute;left:8px;top:79px;width:564px;height:16px;',
		},
		{
			id: 'Номенклатура',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:564px;height:230px;',
			height: 230,width: 564,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Обрабатывать',
					width:'100',
					dataIndex:'Обрабатывать',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Ед. Изм.',
					width:'76',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'250',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Упаковка',
					width:'250',
					dataIndex:'Упаковка',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТранспортныеУпаковки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Обрабатывать',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Упаковка',
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
						var грид = Ext.getCmp('Номенклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТранспортныеУпаковки.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТранспортныеУпаковки.ФормаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Печать',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:103px;width:564px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
			]
		},
	]
	});
});