Ext.define('Обработки.ЗаполнениеСчетовРасходовУСН.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:226px;height:149px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата:',
			style: 'position:absolute;left:15px;top:48px;width:69px;height:15px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:91px;top:47px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:16px;top:78px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:91px;top:78px;width:114px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:226px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:124px;width:226px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});