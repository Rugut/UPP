Ext.define('Отчеты.АнализОборачиваемостиТоваров.ГлавнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 568,
	iconCls: 'bogus',
	title: 'Анализ оборачиваемости товаров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:568px;height:25px;',
			items:
			[
				{
					text:'Отбор',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Справка',
				},
				{
					text:'Подменю',
				},
				{
					text:'Заголовок',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:552px;height:72px;',
			height: 72,width: 552,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:272px;top:0px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСклад',
			style: 'position:absolute;left:272px;top:24px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКомиссионер',
			style: 'position:absolute;left:272px;top:48px;width:280px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:400px;top:33px;width:160px;height:19px;',
		},
	]
});