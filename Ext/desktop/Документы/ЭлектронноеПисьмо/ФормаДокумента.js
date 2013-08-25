Ext.require(['Данные.Документы.ЭлектронноеПисьмо'], function () 
{
	Ext.define('Документы.ЭлектронноеПисьмо.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Электронное письмо',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			width: 660,
			height: 25,
			items:
			[
				{
					text:'HTML',
				},
				{
					text:'Простой текст',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Кому',
			width: 552,
			height: 19,
			style: 'position:absolute;left:102px;top:57px;width:552px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКому',
			text: 'Кому:',
			style: 'position:absolute;left:7px;top:57px;width:85px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			width: 660,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Ответить',
				},
				{
					text:'Ответить всем',
				},
				{
					text:'Переслать',
				},
				'-',
				{
					text:'Ввести событие',
				},
				{
					text:'Показать заголовок письма',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Редактирование',
				},
				{
					text:'Восстановить исходный текст',
				},
				'-',
				{
					text:'Адресная книга',
				},
				'-',
				{
					text:'Создать опрос',
				},
				'-',
				{
					text:'Структура подчиненности',
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Ответить всем',
				},
				'-',
				{
					text:'Переслать',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Адресная книга',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКопии',
			text: 'Копии:',
			style: 'position:absolute;left:7px;top:81px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Копии',
			width: 552,
			height: 19,
			style: 'position:absolute;left:102px;top:81px;width:552px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:7px;top:105px;width:647px;height:24px;',
			height: 24,width: 647,
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
			name: 'СкрытыеКопии',
			width: 552,
			height: 19,
			style: 'position:absolute;left:95px;top:0px;width:552px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Тема:',
			style: 'position:absolute;left:7px;top:129px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Тема',
			width: 552,
			height: 19,
			style: 'position:absolute;left:102px;top:129px;width:552px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтКого',
			text: 'От кого:',
			style: 'position:absolute;left:7px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:33px;width:552px;height:19px;',
			width: 552,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:7px;top:176px;width:647px;height:261px;',
			height: 261,width: 647,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Группа:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			width: 106,
			height: 24,
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			width: 106,
			height: 24,
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			width: 106,
			height: 24,
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:106px;height:24px;',
			width: 106,
			height: 24,
			items:
			[
				{
					text:'Открыть ссылку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКодировкаПисьма',
			text: 'Кодировка:',
			style: 'position:absolute;left:6px;top:59px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредмет',
			text: 'Предмет:',
			style: 'position:absolute;left:6px;top:31px;width:90px;height:19px;text-align:left;',
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
			name: 'ГруппаУчетнойЗаписи.Представление',
			width: 277,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:101px;top:6px;width:277px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:212px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 538,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:101px;top:212px;width:538px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЭлектронноеПисьмо.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Комментарий:',
			style: 'position:absolute;left:6px;top:190px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 538,
			height: 19,
			style: 'position:absolute;left:101px;top:190px;width:538px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтправления',
			width: 151,
			height: 19,
			style: 'position:absolute;left:488px;top:83px;width:151px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 151,
			height: 19,
			style: 'position:absolute;left:488px;top:59px;width:151px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 151,
			height: 19,
			style: 'position:absolute;left:488px;top:6px;width:151px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:166px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Основание',
			width: 538,
			height: 19,
			style: 'position:absolute;left:101px;top:166px;width:538px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаТранспорта',
			width: 151,
			height: 19,
			style: 'position:absolute;left:488px;top:107px;width:151px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:101px;top:59px;width:277px;height:19px;',
			width: 277,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Предмет',
			width: 538,
			height: 19,
			style: 'position:absolute;left:101px;top:31px;width:538px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ВложенияПисьма',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:201px;',
			height: 201,width: 632,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭлектронноеПисьмо/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ИмяФайла',
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
						var грид = Ext.getCmp('ВложенияПисьма');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭлектронноеПисьмо.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭлектронноеПисьмо.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			width: 632,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Закончить редактирование',
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
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
					]
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Сохранить',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ВложенияПисьмаТЗ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:201px;',
			height: 201,width: 632,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭлектронноеПисьмо/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ИмяФайла',
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
						var грид = Ext.getCmp('ВложенияПисьмаТЗ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭлектронноеПисьмо.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭлектронноеПисьмо.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			width: 632,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				'-',
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Сохранить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отправитель',
			width: 552,
			height: 19,
			style: 'position:absolute;left:102px;top:33px;width:552px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не рассмотрено, рассмотреть после:',
			style: 'position:absolute;left:7px;top:153px;width:210px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'РассмотретьПосле',
			width: 150,
			height: 19,
			style: 'position:absolute;left:222px;top:153px;width:150px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});