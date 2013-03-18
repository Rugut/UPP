Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:459px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Восстановление НДС по объектам недвижимости',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:181px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:203px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:407px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:407px;width:540px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отражать восстановление в книге продаж',
			style: 'position:absolute;left:331px;top:58px;width:242px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:434px;width:644px;height:25px;',
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
			name: 'НадписьОтражатьВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:331px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:419px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:628px;height:321px;',
			height: 321,width: 628,
			items:
			[
				{
					title:'Объекты недвижимости',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:614px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:614px;height:115px;',
			height: 115,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Объект недвижимости',
					width:'120',
				},
				{
					text:'Используется для операций не облагаемых НДС',
					width:'100',
				},
				{
					text:'Дата начала использования для операций, не облагаемых НДС',
					width:'80',
				},
				{
					text:'Дата ввода в эксплуатацию (БУ)',
					width:'80',
				},
				{
					text:'Дата начала начисления амортизации (НУ)',
					width:'79',
				},
				{
					text:'Стоимость объекта недвижимости (БУ)',
					width:'121',
				},
				{
					text:'НДС по подрядным работам',
					width:'120',
				},
				{
					text:'НДС по СМР хозспособом',
					width:'120',
				},
				{
					text:'НДС по объекту недвижимости',
					width:'120',
				},
				{
					text:'Доля выручки, не облагаемая НДС (%)',
					width:'120',
				},
				{
					text:'НДС по подрядным работам, восстановленная',
					width:'120',
				},
				{
					text:'НДС по СМР хозспособом восстановлена',
					width:'120',
				},
				{
					text:'НДС по объекту недвижимости, восстановлена',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:164px;width:614px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:188px;width:614px;height:106px;',
			height: 106,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Код операции (для декларации)',
					width:'120',
				},
				{
					text:'Поставщик',
					width:'100',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Документ оплаты',
					width:'120',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'80',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Сумма без НДС, восстановлена',
					width:'120',
				},
				{
					text:'НДС, восстановлен',
					width:'120',
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
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:105px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:35px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:59px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:82px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:105px;top:35px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:105px;top:59px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:105px;top:82px;width:199px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:322px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:421px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:322px;top:35px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:420px;top:35px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:322px;top:59px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:420px;top:59px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:322px;top:82px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:420px;top:82px;width:200px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:6px;width:527px;height:19px;',
		},
					]
				},
			]
		},
	]
});