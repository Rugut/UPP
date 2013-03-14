Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:723px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков по взаиморасчетам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:104px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:186px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:206px;top:33px;width:118px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:392px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:392px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:104px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:723px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:104px;width:707px;height:258px;',
			height: 258,width: 707,
			items:
			[
				{
					title:'Расчеты с контрагентами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:30px;width:695px;height:201px;',
			height: 201,width: 695,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Сделка',
					width:'150',
				},
				{
					text:'Документ расчетов',
					width:'150',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Сумма в валюте взаиморасчетов',
					width:'110',
				},
				{
					text:'Курс на дату операции',
					width:'80',
				},
				{
					text:'Кратность',
					width:'80',
				},
				{
					text:'Сумма (упр)',
					width:'110',
				},
				{
					text:'Сумма (регл)',
					width:'110',
				},
				{
					text:'Сумма (регл) с учетом переоценки',
					width:'110',
				},
				{
					text:'Счет расчетов ',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:6px;width:695px;height:24px;',
			items:
			[
				'-',
				'-',
			]
		},
					]
				},
				{
					title:'Авансы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:694px;height:24px;',
			items:
			[
				'-',
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:694px;height:201px;',
			height: 201,width: 694,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Сделка',
					width:'150',
				},
				{
					text:'Документ оплаты',
					width:'150',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Сумма в валюте взаиморасчетов',
					width:'110',
				},
				{
					text:'Курс на дату операции',
					width:'80',
				},
				{
					text:'Кратность',
					width:'80',
				},
				{
					text:'Сумма (упр)',
					width:'110',
				},
				{
					text:'Сумма (регл)',
					width:'110',
				},
				{
					text:'Сумма (регл) с учетом переоценки',
					width:'110',
				},
				{
					text:'Счет авансов',
					width:'60',
				},
			]
		},
					]
				},
				{
					title:'Резервы по сомнительным долгам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:65px;width:693px;height:167px;',
			height: 167,width: 693,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Документ расчетов',
					width:'150',
				},
				{
					text:'Счет расчетов',
					width:'100',
				},
				{
					text:'Сумма БУ',
					width:'100',
				},
				{
					text:'Сумма НУ',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:41px;width:693px;height:24px;',
			items:
			[
				{
					text:'Заполнить по сомнительной задолженности',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:693px;height:36px;',
			height: 36,width: 693,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница надпись',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:490px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:350px;top:33px;width:63px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:104px;top:81px;width:147px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:368px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:368px;width:619px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в регистрах расчетов организации',
			style: 'position:absolute;left:258px;top:81px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучете',
			text: 'Отражение в БУ:',
			style: 'position:absolute;left:8px;top:81px;width:92px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в регистре взаиморасчетов по документам',
			style: 'position:absolute;left:416px;top:57px;width:299px;height:19px;',
		},
	]
});