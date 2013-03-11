Ext.define('Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 769,
	iconCls: 'bogus',
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
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Далее',
				},
				{
					text:'Действие1',
				},
				{
					text:'Назад',
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
					title:'СтратегияРасчета',
					items:
					[
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
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПродаж',
			text: '...',
			style: 'position:absolute;left:583px;top:50px;width:20px;height:19px;',
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
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПокупателей',
			text: '...',
			style: 'position:absolute;left:583px;top:97px;width:20px;height:19px;',
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
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаВнутренниеЗаказы',
			text: '...',
			style: 'position:absolute;left:583px;top:121px;width:20px;height:19px;',
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
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаРасходНаВыпуск',
			text: '...',
			style: 'position:absolute;left:583px;top:191px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзменитьРезультатРасчетаПроцент',
			style: 'position:absolute;left:228px;top:238px;width:80px;height:19px;',
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
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:95px;top:6px;width:650px;height:19px;',
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
				{
					text:'Рассчитать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
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
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Периодичность',
				},
				{
					text:'ЛимитОтпуска',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'КонтролироватьЛимит',
				},
			]
		},
					]
				},
			]
		},
	]
});