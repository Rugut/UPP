Ext.define('Обработки.МенеджерКонтактов.ФормаИзмененияВремениСобытия',
	{
	extend: 'Ext.window.Window',
	height: 188,width: 334,
	iconCls: 'bogus',
	title: 'Изменение времени события',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:163px;width:334px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоСобытия',
			style: 'position:absolute;left:204px;top:36px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкончаниеСобытия',
			style: 'position:absolute;left:204px;top:60px;width:122px;height:19px;',
		},
	]
});