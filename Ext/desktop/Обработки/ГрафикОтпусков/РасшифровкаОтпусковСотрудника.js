Ext.define('Обработки.ГрафикОтпусков.РасшифровкаОтпусковСотрудника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:641px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '<ФИО>, <номер года> год',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:84px;width:625px;height:163px;',
			height: 163,width: 625,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Текст',
					width:'179',
				},
				{
					text:'Описание',
					width:'150',
				},
				{
					text:'Строка оформления',
					width:'100',
				},
				{
					text:'Документ',
					width:'100',
				},
				{
					text:'Дата начала',
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			items:
			[
				{
					text:'Запланировать отпуск',
				},
				{
					text:'Открыть документ',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Остатки отпусков сотрудника',
				},
				'-',
				{
					text:'Дополнительные дни отпуска',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ФИО',
			text: 'Иванов Иван Иванович',
			style: 'position:absolute;left:8px;top:25px;width:350px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриемаНаРаботу',
			text: 'Дата приема на работу',
			style: 'position:absolute;left:8px;top:52px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДатаПриемаНаРаботу',
			text: '',
			style: 'position:absolute;left:207px;top:52px;width:151px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Сегодня',
			text: '',
			style: 'position:absolute;left:8px;top:264px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеиспользованныйОтпуск',
			text: 'Неиспользованный отпуск',
			style: 'position:absolute;left:8px;top:284px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НеиспользованныйОтпуск',
			text: '',
			style: 'position:absolute;left:207px;top:284px;width:151px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйОтпуск',
			text: 'Из них дополнительного отпуска',
			style: 'position:absolute;left:8px;top:304px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДополнительныйОтпуск',
			text: '',
			style: 'position:absolute;left:207px;top:304px;width:151px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'СправкаПоОтпуску',
			text: 'Справка по отпуску',
			style: 'position:absolute;left:495px;top:297px;width:138px;height:22px;',
		},
	]
});