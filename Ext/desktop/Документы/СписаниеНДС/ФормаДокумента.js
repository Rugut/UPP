Ext.define('Документы.СписаниеНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:709px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:709px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:709px;height:25px;',
			items:
			[
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
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:693px;height:331px;',
			height: 331,width: 693,
			items:
			[
				{
					title:'НДС к списанию',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:227px;',
			height: 227,width: 679,
			columns:
			[
				{
					text:'N',
					width:'28',
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
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Счет учета НДС',
					width:'96',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'96',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Документ оплаты',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУ',
			text: 'Счет:',
			style: 'position:absolute;left:356px;top:28px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:356px;top:52px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:356px;top:76px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:356px;top:100px;width:112px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:6px;top:28px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:103px;top:28px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:52px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:103px;top:52px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:76px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:103px;top:76px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:100px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:103px;top:100px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:473px;top:28px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:473px;top:52px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:473px;top:76px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:473px;top:100px;width:209px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:333px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный1',
			style: 'position:absolute;left:419px;top:57px;width:282px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:349px;top:33px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:419px;top:33px;width:74px;height:19px;',
		},
	]
});