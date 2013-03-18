Ext.define('Документы.ГТДИмпорт.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:667px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ГТД по импорту',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:382px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:382px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:667px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
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
					text:'Показать/скрыть счета учета',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:422px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:500px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:116px;width:651px;height:258px;',
			height: 258,width: 651,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТаможенныйСборВал',
			text: 'Таможенный сбор (USD):',
			style: 'position:absolute;left:18px;top:59px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерГТД',
			style: 'position:absolute;left:92px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйСборВал',
			style: 'position:absolute;left:168px;top:59px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерГТД',
			text: 'Номер ГТД:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТаможенныйШтрафВал',
			text: 'Таможенный штраф (USD):',
			style: 'position:absolute;left:18px;top:113px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйШтрафВал',
			style: 'position:absolute;left:168px;top:113px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТаможенныйСбор',
			text: 'Таможенный сбор (руб.):',
			style: 'position:absolute;left:18px;top:86px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйСбор',
			style: 'position:absolute;left:168px;top:86px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТаможенныйШтраф',
			text: 'Таможенный штраф (руб.):',
			style: 'position:absolute;left:18px;top:137px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйШтраф',
			style: 'position:absolute;left:168px;top:137px;width:83px;height:19px;',
		},
					]
				},
				{
					title:'Разделы ГТД',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:107px;width:636px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Распределить',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:131px;width:636px;height:76px;',
			height: 76,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Серия номенклатуры',
					width:'100',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'66',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Фактурная стоимость',
					width:'100',
				},
				{
					text:'Сумма пошлины ',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Документ партии',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
				{
					text:'Страна происхождения',
					width:'100',
				},
				{
					text:'Номер раздела',
					width:'103',
				},
				{
					text:'Счет учета (БУ)',
					width:'97',
				},
				{
					text:'Счет учета НДС (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Статья затрат (НУ)',
					width:'100',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'Статус партии',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:218px;top:212px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоПошлина',
			style: 'position:absolute;left:405px;top:212px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:562px;top:212px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:636px;height:88px;',
			height: 88,width: 636,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Несколько разделов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:80px;',
			height: 80,width: 636,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Валюта таможенной стоимости',
					width:'100',
				},
				{
					text:'Таможенная стоимость',
					width:'100',
				},
				{
					text:'Валюта пошлины',
					width:'100',
				},
				{
					text:'Ставка пошлины',
					width:'117',
				},
				{
					text:'Сумма пошлины',
					width:'100',
				},
				{
					text:'Валюта НДС',
					width:'100',
				},
				{
					text:'% НДС',
					width:'100',
				},
				{
					text:'Сумма НДС ',
					width:'100',
				},
				{
					text:'НДС в валюте',
					width:'0',
				},
			]
		},
					]
				},
				{
					title:'Один раздел',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'НДС в валюте',
			style: 'position:absolute;left:3px;top:54px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пошлина в валюте',
			style: 'position:absolute;left:3px;top:27px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаПошлины',
			style: 'position:absolute;left:241px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможеннаяСтоимость',
			style: 'position:absolute;left:445px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:241px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:445px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПошлины',
			style: 'position:absolute;left:445px;top:27px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Таможенная стоимость в рублях',
			style: 'position:absolute;left:3px;top:0px;width:191px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:92px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:414px;top:6px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентом',
			text: 'Счет учета расчетов с таможней:',
			style: 'position:absolute;left:12px;top:27px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:92px;top:30px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:30px;width:86px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:242px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовРасходов',
			style: 'position:absolute;left:563px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовБУ',
			style: 'position:absolute;left:242px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовНУ',
			style: 'position:absolute;left:242px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Счет учета расчетов с таможней (вал.):',
			style: 'position:absolute;left:12px;top:123px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомВал',
			style: 'position:absolute;left:242px;top:123px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Счет учета расходов по штрафам (БУ) (вал.):',
			style: 'position:absolute;left:12px;top:147px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовБУВал',
			style: 'position:absolute;left:242px;top:147px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Счет учета расходов по штрафам (НУ) (вал.):',
			style: 'position:absolute;left:12px;top:171px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовНУВал',
			style: 'position:absolute;left:242px;top:171px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Статья прочих расходов по штрафам (вал.):',
			style: 'position:absolute;left:337px;top:171px;width:223px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовРасходовВал',
			style: 'position:absolute;left:563px;top:171px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Валютный депозит (EUR):',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:35px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Таможня:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:422px;top:57px;width:237px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:578px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорРегл',
			text: 'Депозит на таможне (руб.):',
			style: 'position:absolute;left:336px;top:81px;width:84px;height:35px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:667px;height:25px;',
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
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагентаРегл',
			style: 'position:absolute;left:422px;top:81px;width:237px;height:19px;',
		},
	]
});