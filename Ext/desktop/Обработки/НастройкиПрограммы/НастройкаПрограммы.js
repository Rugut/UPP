Ext.require(['Данные.Обработки.НастройкиПрограммы'], function () 
{
	Ext.define('Обработки.НастройкиПрограммы.НастройкаПрограммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:730px;height:451px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка программы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокРазделов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:166px;height:410px;',
			height: 410,width: 166,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.НастройкиПрограммы.НастройкаПрограммыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиПрограммы.НастройкаПрограммыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:180px;top:8px;width:542px;height:410px;',
			height: 410,width: 542,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьШаблоновТелефонов',
			text: 'Шаблоны будут использованы при вводе контактной информации.\r\nШаблон может содержать заменитель цифр в номере телефона (цифра "9") и символы "разделители". Например, 999-99-99 или 999*99*99.',
			style: 'position:absolute;left:312px;top:124px;width:220px;height:88px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Любой основной почтовый клиент операционной системы (Microsoft Outlook, Outlook Express, The BAT! и пр.).',
			style: 'position:absolute;left:28px;top:68px;width:392px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела1',
			text: 'Электронная почта',
			style: 'position:absolute;left:12px;top:6px;width:198px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела2',
			text: 'Вывод сообщений',
			style: 'position:absolute;left:12px;top:6px;width:186px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела8',
			text: 'CRM: Управление взаимоотношениями с клиентами',
			style: 'position:absolute;left:12px;top:6px;width:512px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела12',
			text: 'Контроль остатков',
			style: 'position:absolute;left:12px;top:6px;width:192px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Интервал проверки напоминаний в секундах:',
			style: 'position:absolute;left:12px;top:48px;width:240px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Шаблоны телефонов:',
			style: 'position:absolute;left:12px;top:80px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'Шаблон позволяет выполнить "быструю" регистрацию нового контрагента из документа "Событие".',
			style: 'position:absolute;left:12px;top:255px;width:364px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Контроль остатков товаров на складах может выполняться по регистру "Свободные остатки".\r\nЭтот регистр содержит сводные данные по регистрам "Товары на складах", "Товары в рознице", "Товары в резерве на складах", "Товары к передаче со складов".',
			style: 'position:absolute;left:28px;top:68px;width:506px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаСвободныеОстатки',
			text: 'НадписьДатаНачалаСвободныеОстатки',
			style: 'position:absolute;left:276px;top:48px;width:251px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела17',
			text: 'Регламентные задания',
			style: 'position:absolute;left:12px;top:6px;width:242px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательДляРегламентныхЗаданий',
			text: 'Пользователь для выполнения регламентных заданий в файловом варианте:',
			style: 'position:absolute;left:12px;top:48px;width:244px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалДляВыполненияРеглЗаданийВФайловомВарианте',
			text: 'Интервал для опроса регламентных заданий в файловом варианте:',
			style: 'position:absolute;left:12px;top:92px;width:244px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела18',
			text: 'Основные',
			style: 'position:absolute;left:12px;top:6px;width:103px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерВерсииКонфигурации',
			text: 'Номер версии контролируется системой автоматически. \r\nПри установке новой версии выполняются необходимые обновления информационной базы.\r\nИзменять номер версии конфигурации вручную запрещено.',
			style: 'position:absolute;left:12px;top:92px;width:484px;height:41px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерВерсииКонфигурации',
			width: 88,
			height: 19,
			style: 'position:absolute;left:142px;top:72px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Заголовок системы:',
			style: 'position:absolute;left:12px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗаголовокСистемы',
			width: 392,
			height: 19,
			style: 'position:absolute;left:142px;top:48px;width:392px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Версия конфигурации:',
			style: 'position:absolute;left:12px;top:72px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проверять разницу во времени с сервером',
			style: 'position:absolute;left:12px;top:138px;width:244px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:12px;top:58px;width:522px;height:127px;',
		},
					]
				},
				{
					title:'CRM',
					items:
					[
		{
			id: 'ШаблоныТелефонов',
			xtype: 'grid',
			style: 'position:absolute;left:12px;top:124px;width:294px;height:88px;',
			height: 88,width: 294,
			columns:
			[
				{
					text:'Шаблоны телефонных номеров',
					width:'197',
					dataIndex:'ШаблоныТелефонныхНомеров',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ШаблоныТелефонныхНомеров',
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
						var грид = Ext.getCmp('ШаблоныТелефонов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиПрограммы.НастройкаПрограммыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиПрограммы.НастройкаПрограммыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:12px;top:100px;width:148px;height:24px;',
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
				{
					text:'Удалить',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалПроверкиНапоминанийВСекундах',
			style: 'position:absolute;left:256px;top:48px;width:46px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаШаблоновБыстрогоВводаКонтрагентаИзСобытия',
			text: 'Настройка шаблонов "быстрой" регистрации нового контрагента ...',
			style: 'position:absolute;left:12px;top:228px;width:364px;height:23px;',
		},
					]
				},
				{
					title:'Электронная почта',
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Использовать основной почтовый клиент операционной системы',
			style: 'position:absolute;left:12px;top:48px;width:372px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать встроенный почтовый клиент',
			style: 'position:absolute;left:12px;top:105px;width:260px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Вывод сообщений',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешить выводить сообщения в панель комментариев',
			style: 'position:absolute;left:12px;top:48px;width:316px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дублировать сообщения в журнал регистрации',
			style: 'position:absolute;left:12px;top:76px;width:272px;height:19px;',
		},
					]
				},
				{
					title:'Контроль остатков',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать регистр "Свободные остатки" с:',
			style: 'position:absolute;left:12px;top:48px;width:264px;height:19px;',
		},
					]
				},
				{
					title:'Регламентные задания',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПользовательДляВыполненияРегламентныхЗаданийВФайловомВарианте.Представление',
			width: 278,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:256px;top:48px;width:278px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.НастройкиПрограммы.НастройкаПрограммыСобытия'], function ()
					{
						var объект = Ext.create("Обработки.НастройкиПрограммы.НастройкаПрограммыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.НастройкиПрограммы.НастройкаПрограммыСобытия'], function ()
					{
						var объект = Ext.create("Обработки.НастройкиПрограммы.НастройкаПрограммыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалДляОпросаРегламентныхЗаданийВФайловомВарианте',
			style: 'position:absolute;left:256px;top:92px;width:44px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять остатки отпусков регламентированного учета автоматически',
			style: 'position:absolute;left:12px;top:135px;width:396px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаЗаполнятьОстаткиОтпусков',
			text: 'При выборе этой настройки будет выполняться автоматическое заполнение остатков отпусков прошлых лет для каждого сотрудника. Автоматическое заполнение будет происходить ежедневно.',
			style: 'position:absolute;left:28px;top:157px;width:380px;height:44px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять остатки отпусков управленческого учета автоматически',
			style: 'position:absolute;left:12px;top:205px;width:396px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаРасчетОстатковОтпусков',
			text: 'Программа будет автоматически заполнять остатки отпусков прошлого года для каждого сотрудника. Автоматическое заполнение будет происходить\r\n1-го января каждого года.',
			style: 'position:absolute;left:28px;top:225px;width:404px;height:43px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:12px;top:272px;width:420px;height:47px;',
			height: 47,width: 420,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически уничтожать персональные данные',
			style: 'position:absolute;left:0px;top:0px;width:420px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка8',
			text: 'Персональные данные кандидатов, в анкетах которых указан срок предоставления, будут автоматически уничтожены по истечении этого срока',
			style: 'position:absolute;left:12px;top:17px;width:403px;height:30px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Отложенное проведение',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРаздела19',
			text: 'Отложенное проведение',
			style: 'position:absolute;left:12px;top:6px;width:259px;height:30px;',
		},
		{
			id: 'НастройкаОтложенногоПроведения',
			xtype: 'grid',
			style: 'position:absolute;left:12px;top:75px;width:522px;height:173px;',
			height: 173,width: 522,
			columns:
			[
				{
					text:'Организация',
					width:'255',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Дата начала действия',
					width:'123',
					dataIndex:'ДатаНачалаДействия',
					flex:1,
				},
				{
					text:'Настройка допроведения',
					width:'136',
					dataIndex:'НастройкаДопроведенияДокументов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Организация',
					},
					{
						name:'ДатаНачалаДействия',
					},
					{
						name:'НастройкаДопроведенияДокументов',
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
						var грид = Ext.getCmp('НастройкаОтложенногоПроведения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиПрограммы.НастройкаПрограммыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиПрограммы.НастройкаПрограммыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:12px;top:48px;width:148px;height:24px;',
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
				{
					text:'Удалить',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись62',
			text: 'Необходимо указать организации, для которых применяется отложенное проведение, \r\nдаты начала действия отложенного проведения и выбрать настройку допроведения документов',
			style: 'position:absolute;left:12px;top:252px;width:522px;height:28px;text-align:left;',
		},
					]
				},
				{
					title:'Расчет себестоимости',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРаздела20',
			text: 'Расчет себестоимости',
			style: 'position:absolute;left:12px;top:6px;width:244px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаПогрешностиСЛУ',
			text: 'Граница погрешности СЛУ:',
			style: 'position:absolute;left:12px;top:48px;width:145px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГраницаПогрешностиСЛУ',
			style: 'position:absolute;left:270px;top:48px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальноеКоличествоИтерацийСЛУ',
			text: 'Максимальное количество итераций СЛУ:',
			style: 'position:absolute;left:12px;top:72px;width:217px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимальноеКоличествоИтерацийСЛУ',
			style: 'position:absolute;left:270px;top:72px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднееОтклонениеРешенияСЛУ',
			text: 'Среднее отклонение решения СЛУ:',
			style: 'position:absolute;left:12px;top:96px;width:183px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПодНадписьСреднееОтклонениеСЛУ',
			text: 'отрицательное число - показатель степени, в которую надо возвести 10',
			style: 'position:absolute;left:28px;top:117px;width:374px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтепеньСреднегоОтклоненияСЛУ',
			style: 'position:absolute;left:270px;top:96px;width:46px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РазмерНабораПриЗаписиРегистровУчетаЗатрат',
			style: 'position:absolute;left:109px;top:183px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаписыватьДвиженияРегистровУчетаЗатратПоЧастям',
			text: 'Записывать движения в регистры учета затрат',
			style: 'position:absolute;left:12px;top:137px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмерНабораПриЗаписиРегистровУчетаЗатрат',
			text: 'записей',
			style: 'position:absolute;left:191px;top:183px;width:79px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'все сразу',
			style: 'position:absolute;left:28px;top:160px;width:242px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'частями по',
			style: 'position:absolute;left:28px;top:183px;width:78px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Версионирование',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВерсионирование',
			text: 'Версионирование',
			style: 'position:absolute;left:12px;top:6px;width:179px;height:30px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать версионирование объектов',
			style: 'position:absolute;left:12px;top:48px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'Используется для ведения учета изменений объектов информационной базы в разрезе времени и позволяет ответить на вопросы КТО, КОГДА и ЧТО изменил. В качестве версионируемых объектов могут выступать справочники и документы.',
			style: 'position:absolute;left:28px;top:69px;width:506px;height:49px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаВерсионирования',
			text: 'Настройка версионирования объектов ...',
			style: 'position:absolute;left:28px;top:125px;width:228px;height:23px;',
		},
					]
				},
				{
					title:'Электронные документы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЭлектронныеДокументы',
			text: 'Электронные документы',
			style: 'position:absolute;left:12px;top:6px;width:258px;height:30px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать обмен электронными документами',
			style: 'position:absolute;left:12px;top:48px;width:274px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать электронные цифровые подписи',
			style: 'position:absolute;left:12px;top:68px;width:274px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Хранить файлы в томах на диске',
			style: 'position:absolute;left:12px;top:107px;width:274px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаТомаХраненияФайлов',
			text: 'Тома хранения файлов',
			style: 'position:absolute;left:28px;top:127px;width:258px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкиЭЦП',
			text: 'Настройки ЭЦП',
			style: 'position:absolute;left:28px;top:88px;width:258px;height:15px;',
		},
					]
				},
				{
					title:'Работа с задачами',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Разделять задачи по ролям исполнителей',
			style: 'position:absolute;left:12px;top:192px;width:242px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разделять задачи по организациям',
			style: 'position:absolute;left:12px;top:254px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись78',
			text: 'Работа с задачами',
			style: 'position:absolute;left:12px;top:6px;width:200px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'Надпись79',
			text: 'Эта настройка позволяет показывать пользователю только те задачи, которые соответствуют его роли.',
			style: 'position:absolute;left:28px;top:216px;width:404px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись80',
			text: 'Эта настройка позволяет задать для пользователя список организаций, по которым к нему будут поступать задачи. Настройка имеет смысл, если в информационной базе ведется учет по нескольким организациям.',
			style: 'position:absolute;left:28px;top:278px;width:404px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерейтиКНастройкеЗадач',
			text: 'Перейти к настройке задач исполнителей ...',
			style: 'position:absolute;left:8px;top:320px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись81',
			text: 'При обновлении списка «Мои задачи» будут создаваться следующие виды задач:',
			style: 'position:absolute;left:12px;top:35px;width:522px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:316px;top:118px;width:116px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
					]
				},
				{
					title:'Страница защита персональных данных',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗащитаПерсональныхДанных',
			text: 'Защита персональных данных',
			style: 'position:absolute;left:12px;top:6px;width:426px;height:25px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:12px;top:43px;width:522px;height:359px;',
			height: 359,width: 522,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Режим доступен',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:521px;height:29px;',
			height: 29,width: 521,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Защита соответствует классу',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОСоответствии',
			text: 'В информационной базе 980 физических лиц и 1 организация - информационная система относится к классу 3',
			style: 'position:absolute;left:29px;top:0px;width:487px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОНеСоответствии',
			text: 'В информационной базе 1010 физических лиц и 1 организация - требуется защита для систем класса 2',
			style: 'position:absolute;left:29px;top:0px;width:487px;height:29px;',
		},
					]
				},
				{
					title:'Защита не соответствует классу',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Регистрация событий включена',
			style: 'position:absolute;left:0px;top:61px;width:202px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Информационные системы персональных данных класса 3',
			style: 'position:absolute;left:0px;top:40px;width:521px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка7',
			text: 'Регистрация событий входа и выхода из системы, аутентификации, изменения прав доступа пользователей. Настройка регистрации событий производится в конфигураторе.',
			style: 'position:absolute;left:14px;top:79px;width:506px;height:29px;',
		},
		{
			xtype: 'fieldset',
			title: 'Информационные системы персональных данных класса 2',
			style: 'position:absolute;left:0px;top:113px;width:521px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать личные данные',
			style: 'position:absolute;left:0px;top:135px;width:202px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать данные о профессии и компетенциях',
			style: 'position:absolute;left:0px;top:181px;width:302px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать данные об имуществе',
			style: 'position:absolute;left:0px;top:218px;width:227px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка2',
			text: 'Фамилия, имя, отчество, год, месяц, дата и место рождения, адрес, семейное, социальное положение, данные документа удостоверяющего личность',
			style: 'position:absolute;left:14px;top:150px;width:506px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка3',
			text: 'Информация об образовании, профессии, знаниях и навыках, компетенциях',
			style: 'position:absolute;left:14px;top:196px;width:506px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка4',
			text: 'Информация о количестве акций, имущественные вычеты НДФЛ',
			style: 'position:absolute;left:14px;top:233px;width:506px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать данные о доходах',
			style: 'position:absolute;left:0px;top:255px;width:227px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка5',
			text: 'Доходы, НДФЛ, ЕСН, ФСС, начисления, ставки, значения показателей',
			style: 'position:absolute;left:14px;top:270px;width:506px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не регистрировать список лиц при доступе к данным о доходах и имуществе',
			style: 'position:absolute;left:0px;top:292px;width:426px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка6',
			text: 'Отключает регистрацию физических лиц в событиях доступа к данным о доходах и имуществе',
			style: 'position:absolute;left:14px;top:307px;width:506px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ограничивать количество сотрудников при печати платежных ведомостей',
			style: 'position:absolute;left:0px;top:338px;width:426px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:331px;width:513px;height:5px;',
		},
					]
				},
				{
					title:'Режим не доступен',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРежимНедоступен',
			text: 'Режим защиты персональных данных в соответствии с требованиями Федерального закона от 27.07.2006 N152-ФЗ "О персональных данных"\r\nдоступен при использовании платформы 1С:Предприятие версии 8.2.10 и выше',
			style: 'position:absolute;left:26px;top:19px;width:400px;height:54px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:426px;width:730px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
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