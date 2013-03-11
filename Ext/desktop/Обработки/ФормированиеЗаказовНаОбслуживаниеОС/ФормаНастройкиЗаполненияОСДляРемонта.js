Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонта',
	{
	extend: 'Ext.window.Window',
	height: 374,width: 608,
	iconCls: 'bogus',
	title: 'Настройка заполнения основных средств для обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:54px;width:294px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:306px;top:54px;width:294px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:306px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:608px;height:25px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПланирования',
			style: 'position:absolute;left:233px;top:8px;width:112px;height:19px;',
		},
	]
});