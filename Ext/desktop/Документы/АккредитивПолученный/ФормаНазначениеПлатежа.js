Ext.define('Документы.АккредитивПолученный.ФормаНазначениеПлатежа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:444px;height:185px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Аккредитив полученный: Назначение платежа',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНазначениеПлатежа',
			text: 'Назначение платежа:',
			style: 'position:absolute;left:8px;top:8px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НазначениеПлатежа',
			style: 'position:absolute;left:8px;top:31px;width:428px;height:121px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:159px;width:444px;height:26px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
	]
});