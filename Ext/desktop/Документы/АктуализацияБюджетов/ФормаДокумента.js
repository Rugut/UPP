Ext.define('Документы.АктуализацияБюджетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:661px;height:177px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Актуализация бюджетов',
	
	items:
	[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:116px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сценарий',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Ответственный:',
			style: 'position:absolute;left:330px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:125px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:125px;width:563px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:152px;width:661px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:330px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачала',
			style: 'position:absolute;left:419px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:517px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонца',
			style: 'position:absolute;left:535px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:633px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Состояние',
			style: 'position:absolute;left:90px;top:101px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:101px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Актуализировать бюджеты',
			style: 'position:absolute;left:8px;top:81px;width:160px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Перенести транзакции',
			style: 'position:absolute;left:188px;top:81px;width:145px;height:15px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:661px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Перенос транзакций',
				},
			]
		},
	]
});