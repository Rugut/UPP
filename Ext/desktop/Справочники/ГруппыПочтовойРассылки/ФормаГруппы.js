Ext.define('Справочники.ГруппыПочтовойРассылки.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:110px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа Группы почтовой рассылки',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:58px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:67px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:127px;top:58px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:213px;top:58px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:67px;top:33px;width:325px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:400px;height:25px;',
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