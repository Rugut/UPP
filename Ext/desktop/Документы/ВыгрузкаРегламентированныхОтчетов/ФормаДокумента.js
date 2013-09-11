Ext.require(['Данные.Документы.ВыгрузкаРегламентированныхОтчетов'], function () 
{
	Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			width: 720,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
					tooltip:'Включить возможность редактирования номера документа',
				},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата1',
			text: 'от:',
			style: 'position:absolute;left:198px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 102,
			height: 19,
			style: 'position:absolute;left:93px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 127,
			height: 19,
			style: 'position:absolute;left:216px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:57px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:354px;top:57px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:138px;width:704px;height:258px;',
			height: 258,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Основания',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:704px;height:211px;',
			height: 211,width: 704,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'141',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Вид',
					width:'41',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'94',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Текст',
					width:'45',
					dataIndex:'НомерСтрокиТекстаВыгрузки',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'100',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаРегламентированныхОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Вид',
					},
					{
						name:'Период',
					},
					{
						name:'Комментарий',
					},
					{
						name:'НомерСтрокиТекстаВыгрузки',
					},
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('Основания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаРегламентированныхОтчетов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаРегламентированныхОтчетов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:19px;width:704px;height:24px;',
			width: 704,
			height: 24,
			items:
			[
				{
					text:'Пометить все',
					tooltip:'',
				},
				{
					text:'Снять пометки у всех',
					tooltip:'Снять пометки у всех',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'',
				},
				'-',
				{
					text:'Текст',
					tooltip:'Показать текст выгрузки',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Отчеты',
			style: 'position:absolute;left:0px;top:0px;width:704px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИМНС',
			width: 62,
			height: 19,
			style: 'position:absolute;left:424px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 622,
			height: 19,
			style: 'position:absolute;left:90px;top:398px;width:622px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'Янв',
			style: 'position:absolute;left:186px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'I кв',
			style: 'position:absolute;left:243px;top:115px;width:28px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц5',
			text: 'Май',
			style: 'position:absolute;left:304px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц7',
			text: 'Июл',
			style: 'position:absolute;left:363px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц9',
			text: 'III кв',
			style: 'position:absolute;left:419px;top:115px;width:32px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'Ноя',
			style: 'position:absolute;left:482px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'Фев',
			style: 'position:absolute;left:215px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц4',
			text: 'Апр',
			style: 'position:absolute;left:274px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'II кв',
			style: 'position:absolute;left:332px;top:115px;width:28px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц8',
			text: 'Авг',
			style: 'position:absolute;left:393px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'Окт',
			style: 'position:absolute;left:452px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:8px;top:84px;width:80px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:93px;top:81px;width:60px;height:20px;',
			width: 60,
			height: 20,
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'IV кв',
			style: 'position:absolute;left:509px;top:115px;width:32px;height:18px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбор по коду ИФНС',
			style: 'position:absolute;left:354px;top:33px;width:132px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
			width: 720,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зашифровать и отправить',
					tooltip:'Зашифровать и отправить',
				},
				'-',
				{
					text:'Сформировать тексты выгрузки',
					tooltip:'Сформировать тексты выгрузки',
				},
				'-',
				{
					text:'Проверить',
					tooltip:'',
				},
				'-',
				{
					text:'Сохранить',
					tooltip:'Сохранить',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
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