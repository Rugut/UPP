Ext.define('Обработки.ГрафикОтпусков.РасшифровкаОтпусковСотрудника',
	{
	extend: 'Ext.window.Window',
	height: 327,width: 641,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Текст',
				},
				{
					text:'Описание',
				},
				{
					text:'СтрокаОформления',
				},
				{
					text:'Документ',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			items:
			[
				{
					text:'ЗапланироватьОтпуск',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОстаткиОтпусковСотрудника',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ЗапланироватьОтпуск',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'ЗарегистрироватьФактическийОтпуск',
				},
				{
					text:'ПравоНаДополнительныеДниОтпуска',
				},
				{
					text:'ОстаткиОтпусковСотрудника',
				},
				{
					text:'ОткрытьДокумент',
				},
			]
		},
		{
			xtype: 'button',
			name: 'СправкаПоОтпуску',
			text: 'Справка по отпуску',
			style: 'position:absolute;left:495px;top:297px;width:138px;height:22px;',
		},
	]
});