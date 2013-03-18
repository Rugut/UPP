Ext.define('Документы.ВнутреннееПеремещениеНаличныхДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:346px;height:339px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внутреннее перемещение наличных денежных средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Касса',
			style: 'position:absolute;left:8px;top:91px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:118px;top:91px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Касса  - получатель:',
			style: 'position:absolute;left:8px;top:156px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаПолучатель',
			style: 'position:absolute;left:118px;top:156px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Сумма документа:',
			style: 'position:absolute;left:8px;top:187px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:118px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено',
			style: 'position:absolute;left:260px;top:187px;width:72px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Статья движения денежных средств:',
			style: 'position:absolute;left:8px;top:211px;width:108px;height:33px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:118px;top:211px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:249px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:118px;top:249px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:276px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:118px;top:276px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:346px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
					]
				},
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
			style: 'position:absolute;left:0px;top:314px;width:346px;height:25px;',
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
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:201px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:224px;top:33px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:200px;top:187px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация - отправитель:',
			style: 'position:absolute;left:8px;top:57px;width:108px;height:33px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:118px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизацияПолучатель',
			text: 'Организация - получатель:',
			style: 'position:absolute;left:8px;top:122px;width:108px;height:30px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияПолучатель',
			style: 'position:absolute;left:118px;top:124px;width:220px;height:19px;',
		},
	]
});