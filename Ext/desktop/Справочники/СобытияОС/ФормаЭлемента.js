Ext.define('Справочники.СобытияОС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:451px;height:236px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'События основного средства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:370px;top:33px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:403px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 256,
			height: 19,
			style: 'position:absolute;left:110px;top:33px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:93px;width:96px;height:110px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:110px;top:93px;width:333px;height:110px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вид события ОС:',
			style: 'position:absolute;left:8px;top:60px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидСобытияОС',
			width: 333,
			height: 19,
			style: 'position:absolute;left:110px;top:60px;width:333px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:451px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:211px;width:451px;height:25px;',
			dock: 'bottom',
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
	]
});