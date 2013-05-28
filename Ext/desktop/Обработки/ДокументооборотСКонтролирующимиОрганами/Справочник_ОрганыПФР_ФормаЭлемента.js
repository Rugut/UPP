Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ОрганыПФР_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:535px;height:144px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Органы ПФР',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 68,
			height: 19,
			style: 'position:absolute;left:152px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 375,
			height: 19,
			style: 'position:absolute;left:152px;top:58px;width:375px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:84px;width:519px;height:3px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:8px;top:92px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сертификат',
			width: 375,
			height: 19,
			style: 'position:absolute;left:152px;top:92px;width:375px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:535px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:119px;width:535px;height:25px;',
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