Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 414,width: 573,
	iconCls: 'bogus',
	title: 'Групповая обработка справочников и документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:573px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:389px;width:573px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ВыполнитьОтбор',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:557px;height:348px;',
			height: 348,width: 557,
			items:
			[
				{
					title:'ОбъектыОтбора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:65px;width:543px;height:93px;',
			height: 93,width: 543,
			columns:
			[
				{
					text:'ПредставлениеТаблицы',
				},
				{
					text:'ИмяТаблицы',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:202px;width:543px;height:120px;',
			height: 120,width: 543,
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
			style: 'position:absolute;left:6px;top:41px;width:543px;height:24px;',
			items:
			[
				{
					text:'Действие4',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:178px;width:543px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:543px;height:231px;',
			height: 231,width: 543,
			columns:
			[
				{
					text:'Ш_ВидПредставление',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДействия',
			style: 'position:absolute;left:291px;top:286px;width:174px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:469px;top:286px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});