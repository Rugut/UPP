Ext.define('Документы.УдалитьКорректировочныйСчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировочный счет-фактура полученный',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:183px;top:32px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:393px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:100px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:200px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:393px;width:567px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:
',
			style: 'position:absolute;left:8px;top:104px;width:92px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:420px;width:675px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьКонтрагент1',
			text: 'Контрагент:
',
			style: 'position:absolute;left:8px;top:80px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:
',
			style: 'position:absolute;left:355px;top:80px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:100px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:447px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:369px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:100px;top:369px;width:567px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетФактура',
			style: 'position:absolute;left:100px;top:104px;width:567px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:129px;width:659px;height:232px;',
			height: 232,width: 659,
			items:
			[
				{
					title:'Реквизиты счета-фактуры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСчетаФактуры',
			style: 'position:absolute;left:138px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящего',
			style: 'position:absolute;left:278px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактураНомер',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:6px;top:30px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящаяДата',
			text: 'от:',
			style: 'position:absolute;left:257px;top:30px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Входящий номер:',
			style: 'position:absolute;left:6px;top:6px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:138px;top:6px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправления',
			text: 'от:',
			style: 'position:absolute;left:257px;top:6px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:278px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазницаСНДСКУменьшению',
			text: 'Разница к уменьшению:',
			style: 'position:absolute;left:6px;top:128px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазницаСНДСКУменьшению',
			style: 'position:absolute;left:138px;top:128px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'В т.ч. НДС к уменьшению:',
			style: 'position:absolute;left:278px;top:128px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазницаНДСКУменьшению',
			style: 'position:absolute;left:418px;top:128px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПродавца',
			text: 'Наименование продавца:',
			style: 'position:absolute;left:6px;top:54px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПродавца',
			style: 'position:absolute;left:138px;top:54px;width:513px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПродавца',
			text: 'ИНН / КПП продавца:',
			style: 'position:absolute;left:6px;top:79px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПродавца',
			style: 'position:absolute;left:138px;top:79px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:138px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППродавца',
			text: '/',
			style: 'position:absolute;left:258px;top:79px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПППродавца',
			style: 'position:absolute;left:278px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:104px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазницаСНДСКДоплате',
			text: 'Разница к доплате:',
			style: 'position:absolute;left:6px;top:152px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазницаСНДСКДоплате',
			style: 'position:absolute;left:138px;top:152px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазницаНДСКДоплате',
			text: 'В т.ч. НДС к доплате:',
			style: 'position:absolute;left:278px;top:152px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазницаНДСКДоплате',
			style: 'position:absolute;left:418px;top:152px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиКУменьшению',
			text: 'К уменьшению по счету-фактуре: 118 000 руб., в том числе НДС: 18 000 руб. ',
			style: 'position:absolute;left:198px;top:6px;width:453px;height:19px;',
		},
					]
				},
				{
					title:'Восстановление НДС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:645px;height:153px;',
			height: 153,width: 645,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Сумма с НДС',
					width:'100',
				},
				{
					text:'Ставка НДС',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:29px;width:645px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Вычет НДС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:645px;height:153px;',
			height: 153,width: 645,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Сумма с НДС',
					width:'100',
				},
				{
					text:'Ставка НДС',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Счет учета НДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:29px;width:645px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиКДоплате',
			text: 'К доплате по счету-фактуре: 118 000 руб., в том числе НДС: 18 000 руб. ',
			style: 'position:absolute;left:198px;top:6px;width:453px;height:19px;',
		},
					]
				},
			]
		},
	]
});