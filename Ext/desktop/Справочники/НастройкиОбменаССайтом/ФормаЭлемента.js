Ext.require(['Данные.Справочники.НастройкиОбменаССайтом'], function () 
{
	Ext.define('Справочники.НастройкиОбменаССайтом.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:690px;height:579px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки обмена с WEB-сайтом',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			width: 690,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Монитор обменов',
					tooltip:'Открыть монитор обменов',
				},
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен по настройке',
				},
					]
				},
				'-',
				{
					text:'Монитор обменов',
					tooltip:'Открыть монитор обменов',
				},
				'-',
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен по настройке',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:190px;top:58px;width:492px;height:464px;',
			height: 464,width: 492,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:79px;width:478px;height:116px;',
			height: 116,width: 478,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогВыгрузки',
			width: 394,
			height: 20,
			style: 'position:absolute;left:84px;top:0px;width:394px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКаталогНаДиске',
			text: 'Каталог:',
			style: 'position:absolute;left:0px;top:1px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПортПрокси',
			text: 'Порт:',
			style: 'position:absolute;left:263px;top:74px;width:44px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьАдресСайта',
			text: 'Адрес сайта:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPВыгрузкаПароль',
			width: 167,
			height: 19,
			style: 'position:absolute;left:311px;top:26px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:263px;top:26px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователя',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:26px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPВыгрузкаИмяПользователя',
			width: 176,
			height: 19,
			style: 'position:absolute;left:84px;top:26px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменАдресСкрипта',
			width: 394,
			height: 20,
			style: 'position:absolute;left:84px;top:0px;width:394px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать прокси-сервер',
			style: 'position:absolute;left:0px;top:50px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователяПрокси',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:97px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменПроксиИмяПользователя',
			width: 176,
			height: 19,
			style: 'position:absolute;left:84px;top:97px;width:176px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'HTTPОбменПроксиПорт',
			style: 'position:absolute;left:311px;top:74px;width:167px;height:19px;',
			width: 167,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПрокси',
			text: 'Сервер:',
			style: 'position:absolute;left:0px;top:74px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменПроксиСервер',
			width: 176,
			height: 19,
			style: 'position:absolute;left:84px;top:74px;width:176px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольПрокси',
			text: 'Пароль:',
			style: 'position:absolute;left:263px;top:97px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменПроксиПароль',
			width: 167,
			height: 19,
			style: 'position:absolute;left:311px;top:97px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:356px;top:50px;width:122px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипОбменаДанными',
			text: 'Тип обмена данными:',
			style: 'position:absolute;left:6px;top:54px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРежимОбмена',
			text: 'Режим обмена:',
			style: 'position:absolute;left:6px;top:201px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать периодический обмен данными',
			style: 'position:absolute;left:6px;top:274px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРегламентногоЗаданияНастройки',
			text: 'Расписание регламентного задания',
			style: 'position:absolute;left:21px;top:297px;width:463px;height:39px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаРегламентногоЗадания',
			text: 'Дополнительные настройки расписания ...',
			style: 'position:absolute;left:255px;top:341px;width:229px;height:24px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгрузка товаров',
			style: 'position:absolute;left:6px;top:6px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обмен заказами',
			style: 'position:absolute;left:6px;top:30px;width:117px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:14px;top:225px;width:468px;height:24px;',
			height: 24,width: 468,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'УзелОбменаТоварами.Представление',
			width: 268,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:135px;top:0px;width:268px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:14px;top:249px;width:468px;height:25px;',
			height: 25,width: 468,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'УзелОбменаЗаказами.Представление',
			width: 268,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:135px;top:0px;width:268px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Выгрузка на сайт',
			style: 'position:absolute;left:126px;top:54px;width:112px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выгрузка в каталог',
			style: 'position:absolute;left:270px;top:54px;width:124px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Полная выгрузка',
			style: 'position:absolute;left:126px;top:201px;width:110px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только изменения',
			style: 'position:absolute;left:270px;top:201px;width:116px;height:19px;',
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
			boxLabel: 'Выгружать картинки',
			style: 'position:absolute;left:6px;top:6px;width:128px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:52px;width:478px;height:24px;',
			width: 478,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ПостроительОтчетаОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:478px;height:360px;',
			height: 360,width: 478,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаССайтом").data,
					fields: ['Ссылка','Использование','Имя','ВидСравнения','Значение','ЗначениеС','ЗначениеПо',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаССайтом/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ПостроительОтчетаОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: 'Укажите отбор для выгрузки товаров на сайт:',
			style: 'position:absolute;left:6px;top:30px;width:245px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:51px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособИдентификацииКонтрагентов',
			text: 'Идентификация контрагентов:',
			style: 'position:absolute;left:6px;top:6px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДляНовыхКонтрагентов',
			text: 'Группа для новых контрагентов:',
			style: 'position:absolute;left:6px;top:144px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДляНовойНоменклатуры',
			text: 'Группа для новой номенклатуры:',
			style: 'position:absolute;left:6px;top:168px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияНовойНоменклатуры',
			text: 'Единица новой номенклатуры:',
			style: 'position:absolute;left:6px;top:192px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:75px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:99px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:185px;top:51px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:185px;top:75px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:185px;top:99px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:185px;top:6px;width:178px;height:19px;',
			width: 178,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ГруппаДляНовыхКонтрагентов.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:185px;top:144px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'ГруппаДляНовойНоменклатуры.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:185px;top:168px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЕдиницаИзмеренияНовойНоменклатуры.Представление',
			width: 299,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:185px;top:192px;width:299px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьУстановкаДаты',
			text: 'Установка даты:',
			style: 'position:absolute;left:6px;top:237px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроведениеДокумента',
			text: 'Проведение документа:',
			style: 'position:absolute;left:6px;top:307px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Параметры для подстановки в заказы с WEB-сайта',
			style: 'position:absolute;left:6px;top:30px;width:478px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Параметры для создания новых элементов',
			style: 'position:absolute;left:6px;top:123px;width:478px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Действия с документами, пришедшими с WEB-сайта',
			style: 'position:absolute;left:6px;top:216px;width:478px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По информации документа с сайта',
			style: 'position:absolute;left:16px;top:260px;width:199px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Устанавливать у документов текущую дату',
			style: 'position:absolute;left:16px;top:284px;width:246px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Только записывать документы',
			style: 'position:absolute;left:16px;top:330px;width:181px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Записывать и проводить документы',
			style: 'position:absolute;left:16px;top:353px;width:207px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Проводить оперативно',
			style: 'position:absolute;left:38px;top:376px;width:159px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Проводить НЕ оперативно',
			style: 'position:absolute;left:40px;top:399px;width:157px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:190px;top:527px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 413,
			height: 19,
			style: 'position:absolute;left:269px;top:527px;width:413px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:600px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:642px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:190px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 323,
			height: 19,
			style: 'position:absolute;left:276px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаНаСайт1СБитрикс',
			text: 'http://www.1c-bitrix.ru/1c/',
			style: 'position:absolute;left:28px;top:506px;width:134px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаНаСайт1СБитриксТекст',
			text: 'Подробнее об обмене данными с сайтом "1С-Битрикс" и рекомендации по организации и управлению интернет-магазином вы можете прочитать на сайте «1С-Битрикс»:',
			style: 'position:absolute;left:8px;top:424px;width:174px;height:80px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Система управления интернет-проектами "1С-Битрикс" поддерживает обмен данными в типовой поставке продукта "1С-Битрикс: Управление сайтом" начиная с версии "1С-Битрикс" 6.5',
			style: 'position:absolute;left:8px;top:309px;width:174px;height:95px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Технология обмена данными с WEB-сайтом является универсальной и основана на стандарте обмена коммерческой информацией CommerceML 2',
			style: 'position:absolute;left:8px;top:58px;width:174px;height:66px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробнееОСтандартеCML2',
			text: 'Подробнее о стандарте CML 2',
			style: 'position:absolute;left:8px;top:149px;width:174px;height:15px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробнееОТехнологииОбмена',
			text: 'Подробнее о технологии обмена',
			style: 'position:absolute;left:8px;top:129px;width:174px;height:15px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:690px;height:25px;',
			width: 690,
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