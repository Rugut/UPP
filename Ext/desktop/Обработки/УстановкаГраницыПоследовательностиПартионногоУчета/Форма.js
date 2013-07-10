Ext.define('Обработки.УстановкаГраницыПоследовательностиПартионногоУчета.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:144px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка границы последовательности партионного учета',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:24px;top:24px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:24px;top:44px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаДокумент',
			width: 240,
			height: 19,
			style: 'position:absolute;left:152px;top:68px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата / документ',
			style: 'position:absolute;left:8px;top:68px;width:138px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация',
			style: 'position:absolute;left:8px;top:92px;width:138px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 240,
			height: 19,
			style: 'position:absolute;left:152px;top:92px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'По видам учета:',
			style: 'position:absolute;left:8px;top:4px;width:138px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:119px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Установить',
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