Ext.define('Обработки.ВыплатаЗарплатыРасходнымиОрдерами.Форма',
	{
	extend: 'Ext.window.Window',
	height: 375,width: 600,
	iconCls: 'bogus',
	title: 'Выплата зарплаты расходными ордерами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:350px;width:600px;height:25px;',
			items:
			[
				{
					text:'Провести',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:80px;top:6px;width:192px;height:19px;',
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
					text:'Картинка',
				},
				{
					text:'Отметка',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'Сумма',
				},
				{
					text:'РКО',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:49px;width:584px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Инвертировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'Снятьфлаги',
				},
				{
					text:'УстановитьФлаги',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРКО',
			style: 'position:absolute;left:263px;top:299px;width:120px;height:19px;',
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
	]
});