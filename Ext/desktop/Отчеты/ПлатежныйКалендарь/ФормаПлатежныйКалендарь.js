Ext.define('Отчеты.ПлатежныйКалендарь.ФормаПлатежныйКалендарь',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 698,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:698px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Настройка',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Отбор',
				},
				{
					text:'Отбор',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'СохранитьЗначения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:182px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:280px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:62px;width:682px;height:49px;',
			height: 49,width: 682,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидДенежныхСредств',
			style: 'position:absolute;left:313px;top:0px;width:369px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиБанковскийСчетКасса',
			style: 'position:absolute;left:313px;top:24px;width:369px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДетализацияПоПериодам',
			style: 'position:absolute;left:470px;top:33px;width:220px;height:19px;',
		},
	]
});