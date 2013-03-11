Ext.define('Обработки.ГрупповаяОбработкаОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 328,width: 500,
	iconCls: 'bogus',
	title: 'Групповая обработка объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:500px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:484px;height:264px;',
			height: 264,width: 484,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеТипаОбъектов',
			style: 'position:absolute;left:88px;top:8px;width:386px;height:19px;',
		},
					]
				},
				{
					title:'ОбрабатываемыеОбъекты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:466px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсеПометки',
				},
				{
					text:'ИнвертироватьПометки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьВсеПометки',
				},
				{
					text:'ПодборОбъектов',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:466px;height:176px;',
			height: 176,width: 466,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Пометка',
				},
				{
					text:'Объект',
				},
			]
		},
					]
				},
				{
					title:'УстанавливаемыеСвойства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:466px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсеПометки',
				},
				{
					text:'ИнвертироватьПометки',
				},
				{
					text:'СнятьВсеПометки',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:466px;height:204px;',
			height: 204,width: 466,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Свойство',
				},
				{
					text:'Пометка',
				},
				{
					text:'Значение',
				},
			]
		},
					]
				},
			]
		},
	]
});