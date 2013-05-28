Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВводаНаправлений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:348px;height:116px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о контролирующем органе (направление документооборота)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код органа:',
			style: 'position:absolute;left:8px;top:36px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПолучателя',
			width: 188,
			height: 19,
			style: 'position:absolute;left:152px;top:36px;width:188px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипПолучателя',
			width: 188,
			height: 19,
			style: 'position:absolute;left:152px;top:8px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипПолучателя',
			text: 'Тип органа:',
			style: 'position:absolute;left:8px;top:8px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод1',
			text: 'КПП (только для ФНС):',
			style: 'position:absolute;left:8px;top:64px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 188,
			height: 19,
			style: 'position:absolute;left:152px;top:64px;width:188px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:348px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});