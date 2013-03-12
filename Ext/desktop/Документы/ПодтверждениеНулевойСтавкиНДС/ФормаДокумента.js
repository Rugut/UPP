Ext.define('Документы.ПодтверждениеНулевойСтавкиНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:654px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:319px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:91px;top:319px;width:555px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
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
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
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
			style: 'position:absolute;left:8px;top:61px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:61px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:327px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:87px;width:638px;height:224px;',
			height: 224,width: 638,
			items:
			[
				{
					title:'Документы реализации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:624px;height:159px;',
			height: 159,width: 624,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'100',
				},
				{
					text:'Покупатель',
					width:'100',
				},
				{
					text:'Счет-фактура',
					width:'100',
				},
				{
					text:'Событие',
					width:'100',
				},
				{
					text:'Продажи с НДС 0%',
					width:'100',
				},
				{
					text:'% НДС',
					width:'54',
				},
				{
					text:'НДС',
					width:'100',
				},
				{
					text:'Курсовая разница',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:624px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
			]
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
			style: 'position:absolute;left:6px;top:50px;width:153px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:163px;top:50px;width:467px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихРасходов',
			text: 'Статья прочих расходов (при неподтверждении экспорта):',
			style: 'position:absolute;left:6px;top:6px;width:152px;height:38px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихРасходов',
			style: 'position:absolute;left:163px;top:15px;width:467px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:404px;top:33px;width:79px;height:19px;',
		},
	]
});