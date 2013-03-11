Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаИзмененияФИО',
	{
	extend: 'Ext.window.Window',
	height: 108,width: 310,
	iconCls: 'bogus',
	title: 'Фамилия, имя, отчество сотрудника',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:82px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:82px;top:32px;width:220px;height:19px;',
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
					text:'Действие2',
				},
				{
					text:'КнопкаОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});