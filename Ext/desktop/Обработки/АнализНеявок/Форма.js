Ext.define('Обработки.АнализНеявок.Форма',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 619,
	iconCls: 'bogus',
	title: 'Анализ неявок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:118px;width:603px;height:214px;',
			height: 214,width: 603,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Отметка',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'Неявка',
				},
				{
					text:'КадровыйДокумент',
				},
				{
					text:'РасчетныйДокумент',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:6px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:391px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:99px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:198px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:281px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:94px;width:603px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Инвертировать',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Снятьфлаги',
				},
				{
					text:'КадровыйДокумент',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'СостоянияРаботников',
				},
				{
					text:'УстановитьФлаги',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:619px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КадровыйДокумент',
			style: 'position:absolute;left:304px;top:54px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДокумента',
			style: 'position:absolute;left:99px;top:54px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:110px;top:361px;width:133px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Создать',
			text: 'Создать документы',
			style: 'position:absolute;left:252px;top:361px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:379px;top:361px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Провести',
			text: 'Провести',
			style: 'position:absolute;left:466px;top:361px;width:80px;height:19px;',
		},
	]
});