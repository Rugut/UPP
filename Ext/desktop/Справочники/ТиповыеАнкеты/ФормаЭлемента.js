Ext.require(['Данные.Справочники.ТиповыеАнкеты'], function () 
{
	Ext.define('Справочники.ТиповыеАнкеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:445px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Типовая анкета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:316px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 217,
			height: 19,
			style: 'position:absolute;left:95px;top:33px;width:217px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:445px;height:25px;',
			width: 445,
			height: 25,
			items:
			[
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
					iconCls:'x-CloneObject',
				},
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				{
					text:'Записать и закрыть',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
					tooltip:'Ввести на основании',
					iconCls:'x-InputOnBasis',
				},
					]
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
				'-',
				{
					text:'Редактировать код',
					tooltip:'Включить возможность редактирования кода',
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
					iconCls:'x-CloneObject',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
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
			style: 'position:absolute;left:0px;top:445px;width:445px;height:25px;',
			width: 445,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать анкеты',
				},
				'-',
				{
					text:'',
					tooltip:'Просмотр HTML',
				},
				'-',
				{
					text:'Рассылка',
					tooltip:'Рассылка анкеты по электронной почте',
				},
				'-',
				{
					text:'ОК',
					tooltip:'ОК',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:166px;width:430px;height:272px;',
			height: 272,width: 430,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Предназначена для загрузки данных в справочник "Физические лица"',
			style: 'position:absolute;left:6px;top:67px;width:416px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предназначена для адресной рассылки',
			style: 'position:absolute;left:6px;top:30px;width:416px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидАнкеты',
			text: 'Вид анкеты:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидАнкеты.Представление',
			width: 336,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:86px;top:6px;width:336px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять анкету данными',
			style: 'position:absolute;left:6px;top:49px;width:416px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСекундОтвета',
			text: 'Секунд ответа:',
			style: 'position:absolute;left:5px;top:90px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СекундОтвета',
			style: 'position:absolute;left:86px;top:90px;width:46px;height:19px;',
			width: 46,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ВопросыАнкеты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:166px;width:416px;height:80px;',
			height: 80,width: 416,
			columns:
			[
				{
					text:'Раздел',
					width:'80',
					dataIndex:'Раздел',
					flex:1,
				},
				{
					text:'№',
					width:'26',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вопрос',
					width:'227',
					dataIndex:'Вопрос',
					flex:1,
				},
				{
					text:'Обязательный',
					width:'80',
					dataIndex:'Обязательный',
					flex:1,
				},
				{
					text:'Вес вопроса',
					width:'100',
					dataIndex:'ВесВопроса',
					flex:1,
				},
				{
					text:'Секунд ответа',
					width:'100',
					dataIndex:'СекундОтвета',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТиповыеАнкеты").data,
					fields: ['Ссылка','Родитель.Представление','Раздел','НомерСтроки','Вопрос','Обязательный','ВесВопроса','СекундОтвета',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Раздел',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Вопрос',
					},
					{
						name:'Обязательный',
					},
					{
						name:'ВесВопроса',
					},
					{
						name:'СекундОтвета',
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
						var грид = Ext.getCmp('ВопросыАнкеты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:142px;width:416px;height:24px;',
			width: 416,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'РазделыАнкеты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:416px;height:74px;',
			height: 74,width: 416,
			columns:
			[
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Раздел',
					width:'234',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТиповыеАнкеты").data,
					fields: ['Ссылка','Родитель.Представление','Код','Наименование','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('РазделыАнкеты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:416px;height:24px;',
			width: 416,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'Добавить копированием',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				{
					text:'',
					tooltip:'Закончить редактирование',
				},
				'-',
				{
					text:'',
					tooltip:'Удалить раздел',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Вопросы',
			style: 'position:absolute;left:6px;top:126px;width:416px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Разделы',
			style: 'position:absolute;left:6px;top:6px;width:416px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:416px;height:24px;',
			width: 416,
			height: 24,
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Заголовок:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеАнкеты',
			width: 343,
			height: 19,
			style: 'position:absolute;left:95px;top:57px;width:343px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вступление:',
			style: 'position:absolute;left:8px;top:82px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Вступление',
			style: 'position:absolute;left:95px;top:82px;width:343px;height:80px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});