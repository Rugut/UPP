Ext.require(['Данные.Справочники.ФизическиеЛица'], function () 
{
	Ext.define('Справочники.ФизическиеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:498px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Физическое лицо',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:33px;width:38px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			width: 608,
			height: 25,
			items:
			[
				{
					text:'Лицевые счета',
					tooltip:'Лицевые счета сотрудника',
				},
				{
					text:'Медицинские страховые полисы',
					tooltip:'Медицинские страховые полисы',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'ФИО:',
			style: 'position:absolute;left:8px;top:57px;width:38px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:608px;height:25px;',
			width: 608,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
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
			style: 'position:absolute;left:8px;top:104px;width:592px;height:361px;',
			height: 361,width: 592,
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 100,
			height: 19,
			style: 'position:absolute;left:176px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР',
			width: 100,
			height: 19,
			style: 'position:absolute;left:388px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИМНС',
			width: 32,
			height: 19,
			style: 'position:absolute;left:100px;top:99px;width:32px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 96,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:224px;top:6px;width:96px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:100px;top:6px;width:80px;height:19px;',
		},
		{
			id: 'КонтактнаяИнформация',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:166px;width:578px;height:169px;',
			height: 169,width: 578,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид',
					width:'120',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Представление',
					width:'204',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'103',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Тип','Вид','Представление','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Тип',
					},
					{
						name:'Вид',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('КонтактнаяИнформация');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:142px;width:578px;height:24px;',
			width: 578,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
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
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
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
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'21c20a0-071b-4a60-8e44-12487adde0c',
					iconCls:'x-EditInDialog',
				},
				'-',
				{
					text:'Основная',
					tooltip:'Установить/Снять признак основной записи',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МестоРождения',
			width: 220,
			height: 19,
			style: 'position:absolute;left:100px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Удостоверение',
			width: 388,
			height: 19,
			style: 'position:absolute;left:100px;top:54px;width:388px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Адреса и телефоны:',
			style: 'position:absolute;left:6px;top:126px;width:578px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Индивидуальные номера',
			style: 'position:absolute;left:6px;top:78px;width:482px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'По ОКАТО:',
			style: 'position:absolute;left:322px;top:30px;width:76px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МестоРожденияКодПоОКАТО',
			width: 88,
			height: 19,
			style: 'position:absolute;left:400px;top:30px;width:88px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			id: 'СоставСемьи',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:300px;height:69px;',
			height: 69,width: 300,
			columns:
			[
				{
					text:'Степень родства',
					width:'100',
					dataIndex:'СтепеньРодства',
					flex:1,
				},
				{
					text:'Родственник',
					width:'100',
					dataIndex:'Родственник',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'100',
					dataIndex:'ДатаРождения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','СтепеньРодства','Родственник','ДатаРождения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'СтепеньРодства',
					},
					{
						name:'Родственник',
					},
					{
						name:'ДатаРождения',
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
						var грид = Ext.getCmp('СоставСемьи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'Образование',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:247px;width:360px;height:88px;',
			height: 88,width: 360,
			columns:
			[
				{
					text:'Вид образования',
					width:'100',
					dataIndex:'ВидОбразования',
					flex:1,
				},
				{
					text:'Учебное заведение',
					width:'120',
					dataIndex:'УчебноеЗаведение',
					flex:1,
				},
				{
					text:'Специальность',
					width:'120',
					dataIndex:'Специальность',
					flex:1,
				},
				{
					text:'Диплом, серия, номер',
					width:'120',
					dataIndex:'Диплом',
					flex:1,
				},
				{
					text:'Год окончания',
					width:'60',
					dataIndex:'ГодОкончания',
					flex:1,
				},
				{
					text:'Квалификация',
					width:'120',
					dataIndex:'Квалификация',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','ВидОбразования','УчебноеЗаведение','Специальность','Диплом','ГодОкончания','Квалификация',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидОбразования',
					},
					{
						name:'УчебноеЗаведение',
					},
					{
						name:'Специальность',
					},
					{
						name:'Диплом',
					},
					{
						name:'ГодОкончания',
					},
					{
						name:'Квалификация',
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
						var грид = Ext.getCmp('Образование');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ЗнаниеЯзыков',
			xtype: 'grid',
			style: 'position:absolute;left:312px;top:124px;width:272px;height:69px;',
			height: 69,width: 272,
			columns:
			[
				{
					text:'Язык',
					width:'73',
					dataIndex:'Язык',
					flex:1,
				},
				{
					text:'Степень знания языка',
					width:'124',
					dataIndex:'СтепеньЗнанияЯзыка',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Язык','СтепеньЗнанияЯзыка',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Язык',
					},
					{
						name:'СтепеньЗнанияЯзыка',
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
						var грид = Ext.getCmp('ЗнаниеЯзыков');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСемейноеПоложение',
			text: 'Семейное положение:',
			style: 'position:absolute;left:6px;top:198px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СемейноеПоложение',
			width: 182,
			height: 19,
			style: 'position:absolute;left:124px;top:198px;width:182px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВоинскийУчет',
			text: 'Воинский учет:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВоинскийУчет',
			width: 495,
			height: 19,
			style: 'position:absolute;left:89px;top:30px;width:495px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Семья',
			style: 'position:absolute;left:6px;top:103px;width:300px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Учеба',
			style: 'position:absolute;left:6px;top:226px;width:360px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Гражданство',
			width: 495,
			height: 19,
			style: 'position:absolute;left:89px;top:6px;width:495px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Языки',
			style: 'position:absolute;left:312px;top:103px;width:272px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Профессии',
			style: 'position:absolute;left:372px;top:226px;width:212px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Профессии',
			xtype: 'grid',
			style: 'position:absolute;left:372px;top:247px;width:212px;height:88px;',
			height: 88,width: 212,
			columns:
			[
				{
					text:'Профессия',
					width:'220',
					dataIndex:'Профессия',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Профессия',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Профессия',
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
						var грид = Ext.getCmp('Профессии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Инвалидность',
			style: 'position:absolute;left:89px;top:54px;width:495px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвалидность',
			text: 'Инвалидность:',
			style: 'position:absolute;left:6px;top:54px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвойства',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:17px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЛьготаПриНачисленииПособий.Представление',
			width: 156,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:428px;top:78px;width:156px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предоставляются льготы как подвергшимся воздействию радиации в связи с:',
			style: 'position:absolute;left:6px;top:78px;width:422px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'УченыеСтепени',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:578px;height:80px;',
			height: 80,width: 578,
			columns:
			[
				{
					text:'Ученая степень',
					width:'100',
					dataIndex:'УченаяСтепень',
					flex:1,
				},
				{
					text:'Дата присуждения ученой степени',
					width:'100',
					dataIndex:'ДатаПрисужденияУченойСтепени',
					flex:1,
				},
				{
					text:'Отрасль науки',
					width:'100',
					dataIndex:'ОтрасльНауки',
					flex:1,
				},
				{
					text:'Диссертационный совет',
					width:'100',
					dataIndex:'ДиссертационныйСовет',
					flex:1,
				},
				{
					text:'Диплом серия, номер',
					width:'100',
					dataIndex:'ДипломСерияНомер',
					flex:1,
				},
				{
					text:'Наименование организации, выдавшей диплом',
					width:'100',
					dataIndex:'ДипломВыданОрганизация',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','УченаяСтепень','ДатаПрисужденияУченойСтепени','ОтрасльНауки','ДиссертационныйСовет','ДипломСерияНомер','ДипломВыданОрганизация',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'УченаяСтепень',
					},
					{
						name:'ДатаПрисужденияУченойСтепени',
					},
					{
						name:'ОтрасльНауки',
					},
					{
						name:'ДиссертационныйСовет',
					},
					{
						name:'ДипломСерияНомер',
					},
					{
						name:'ДипломВыданОрганизация',
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
						var грид = Ext.getCmp('УченыеСтепени');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Ученые степени',
			style: 'position:absolute;left:6px;top:6px;width:578px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'УченыеЗвания',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:136px;width:578px;height:118px;',
			height: 118,width: 578,
			columns:
			[
				{
					text:'Ученое звание',
					width:'100',
					dataIndex:'УченоеЗвание',
					flex:1,
				},
				{
					text:'Дата присвоения ученого звания',
					width:'100',
					dataIndex:'ДатаПрисвоенияУченогоЗвания',
					flex:1,
				},
				{
					text:'Аттестат серия',
					width:'100',
					dataIndex:'АттестатСерия',
					flex:1,
				},
				{
					text:'Аттестат номер',
					width:'100',
					dataIndex:'АттестатНомер',
					flex:1,
				},
				{
					text:'Наименование организации, выдавшей диплом',
					width:'100',
					dataIndex:'АттестатВыданОрганизация',
					flex:1,
				},
				{
					text:'Научная специальность',
					width:'100',
					dataIndex:'НаучнаяСпециальность',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','УченоеЗвание','ДатаПрисвоенияУченогоЗвания','АттестатСерия','АттестатНомер','АттестатВыданОрганизация','НаучнаяСпециальность',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'УченоеЗвание',
					},
					{
						name:'ДатаПрисвоенияУченогоЗвания',
					},
					{
						name:'АттестатСерия',
					},
					{
						name:'АттестатНомер',
					},
					{
						name:'АттестатВыданОрганизация',
					},
					{
						name:'НаучнаяСпециальность',
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
						var грид = Ext.getCmp('УченыеЗвания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Ученые звания',
			style: 'position:absolute;left:6px;top:118px;width:578px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Имеет научные труды',
			style: 'position:absolute;left:6px;top:268px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Имеет изобретения',
			style: 'position:absolute;left:6px;top:289px;width:142px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:182px;top:6px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:578px;height:24px;',
			width: 578,
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
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Награды',
			style: 'position:absolute;left:6px;top:6px;width:578px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Награды',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:578px;height:289px;',
			height: 289,width: 578,
			columns:
			[
				{
					text:'Награда',
					width:'100',
					dataIndex:'Награда',
					flex:1,
				},
				{
					text:'Номер приказа',
					width:'100',
					dataIndex:'НомерПриказа',
					flex:1,
				},
				{
					text:'Дата приказа',
					width:'100',
					dataIndex:'ДатаПриказа',
					flex:1,
				},
				{
					text:'Приказ',
					width:'100',
					dataIndex:'ЧейПриказ',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Награда','НомерПриказа','ДатаПриказа','ЧейПриказ',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Награда',
					},
					{
						name:'НомерПриказа',
					},
					{
						name:'ДатаПриказа',
					},
					{
						name:'ЧейПриказ',
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
						var грид = Ext.getCmp('Награды');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУдостоверение',
			text: 'Удостоверение:',
			style: 'position:absolute;left:6px;top:54px;width:92px;height:19px;text-align:left;',
		},
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:286px;height:311px;',
			height: 311,width: 286,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:10px;top:101px;width:270px;height:24px;',
			width: 270,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:298px;top:24px;width:286px;height:311px;',
			height: 311,width: 286,
			columns:
			[
				{
					text:'Принадлежность',
					width:'21',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'256',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории',
			text: 'Категории',
			style: 'position:absolute;left:298px;top:6px;width:286px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:307px;top:101px;width:269px;height:24px;',
			width: 269,
			height: 24,
			items:
			[
				{
					text:'&Добавить новую категорию',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Заметки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:70px;width:578px;height:156px;',
			height: 156,width: 578,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Содержание',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Вид заметки',
					width:'120',
					dataIndex:'ВидЗаметки',
					flex:1,
				},
				{
					text:'Автор',
					width:'120',
					dataIndex:'Автор',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Дата','Содержание','ВидЗаметки','Автор',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Содержание',
					},
					{
						name:'ВидЗаметки',
					},
					{
						name:'Автор',
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
						var грид = Ext.getCmp('Заметки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:46px;width:578px;height:24px;',
			width: 578,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Заметки',
			style: 'position:absolute;left:6px;top:30px;width:578px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:250px;width:578px;height:85px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаДоступа.Представление',
			width: 487,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:6px;width:487px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДоступа',
			text: 'Группа доступа:',
			style: 'position:absolute;left:6px;top:6px;width:86px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 436,
			height: 19,
			style: 'position:absolute;left:48px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 182,
			height: 19,
			style: 'position:absolute;left:48px;top:57px;width:182px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:486px;top:57px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:486px;top:33px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:520px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 120,
			height: 19,
			style: 'position:absolute;left:236px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 120,
			height: 19,
			style: 'position:absolute;left:362px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа физ. лиц:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 502,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:81px;width:502px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЭлементаСобытия");
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