Ext.define('Обработки.КурсыВалютРБК.Форма',
	{
	extend: 'Ext.window.Window',
	height: 344,width: 492,
	iconCls: 'bogus',
	title: 'Загрузка курсов валют с РБК',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачДата',
			style: 'position:absolute;left:114px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонДата',
			style: 'position:absolute;left:214px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:476px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеОчистить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеЗагрузить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:476px;height:220px;',
			height: 220,width: 476,
			columns:
			[
				{
					text:'Валюта',
				},
				{
					text:'КодВалюты',
				},
				{
					text:'ДатаКурса',
				},
				{
					text:'Курс',
				},
				{
					text:'Кратность',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:296px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:492px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
			]
		},
	]
});