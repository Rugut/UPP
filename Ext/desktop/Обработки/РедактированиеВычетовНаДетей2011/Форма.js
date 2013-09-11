Ext.require(['Данные.Обработки.РедактированиеВычетовНаДетей2011'], function () 
{
	Ext.define('Обработки.РедактированиеВычетовНаДетей2011.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:996px;height:589px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Стандартные вычеты - 2011',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьЗаголовокГлавногоОкна',
			text: 'Выделение вычетов на второго, третьего (четвертого, ...) ребенка',
			style: 'position:absolute;left:8px;top:8px;width:709px;height:25px;',
		},
		{
			id: 'СотрудникиСДетьми',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:206px;height:435px;',
			height: 435,width: 206,
			columns:
			[
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РедактированиеВычетовНаДетей2011/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СотрудникиСДетьми');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РедактированиеВычетовНаДетей2011.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РедактированиеВычетовНаДетей2011.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ВычетыСотрудниковСДетьми',
			xtype: 'grid',
			style: 'position:absolute;left:226px;top:121px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Период (с ... по)',
					width:'140',
					dataIndex:'КолонкаПериод',
					flex:1,
				},
				{
					text:'С',
					width:'70',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'по',
					width:'70',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Код и количество детей',
					width:'83',
					dataIndex:'ВычетыНаДетейТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'70',
					dataIndex:'ВычетыНаДетейПрименение',
					flex:1,
				},
				{
					text:'Вычет на детей',
					width:'60',
					dataIndex:'КодВычетаНаДетей',
					flex:1,
				},
				{
					text:'Количество детей',
					width:'24',
					dataIndex:'КоличествоДетей',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РедактированиеВычетовНаДетей2011/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КолонкаПериод',
					},
					{
						name:'Период',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ВычетыНаДетейТекст',
					},
					{
						name:'ВычетыНаДетейПрименение',
					},
					{
						name:'КодВычетаНаДетей',
					},
					{
						name:'КоличествоДетей',
					},
					{
						name:'Основание',
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
						var грид = Ext.getCmp('ВычетыСотрудниковСДетьми');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РедактированиеВычетовНаДетей2011.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РедактированиеВычетовНаДетей2011.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:39px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:39px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РедактированиеВычетовНаДетей2011.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеВычетовНаДетей2011.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РедактированиеВычетовНаДетей2011.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РедактированиеВычетовНаДетей2011.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'НовыеВычетыСотрудниковСДетьми',
			xtype: 'grid',
			style: 'position:absolute;left:226px;top:436px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Период (с ... по)',
					width:'140',
					dataIndex:'КолонкаПериод',
					flex:1,
				},
				{
					text:'С',
					width:'70',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'по',
					width:'70',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Код и количество детей',
					width:'83',
					dataIndex:'ВычетыНаДетейТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'70',
					dataIndex:'ВычетыНаДетейПрименение',
					flex:1,
				},
				{
					text:'Вычет на детей',
					width:'60',
					dataIndex:'КодВычетаНаДетей',
					flex:1,
				},
				{
					text:'Количество детей',
					width:'24',
					dataIndex:'КоличествоДетей',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РедактированиеВычетовНаДетей2011/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КолонкаПериод',
					},
					{
						name:'Период',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ВычетыНаДетейТекст',
					},
					{
						name:'ВычетыНаДетейПрименение',
					},
					{
						name:'КодВычетаНаДетей',
					},
					{
						name:'КоличествоДетей',
					},
					{
						name:'Основание',
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
						var грид = Ext.getCmp('НовыеВычетыСотрудниковСДетьми');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РедактированиеВычетовНаДетей2011.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РедактированиеВычетовНаДетей2011.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Сотрудники',
			style: 'position:absolute;left:8px;top:98px;width:96px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:226px;top:411px;width:762px;height:24px;',
			width: 762,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Вычеты, применявшиеся ранее',
			style: 'position:absolute;left:226px;top:98px;width:197px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Вычеты, действующие с января 2011 в соответствии с Законом № 330-ФЗ и приказом ФНС об изменении перечня вычетов',
			style: 'position:absolute;left:226px;top:389px;width:762px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснения',
			text: 'Первая строка пояснения\r\nВторая строка пояснения',
			style: 'position:absolute;left:8px;top:63px;width:980px;height:32px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:226px;top:246px;width:762px;height:140px;',
			height: 140,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаОбработать',
			text: 'Обработать вычеты сотрудника',
			style: 'position:absolute;left:0px;top:116px;width:186px;height:24px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Вычеты с кодом 108',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не заменять вычеты',
			style: 'position:absolute;left:0px;top:0px;width:143px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычеты на первого и второго детей',
			style: 'position:absolute;left:0px;top:22px;width:251px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычет только на второго ребенка',
			style: 'position:absolute;left:0px;top:44px;width:240px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетами на третьего ребенка',
			style: 'position:absolute;left:0px;top:66px;width:240px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычет на первого ребенка',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетом на второго ребенка',
			style: 'position:absolute;left:0px;top:22px;width:251px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетом на третьего ребенка',
			style: 'position:absolute;left:0px;top:44px;width:251px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:254px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Вычеты с кодом 110',
			style: 'position:absolute;left:0px;top:0px;width:125px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не заменять вычеты',
			style: 'position:absolute;left:0px;top:0px;width:143px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычеты на первого и второго детей',
			style: 'position:absolute;left:0px;top:22px;width:249px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычет только на второго ребенка',
			style: 'position:absolute;left:0px;top:44px;width:249px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетами на третьего ребенка',
			style: 'position:absolute;left:0px;top:66px;width:249px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычет на первого ребенка',
			style: 'position:absolute;left:0px;top:0px;width:215px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетом на второго ребенка',
			style: 'position:absolute;left:0px;top:22px;width:251px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетом на третьего ребенка',
			style: 'position:absolute;left:0px;top:44px;width:251px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:508px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Вычеты с кодом 111',
			style: 'position:absolute;left:0px;top:0px;width:125px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не заменять вычеты',
			style: 'position:absolute;left:0px;top:0px;width:143px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычеты на первого и второго детей',
			style: 'position:absolute;left:0px;top:22px;width:249px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычет только на второго ребенка',
			style: 'position:absolute;left:0px;top:44px;width:240px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетами на третьего ребенка',
			style: 'position:absolute;left:0px;top:66px;width:240px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Оставить вычет на первого ребенка',
			style: 'position:absolute;left:0px;top:0px;width:213px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетом на второго ребенка',
			style: 'position:absolute;left:0px;top:22px;width:251px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заменить вычетом на третьего ребенка',
			style: 'position:absolute;left:0px;top:44px;width:251px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:564px;width:996px;height:25px;',
			width: 996,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Записать вычеты и закрыть',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});