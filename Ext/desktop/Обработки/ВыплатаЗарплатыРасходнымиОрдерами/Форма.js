Ext.define('Обработки.ВыплатаЗарплатыРасходнымиОрдерами.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:375px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выплата зарплаты расходными ордерами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:350px;width:600px;height:25px;',
			items:
			[
				{
					text:'Провести документы',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:6px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:80px;top:6px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатежнаяВедомость',
			text: 'Платежная ведомость:',
			style: 'position:absolute;left:280px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлатежнаяВедомость',
			style: 'position:absolute;left:400px;top:6px;width:192px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:73px;width:584px;height:198px;',
			height: 198,width: 584,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Сотрудник',
					width:'220',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Проведено по кассе документом',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:49px;width:584px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить флаги',
				},
				{
					text:'Снять флаги',
				},
				{
					text:'Инвертировать',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРКО',
			text: 'Проставить дату:',
			style: 'position:absolute;left:170px;top:299px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРКО',
			style: 'position:absolute;left:263px;top:299px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПервогоРКО',
			text: 'Нумеровать с:',
			style: 'position:absolute;left:8px;top:299px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПервогоРКО',
			style: 'position:absolute;left:86px;top:299px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Создать',
			text: 'Создать документы',
			style: 'position:absolute;left:400px;top:323px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:86px;top:323px;width:297px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Касса:',
			style: 'position:absolute;left:8px;top:323px;width:78px;height:19px;',
		},
	]
});