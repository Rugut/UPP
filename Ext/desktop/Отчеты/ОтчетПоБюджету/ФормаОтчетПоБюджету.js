Ext.define('Отчеты.ОтчетПоБюджету.ФормаОтчетПоБюджету',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:594px;height:50px;',
			height: 50,width: 594,
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
			style: 'position:absolute;left:244px;top:25px;width:350px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:0px;top:27px;width:60px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:62px;top:25px;width:180px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПроект',
			style: 'position:absolute;left:244px;top:0px;width:350px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:0px;top:2px;width:60px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:62px;top:0px;width:180px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:164px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:182px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:280px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сценарий',
			style: 'position:absolute;left:382px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:320px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Бюджет',
			style: 'position:absolute;left:66px;top:81px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Бюджет:',
			style: 'position:absolute;left:8px;top:80px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Развернуть по горизонтали по:',
			style: 'position:absolute;left:320px;top:81px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГруппировкаГоризонтальная',
			style: 'position:absolute;left:482px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидДанныхОтчета',
			style: 'position:absolute;left:66px;top:57px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Данные:',
			style: 'position:absolute;left:8px;top:57px;width:56px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:610px;height:25px;',
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