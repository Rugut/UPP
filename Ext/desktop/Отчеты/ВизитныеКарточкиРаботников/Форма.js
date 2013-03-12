Ext.define('Отчеты.ВизитныеКарточкиРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Визитные карточки сотрудников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'На принтер',
				},
				'-',
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Cформировать',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Новый отчет',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Новый отчет',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Настройка ...',
				},
				'-',
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Быстрые отборы',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Заголовок отчета',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:49px;',
			height: 49,width: 704,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Должность',
			style: 'position:absolute;left:0px;top:28px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиДолжность',
			style: 'position:absolute;left:218px;top:28px;width:486px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение',
			style: 'position:absolute;left:0px;top:4px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПодразделение',
			style: 'position:absolute;left:218px;top:4px;width:486px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись',
			text: 'На дату:',
			style: 'position:absolute;left:578px;top:2px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:633px;top:2px;width:80px;height:19px;',
		},
	]
});