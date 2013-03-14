Ext.define('Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:725px;height:376px;',
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
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:67px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата:',
			style: 'position:absolute;left:183px;top:33px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:218px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:380px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:466px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:324px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:324px;width:630px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:380px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:466px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:57px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:67px;top:58px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:201px;top:57px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:218px;top:57px;width:132px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:709px;height:24px;',
			items:
			[
				{
					text:'Заполнить ОС',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:709px;height:211px;',
			height: 211,width: 709,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'ОС',
					width:'87',
				},
				{
					text:'Напр. перевода',
					width:'114',
				},
				{
					text:'Местонахождение',
					width:'117',
				},
				{
					text:'МОЛ',
					width:'117',
				},
				{
					text:'Счет учета ОС',
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
					text:'Счет начисления амортизации ОС',
					width:'100',
				},
				{
					text:'Ликвидационная стоимость',
					width:'100',
				},
				{
					text:'Коэфф.ускорения',
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
					width:'78',
				},
				{
					text:'Сумма начисленной амортизации',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:725px;height:25px;',
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
			style: 'position:absolute;left:0px;top:351px;width:725px;height:25px;',
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
			style: 'position:absolute;left:354px;top:57px;width:20px;height:19px;',
		},
	]
});