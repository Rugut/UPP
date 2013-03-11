Ext.define('Отчеты.АнализСтадийВзаимоотношенийСПокупателями.Форма',
	{
	extend: 'Ext.window.Window',
	height: 427,width: 659,
	iconCls: 'bogus',
	title: 'Анализ стадий взаимоотношений с покупателями',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:659px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Отбор',
				},
				{
					text:'Подменю',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:78px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:642px;height:72px;',
			height: 72,width: 642,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКонтрагент',
			style: 'position:absolute;left:396px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСКонтрагент',
			style: 'position:absolute;left:396px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоКонтрагент',
			style: 'position:absolute;left:522px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСтадияПокупателя',
			style: 'position:absolute;left:396px;top:24px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиССтадияПокупателя',
			style: 'position:absolute;left:396px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоСтадияПокупателя',
			style: 'position:absolute;left:522px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКлассПостоянногоПокупателя',
			style: 'position:absolute;left:396px;top:48px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСКлассПостоянногоПокупателя',
			style: 'position:absolute;left:396px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоКлассПостоянногоПокупателя',
			style: 'position:absolute;left:522px;top:48px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});