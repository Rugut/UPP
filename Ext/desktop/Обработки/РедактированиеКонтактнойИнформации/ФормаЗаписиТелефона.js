Ext.define('Обработки.РедактированиеКонтактнойИнформации.ФормаЗаписиТелефона',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:257px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Телефон',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код страны:',
			style: 'position:absolute;left:14px;top:129px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Поле1',
			style: 'position:absolute;left:102px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код города:',
			style: 'position:absolute;left:14px;top:153px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Поле2',
			style: 'position:absolute;left:102px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Номер :',
			style: 'position:absolute;left:14px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Поле3',
			style: 'position:absolute;left:102px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Внутренний:',
			style: 'position:absolute;left:182px;top:105px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Поле4',
			style: 'position:absolute;left:262px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:205px;width:220px;height:19px;',
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
			style: 'position:absolute;left:0px;top:232px;width:330px;height:25px;',
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
			name: 'Надпись15',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:205px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Телефон',
			style: 'position:absolute;left:8px;top:85px;width:314px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Вид телефона:',
			style: 'position:absolute;left:8px;top:57px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Вид',
			style: 'position:absolute;left:102px;top:57px;width:220px;height:19px;',
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
			text: 'Представление:',
			style: 'position:absolute;left:14px;top:177px;width:88px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:177px;width:220px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});