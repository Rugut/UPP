Ext.define('Обработки.РедактированиеКонтактнойИнформации.ФормаЗаписиАдресаЭП',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:181px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Электронная почта',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Адрес эл.почты:',
			style: 'position:absolute;left:14px;top:105px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:129px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:330px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:156px;width:330px;height:25px;',
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
			xtype: 'fieldset',
			title: 'Адрес электронной почты',
			style: 'position:absolute;left:8px;top:85px;width:314px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Объект',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Вид эл. почты:',
			style: 'position:absolute;left:8px;top:57px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Вид',
			style: 'position:absolute;left:102px;top:57px;width:220px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});