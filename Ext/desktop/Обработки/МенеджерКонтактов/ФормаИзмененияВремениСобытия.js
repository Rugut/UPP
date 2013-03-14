Ext.define('Обработки.МенеджерКонтактов.ФормаИзмененияВремениСобытия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:334px;height:188px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение времени события',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:163px;width:334px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Начало:',
			style: 'position:absolute;left:80px;top:36px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоСобытия',
			style: 'position:absolute;left:204px;top:36px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончание',
			text: 'Окончание:',
			style: 'position:absolute;left:80px;top:60px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкончаниеСобытия',
			style: 'position:absolute;left:204px;top:60px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстПродолжительность',
			text: 'Продолжительность:',
			style: 'position:absolute;left:80px;top:84px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ТекстОтложитьНа',
			text: 'Отложить на:',
			style: 'position:absolute;left:8px;top:136px;width:72px;height:19px;',
		},
	]
});