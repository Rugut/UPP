Ext.define('Обработки.ЗагрузкаБанков.ФормаКлассификатора',
	{
	extend: 'Ext.window.Window',
	height: 385,width: 479,
	iconCls: 'bogus',
	title: 'Загрузка ""Классификатора банков РФ""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:479px;height:25px;',
			items:
			[
				{
					text:'Далее',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Назад',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:463px;height:331px;',
			height: 331,width: 463,
			items:
			[
				{
					title:'ВыборИсточника',
					items:
					[
					]
				},
				{
					title:'СтраницаКлассификатор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:449px;height:258px;',
			height: 258,width: 449,
			columns:
			[
				{
					text:'Загрузка',
				},
				{
					text:'КодРегиона',
				},
				{
					text:'Наименование',
				},
				{
					text:'ТипБанка',
				},
				{
					text:'КоррСчет',
				},
				{
					text:'Индекс',
				},
				{
					text:'Город',
				},
				{
					text:'Адрес',
				},
				{
					text:'Телефон',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:449px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие9',
				},
				{
					text:'СвернутьВсе',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РазвернутьВсе',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
				{
					title:'СтраницаКонфликты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:449px;height:211px;',
			height: 211,width: 449,
			columns:
			[
				{
					text:'Загрузка',
				},
				{
					text:'КодРегиона',
				},
				{
					text:'Наименование',
				},
				{
					text:'ЗнКлассификатора',
				},
				{
					text:'ЗнБазы',
				},
				{
					text:'ИзмененРеквизит',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:449px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'ДействиеПометить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеСнятьПометки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
			]
		},
	]
});