Ext.define('Отчеты.АнализПотребностейВНоменклатуре.Форма',
	{
	extend: 'Ext.window.Window',
	height: 426,width: 611,
	iconCls: 'bogus',
	title: 'Анализ потребностей в номенклатуре',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:611px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Отбор',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Отбор',
				},
				{
					text:'Действие1',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:595px;height:49px;',
			height: 49,width: 595,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:328px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСНоменклатура',
			style: 'position:absolute;left:328px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоНоменклатура',
			style: 'position:absolute;left:454px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиДатаПотребности',
			style: 'position:absolute;left:328px;top:25px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСДатаПотребности',
			style: 'position:absolute;left:328px;top:25px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПоДатаПотребности',
			style: 'position:absolute;left:454px;top:25px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыборПериода',
			text: '...',
			style: 'position:absolute;left:576px;top:25px;width:19px;height:19px;',
		},
					]
				},
			]
		},
	]
});