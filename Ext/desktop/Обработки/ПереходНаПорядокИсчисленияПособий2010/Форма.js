Ext.require(['Данные.Обработки.ПереходНаПорядокИсчисленияПособий2010'], function () 
{
	Ext.define('Обработки.ПереходНаПорядокИсчисленияПособий2010.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:565px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Переход - 2010',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОблученных',
			text: 'Начиная с версии 1.2.27 в конфигурации автоматизировано начисление пособий по временной нетрудоспособности и по уходу за ребенком в повышенных размерах лицам, пострадавшим от радиационного облучения, в соответствии с Законом Российской Федерации 15 мая 1991 года №1244-I и Федеральным законом от 10 января 2002 года №2-ФЗ.\r\nЧтобы пособия автоматически начислялись в повышенных размерах, необходимо в форме редактирования данных физлица на закладке "Персональные данные" указать основание предоставления льготы.',
			style: 'position:absolute;left:46px;top:183px;width:532px;height:97px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтставников',
			text: 'С 1 января 2010 года в страховой стаж наравне с периодами работы засчитываются нестраховые периоды, например, прохождение военной службы, служба в органах внутренних дел и др.\r\nСотрудникам, принятым на работу после 1 января 2007 года, в страховой стаж которых не были включены такие нестраховые периоды, необходимо в форме "Трудовая деятельность" ввести сведения о "расширенном" страховом стаже по строке "Стаж для оплаты больничных листов с учетом нестраховых периодов (с 2010 года)".',
			style: 'position:absolute;left:46px;top:82px;width:532px;height:90px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавок',
			text: 'При обновлении информационной базы были автоматически прописаны ставки страховых взносов и размеры предельной величины облагаемой базы',
			style: 'position:absolute;left:46px;top:42px;width:532px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкиСтраховыхВзносов',
			text: 'Перейти к ставкам страховых взносов',
			style: 'position:absolute;left:611px;top:42px;width:181px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокГлавногоОкна',
			text: 'Замена ЕСН страховыми взносами с 1 января 2010 года',
			style: 'position:absolute;left:8px;top:8px;width:729px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыбратьОтставника',
			text: 'Выбрать сотрудника и ввести "расширенный" страховой стаж',
			style: 'position:absolute;left:611px;top:82px;width:181px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыбратьОблученного',
			text: 'Выбрать сотрудника и ввести льготу для начисления пособий',
			style: 'position:absolute;left:611px;top:183px;width:181px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПособийПоБеременности',
			text: 'С 1 января 2010 года изменен состав заработка, из которого исчисляются пособия по беременности и родам, а также увеличена предельная сумма пособия по беременности и родам, в связи с чем некоторые назначенные в 2009 году пособия требуется пересчитать.',
			style: 'position:absolute;left:46px;top:284px;width:532px;height:40px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:611px;top:116px;width:181px;height:56px;',
			height: 56,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтставникиИнформацияНеВведена',
			text: 'Информация о "расширенном" стаже не введена',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПоказатьСписокОтставников',
			text: 'Показать список...',
			style: 'position:absolute;left:80px;top:41px;width:101px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОтставникиНадписьИнформацияВведена',
			text: 'Информация о "расширенном" стаже введена для 15-ти сотрудников',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:611px;top:218px;width:181px;height:56px;',
			height: 56,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОблученныеИнформацияНеВведена',
			text: 'Информация о льготах для начисления пособий не введена',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'ОблученныеНадписьИнформацияВведена',
			text: 'Информация о льготах введена для 15-ти сотрудников',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПоказатьСписокОблученных',
			text: 'Показать список...',
			style: 'position:absolute;left:80px;top:41px;width:101px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:611px;top:284px;width:181px;height:40px;',
			height: 40,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПособияПоБеременностиНадписьИнформацияНеНужна',
			text: 'Пособий по беременности и родам, по которым необходим пересчет, не обнаружено',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'ПособияПоБеременностиДокументыОбнаружены',
			text: 'Обнаружены пособия, по которым требуется пересчет. Всего 8, пересчитано 2.',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
					]
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПособияПоБеременностиДокументыОбработаны',
			text: 'Все пособия, по которым требовался пересчет, обработаны!',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:329px;width:784px;height:85px;',
			height: 85,width: 784,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПособияПоБеременности',
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:16px;width:532px;height:69px;',
			height: 69,width: 532,
			columns:
			[
				{
					text:'Сотрудник',
					width:'144',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Расчетный документ',
					width:'195',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Действие',
					width:'87',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Выполнено',
					width:'65',
					dataIndex:'Выполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереходНаПорядокИсчисленияПособий2010/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'Действие',
					},
					{
						name:'Выполнено',
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
						var грид = Ext.getCmp('ПособияПоБеременности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПереходНаПорядокИсчисленияПособий2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПереходНаПорядокИсчисленияПособий2010.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Пособия по беременности и родам к пересчету',
			style: 'position:absolute;left:38px;top:0px;width:532px;height:14px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:472px;width:784px;height:85px;',
			height: 85,width: 784,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПособияПоУходуЗаРебенком',
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:16px;width:532px;height:69px;',
			height: 69,width: 532,
			columns:
			[
				{
					text:'Сотрудник',
					width:'141',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Расчетный документ',
					width:'198',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Действие',
					width:'84',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Выполнено',
					width:'70',
					dataIndex:'Выполнено',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереходНаПорядокИсчисленияПособий2010/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'Действие',
					},
					{
						name:'Выполнено',
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
						var грид = Ext.getCmp('ПособияПоУходуЗаРебенком');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПереходНаПорядокИсчисленияПособий2010.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПереходНаПорядокИсчисленияПособий2010.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Пособия по уходу за ребенком к исправлению',
			style: 'position:absolute;left:38px;top:0px;width:532px;height:14px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:426px;width:784px;height:40px;',
			height: 40,width: 784,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:603px;top:0px;width:181px;height:40px;',
			height: 40,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ПособияУходуЗаРебенкомДокументыНеОбнаруженыНадпись',
			text: 'Пособий по уходу за ребенком, которые необходимо исправить, не обнаружено',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'ПособияПоУходуЗаРебенкомДокументыОбнаружены',
			text: 'Обнаружены пособия, которые требуется исправить. Всего 8, исправлено 2.',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'ПособияПоУходуЗаРебенкомДокументыОбработаны',
			text: 'Все пособия, по которым требовались исправления, обработаны!',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:40px;',
		},
					]
				},
				{
				},
				{
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:14px;top:172px;width:778px;height:6px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:14px;top:75px;width:778px;height:6px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:14px;top:277px;width:778px;height:6px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:14px;top:418px;width:778px;height:6px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});