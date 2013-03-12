Ext.define('Справочники.ПоказателиСхемМотивации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:393px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели схем мотивации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:39px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:39px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид показателя:',
			style: 'position:absolute;left:16px;top:104px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПоказателя',
			style: 'position:absolute;left:166px;top:104px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВводаПоказателя',
			text: 'Порядок ввода показателя:',
			style: 'position:absolute;left:16px;top:161px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВозможностьИзменения',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:413px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:368px;width:413px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоказателя',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидПоказателя',
			text: 'Назначение показателя:',
			style: 'position:absolute;left:16px;top:132px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Идентификатор',
			style: 'position:absolute;left:96px;top:65px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификатор',
			text: 'Идентификатор:',
			style: 'position:absolute;left:8px;top:65px;width:83px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:193px;width:397px;height:167px;',
			height: 167,width: 397,
			items:
			[
				{
					title:'Анализ показателей',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является показателем эффективности',
			style: 'position:absolute;left:6px;top:6px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФактическийПоказатель',
			style: 'position:absolute;left:28px;top:122px;width:336px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаПоказательЭффективности',
			text: '',
			style: 'position:absolute;left:34px;top:30px;width:355px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаТарифнаяСтавка',
			text: '',
			style: 'position:absolute;left:33px;top:31px;width:356px;height:110px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'В отчёте "Анализ показателей" отражается как:',
			style: 'position:absolute;left:6px;top:55px;width:253px;height:19px;',
		},
					]
				},
				{
					title:'Использование',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является тарифной ставкой',
			style: 'position:absolute;left:6px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаТарифнаяСтавкаВалюта',
			text: '',
			style: 'position:absolute;left:33px;top:50px;width:356px;height:91px;',
		},
					]
				},
				{
					title:'Шкала оценки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:383px;height:110px;',
			height: 110,width: 383,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'С',
					width:'57',
				},
				{
					text:'По',
					width:'68',
				},
				{
					text:'Размер',
					width:'126',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:383px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Суммовой показатель',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПояснение',
			text: '',
			style: 'position:absolute;left:33px;top:6px;width:356px;height:135px;',
		},
					]
				},
				{
					title:'Использование',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является тарифной ставкой',
			style: 'position:absolute;left:6px;top:28px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:6px;width:41px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:56px;top:6px;width:333px;height:19px;',
		},
					]
				},
				{
					title:'Стаж',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаСтажа',
			text: '',
			style: 'position:absolute;left:33px;top:6px;width:356px;height:135px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаСуммы',
			text: 'Способ расчета суммы:',
			style: 'position:absolute;left:16px;top:132px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаСуммы',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммируемыйПоказатель',
			text: 'Суммируемый показатель :',
			style: 'position:absolute;left:16px;top:161px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммируемыйПоказатель',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСтажа',
			text: 'Вид стажа:',
			style: 'position:absolute;left:16px;top:161px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтажа',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажРаботы',
			text: 'Стаж работы с момента приема на работу',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
	]
});