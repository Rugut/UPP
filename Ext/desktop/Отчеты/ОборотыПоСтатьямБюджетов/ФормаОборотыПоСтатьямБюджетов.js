Ext.define('Отчеты.ОборотыПоСтатьямБюджетов.ФормаОборотыПоСтатьямБюджетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:637px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:621px;height:49px;',
			height: 49,width: 621,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиЦФО',
			style: 'position:absolute;left:272px;top:0px;width:349px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПроект',
			style: 'position:absolute;left:272px;top:24px;width:349px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект',
			style: 'position:absolute;left:0px;top:24px;width:88px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:24px;width:180px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:0px;width:180px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сценарий',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьяБаланса',
			style: 'position:absolute;left:492px;top:57px;width:137px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Статья баланса:',
			style: 'position:absolute;left:338px;top:57px;width:153px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:338px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:396px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:494px;top:33px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
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
			disabled: false,
			name: 'ВидДанныхОтчета',
			style: 'position:absolute;left:98px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Вид данных:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:637px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});