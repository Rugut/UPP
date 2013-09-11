Ext.require(['Данные.Документы.ИнвентаризацияРасчетовСконтрагентами'], function () 
{
	Ext.define('Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Инвентаризация расчетов с контрагентами',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:83px;height:19px;text-align:left;',
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
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:197px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:411px;top:33px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:496px;top:33px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			width: 728,
			height: 25,
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
				},
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				{
					text:'Записать и закрыть',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Заполнить документ по данным бухгалтерского учета',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:728px;height:25px;',
			width: 728,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:60px;width:713px;height:303px;',
			height: 303,width: 713,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			width: 699,
			height: 24,
			items:
			[
				{
					text:'Заполнить дебиторскую задолженность',
					tooltip:'Заполнить по данным бухгалтерского учета',
				},
			]
		},
		{
			id: 'КонтрагентыДт',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
					width:'158',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'79',
					dataIndex:'СчетРасчетов',
					flex:1,
				},
				{
					text:'Всего',
					width:'109',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Подтверждено',
					width:'104',
					dataIndex:'Подтверждено',
					flex:1,
				},
				{
					text:'Не подтверждено',
					width:'100',
					dataIndex:'НеПодтверждено',
					flex:1,
				},
				{
					text:'В т.ч. истек срок давности',
					width:'141',
					dataIndex:'ИстекСрокДавности',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'107',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Контрагент',
					},
					{
						name:'СчетРасчетов',
					},
					{
						name:'Всего',
					},
					{
						name:'Подтверждено',
					},
					{
						name:'НеПодтверждено',
					},
					{
						name:'ИстекСрокДавности',
					},
					{
						name:'ВидЗадолженности',
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
						var грид = Ext.getCmp('КонтрагентыДт');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиДт',
			text: 'НадписьИтогиДт',
			style: 'position:absolute;left:6px;top:257px;width:699px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеНомер',
			text: 'Номер:',
			style: 'position:absolute;left:228px;top:26px;width:49px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			width: 699,
			height: 24,
			items:
			[
				{
					text:'Действие10',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Действие8',
					tooltip:'',
				},
				{
					text:'Действие7',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Действие1',
					tooltip:'Удалить текущий',
				},
				{
					text:'Действие2',
					tooltip:'',
				},
				{
					text:'Действие3',
					tooltip:'',
				},
				{
					text:'Действие4',
					tooltip:'',
				},
				{
					text:'Действие5',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Действие6',
					tooltip:'',
				},
				'-',
				'-',
			]
		},
		{
			id: 'КонтрагентыКт',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
					width:'148',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'77',
					dataIndex:'СчетРасчетов',
					flex:1,
				},
				{
					text:'Всего',
					width:'110',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Подтверждено',
					width:'100',
					dataIndex:'Подтверждено',
					flex:1,
				},
				{
					text:'Не подтверждено',
					width:'100',
					dataIndex:'НеПодтверждено',
					flex:1,
				},
				{
					text:'В т.ч. истек срок давности',
					width:'141',
					dataIndex:'ИстекСрокДавности',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'106',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Контрагент',
					},
					{
						name:'СчетРасчетов',
					},
					{
						name:'Всего',
					},
					{
						name:'Подтверждено',
					},
					{
						name:'НеПодтверждено',
					},
					{
						name:'ИстекСрокДавности',
					},
					{
						name:'ВидЗадолженности',
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
						var грид = Ext.getCmp('КонтрагентыКт');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиКт',
			text: 'НадписьИтогиКт',
			style: 'position:absolute;left:6px;top:258px;width:699px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'СчетаРасчетов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:699px;height:229px;',
			height: 229,width: 699,
			columns:
			[
				{
					text:'Счет',
					width:'123',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Наименование',
					width:'359',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Счет',
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
						var грид = Ext.getCmp('СчетаРасчетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:699px;height:24px;',
			width: 699,
			height: 24,
			items:
			[
				{
					text:'Действие1',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Действие2',
					tooltip:'',
				},
				{
					text:'Действие4',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Действие3',
					tooltip:'Удалить текущий',
				},
				{
					text:'Действие5',
					tooltip:'',
				},
				{
					text:'Действие6',
					tooltip:'',
				},
				{
					text:'Действие7',
					tooltip:'',
				},
				{
					text:'Действие8',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Действие9',
					tooltip:'',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Заполнить счета расчетов значениями по умолчанию',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеВид',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:26px;width:80px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Инвентаризационная комиссия',
			style: 'position:absolute;left:6px;top:106px;width:699px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ИнвентаризационнаяКомиссия',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:146px;width:699px;height:130px;',
			height: 130,width: 699,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Члены комиссии',
					width:'264',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Председатель',
					width:'92',
					dataIndex:'Председатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Председатель',
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
						var грид = Ext.getCmp('ИнвентаризационнаяКомиссия');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:122px;width:699px;height:24px;',
			width: 699,
			height: 24,
			items:
			[
				'-',
				{
					text:'',
					tooltip:'',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеВид',
			width: 131,
			height: 19,
			style: 'position:absolute;left:88px;top:26px;width:131px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДокументОснованиеДата',
			width: 92,
			height: 19,
			style: 'position:absolute;left:435px;top:26px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеНомер',
			width: 115,
			height: 19,
			style: 'position:absolute;left:285px;top:26px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеДата',
			text: 'от:',
			style: 'position:absolute;left:409px;top:26px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Проведение инвентаризации',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаИнвентаризации',
			width: 92,
			height: 19,
			style: 'position:absolute;left:88px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияИнвентаризации',
			text: 'Дата окончания:',
			style: 'position:absolute;left:188px;top:50px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияИнвентаризации',
			width: 92,
			height: 19,
			style: 'position:absolute;left:285px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПричинаИнвентаризации',
			width: 617,
			height: 19,
			style: 'position:absolute;left:88px;top:74px;width:617px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 616,
			height: 19,
			style: 'position:absolute;left:105px;top:395px;width:616px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:395px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:371px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 616,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:105px;top:371px;width:616px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});