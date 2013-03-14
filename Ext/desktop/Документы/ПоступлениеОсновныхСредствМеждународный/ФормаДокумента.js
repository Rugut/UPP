Ext.define('Документы.ПоступлениеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
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
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:333px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:333px;width:555px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:422px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:512px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:530px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:84px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить за период',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:108px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'ОС',
					width:'100',
				},
				{
					text:'Учитывать как ОС',
					width:'100',
				},
				{
					text:'Дата принятия к учету',
					width:'100',
				},
				{
					text:'Местонахождение',
					width:'100',
				},
				{
					text:'МОЛ',
					width:'100',
				},
				{
					text:'Счет учета',
					width:'100',
				},
				{
					text:'Срок полезного использования',
					width:'100',
				},
				{
					text:'Счет снижения стоимости',
					width:'100',
				},
				{
					text:'Начислять амортизацию',
					width:'100',
				},
				{
					text:'Метод начисления амортизации',
					width:'100',
				},
				{
					text:'Счет начисления амортизации',
					width:'100',
				},
				{
					text:'Первоначальная стоимость',
					width:'100',
				},
				{
					text:'Ликвидационная стоимость',
					width:'100',
				},
				{
					text:'Коэффициент ускорения',
					width:'100',
				},
				{
					text:'Счет затрат',
					width:'100',
				},
				{
					text:'Субконто 1',
					width:'100',
				},
				{
					text:'Субконто 2',
					width:'100',
				},
				{
					text:'Субконто 3',
					width:'100',
				},
				{
					text:'Предполагаемый объем продукции',
					width:'98',
				},
				{
					text:'Сумма начисленной амортизации',
					width:'100',
				},
				{
					text:'Новый счет учета',
					width:'100',
				},
				{
					text:'Субконто 1',
					width:'100',
				},
				{
					text:'Субконто 2',
					width:'100',
				},
				{
					text:'Субконто 3',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Кор. счет',
					width:'100',
				},
				{
					text:'Субконто 1',
					width:'100',
				},
				{
					text:'Субконто 2',
					width:'100',
				},
				{
					text:'Субконто 3',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
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
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:650px;height:25px;',
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
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:622px;top:33px;width:19px;height:19px;',
		},
	]
});