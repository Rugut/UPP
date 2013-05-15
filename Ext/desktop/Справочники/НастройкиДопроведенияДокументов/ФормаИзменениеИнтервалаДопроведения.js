Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:140px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка периода допроведения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДоТекущейДатыКонец',
			text: 'до текущей даты',
			style: 'position:absolute;left:406px;top:77px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодичностьОтставанияКонецИнтервала',
			style: 'position:absolute;left:325px;top:77px;width:76px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовОтставанияКонецИнтервала',
			style: 'position:absolute;left:290px;top:77px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУстановленПериод',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:497px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаДопроведения',
			style: 'position:absolute;left:34px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовОтставанияНачалоИнтервала',
			style: 'position:absolute;left:34px;top:77px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодичностьОтставанияНачалоИнтервала',
			style: 'position:absolute;left:73px;top:77px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоТекущейДатыНачало',
			text: 'до текущей даты',
			style: 'position:absolute;left:156px;top:77px;width:89px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Начало ',
			style: 'position:absolute;left:8px;top:28px;width:244px;height:78px;',
		},
		{
			xtype: 'fieldset',
			title: 'Окончание ',
			style: 'position:absolute;left:261px;top:28px;width:244px;height:78px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКонцаДопроведения',
			style: 'position:absolute;left:290px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:16px;top:53px;width:15px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:16px;top:77px;width:15px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:269px;top:53px;width:15px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:269px;top:77px;width:15px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:115px;width:513px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});