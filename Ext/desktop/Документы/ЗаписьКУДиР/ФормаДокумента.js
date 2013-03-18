Ext.define('Документы.ЗаписьКУДиР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Запись книги учета доходов и расходов УСН (ручной учет)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:736px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			style: 'position:absolute;left:8px;top:368px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:368px;width:634px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:86px;width:720px;height:253px;',
			height: 253,width: 720,
			items:
			[
				{
					title:'I. Доходы и расходы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:698px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:698px;height:197px;',
			height: 197,width: 698,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата и № первичного документа',
					width:'60',
				},
				{
					text:'Содержание',
					width:'120',
				},
				{
					text:'Доходы всего',
					width:'80',
				},
				{
					text:'Доходы, учитываемые при расчете ЕН ',
					width:'80',
				},
				{
					text:'Расходы всего',
					width:'80',
				},
				{
					text:'Расходы, учитываемые при расчете ЕН',
					width:'128',
				},
				{
					text:'НДС',
					width:'128',
				},
				{
					text:'Доходы по деятельности ЕНВД',
					width:'120',
				},
				{
					text:'Расходы, подлежат распределению по видам деятельности',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'II. Расчет расходов на приобретение ОС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'120',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
				},
				{
					text:'Дата подачи док. на гос. регистрацию',
					width:'100',
				},
				{
					text:'Остаточная стоимость',
					width:'80',
				},
				{
					text:'Количество кварталов в отчет. периоде',
					width:'80',
				},
				{
					text:'Количество кварталов в нал. периоде',
					width:'80',
				},
				{
					text:'Доля расходов за нал. период (%)',
					width:'80',
				},
				{
					text:'Доля расходов за квартал (%)',
					width:'80',
				},
				{
					text:'Сумма расходов за отчетн. период',
					width:'80',
				},
				{
					text:'Сумма расходов за квартал',
					width:'80',
				},
				{
					text:'Расходы предыдущих периодов',
					width:'80',
				},
				{
					text:'Остаток расходов',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'II. Расчет расходов на приобретение НМА',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:706px;height:197px;',
			height: 197,width: 706,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Нематериальный актив',
					width:'120',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
				},
				{
					text:'Остаточная стоимость',
					width:'80',
				},
				{
					text:'Количество кварталов в отчет. периоде',
					width:'80',
				},
				{
					text:'Количество кварталов в нал. периоде',
					width:'80',
				},
				{
					text:'Доля расходов за нал. период (%)',
					width:'80',
				},
				{
					text:'Доля расходов за квартал (%)',
					width:'80',
				},
				{
					text:'Сумма расходов за отчетн. период',
					width:'80',
				},
				{
					text:'Сумма расходов за квартал',
					width:'80',
				},
				{
					text:'Расходы предыдущих периодов',
					width:'80',
				},
				{
					text:'Остаток расходов',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:706px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:344px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:344px;width:634px;height:19px;',
		},
	]
});