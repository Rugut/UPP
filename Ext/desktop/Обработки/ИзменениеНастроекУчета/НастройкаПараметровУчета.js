Ext.require(['Данные.Обработки.ИзменениеНастроекУчета'], function () 
{
	Ext.define('Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:765px;height:468px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка параметров учета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокРазделов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:195px;height:427px;',
			height: 427,width: 195,
			columns:
			[
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Имя раздела',
					width:'100',
					dataIndex:'ИмяРаздела',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеНастроекУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'ИмяРаздела',
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
						var грид = Ext.getCmp('СписокРазделов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:209px;top:8px;width:548px;height:427px;',
			height: 427,width: 548,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ИнфНадписьЕдиницаИзмеренияВеса',
			text: 'Единица измерения, в которой указываются весовые характеристики товарно-материальных ценностей.',
			style: 'position:absolute;left:12px;top:132px;width:385px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьЕдиницаИзмеренияОбъема',
			text: 'Единица измерения, в которой указываются характеристики объема товарно-материальных ценностей.',
			style: 'position:absolute;left:12px;top:196px;width:385px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДополнительнаяКолонкаПечатныхФормДокументов',
			text: 'Определяет, нужно ли при печати документов выводить дополнительную колонку, содержащую код или артикул товаров.',
			style: 'position:absolute;left:12px;top:68px;width:385px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаРегУчета',
			text: 'По отношению к этой валюте указываются курсы других валют.\r\nДля РФ валюта регламентированного учета - рубль.',
			style: 'position:absolute;left:12px;top:68px;width:336px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ТекстВажнойНадписи',
			text: 'ТекстВажнойНадписи',
			style: 'position:absolute;left:52px;top:195px;width:332px;height:20px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаМеждУчета',
			text: 'Обычно валюта международного учета в РФ - рубль.',
			style: 'position:absolute;left:12px;top:164px;width:276px;height:18px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать версии спецификаций',
			style: 'position:absolute;left:12px;top:80px;width:212px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать наработку',
			style: 'position:absolute;left:12px;top:144px;width:152px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать лимиты отпуска материалов',
			style: 'position:absolute;left:12px;top:112px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтратегияАвторезервированияПоЗаказам',
			text: 'Стратегия авторезервирования по заказам:',
			style: 'position:absolute;left:12px;top:48px;width:232px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать только сборочные спецификации',
			style: 'position:absolute;left:12px;top:48px;width:272px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичностьДоступностиКлючевыхРесурсовПредприятия',
			text: 'Периодичность доступности ключевых ресурсов предприятия:',
			style: 'position:absolute;left:12px;top:48px;width:327px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Определяет период, в рамках которого задаются показатели доступности ключевых ресурсов. Используется для оценки исполнимости планов.',
			style: 'position:absolute;left:12px;top:70px;width:521px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела',
			text: 'Заказы',
			style: 'position:absolute;left:12px;top:6px;width:80px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела3',
			text: 'Учет товаров',
			style: 'position:absolute;left:12px;top:6px;width:140px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела4',
			text: 'Производство',
			style: 'position:absolute;left:12px;top:6px;width:144px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела5',
			text: 'Планирование',
			style: 'position:absolute;left:12px;top:6px;width:156px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела6',
			text: 'Валюты',
			style: 'position:absolute;left:12px;top:6px;width:80px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Валюта регламентированного учета:',
			style: 'position:absolute;left:12px;top:48px;width:196px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Валюта управленческого учета:',
			style: 'position:absolute;left:12px;top:111px;width:196px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Валюта международного учета:',
			style: 'position:absolute;left:12px;top:144px;width:196px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела7',
			text: 'Печать, единицы измерения',
			style: 'position:absolute;left:12px;top:6px;width:284px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Дополнительная колонка печатных форм документов:',
			style: 'position:absolute;left:12px;top:48px;width:284px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Единица измерения веса:',
			style: 'position:absolute;left:12px;top:112px;width:284px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Единица измерения объема:',
			style: 'position:absolute;left:12px;top:176px;width:284px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Указывать склады в табличной части документов:',
			style: 'position:absolute;left:12px;top:152px;width:260px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Указывать заказы в табличной части документов:',
			style: 'position:absolute;left:12px;top:144px;width:260px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела14',
			text: 'Заказы на производство',
			style: 'position:absolute;left:12px;top:6px;width:256px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗакрытияПотребностейЗаказовНаПроизводство',
			text: 'Способ закрытия потребностей заказов на производство:',
			style: 'position:absolute;left:44px;top:96px;width:302px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела15',
			text: 'Режим учета затрат',
			style: 'position:absolute;left:12px;top:6px;width:292px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'Последовательность списания партий:',
			style: 'position:absolute;left:32px;top:184px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Списывать партии при отражении документов:',
			style: 'position:absolute;left:32px;top:120px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГруппаПроекты',
			text: 'Проекты',
			style: 'position:absolute;left:12px;top:8px;width:99px;height:26px;',
		},
		{
			xtype: 'label',
			name: 'Надпись57',
			text: 'Дополнительная детализация продаж, закупок, движения денежных средств, затрат и планирования в разрезе проектов.',
			style: 'position:absolute;left:12px;top:72px;width:422px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазделаВзаиморасчеты',
			text: 'Взаиморасчеты',
			style: 'position:absolute;left:12px;top:6px;width:156px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособКонтроляДнейЗадолженности',
			text: 'Способ контроля дней задолженности:',
			style: 'position:absolute;left:12px;top:48px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НастройкаОпределениеВремениПроведенияПлатежногоДокумента',
			text: 'Если у документа совпадают даты регистрации и оплаты, то проводить его:',
			style: 'position:absolute;left:12px;top:76px;width:402px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела16',
			text: 'Расчеты с персоналом',
			style: 'position:absolute;left:12px;top:6px;width:241px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись59',
			text: 'Способ ведения расчетов с персоналом в регламентированном учете:',
			style: 'position:absolute;left:12px;top:48px;width:443px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись60',
			text: 'На счетах бухгалтерского и налогового учета:\r\n70      "Расчеты с персоналом по оплате труда"\r\n76.04 "Расчеты по депонированным суммам"\r\n97.01 "Расходы на оплату труда будущих периодов"',
			style: 'position:absolute;left:12px;top:108px;width:333px;height:62px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасширеннаяАналитикаДатаНачала',
			text: 'НадписьРасширеннаяАналитикаДатаНачала',
			style: 'position:absolute;left:320px;top:48px;width:202px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РежимИспользованияРасширеннойАналитики',
			text: 'РежимИспользованияРасширеннойАналитики',
			style: 'position:absolute;left:32px;top:72px;width:308px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись62',
			text: 'Вести управленческий учет затрат по организациям:',
			style: 'position:absolute;left:32px;top:272px;width:277px;height:22px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Указывать серии при резервировании',
			style: 'position:absolute;left:12px;top:264px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать внутренние заказы',
			style: 'position:absolute;left:12px;top:228px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для документов поступления',
			style: 'position:absolute;left:28px;top:168px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для документов реализации',
			style: 'position:absolute;left:28px;top:192px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать возвраты товара покупателем',
			style: 'position:absolute;left:12px;top:300px;width:269px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не указана',
			style: 'position:absolute;left:28px;top:68px;width:84px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сначала в заказах поставщикам, потом на складах',
			style: 'position:absolute;left:28px;top:108px;width:291px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сначала на складах, потом в заказах поставщикам',
			style: 'position:absolute;left:28px;top:88px;width:291px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заказы на производство',
			style: 'position:absolute;left:12px;top:48px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет потребностей заказов на производство в материалах и полуфабрикатах',
			style: 'position:absolute;left:28px;top:72px;width:450px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Явно (с помощью документа "Корректировка заказа на производство")',
			style: 'position:absolute;left:60px;top:116px;width:400px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Автоматически при распределении материалов на выпуск продукции',
			style: 'position:absolute;left:60px;top:140px;width:400px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПериодичностьДоступностиКлючевыхРесурсовПредприятия.Представление',
			width: 190,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:343px;top:48px;width:190px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести планирование производства по сменам',
			style: 'position:absolute;left:12px;top:116px;width:260px;height:20px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаУправленческогоУчета.Представление',
			width: 83,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:111px;width:83px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаРегламентированногоУчета.Представление',
			width: 83,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:48px;width:83px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаМеждународногоУчета.Представление',
			width: 83,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:144px;width:83px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать характеристики номенклатуры',
			style: 'position:absolute;left:12px;top:48px;width:256px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать серии номенклатуры',
			style: 'position:absolute;left:12px;top:72px;width:256px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет возвратной тары',
			style: 'position:absolute;left:12px;top:120px;width:256px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать серийные номера',
			style: 'position:absolute;left:12px;top:96px;width:256px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для документов поступления',
			style: 'position:absolute;left:28px;top:176px;width:172px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для документов реализации',
			style: 'position:absolute;left:28px;top:200px;width:172px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДополнительнаяКолонкаПечатныхФормДокументов.Представление',
			width: 104,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:300px;top:48px;width:104px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЕдиницаИзмеренияВеса.Представление',
			width: 104,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:300px;top:112px;width:104px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЕдиницаИзмеренияОбъема.Представление',
			width: 104,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:300px;top:176px;width:104px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'В регламентированном учете',
			style: 'position:absolute;left:48px;top:160px;width:176px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В управленческом учете',
			style: 'position:absolute;left:48px;top:140px;width:176px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаВеденияУПУПоОрганизациям',
			text: 'Детализация учета ...',
			style: 'position:absolute;left:344px;top:272px;width:178px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ДетализацияРасширеннойАналитикиУчетаНоменклатурыИЗатрат',
			text: 'Детализация учета ...',
			style: 'position:absolute;left:344px;top:72px;width:178px;height:22px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Списывать партии расходным ордером',
			style: 'position:absolute;left:32px;top:248px;width:250px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Сначала принятые, потом собственные',
			style: 'position:absolute;left:48px;top:204px;width:220px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сначала собственные, потом принятые',
			style: 'position:absolute;left:48px;top:224px;width:220px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Использовать расширенную аналитику учета затрат с:',
			style: 'position:absolute;left:12px;top:48px;width:304px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать партионный учет',
			style: 'position:absolute;left:12px;top:96px;width:248px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет по проектам',
			style: 'position:absolute;left:12px;top:52px;width:141px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать виды распределения по проектам',
			style: 'position:absolute;left:28px;top:108px;width:406px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет затрат по проектам',
			style: 'position:absolute;left:28px;top:132px;width:177px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Указывать проекты в табличной части документов',
			style: 'position:absolute;left:48px;top:152px;width:331px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособКонтроляДнейЗадолженности.Представление',
			width: 190,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:224px;top:48px;width:190px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По времени регистрации документа',
			style: 'position:absolute;left:28px;top:96px;width:224px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В конце дня даты регистрации документа',
			style: 'position:absolute;left:28px;top:116px;width:240px;height:19px;',
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
			boxLabel: 'Сводно по всем работникам',
			style: 'position:absolute;left:28px;top:88px;width:166px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По каждому работнику',
			style: 'position:absolute;left:28px;top:68px;width:166px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись72',
			text: 'НДС',
			style: 'position:absolute;left:12px;top:6px;width:354px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'Надпись88',
			text: 'Указание наименования продавца в счете-фактуре:',
			style: 'position:absolute;left:12px;top:48px;width:354px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрименяетсяС1',
			text: 'Применяется с:',
			style: 'position:absolute;left:39px;top:215px;width:84px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаУказанияСокращенногоНаименованияПродавцаВСчетеФактуре',
			width: 80,
			height: 19,
			style: 'position:absolute;left:128px;top:215px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись90',
			text: 'В соответствии с Постановлением Правительства РФ от 26 мая 2009 г. № 451 «О внесении изменений в Постановление Правительства Российской Федерации от 2 декабря 2000 г. № 914» в счете-фактуре необходимо указывать полное и сокращенное наименование продавца в соответствии с учредительными документами. Это изменение вступает в силу с 9 июня 2009 г. и действует до даты вступления в силу постановления Правительства РФ \r\nот 26 декабря 2011 г. № 1137.',
			style: 'position:absolute;left:39px;top:120px;width:414px;height:92px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоПримененияИсправленныхСчетовФактур',
			width: 80,
			height: 19,
			style: 'position:absolute;left:128px;top:297px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрименяетсяС_',
			text: 'Применяется с:',
			style: 'position:absolute;left:39px;top:297px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись95',
			text: 'До установленной даты учет НДС ведется в соответствии с Постановлением Правительства РФ от 2 декабря 2000 г. N 914',
			style: 'position:absolute;left:39px;top:320px;width:414px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Учет НДС ведется в соответствии с постановлением Правительства РФ от 26 декабря 2011 г. № 1137 "О формах и правилах заполнения (ведения) документов, применяемых при расчетах по налогу на добавленную стоимость"',
			style: 'position:absolute;left:12px;top:244px;width:490px;height:44px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Единая нумерация всех выданных счетов-фактур',
			style: 'position:absolute;left:23px;top:385px;width:347px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись98',
			text: 'Порядок нумерации выданных счетов-фактур:',
			style: 'position:absolute;left:12px;top:357px;width:367px;height:20px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Только полное наименование',
			style: 'position:absolute;left:23px;top:72px;width:406px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Полное и сокращенное наименование',
			style: 'position:absolute;left:23px;top:96px;width:406px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись96',
			text: 'НДС в валюте',
			style: 'position:absolute;left:12px;top:6px;width:354px;height:25px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По рублевой сумме документа (рекомендуется)',
			style: 'position:absolute;left:29px;top:73px;width:390px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПересчетаСуммыНДСвРубляхПоДокументамВИностраннойВалютеПоСтавкеНДС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:131px;top:148px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По валютной сумме НДС',
			style: 'position:absolute;left:29px;top:180px;width:343px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись73',
			text: 'Для документов в иностранной валюте сумма НДС в рублях рассчитывается:',
			style: 'position:absolute;left:12px;top:49px;width:406px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись97',
			text: 'Применяется с:',
			style: 'position:absolute;left:45px;top:148px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись75',
			text: 'Сумма НДС в рублях соответствует рублевой сумме документа, умноженной на ставку НДС. При выборе этого варианта необходимо указать дату, начиная с которой он будет применяться. Если дата не имеет значения, рекомендуется указать 01.01.1980.',
			style: 'position:absolute;left:45px;top:97px;width:495px;height:46px;',
		},
		{
			xtype: 'label',
			name: 'Надпись76',
			text: 'Сумма НДС в рублях соответствует валютной сумме НДС, умноженной на курс валюты.',
			style: 'position:absolute;left:45px;top:204px;width:495px;height:20px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись91',
			text: 'Налог на прибыль',
			style: 'position:absolute;left:6px;top:6px;width:375px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоОценкиДоходовИРасходовВНУПоКурсуАвансов',
			text: 'Применяется с:',
			style: 'position:absolute;left:36px;top:123px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоОценкиДоходовИРасходовВНУПоКурсуАвансов',
			width: 80,
			height: 19,
			style: 'position:absolute;left:132px;top:123px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнфоНалогНаПрибыльАвансы2',
			text: 'До установленной даты стоимость имущества и услуг определяется по курсу на дату поступления или реализации',
			style: 'position:absolute;left:36px;top:143px;width:356px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись92',
			text: 'Стоимость имущества и услуг, предварительно оплаченных по договору в валюте, определяется по курсу на дату:',
			style: 'position:absolute;left:6px;top:42px;width:375px;height:30px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Получения или выдачи аванса',
			style: 'position:absolute;left:22px;top:100px;width:387px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Поступления или реализации имущества и услуг',
			style: 'position:absolute;left:22px;top:77px;width:387px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоОценкиДоходовИРасходовВНУПоКурсуАвансов1',
			text: 'Применяется с:',
			style: 'position:absolute;left:46px;top:273px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаУчетаПостоянныхРазницВКурсовыхРазницахПоРасчетамВУЕ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:142px;top:273px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнфоНалогНаПрибыльАвансы3',
			text: 'Суммовая разница определяется без учета НДС.\r\nНДС не учитывается в составе расходов для целей налогообложения прибыли',
			style: 'position:absolute;left:46px;top:293px;width:413px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись93',
			text: 'Порядок поддержки ПБУ18/02 при учете суммовых разниц',
			style: 'position:absolute;left:6px;top:198px;width:375px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Признавать постоянные разницы',
			style: 'position:absolute;left:22px;top:250px;width:387px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Признавать временные разницы',
			style: 'position:absolute;left:22px;top:227px;width:387px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отдельная нумерация счетов-фактур на аванс с префиксом "А"',
			style: 'position:absolute;left:23px;top:404px;width:347px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись94',
			text: 'Розничные продажи',
			style: 'position:absolute;left:12px;top:6px;width:209px;height:25px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать оплату платежными картами',
			style: 'position:absolute;left:12px;top:48px;width:272px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать оплату банковскими кредитами',
			style: 'position:absolute;left:12px;top:72px;width:272px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'В регламентированном учете',
			style: 'position:absolute;left:28px;top:124px;width:176px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В управленческом учете',
			style: 'position:absolute;left:28px;top:100px;width:176px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Вести учет себестоимости МПЗ по складам:',
			style: 'position:absolute;left:12px;top:76px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела18',
			text: 'Себестоимость',
			style: 'position:absolute;left:12px;top:6px;width:292px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Тип цен плановой себестоимости номенклатуры:',
			style: 'position:absolute;left:12px;top:48px;width:260px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТипЦенПлановойСебестоимостиНоменклатуры.Представление',
			width: 196,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:270px;top:48px;width:196px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРаздела19',
			text: 'Способы распределения затрат',
			style: 'position:absolute;left:12px;top:6px;width:350px;height:30px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:12px;top:48px;width:528px;height:371px;',
			height: 371,width: 528,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись65',
			text: 'Данные настройки используются в режиме расширенной аналитики учета и затрат.\r\nРежим расширенной аналитики устанавливается в разделе "Режим учета затрат".',
			style: 'position:absolute;left:0px;top:0px;width:468px;height:60px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменять способы распределения затрат',
			style: 'position:absolute;left:0px;top:0px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись67',
			text: 'В общем случае включать не следует. Подробнее см. справку',
			style: 'position:absolute;left:0px;top:25px;width:468px;height:17px;',
		},
					]
				},
				{
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
			style: 'position:absolute;left:0px;top:443px;width:765px;height:25px;',
			width: 765,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'',
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
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});