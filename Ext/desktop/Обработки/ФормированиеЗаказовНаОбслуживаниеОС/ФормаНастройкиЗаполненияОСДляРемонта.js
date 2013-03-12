Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаНастройкиЗаполненияОСДляРемонта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:374px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
				'-',
				'-',
				{
					text:'По наименованию',
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
					text:'',
					width:'30',
				},
				{
					text:'Основные средства',
					width:'261',
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
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:306px;top:78px;width:294px;height:263px;',
			height: 263,width: 294,
			columns:
			[
				{
					text:'',
					width:'30',
				},
				{
					text:'Услуги по обслуживанию ОС',
					width:'260',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:608px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выполнить',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата окончания интервала планирования:',
			style: 'position:absolute;left:8px;top:8px;width:221px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПланирования',
			style: 'position:absolute;left:233px;top:8px;width:112px;height:19px;',
		},
	]
});