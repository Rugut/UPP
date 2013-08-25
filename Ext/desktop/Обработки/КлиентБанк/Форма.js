Ext.require(['Данные.Обработки.КлиентБанк'], function () 
{
	Ext.define('Обработки.КлиентБанк.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Клиент банка (загрузка / выгрузка платежных документов)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:7px;top:7px;width:774px;height:565px;',
			height: 565,width: 774,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:757px;height:24px;',
			width: 757,
			height: 24,
			items:
			[
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Отметить все',
				},
				{
					text:'Снять отметку у всех',
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
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Упорядочить по убыванию',
				},
				{
					text:'Упорядочить по возрастанию',
				},
			]
		},
		{
			id: 'ДокументыНаЭкспорт',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:757px;height:340px;',
			height: 340,width: 757,
			columns:
			[
				{
					text:'',
					width:'26',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Выгружать',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'95',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Дата',
					width:'70',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Сумма документа',
					width:'98',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'119',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Счет контрагента',
					width:'135',
					dataIndex:'КонтрагентНомерСчета',
					flex:1,
				},
				{
					text:'Назначение платежа',
					width:'120',
					dataIndex:'НазначениеПлатежа',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'98',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'108',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Замечание',
					width:'70',
					dataIndex:'ОписаниеОшибок',
					flex:1,
				},
				{
					text:'Организация номер счета',
					width:'101',
					dataIndex:'ОрганизацияНомерСчета',
					flex:1,
				},
				{
					text:'Вид платежа',
					width:'101',
					dataIndex:'ВидПлатежа',
					flex:1,
				},
				{
					text:'Очередность платежа',
					width:'100',
					dataIndex:'ОчередностьПлатежа',
					flex:1,
				},
				{
					text:'Текст плательщика',
					width:'100',
					dataIndex:'ТекстПлательщика',
					flex:1,
				},
				{
					text:'Текст получателя',
					width:'100',
					dataIndex:'ТекстПолучателя',
					flex:1,
				},
				{
					text:'ИНН плательщика',
					width:'100',
					dataIndex:'ИННПлательщика',
					flex:1,
				},
				{
					text:'КПП плательщика',
					width:'100',
					dataIndex:'КПППлательщика',
					flex:1,
				},
				{
					text:'ИНН получателя',
					width:'100',
					dataIndex:'ИННПолучателя',
					flex:1,
				},
				{
					text:'КПП получателя',
					width:'100',
					dataIndex:'КПППолучателя',
					flex:1,
				},
				{
					text:'Код БК',
					width:'100',
					dataIndex:'КодБК',
					flex:1,
				},
				{
					text:'Код ОКАТО',
					width:'100',
					dataIndex:'КодОКАТО',
					flex:1,
				},
				{
					text:'Дата документа - основания перечисления  налога',
					width:'100',
					dataIndex:'ПоказательДаты',
					flex:1,
				},
				{
					text:'Показатель номера',
					width:'100',
					dataIndex:'ПоказательНомера',
					flex:1,
				},
				{
					text:'Показатель основания',
					width:'100',
					dataIndex:'ПоказательОснования',
					flex:1,
				},
				{
					text:'Показатель типа',
					width:'100',
					dataIndex:'ПоказательТипа',
					flex:1,
				},
				{
					text:'Показатель периода',
					width:'100',
					dataIndex:'ПоказательПериода',
					flex:1,
				},
				{
					text:'Статус составителя',
					width:'100',
					dataIndex:'СтатусСоставителя',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Организация кратко',
					width:'100',
					dataIndex:'ОрганизацияКратко',
					flex:1,
				},
				{
					text:'Организация перечисление налога',
					width:'100',
					dataIndex:'ОрганизацияПеречислениеНалога',
					flex:1,
				},
				{
					text:'Организация ИНН',
					width:'100',
					dataIndex:'ОрганизацияИНН',
					flex:1,
				},
				{
					text:'Организация КПП',
					width:'100',
					dataIndex:'ОрганизацияКПП',
					flex:1,
				},
				{
					text:'Организация счет',
					width:'100',
					dataIndex:'ОрганизацияСчет',
					flex:1,
				},
				{
					text:'Сумма без копеек',
					width:'100',
					dataIndex:'СуммаБезКопеек',
					flex:1,
				},
				{
					text:'Организация текст корреспондента',
					width:'100',
					dataIndex:'ОрганизацияТекстКорреспондента',
					flex:1,
				},
				{
					text:'Организация текст назначения',
					width:'100',
					dataIndex:'ОрганизацияТекстНазначения',
					flex:1,
				},
				{
					text:'Организация БИКБанка',
					width:'100',
					dataIndex:'ОрганизацияБИКБанка',
					flex:1,
				},
				{
					text:'Организация банк',
					width:'100',
					dataIndex:'ОрганизацияБанк',
					flex:1,
				},
				{
					text:'Организация расч счет',
					width:'100',
					dataIndex:'ОрганизацияРасчСчет',
					flex:1,
				},
				{
					text:'Организация город банка',
					width:'100',
					dataIndex:'ОрганизацияГородБанка',
					flex:1,
				},
				{
					text:'Организация банк для расчетов',
					width:'100',
					dataIndex:'ОрганизацияБанкДляРасчетов',
					flex:1,
				},
				{
					text:'Организация город РЦБанка',
					width:'100',
					dataIndex:'ОрганизацияГородРЦБанка',
					flex:1,
				},
				{
					text:'Организация БИКРЦБанка',
					width:'100',
					dataIndex:'ОрганизацияБИКРЦБанка',
					flex:1,
				},
				{
					text:'Организация корр счет РЦБанка',
					width:'100',
					dataIndex:'ОрганизацияКоррСчетРЦБанка',
					flex:1,
				},
				{
					text:'Контрагент кратко',
					width:'100',
					dataIndex:'КонтрагентКратко',
					flex:1,
				},
				{
					text:'Контрагент ИНН',
					width:'100',
					dataIndex:'КонтрагентИНН',
					flex:1,
				},
				{
					text:'Контрагент КПП',
					width:'100',
					dataIndex:'КонтрагентКПП',
					flex:1,
				},
				{
					text:'Контрагент счет',
					width:'100',
					dataIndex:'КонтрагентСчет',
					flex:1,
				},
				{
					text:'Контрагент банк',
					width:'100',
					dataIndex:'КонтрагентБанк',
					flex:1,
				},
				{
					text:'Контрагент расч счет',
					width:'100',
					dataIndex:'КонтрагентРасчСчет',
					flex:1,
				},
				{
					text:'Контрагент город банка',
					width:'100',
					dataIndex:'КонтрагентГородБанка',
					flex:1,
				},
				{
					text:'Контрагент банк для расчетов',
					width:'100',
					dataIndex:'КонтрагентБанкДляРасчетов',
					flex:1,
				},
				{
					text:'Контрагент город РЦБанка',
					width:'100',
					dataIndex:'КонтрагентГородРЦБанка',
					flex:1,
				},
				{
					text:'Контрагент БИКБанка',
					width:'100',
					dataIndex:'КонтрагентБИКБанка',
					flex:1,
				},
				{
					text:'Контрагент БИКРЦБанка',
					width:'100',
					dataIndex:'КонтрагентБИКРЦБанка',
					flex:1,
				},
				{
					text:'Контрагент корр счет РЦБанка',
					width:'100',
					dataIndex:'КонтрагентКоррСчетРЦБанка',
					flex:1,
				},
				{
					text:'Контрагент текст корреспондента',
					width:'100',
					dataIndex:'КонтрагентТекстКорреспондента',
					flex:1,
				},
				{
					text:'Контрагент текст назначения',
					width:'100',
					dataIndex:'КонтрагентТекстНазначения',
					flex:1,
				},
				{
					text:'Срок акцепта',
					width:'100',
					dataIndex:'СрокАкцепта',
					flex:1,
				},
				{
					text:'Условие оплаты1',
					width:'100',
					dataIndex:'УсловиеОплаты1',
					flex:1,
				},
				{
					text:'Дата отсылки док',
					width:'100',
					dataIndex:'ДатаОтсылкиДок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлиентБанк/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Выгружать',
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
						name:'СуммаДокумента',
					},
					{
						name:'Контрагент',
					},
					{
						name:'КонтрагентНомерСчета',
					},
					{
						name:'НазначениеПлатежа',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'ОписаниеОшибок',
					},
					{
						name:'ОрганизацияНомерСчета',
					},
					{
						name:'ВидПлатежа',
					},
					{
						name:'ОчередностьПлатежа',
					},
					{
						name:'ТекстПлательщика',
					},
					{
						name:'ТекстПолучателя',
					},
					{
						name:'ИННПлательщика',
					},
					{
						name:'КПППлательщика',
					},
					{
						name:'ИННПолучателя',
					},
					{
						name:'КПППолучателя',
					},
					{
						name:'КодБК',
					},
					{
						name:'КодОКАТО',
					},
					{
						name:'ПоказательДаты',
					},
					{
						name:'ПоказательНомера',
					},
					{
						name:'ПоказательОснования',
					},
					{
						name:'ПоказательТипа',
					},
					{
						name:'ПоказательПериода',
					},
					{
						name:'СтатусСоставителя',
					},
					{
						name:'Организация',
					},
					{
						name:'ОрганизацияКратко',
					},
					{
						name:'ОрганизацияПеречислениеНалога',
					},
					{
						name:'ОрганизацияИНН',
					},
					{
						name:'ОрганизацияКПП',
					},
					{
						name:'ОрганизацияСчет',
					},
					{
						name:'СуммаБезКопеек',
					},
					{
						name:'ОрганизацияТекстКорреспондента',
					},
					{
						name:'ОрганизацияТекстНазначения',
					},
					{
						name:'ОрганизацияБИКБанка',
					},
					{
						name:'ОрганизацияБанк',
					},
					{
						name:'ОрганизацияРасчСчет',
					},
					{
						name:'ОрганизацияГородБанка',
					},
					{
						name:'ОрганизацияБанкДляРасчетов',
					},
					{
						name:'ОрганизацияГородРЦБанка',
					},
					{
						name:'ОрганизацияБИКРЦБанка',
					},
					{
						name:'ОрганизацияКоррСчетРЦБанка',
					},
					{
						name:'КонтрагентКратко',
					},
					{
						name:'КонтрагентИНН',
					},
					{
						name:'КонтрагентКПП',
					},
					{
						name:'КонтрагентСчет',
					},
					{
						name:'КонтрагентБанк',
					},
					{
						name:'КонтрагентРасчСчет',
					},
					{
						name:'КонтрагентГородБанка',
					},
					{
						name:'КонтрагентБанкДляРасчетов',
					},
					{
						name:'КонтрагентГородРЦБанка',
					},
					{
						name:'КонтрагентБИКБанка',
					},
					{
						name:'КонтрагентБИКРЦБанка',
					},
					{
						name:'КонтрагентКоррСчетРЦБанка',
					},
					{
						name:'КонтрагентТекстКорреспондента',
					},
					{
						name:'КонтрагентТекстНазначения',
					},
					{
						name:'СрокАкцепта',
					},
					{
						name:'УсловиеОплаты1',
					},
					{
						name:'ДатаОтсылкиДок',
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
						var грид = Ext.getCmp('ДокументыНаЭкспорт');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КлиентБанк.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КлиентБанк.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:200px;top:220px;width:380px;height:24px;',
			width: 380,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Упорядочить по возрастанию',
				},
				{
					text:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:87px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачПериода',
			width: 92,
			height: 19,
			style: 'position:absolute;left:113px;top:87px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:222px;top:87px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонПериода',
			width: 92,
			height: 19,
			style: 'position:absolute;left:241px;top:87px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Файл выгрузки:',
			style: 'position:absolute;left:8px;top:62px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФайлВыгрузки',
			width: 323,
			height: 19,
			style: 'position:absolute;left:113px;top:62px;width:323px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 323,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:12px;width:323px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:12px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетОрганизации',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:37px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетОрганизации.Представление',
			width: 323,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:37px;width:323px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаВыгрузить',
			text: 'Выгрузить',
			style: 'position:absolute;left:8px;top:501px;width:106px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтчетОВыгрузке',
			text: 'Отчет',
			style: 'position:absolute;left:120px;top:501px;width:99px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:605px;top:498px;width:160px;height:25px;',
			width: 160,
			height: 25,
			items:
			[
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Укажите реквизиты для отбора выгружаемых документов. Снимите отметки с тех документов, которые не должны выгружаться. \r\nПроверьте, что все отмеченные документы введены корректно и готовы к выгрузке.\r\nВыгрузите документы в файл. Для контроля результатов выгрузки сформируйте отчет.\r\n',
			style: 'position:absolute;left:485px;top:12px;width:280px;height:97px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:757px;height:24px;',
			width: 757,
			height: 24,
			items:
			[
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Отметить все',
				},
				{
					text:'Снять отметку у всех',
				},
				'-',
				{
					text:'Создать не найденное ...',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Упорядочить по возрастанию',
				},
				{
					text:'Упорядочить по убыванию',
				},
				'-',
			]
		},
		{
			id: 'ДокументыКИмпорту',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:757px;height:340px;',
			height: 340,width: 757,
			columns:
			[
				{
					text:'',
					width:'26',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Загружать',
					flex:1,
				},
				{
					text:'Дата',
					width:'70',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Сумма документа',
					width:'101',
					dataIndex:'СуммаДокумента1',
					flex:1,
				},
				{
					text:'Поступило',
					width:'80',
					dataIndex:'Поступило',
					flex:1,
				},
				{
					text:'Списано',
					width:'80',
					dataIndex:'Списано',
					flex:1,
				},
				{
					text:'Счет организации',
					width:'128',
					dataIndex:'СчетОрганизации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'132',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Счет контрагента',
					width:'116',
					dataIndex:'СчетКонтрагента',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'84',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Договор',
					width:'84',
					dataIndex:'Договор',
					flex:1,
				},
				{
					text:'Назначение платежа',
					width:'84',
					dataIndex:'НазначениеПлатежа',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Операция',
					width:'100',
					dataIndex:'Операция',
					flex:1,
				},
				{
					text:'Замечание',
					width:'100',
					dataIndex:'ОписаниеОшибок',
					flex:1,
				},
				{
					text:'Статья ДДС',
					width:'100',
					dataIndex:'СтатьяДДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлиентБанк/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Загружать',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'СуммаДокумента1',
					},
					{
						name:'Поступило',
					},
					{
						name:'Списано',
					},
					{
						name:'СчетОрганизации',
					},
					{
						name:'Контрагент',
					},
					{
						name:'СчетКонтрагента',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Договор',
					},
					{
						name:'НазначениеПлатежа',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Операция',
					},
					{
						name:'ОписаниеОшибок',
					},
					{
						name:'СтатьяДДС',
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
						var грид = Ext.getCmp('ДокументыКИмпорту');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КлиентБанк.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КлиентБанк.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:38px;top:187px;width:228px;height:24px;',
			width: 228,
			height: 24,
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Упорядочить по возрастанию',
				},
				{
					text:'Упорядочить по убыванию',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФайлЗагрузки',
			width: 323,
			height: 19,
			style: 'position:absolute;left:113px;top:62px;width:323px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПрочитатьДанныеИзФайла',
			text: 'Прочитать данные из файла',
			style: 'position:absolute;left:113px;top:87px;width:187px;height:22px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация1.Представление',
			width: 323,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:12px;width:323px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:12px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетОрганизации1',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:37px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетОрганизации1.Представление',
			width: 323,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:37px;width:323px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КлиентБанк.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КлиентБанк.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаЗагрузить',
			text: 'Загрузить',
			style: 'position:absolute;left:8px;top:501px;width:106px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтчетОЗагрузке',
			text: 'Отчет',
			style: 'position:absolute;left:120px;top:501px;width:99px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:605px;top:498px;width:160px;height:25px;',
			width: 160,
			height: 25,
			items:
			[
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Прочитайте из файла данные о движениях по указанному банковскому счету. \r\nПроверьте, что все  документы получены корректно и готовы к загрузке.\r\nЗагрузите документы в информационную базу. Для контроля результатов загрузки сформируйте отчет.\r\n',
			style: 'position:absolute;left:485px;top:12px;width:280px;height:97px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});