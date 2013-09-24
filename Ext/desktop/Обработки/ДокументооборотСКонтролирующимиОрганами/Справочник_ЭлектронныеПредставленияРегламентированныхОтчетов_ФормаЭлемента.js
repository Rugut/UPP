Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:758px;height:726px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Электронные представления регламентированных отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 644,
			height: 19,
			style: 'position:absolute;left:106px;top:58px;width:644px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:108px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 644,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:106px;top:108px;width:644px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:674px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 644,
			height: 19,
			style: 'position:absolute;left:106px;top:674px;width:644px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:758px;height:25px;',
			width: 758,
			height: 25,
			items:
			[
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
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
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
				'-',
				{
					text:'Просмотр печатной формы',
					tooltip:'Просмотр',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:668px;width:742px;height:4px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Реквизиты отчета',
			style: 'position:absolute;left:8px;top:85px;width:742px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:187px;width:95px;height:17px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Периодичность.Представление',
			width: 116,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:106px;top:186px;width:116px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:232px;top:186px;width:230px;height:19px;',
			width: 230,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:480px;top:186px;width:27px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:511px;top:186px;width:59px;height:19px;',
			width: 59,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 116,
			height: 19,
			style: 'position:absolute;left:106px;top:33px;width:116px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИмпорта',
			text: 'Дата импорта:',
			style: 'position:absolute;left:233px;top:33px;width:78px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИмпорта',
			width: 138,
			height: 19,
			style: 'position:absolute;left:324px;top:33px;width:138px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:134px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОтчета1',
			text: 'Вид отчета:',
			style: 'position:absolute;left:8px;top:160px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидОтчета',
			width: 644,
			height: 19,
			style: 'position:absolute;left:106px;top:160px;width:644px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:212px;width:742px;height:28px;',
			height: 28,width: 742,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Вид документа:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: '/',
			style: 'position:absolute;left:217px;top:3px;width:7px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента2',
			text: '(номер корректировки)',
			style: 'position:absolute;left:281px;top:0px;width:123px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:98px;top:0px;width:116px;height:19px;',
			width: 116,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:225px;top:0px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипПолучателя.Представление',
			width: 116,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:106px;top:134px;width:116px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Получатель',
			width: 120,
			height: 19,
			style: 'position:absolute;left:232px;top:134px;width:120px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:240px;width:742px;height:423px;',
			height: 423,width: 742,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:17px;width:742px;height:25px;',
			width: 742,
			height: 25,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					tooltip:'Закончить редактирование',
				},
				'-',
				{
					text:'',
					tooltip:'Переместить вверх',
				},
				{
					text:'',
					tooltip:'Переместить вниз',
				},
				'-',
				{
					text:'Конструктор настроек...',
					tooltip:'Упорядочить по возрастанию',
				},
				{
					text:'',
					tooltip:'Упорядочить по убыванию',
				},
			]
		},
		{
			id: 'ФайлыКомплекта',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:43px;width:742px;height:380px;',
			height: 380,width: 742,
			columns:
			[
				{
					text:'N',
					width:'44',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Имя',
					width:'444',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип',
					width:'90',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'',
					width:'86',
					dataIndex:'Данные',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номер',
					},
					{
						name:'Имя',
					},
					{
						name:'Тип',
					},
					{
						name:'Данные',
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
						var грид = Ext.getCmp('ФайлыКомплекта');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Файлы комплекта',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Электронное представление',
			style: 'position:absolute;left:0px;top:2px;width:742px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:51px;width:742px;height:261px;',
			height: 261,width: 742,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеТекст',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:261px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Имя файла:',
			style: 'position:absolute;left:0px;top:28px;width:95px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайла',
			width: 644,
			height: 19,
			style: 'position:absolute;left:98px;top:25px;width:644px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:312px;width:742px;height:111px;',
			height: 111,width: 742,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Приложения к бухгалтерской отчетности',
			style: 'position:absolute;left:0px;top:11px;width:742px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФайлПояснительнойЗаписки',
			width: 446,
			height: 19,
			style: 'position:absolute;left:296px;top:36px;width:446px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФайлАудиторскогоЗаключения',
			width: 446,
			height: 19,
			style: 'position:absolute;left:296px;top:64px;width:446px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФайлЗаявленияРевизионногоСоюза',
			width: 446,
			height: 19,
			style: 'position:absolute;left:296px;top:92px;width:446px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Пояснительная записка:',
			style: 'position:absolute;left:0px;top:36px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Аудиторское заключение:',
			style: 'position:absolute;left:0px;top:64px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Заявление ревизионного союза с/х-производителей:',
			style: 'position:absolute;left:0px;top:92px;width:290px;height:19px;',
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
			style: 'position:absolute;left:0px;top:701px;width:758px;height:25px;',
			width: 758,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
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
	]
	});
});