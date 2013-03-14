Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаИзмененияФИО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:310px;height:108px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Фамилия, имя, отчество сотрудника',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Фамилия:',
			style: 'position:absolute;left:8px;top:8px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:82px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:32px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:82px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Отчество:',
			style: 'position:absolute;left:8px;top:56px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:82px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:310px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});