Ext.define('Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:715px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					text:'Заполнить документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:715px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
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
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:613px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НалоговыйПериод',
			text: 'Налоговый период',
			style: 'position:absolute;left:336px;top:33px;width:261px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:699px;height:328px;',
			height: 328,width: 699,
			items:
			[
				{
					title:'Выручка от реализации',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаБезНДС',
			style: 'position:absolute;left:164px;top:58px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаНДС0',
			style: 'position:absolute;left:164px;top:106px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаНДС',
			style: 'position:absolute;left:164px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстВыручкаЕНВД',
			text: 'Сумма реализации с ЕНВД:',
			style: 'position:absolute;left:6px;top:82px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаЕНВД',
			style: 'position:absolute;left:164px;top:82px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Косвенные расходы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:1px;width:685px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:685px;height:148px;',
			height: 148,width: 685,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Поставщик',
					width:'120',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
				{
					text:'% НДС',
					width:'56',
				},
				{
					text:'Распр. с учетом выручки по ЕНВД',
					width:'98',
				},
				{
					text:'НДС включен в стоимость',
					width:'85',
				},
				{
					text:'Счет учета НДС',
					width:'80',
				},
				{
					text:'Сумма по счету',
					width:'120',
				},
				{
					text:'НДС по счету',
					width:'120',
				},
				{
					text:'Сумма (НДС)',
					width:'120',
				},
				{
					text:'НДС (НДС)',
					width:'120',
				},
				{
					text:'Сумма (Без НДС)',
					width:'120',
				},
				{
					text:'НДС (Без НДС)',
					width:'120',
				},
				{
					text:'Сумма (ЕНВД)',
					width:'120',
				},
				{
					text:'НДС (ЕНВД)',
					width:'120',
				},
				{
					text:'0% (Сумма)',
					width:'120',
				},
				{
					text:'0% (НДС)',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ТекстВыручкаНДС',
			text: 'Сумма реализации с НДС:',
			style: 'position:absolute;left:6px;top:33px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:179px;width:685px;height:123px;',
			height: 123,width: 685,
			columns:
			[
				{
					text:'НУ',
					width:'20',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Хар-р затрат',
					width:'100',
				},
				{
					text:'Счет затрат',
					width:'120',
				},
				{
					text:'Счет затрат (НУ)',
					width:'120',
				},
				{
					text:'Счет затрат ЕНВД',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Вид аналитики',
					width:'100',
				},
				{
					text:'Вид аналитики (доп)',
					width:'100',
				},
				{
					text:'Вид субконто 1',
					width:'100',
				},
				{
					text:'Вид субконто 2',
					width:'100',
				},
				{
					text:'Вид субконто 3',
					width:'100',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
				},
				{
					text:'Аналитика',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Субконто1',
					width:'120',
				},
				{
					text:'Субконто2',
					width:'120',
				},
				{
					text:'Субконто3',
					width:'120',
				},
				{
					text:'Субконто1 (НУ)',
					width:'120',
				},
				{
					text:'Субконто2 (НУ)',
					width:'120',
				},
				{
					text:'Субконто3 (НУ)',
					width:'120',
				},
				{
					text:'Сумма',
					width:'120',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Затрата',
					width:'100',
				},
				{
					text:'Характеристика затраты',
					width:'100',
				},
				{
					text:'Серия затраты',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Счета списания НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'ТекстВыручкаБезНДС',
			text: 'Сумма реализации без НДС:',
			style: 'position:absolute;left:6px;top:58px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для списания НДС использовать счет и аналитику затрат',
			style: 'position:absolute;left:6px;top:6px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатратСписанияНДС',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:80px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатратСписанияНДС',
			style: 'position:absolute;left:98px;top:80px;width:241px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Ном. группа:',
			style: 'position:absolute;left:6px;top:104px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:98px;top:104px;width:241px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:128px;width:333px;height:91px;',
			height: 91,width: 333,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:0px;top:72px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:92px;top:24px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:92px;top:48px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:92px;top:72px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНеТребуется',
			text: 'В соответствии с настройкой учетной политики по налоговому учету указание счета списания НДС в бухгалтерском учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:54px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:359px;top:128px;width:332px;height:91px;',
			height: 91,width: 332,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетДтНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:92px;top:24px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:92px;top:48px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:0px;top:72px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:92px;top:72px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУНеТребуется',
			text: 'Указание счета списания НДС в налоговом учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:51px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:51px;width:92px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:98px;top:56px;width:241px;height:19px;',
		},
					]
				},
			]
		},
	]
});