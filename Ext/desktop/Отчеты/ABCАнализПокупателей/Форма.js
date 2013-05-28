Ext.define('Отчеты.ABCАнализПокупателей.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ABC-анализ покупателей',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата отчета:',
			style: 'position:absolute;left:8px;top:33px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтчета',
			width: 80,
			height: 19,
			style: 'position:absolute;left:78px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:634px;height:51px;',
			height: 51,width: 634,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиКонтрагент',
			width: 317,
			height: 19,
			style: 'position:absolute;left:317px;top:0px;width:317px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:137px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСКонтрагент',
			width: 156,
			height: 19,
			style: 'position:absolute;left:317px;top:0px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоКонтрагент',
			width: 156,
			height: 19,
			style: 'position:absolute;left:478px;top:0px;width:156px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:139px;top:0px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиABCКлассПокупателя',
			width: 317,
			height: 19,
			style: 'position:absolute;left:317px;top:25px;width:317px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'АВС-класс покупателя:',
			style: 'position:absolute;left:0px;top:25px;width:137px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСABCКлассПокупателя',
			width: 156,
			height: 19,
			style: 'position:absolute;left:317px;top:25px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоABCКлассПокупателя',
			width: 156,
			height: 19,
			style: 'position:absolute;left:478px;top:25px;width:156px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:139px;top:25px;width:172px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройка ...',
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
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
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