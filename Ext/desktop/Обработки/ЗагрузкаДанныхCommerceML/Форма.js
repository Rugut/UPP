Ext.define('Обработки.ЗагрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка данных в формате CommerceML',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				'-',
				{
					text:'Загрузить данные',
				},
				'-',
				{
					text:'Соответствия объектов',
				},
				{
					text:'Настройки',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:210px;width:648px;height:250px;',
			height: 250,width: 648,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Каталог',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'291',
				},
				{
					text:'Артикул',
					width:'105',
				},
				{
					text:'Штрих код',
					width:'106',
				},
				{
					text:'Единица',
					width:'60',
				},
				{
					text:'Ид',
					width:'133',
				},
				{
					text:'Идентификатор документа',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
					]
				},
				{
					title:'Прайс',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'189',
				},
				{
					text:'Артикул',
					width:'117',
				},
				{
					text:'Штрихкод',
					width:'127',
				},
				{
					text:'Единица',
					width:'54',
				},
				{
					text:'Ид',
					width:'84',
				},
				{
					text:'Тип цен',
					width:'59',
				},
				{
					text:'Цена',
					width:'78',
				},
				{
					text:'Валюта',
					width:'63',
				},
				{
					text:'Единица',
					width:'77',
				},
				{
					text:'Коэффициент',
					width:'45',
				},
				{
					text:'Идентификатор документа',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура из файла',
					width:'116',
				},
				{
					text:'Артикул',
					width:'114',
				},
				{
					text:'Штрихкод',
					width:'117',
				},
				{
					text:'Единица',
					width:'79',
				},
				{
					text:'Ид',
					width:'105',
				},
				{
					text:'Количество',
					width:'53',
				},
				{
					text:'Единица',
					width:'64',
				},
				{
					text:'Коэффициент',
					width:'43',
				},
				{
					text:'Цена',
					width:'60',
				},
				{
					text:'Сумма',
					width:'81',
				},
				{
					text:'Идентификатор документа',
					width:'119',
				},
				{
					text:'Сумма старая',
					width:'100',
				},
				{
					text:'Цена поступления',
					width:'100',
				},
				{
					text:'Сумма поступления',
					width:'100',
				},
				{
					text:'Сумма вознаграждения',
					width:'100',
				},
				{
					text:'Сумма НДСВознаграждения',
					width:'100',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Ставка НДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'Счет фактура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:636px;height:215px;',
			height: 215,width: 636,
			columns:
			[
				{
					text:'Номер основания',
					width:'140',
				},
				{
					text:'Дата основания',
					width:'140',
				},
				{
					text:'Документ основания',
					width:'278',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:636px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:648px;height:96px;',
			height: 96,width: 648,
			columns:
			[
				{
					text:'Вид документа',
					width:'120',
				},
				{
					text:'Редактируемый документ',
					width:'200',
				},
				{
					text:'Дата',
					width:'97',
				},
				{
					text:'Номер',
					width:'73',
				},
				{
					text:'Контрагент',
					width:'152',
				},
				{
					text:'Организация',
					width:'147',
				},
				{
					text:'Валюта',
					width:'69',
				},
				{
					text:'Ид',
					width:'101',
				},
				{
					text:'Уникальный идентификатор',
					width:'205',
				},
				{
					text:'Срок платежа',
					width:'100',
				},
				{
					text:'Номер счета',
					width:'100',
				},
				{
					text:'Банк',
					width:'154',
				},
				{
					text:'Банк счет корреспондентский',
					width:'100',
				},
				{
					text:'Банк наименование',
					width:'100',
				},
				{
					text:'Банк адрес',
					width:'100',
				},
				{
					text:'Банк НЕПрямых расходов',
					width:'100',
				},
				{
					text:'Банк НЕПрямых расходов счет корреспондентский',
					width:'100',
				},
				{
					text:'Банк НЕПрямых расходов наименование',
					width:'100',
				},
				{
					text:'Банк НЕПрямых расходов адрес',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'157',
				},
				{
					text:'Номер документа основания',
					width:'100',
				},
				{
					text:'Дата документа основания',
					width:'100',
				},
				{
					text:'Документ основания',
					width:'100',
				},
				{
					text:'Способ расчета комиссионного вознаграждения',
					width:'100',
				},
				{
					text:'Удержать комиссионное вознаграждение',
					width:'100',
				},
				{
					text:'Сумма вознаграждения',
					width:'100',
				},
				{
					text:'Ставка НДСВознаграждения',
					width:'100',
				},
				{
					text:'Процент комиссионного вознаграждения',
					width:'100',
				},
				{
					text:'Контрагент покупатель',
					width:'100',
				},
				{
					text:'Контрагент поставщик',
					width:'100',
				},
				{
					text:'Роль контрагента',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:81px;width:648px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Установить флажки',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:648px;height:19px;',
			height: 19,width: 648,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя файла данных:',
			style: 'position:absolute;left:0px;top:0px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаДанных',
			style: 'position:absolute;left:114px;top:0px;width:534px;height:19px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Обрабатывать письма за период с:',
			style: 'position:absolute;left:0px;top:0px;width:187px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:190px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:310px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:334px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:451px;top:0px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПометитьОбработанныеПисьмаКакПрочтенные',
			text: 'Пометить прочтение',
			style: 'position:absolute;left:508px;top:0px;width:140px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'Загрузить данные из файла',
			style: 'position:absolute;left:8px;top:33px;width:170px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Загрузить данные из электронной почты',
			style: 'position:absolute;left:183px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:664px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить данные',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});