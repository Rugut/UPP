Ext.define('Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетов',
	{
	extend: 'Ext.window.Window',
	height: 418,width: 637,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:637px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Настройка',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие3',
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
					text:'Отбор',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:621px;height:49px;',
			height: 49,width: 621,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиЦФО',
			style: 'position:absolute;left:272px;top:0px;width:349px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПроект',
			style: 'position:absolute;left:272px;top:24px;width:349px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяБаланса',
			style: 'position:absolute;left:492px;top:57px;width:137px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:396px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:511px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:609px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДанныхОтчета',
			style: 'position:absolute;left:98px;top:33px;width:220px;height:19px;',
		},
	]
});