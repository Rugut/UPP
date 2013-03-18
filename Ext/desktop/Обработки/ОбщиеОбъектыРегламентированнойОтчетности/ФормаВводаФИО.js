Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаФИО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:378px;height:59px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Фамилия, имя, отчество',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:378px;height:25px;',
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
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'ФИО:',
			style: 'position:absolute;left:8px;top:7px;width:36px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:46px;top:7px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:168px;top:7px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:270px;top:7px;width:100px;height:19px;',
		},
	]
});