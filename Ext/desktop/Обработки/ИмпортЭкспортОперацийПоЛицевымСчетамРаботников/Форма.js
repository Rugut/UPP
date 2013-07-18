Ext.require(['Данные.Обработки.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников'], function () 
{
	Ext.define('Обработки.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:482px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Импорт / экспорт операций по лицевым счетам сотрудников',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:766px;height:429px;',
			height: 429,width: 766,
			items:
			[
				{
					title:'Экспорт заявок на открытие счетов',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаФормированияФайлов',
			width: 80,
			height: 19,
			style: 'position:absolute;left:120px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата формирования:',
			style: 'position:absolute;left:6px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогЭкспорта',
			width: 442,
			height: 19,
			style: 'position:absolute;left:120px;top:6px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Каталог экспорта:',
			style: 'position:absolute;left:6px;top:6px;width:112px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Заявки на открытие счетов',
			style: 'position:absolute;left:6px;top:81px;width:752px;height:16px;',
		},
		{
			id: 'ЗявкиНаОткрытиеСчетов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:121px;width:752px;height:282px;',
			height: 282,width: 752,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Выгрузить',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
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
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Зарплатный счет',
					width:'160',
					dataIndex:'РасчетныйСчет',
					flex:1,
				},
				{
					text:'№ дог.',
					width:'60',
					dataIndex:'НомерДоговора',
					flex:1,
				},
				{
					text:'Вид вклада',
					width:'80',
					dataIndex:'ВидВклада',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИмпортЭкспортОперацийПоЛицевымСчетамРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Выгрузить',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Организация',
					},
					{
						name:'РасчетныйСчет',
					},
					{
						name:'НомерДоговора',
					},
					{
						name:'ВидВклада',
					},
					{
						name:'Документ',
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
						var грид = Ext.getCmp('ЗявкиНаОткрытиеСчетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:568px;top:54px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка',
			text: 'Отделение:',
			style: 'position:absolute;left:222px;top:30px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтделениеБанка',
			width: 40,
			height: 19,
			style: 'position:absolute;left:297px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФилиалОтделенияБанка',
			text: 'Филиал:',
			style: 'position:absolute;left:222px;top:54px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФилиалОтделенияБанка',
			width: 40,
			height: 19,
			style: 'position:absolute;left:297px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка1',
			text: 'Номер с начала года:',
			style: 'position:absolute;left:6px;top:54px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерСНачалаГода',
			style: 'position:absolute;left:120px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодировка1',
			text: 'Кодировка файла:',
			style: 'position:absolute;left:568px;top:6px;width:94px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:664px;top:6px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФорматФайла1',
			text: 'Формат файла:',
			style: 'position:absolute;left:568px;top:34px;width:91px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:664px;top:30px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерРеестра',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРеестра',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:569px;top:55px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра1',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерРеестра1',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра1',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРеестра1',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:569px;top:55px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра2',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерРеестра2',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра2',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРеестра2',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только неисполненные',
			style: 'position:absolute;left:569px;top:55px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРеестра3',
			text: 'Номер реестра:',
			style: 'position:absolute;left:360px;top:31px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерРеестра3',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:31px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРеестра3',
			text: 'Дата реестра:',
			style: 'position:absolute;left:360px;top:55px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРеестра3',
			width: 103,
			height: 19,
			style: 'position:absolute;left:448px;top:55px;width:103px;height:19px;',
		},
					]
				},
				{
					title:'Экспорт зачисления зарплаты',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Платежные документы на зачисление зарплаты ',
			style: 'position:absolute;left:6px;top:81px;width:752px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НомерДоговора',
			text: 'Номер договора:',
			style: 'position:absolute;left:351px;top:54px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДоговораЗачисленияЗарплаты',
			width: 80,
			height: 19,
			style: 'position:absolute;left:456px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаФормированияЗачислениеЗарплаты',
			width: 80,
			height: 19,
			style: 'position:absolute;left:120px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата формирования:',
			style: 'position:absolute;left:6px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогЭкспортаЗачислениеЗарплаты',
			width: 442,
			height: 19,
			style: 'position:absolute;left:120px;top:6px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Каталог экспорта:',
			style: 'position:absolute;left:6px;top:6px;width:112px;height:19px;',
		},
		{
			id: 'ПлатежныеПорученияЗачислениеЗарплаты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:121px;width:752px;height:282px;',
			height: 282,width: 752,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Выгрузить',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
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
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет',
					width:'100',
					dataIndex:'СчетОрганизации',
					flex:1,
				},
				{
					text:'№ счета',
					width:'160',
					dataIndex:'РасчетныйСчет',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИмпортЭкспортОперацийПоЛицевымСчетамРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Выгрузить',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Сумма',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетОрганизации',
					},
					{
						name:'РасчетныйСчет',
					},
					{
						name:'Документ',
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
						var грид = Ext.getCmp('ПлатежныеПорученияЗачислениеЗарплаты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка2',
			text: 'Отделение:',
			style: 'position:absolute;left:222px;top:30px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтделениеБанкаЗЗ',
			width: 40,
			height: 19,
			style: 'position:absolute;left:297px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФилиалОтделенияБанка1',
			text: 'Филиал:',
			style: 'position:absolute;left:222px;top:54px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФилиалОтделенияБанкаЗЗ',
			width: 40,
			height: 19,
			style: 'position:absolute;left:297px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтделениеБанка3',
			text: 'Номер с начала года:',
			style: 'position:absolute;left:6px;top:54px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерСНачалаГодаЗЗ',
			style: 'position:absolute;left:120px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодировка2',
			text: 'Кодировка файла:',
			style: 'position:absolute;left:568px;top:6px;width:94px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:664px;top:6px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФорматФайла',
			text: 'Формат файла:',
			style: 'position:absolute;left:568px;top:30px;width:91px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:664px;top:30px;width:94px;height:19px;',
		},
					]
				},
				{
					title:'Импорт',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Файлы для импорта ',
			style: 'position:absolute;left:6px;top:32px;width:752px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогИмпорта',
			width: 655,
			height: 19,
			style: 'position:absolute;left:103px;top:6px;width:655px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Каталог импорта:',
			style: 'position:absolute;left:6px;top:7px;width:95px;height:19px;',
		},
		{
			id: 'ФайлыДляИмпорта',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:752px;height:331px;',
			height: 331,width: 752,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Загрузить',
					flex:1,
				},
				{
					text:'Файл',
					width:'320',
					dataIndex:'Файл',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата операции',
					width:'120',
					dataIndex:'ДатаОперации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИмпортЭкспортОперацийПоЛицевымСчетамРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Загрузить',
					},
					{
						name:'Файл',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаОперации',
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
						var грид = Ext.getCmp('ФайлыДляИмпорта');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ОперацииПоСчетам',
			xtype: 'grid',
			style: 'position:absolute;left:408px;top:11px;width:193px;height:48px;',
			height: 48,width: 193,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Загрузить',
					flex:1,
				},
				{
					text:'Документ',
					width:'220',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Операция',
					width:'120',
					dataIndex:'Операция',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Лицевой счет',
					width:'120',
					dataIndex:'ЛицевойСчет',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Результат',
					width:'120',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'100',
					dataIndex:'Фамилия1',
					flex:1,
				},
				{
					text:'Имя',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'100',
					dataIndex:'Отчетство',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИмпортЭкспортОперацийПоЛицевымСчетамРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Загрузить',
					},
					{
						name:'Документ',
					},
					{
						name:'Операция',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ЛицевойСчет',
					},
					{
						name:'Сумма',
					},
					{
						name:'Результат',
					},
					{
						name:'Фамилия1',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчетство',
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
						var грид = Ext.getCmp('ОперацииПоСчетам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Протоколы обмена',
					items:
					[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:373px;',
			height: 373,width: 750,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Содержание',
					width:'452',
					dataIndex:'Содержание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИмпортЭкспортОперацийПоЛицевымСчетамРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Документ',
					},
					{
						name:'Дата',
					},
					{
						name:'Содержание',
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
						var грид = Ext.getCmp('РегистрСведенийСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИмпортЭкспортОперацийПоЛицевымСчетамРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:457px;width:780px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});