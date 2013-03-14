Ext.define('Отчеты.УниверсальныйОтчетПоМетаданным.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:414px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройки...',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Открыть в новом окне',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Загрузить настройки отчета',
				},
				{
					text:'Сохранить настройки отчета',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:678px;height:103px;',
			height: 103,width: 678,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:678px;height:103px;',
			height: 103,width: 678,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:414px;top:0px;width:280px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:427px;top:2px;width:258px;height:19px;',
			height: 19,width: 258,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Интервал',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНачалоПериода',
			style: 'position:absolute;left:52px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:136px;top:0px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКонецПериода',
			style: 'position:absolute;left:153px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:238px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:126px;top:0px;width:50px;height:19px;',
		},
					]
				},
				{
					title:'Период',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериод',
			style: 'position:absolute;left:178px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Пустой',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипДанных',
			text: 'Тип данных:',
			style: 'position:absolute;left:8px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДанных',
			style: 'position:absolute;left:79px;top:33px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяОбъекта',
			text: 'Объект:',
			style: 'position:absolute;left:226px;top:33px;width:46px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяОбъекта',
			style: 'position:absolute;left:276px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяТаблицы',
			text: 'Таблица:',
			style: 'position:absolute;left:472px;top:33px;width:46px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяТаблицы',
			style: 'position:absolute;left:521px;top:33px;width:165px;height:19px;',
		},
	]
});