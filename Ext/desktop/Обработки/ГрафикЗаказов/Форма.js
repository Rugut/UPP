Ext.define('Обработки.ГрафикЗаказов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 539,width: 1000,
	iconCls: 'bogus',
	title: 'График заказов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'СохранитьИзменения',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Диагностика',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие2',
				},
				{
					text:'ВидимостьОтборы',
				},
				{
					text:'Настройка',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ОтменитьИзменения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:821px;top:2px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:908px;top:2px;width:64px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:978px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:761px;top:0px;width:239px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:27px;width:1000px;height:124px;',
			height: 124,width: 1000,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:986px;height:88px;',
			height: 88,width: 986,
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
			style: 'position:absolute;left:6px;top:6px;width:953px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});