Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОПроверке',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:288px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сообщение о проверке заявления',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Рег. номер заявления в НО:',
			style: 'position:absolute;left:10px;top:165px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегНомДок',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:165px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Результат проверки:',
			style: 'position:absolute;left:10px;top:10px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отметка',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:10px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Дата регистрации в НО в электронном виде:',
			style: 'position:absolute;left:10px;top:190px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаРегЭл',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:195px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Дата регистрации в НО на бумажном носителе:',
			style: 'position:absolute;left:10px;top:225px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаРегБум',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:230px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Номер заявления:',
			style: 'position:absolute;left:10px;top:115px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокНП',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:115px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Дата заявления:',
			style: 'position:absolute;left:10px;top:140px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаДокНП',
			width: 303,
			height: 19,
			style: 'position:absolute;left:202px;top:140px;width:303px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:497px;height:80px;',
			height: 80,width: 497,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Номер:',
			style: 'position:absolute;left:0px;top:25px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерУведОткз',
			width: 303,
			height: 19,
			style: 'position:absolute;left:194px;top:25px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Дата:',
			style: 'position:absolute;left:0px;top:50px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаУведОткз',
			width: 303,
			height: 19,
			style: 'position:absolute;left:194px;top:50px;width:303px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Уведомление об отказе',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:2px;top:75px;width:495px;height:3px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:263px;width:513px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});