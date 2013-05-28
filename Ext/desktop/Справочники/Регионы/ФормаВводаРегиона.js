Ext.define('Справочники.Регионы.ФормаВводаРегиона',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:336px;height:272px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод региона',
	
	items:
	[
		{
			xtype: 'fieldset',
			title: 'Адрес',
			style: 'position:absolute;left:8px;top:57px;width:320px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегион',
			text: 'Регион:',
			style: 'position:absolute;left:8px;top:79px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Регион',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:79px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайон',
			text: 'Район:',
			style: 'position:absolute;left:8px;top:103px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Район',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:103px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГород',
			text: 'Город:',
			style: 'position:absolute;left:8px;top:127px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Город',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:127px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаселенныйПункт',
			text: 'Нас. пункт:',
			style: 'position:absolute;left:8px;top:151px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаселенныйПункт',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:151px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставление',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:178px;width:86px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:179px;width:226px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрана',
			text: 'Страна:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Страна',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:33px;width:226px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:336px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Классификатор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:247px;width:336px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
	]
});