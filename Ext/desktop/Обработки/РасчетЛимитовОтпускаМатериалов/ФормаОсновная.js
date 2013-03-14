Ext.define('Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:769px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет лимитов отпуска материалов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:769px;height:25px;',
			items:
			[
				{
					text:'<Назад',
				},
				'-',
				{
					text:'Далее>',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:753px;height:384px;',
			height: 384,width: 753,
			items:
			[
				{
					title:'Стратегия расчета',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Планы производства в размере (%)',
			style: 'position:absolute;left:13px;top:26px;width:215px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Планы продаж в размере (%)',
			style: 'position:absolute;left:13px;top:50px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПроизводстваПроцент',
			style: 'position:absolute;left:228px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПродажПроцент',
			style: 'position:absolute;left:228px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПроизводстваДатаНач',
			style: 'position:absolute;left:398px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПроизводстваДатаКон',
			style: 'position:absolute;left:498px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПроизводстваНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПроизводстваПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:26px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПроизводства',
			text: '...',
			style: 'position:absolute;left:583px;top:26px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПродажДатаНач',
			style: 'position:absolute;left:398px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПланыПродажДатаКон',
			style: 'position:absolute;left:498px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПродажНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПродажПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:50px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПродаж',
			text: '...',
			style: 'position:absolute;left:583px;top:50px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказы покупателей в размере (%)',
			style: 'position:absolute;left:13px;top:97px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПокупателейПроцент',
			style: 'position:absolute;left:228px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПокупателейДатаНач',
			style: 'position:absolute;left:398px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказыПокупателейДатаКон',
			style: 'position:absolute;left:498px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказыПокупателейНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказыПокупателейПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:97px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПокупателей',
			text: '...',
			style: 'position:absolute;left:583px;top:97px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внутренние заказы в размере (%)',
			style: 'position:absolute;left:13px;top:121px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутренниеЗаказыПроцент',
			style: 'position:absolute;left:228px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутренниеЗаказыДатаНач',
			style: 'position:absolute;left:398px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутренниеЗаказыДатаКон',
			style: 'position:absolute;left:498px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВнутренниеЗаказыНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВнутренниеЗаказыПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:121px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаВнутренниеЗаказы',
			text: '...',
			style: 'position:absolute;left:583px;top:121px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расход со склада в размере (%)',
			style: 'position:absolute;left:13px;top:167px;width:215px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расход на выпуск в размере (%)',
			style: 'position:absolute;left:13px;top:191px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасходСоСкладаПроцент',
			style: 'position:absolute;left:228px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасходНаВыпускПроцент',
			style: 'position:absolute;left:228px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасходСоСкладаДатаНач',
			style: 'position:absolute;left:398px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасходСоСкладаДатаКон',
			style: 'position:absolute;left:498px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходСоСкладаНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходСоСкладаПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:167px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаРасходСоСклада',
			text: '...',
			style: 'position:absolute;left:583px;top:167px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасходНаВыпускДатаНач',
			style: 'position:absolute;left:398px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасходНаВыпускДатаКон',
			style: 'position:absolute;left:498px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходНаВыпускНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходНаВыпускПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:191px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаРасходНаВыпуск',
			text: '...',
			style: 'position:absolute;left:583px;top:191px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить результат расчета (%)',
			style: 'position:absolute;left:13px;top:238px;width:195px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзменитьРезультатРасчетаПроцент',
			style: 'position:absolute;left:228px;top:238px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРасчетаОкруглитьДо',
			text: 'округлить до:',
			style: 'position:absolute;left:318px;top:238px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:739px;height:243px;',
			height: 243,width: 739,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:739px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:339px;width:739px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:95px;top:6px;width:650px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:6px;top:30px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:95px;top:30px;width:650px;height:19px;',
		},
					]
				},
				{
					title:'Результат',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:733px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Изменить...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:733px;height:328px;',
			height: 328,width: 733,
			columns:
			[
				{
					text:'N',
					width:'39',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Периодичность',
					width:'100',
				},
				{
					text:'Лимит отпуска',
					width:'100',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Контролировать лимит',
					width:'68',
				},
			]
		},
					]
				},
			]
		},
	]
});